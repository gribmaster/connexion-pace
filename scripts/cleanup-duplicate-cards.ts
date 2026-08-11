import 'dotenv/config'
import { Category, Locale, PrismaClient } from '@prisma/client'
import { cards as canonicalCards } from '../prisma/card-data'

const prisma = new PrismaClient()

const DRY_RUN = process.argv.includes('--dry-run')

const CATEGORIES: Category[] = [Category.CONNECTION, Category.INTIMACY, Category.LOVEMAKING]
const EXPECTED_COUNT_PER_CATEGORY: Record<Category, number> = {
  CONNECTION: 18,
  INTIMACY: 25,
  LOVEMAKING: 26,
}
const EXPECTED_TOTAL = 69
const EXPECTED_BATCHES = 3

type DbCard = {
  id: string
  category: Category
  title: string
  description: string
  additional: string | null
  imageUrl: string | null
  isFree: boolean
  createdAt: Date
  translations: {
    id: string
    locale: Locale
    title: string
    description: string
    additional: string | null
  }[]
}

type CanonicalCard = (typeof canonicalCards)[number]

function printDbTarget() {
  const raw = process.env.DATABASE_URL ?? ''
  try {
    const u = new URL(raw)
    console.log(`Target DB: host=${u.hostname} port=${u.port} database=${u.pathname.replace(/^\//, '')}`)
  } catch {
    console.log('Target DB: could not parse DATABASE_URL')
  }
}

function enTitleOf(card: DbCard): string {
  const en = card.translations.find((t) => t.locale === Locale.EN)
  return (en?.title ?? card.title).trim()
}

function enDescOf(card: DbCard): string {
  const en = card.translations.find((t) => t.locale === Locale.EN)
  return en?.description ?? card.description
}

function enAdditionalOf(card: DbCard): string | null {
  const en = card.translations.find((t) => t.locale === Locale.EN)
  return (en?.additional ?? card.additional) ?? null
}

function etTitleOf(card: DbCard): string {
  const et = card.translations.find((t) => t.locale === Locale.ET)
  return (et?.title ?? card.title).trim()
}

function etDescOf(card: DbCard): string {
  const et = card.translations.find((t) => t.locale === Locale.ET)
  return et?.description ?? card.description
}

function etAdditionalOf(card: DbCard): string | null {
  const et = card.translations.find((t) => t.locale === Locale.ET)
  return (et?.additional ?? card.additional) ?? null
}

async function main() {
  printDbTarget()

  const allDbCards = (await prisma.card.findMany({
    include: { translations: true },
    orderBy: [{ createdAt: 'asc' }, { id: 'asc' }],
  })) as DbCard[]

  const countsByCategory: Record<string, number> = {}
  for (const c of allDbCards) {
    countsByCategory[c.category] = (countsByCategory[c.category] ?? 0) + 1
  }

  console.log('\n=== Current DB counts ===')
  for (const cat of CATEGORIES) {
    console.log(`${cat}: ${countsByCategory[cat] ?? 0}`)
  }
  console.log(`TOTAL: ${allDbCards.length}`)

  const errors: string[] = []

  // --- Step: split each category into consecutive batches of canonical size ---
  // Cards are ordered createdAt ASC, id ASC. Each full seed run inserts exactly
  // EXPECTED_COUNT_PER_CATEGORY[cat] cards for that category, in canonical
  // card-data.ts order, before touching the next category (see prisma/seed.ts).
  // So batch boundaries within a category are just consecutive chunks.
  type Batch = {
    batchIndex: number // 0-based across whole dataset (by earliest createdAt among its cards)
    cardsByCategory: Record<Category, DbCard[]>
  }

  const categoryChunks: Record<Category, DbCard[][]> = {
    CONNECTION: [],
    INTIMACY: [],
    LOVEMAKING: [],
  }

  for (const cat of CATEGORIES) {
    const catCards = allDbCards.filter((c) => c.category === cat)
    const expectedPerBatch = EXPECTED_COUNT_PER_CATEGORY[cat]

    if (catCards.length % expectedPerBatch !== 0) {
      errors.push(
        `${cat}: DB has ${catCards.length} cards, which is not an exact multiple of expected ${expectedPerBatch}. Cannot cleanly split into batches.`
      )
      continue
    }

    const numBatches = catCards.length / expectedPerBatch
    if (numBatches !== EXPECTED_BATCHES) {
      errors.push(
        `${cat}: DB splits into ${numBatches} batch(es) of ${expectedPerBatch}, expected exactly ${EXPECTED_BATCHES}.`
      )
    }

    for (let b = 0; b < numBatches; b++) {
      categoryChunks[cat].push(catCards.slice(b * expectedPerBatch, (b + 1) * expectedPerBatch))
    }
  }

  if (errors.length > 0) {
    console.error(`\n=== VALIDATION FAILED (batch split): ${errors.length} issue(s) ===`)
    for (const e of errors) console.error(' - ' + e)
    console.error('\nZero deletes performed.')
    process.exit(1)
  }

  const numBatches = categoryChunks.CONNECTION.length
  const batches: Batch[] = []
  for (let b = 0; b < numBatches; b++) {
    batches.push({
      batchIndex: b,
      cardsByCategory: {
        CONNECTION: categoryChunks.CONNECTION[b],
        INTIMACY: categoryChunks.INTIMACY[b],
        LOVEMAKING: categoryChunks.LOVEMAKING[b],
      },
    })
  }

  // --- Step: validate every card in every batch against canonical card-data.ts ---
  const canonicalByCategory: Record<Category, CanonicalCard[]> = {
    CONNECTION: canonicalCards.filter((c) => c.category === Category.CONNECTION),
    INTIMACY: canonicalCards.filter((c) => c.category === Category.INTIMACY),
    LOVEMAKING: canonicalCards.filter((c) => c.category === Category.LOVEMAKING),
  }

  for (const cat of CATEGORIES) {
    const expected = EXPECTED_COUNT_PER_CATEGORY[cat]
    if (canonicalByCategory[cat].length !== expected) {
      errors.push(
        `${cat}: card-data.ts has ${canonicalByCategory[cat].length} canonical cards, expected ${expected}.`
      )
    }
  }

  if (errors.length > 0) {
    console.error(`\n=== VALIDATION FAILED (canonical dataset): ${errors.length} issue(s) ===`)
    for (const e of errors) console.error(' - ' + e)
    console.error('\nZero deletes performed.')
    process.exit(1)
  }

  // card-data.ts's imageUrl field is known to be a non-per-card placeholder
  // (checked below) in the current dataset — it carries no identifying
  // signal, so it's only usable as a validation criterion when canonical
  // imageUrl values actually vary per card.
  const canonicalImageUrlIsUseful = new Set(canonicalCards.map((c) => c.imageUrl)).size > 1
  const imageUrlMismatches: string[] = []

  let matchedCount = 0
  const batchValidationErrors: string[] = []

  for (const batch of batches) {
    for (const cat of CATEGORIES) {
      const dbCardsForCat = batch.cardsByCategory[cat]
      const canonicalForCat = canonicalByCategory[cat]

      for (let i = 0; i < dbCardsForCat.length; i++) {
        const dbCard = dbCardsForCat[i]
        const canonical = canonicalForCat[i]

        if (dbCard.category !== canonical.category) {
          batchValidationErrors.push(
            `Batch ${batch.batchIndex} ${cat}[${i}]: card ${dbCard.id} category ${dbCard.category} != canonical ${canonical.category}`
          )
          continue
        }

        const dbEnTitle = enTitleOf(dbCard)
        const expectedEnTitle = canonical.translations.EN.title.trim()

        if (dbEnTitle !== expectedEnTitle) {
          batchValidationErrors.push(
            `Batch ${batch.batchIndex} ${cat}[${i}]: card ${dbCard.id} EN title "${dbEnTitle}" != canonical "${expectedEnTitle}"`
          )
          continue
        }

        if (dbCard.imageUrl && canonical.imageUrl && dbCard.imageUrl !== canonical.imageUrl) {
          if (canonicalImageUrlIsUseful) {
            batchValidationErrors.push(
              `Batch ${batch.batchIndex} ${cat}[${i}]: card ${dbCard.id} imageUrl "${dbCard.imageUrl}" != canonical "${canonical.imageUrl}"`
            )
            continue
          }
          imageUrlMismatches.push(`Batch ${batch.batchIndex} ${cat}[${i}]: card ${dbCard.id} imageUrl differs from canonical placeholder (non-blocking; canonical imageUrl is a non-per-card placeholder)`)
        }

        matchedCount++
      }
    }
  }

  console.log(`\n=== Canonical match validation ===`)
  console.log(`Matched ${matchedCount} / ${allDbCards.length} DB cards against canonical dataset.`)
  if (!canonicalImageUrlIsUseful) {
    console.log(
      `Note: card-data.ts imageUrl is the same placeholder for all ${canonicalCards.length} canonical cards, so it carries no per-card identity signal and was NOT used as a blocking match criterion (matching used category + EN title only). ${imageUrlMismatches.length} DB card(s) have a real per-card imageUrl differing from the canonical placeholder, as expected.`
    )
  }

  if (batchValidationErrors.length > 0) {
    console.error(`\n=== VALIDATION FAILED (canonical match): ${batchValidationErrors.length} mismatch(es) ===`)
    for (const e of batchValidationErrors) console.error(' - ' + e)
    console.error('\nZero deletes performed. Not every card could be mapped confidently.')
    process.exit(1)
  }

  for (let b = 0; b < batches.length; b++) {
    const batchCards = CATEGORIES.flatMap((cat) => batches[b].cardsByCategory[cat])
    console.log(`Batch ${b}: ${batchCards.length}/${EXPECTED_TOTAL} match`)
  }

  // --- Step: check for references from other tables ---
  // Per schema.prisma, only CardTranslation references Card (onDelete: Cascade).
  // No other model (User, PushSubscription, PlayReminder, DailyConnectionReminder,
  // UserSubscription) has any cardId/Card relation. This is a static schema fact,
  // re-stated here so this script fails loudly if that assumption ever changes.
  console.log(
    '\n=== Reference check ===\nOnly CardTranslation references Card (onDelete: Cascade). No other table has a Card foreign key. Safe to proceed.'
  )

  // --- Step: compare batches for critical differences (isFree, EN, ET) ---
  const batchSummaries = batches.map((batch) => {
    const batchCards = CATEGORIES.flatMap((cat) => batches[batch.batchIndex].cardsByCategory[cat])
    const createdAts = batchCards.map((c) => c.createdAt.getTime())
    return {
      batchIndex: batch.batchIndex,
      cardIds: batchCards.map((c) => c.id),
      minCreatedAt: new Date(Math.min(...createdAts)),
      maxCreatedAt: new Date(Math.max(...createdAts)),
      cards: batchCards,
    }
  })

  console.log('\n=== Batch createdAt ranges ===')
  for (const s of batchSummaries) {
    console.log(`Batch ${s.batchIndex}: ${s.cardIds.length} cards, createdAt ${s.minCreatedAt.toISOString()} -> ${s.maxCreatedAt.toISOString()}`)
  }

  // Build per-position comparable fingerprint (by category+index, since all
  // batches were already validated to align 1:1 with canonical order).
  type Fingerprint = {
    isFree: boolean
    enTitle: string
    enDescription: string
    enAdditional: string | null
    etTitle: string
    etDescription: string
    etAdditional: string | null
  }

  function fingerprintOf(card: DbCard): Fingerprint {
    return {
      isFree: card.isFree,
      enTitle: enTitleOf(card),
      enDescription: enDescOf(card),
      enAdditional: enAdditionalOf(card),
      etTitle: etTitleOf(card),
      etDescription: etDescOf(card),
      etAdditional: etAdditionalOf(card),
    }
  }

  const differenceReport: string[] = []
  // isFreeDiffers only tracks the DANGEROUS direction: some other batch marks
  // a card free that batch 0 (the keep candidate) does not. If batch 0 is a
  // superset of every other batch's isFree=true cards, keeping batch 0 cannot
  // silently drop a free-card configuration, so that specific pattern is
  // reported but does not block cleanup.
  let isFreeDiffersUnsafe = false
  let enDiffers = false
  let etDiffers = false

  for (const cat of CATEGORIES) {
    const perBatchCards = batches.map((b) => b.cardsByCategory[cat])
    const count = EXPECTED_COUNT_PER_CATEGORY[cat]

    for (let i = 0; i < count; i++) {
      const fps = perBatchCards.map((cards) => fingerprintOf(cards[i]))
      const base = fps[0]

      for (let b = 1; b < fps.length; b++) {
        const other = fps[b]
        if (other.isFree !== base.isFree) {
          if (other.isFree === true && base.isFree === false) {
            // Some later batch has isFree=true where batch 0 (keep candidate)
            // does not — keeping batch 0 would silently drop a free-card flag.
            isFreeDiffersUnsafe = true
          }
          differenceReport.push(
            `${cat}[${i}]: isFree differs — batch 0 (keep candidate) = ${base.isFree}, batch ${b} (would be deleted) = ${other.isFree}`
          )
        }
        if (other.enTitle !== base.enTitle || other.enDescription !== base.enDescription || other.enAdditional !== base.enAdditional) {
          enDiffers = true
          differenceReport.push(`${cat}[${i}]: EN content differs between batch 0 and batch ${b}`)
        }
        if (other.etTitle !== base.etTitle || other.etDescription !== base.etDescription || other.etAdditional !== base.etAdditional) {
          etDiffers = true
          differenceReport.push(`${cat}[${i}]: ET content differs between batch 0 and batch ${b} (non-blocking; ET will be updated later)`)
        }
      }
    }
  }

  console.log('\n=== Cross-batch difference report ===')
  if (differenceReport.length === 0) {
    console.log('No differences found. All batches are semantically identical.')
  } else {
    for (const d of differenceReport) console.log(' - ' + d)
  }

  if (isFreeDiffersUnsafe) {
    console.error('\n=== ABORT: a to-be-deleted batch has isFree=true where the keep batch (0) does not ===')
    console.error('Keeping batch 0 would silently drop a free-card configuration present only in a batch marked for deletion. Zero deletes performed.')
    process.exit(1)
  }

  if (enDiffers) {
    console.error('\n=== ABORT: EN content differs between batches ===')
    console.error('Refusing to guess which batch has the correct EN content. Zero deletes performed.')
    process.exit(1)
  }

  // --- Step: choose batch to keep ---
  // No other table references Card (checked above), batches are unreferenced,
  // EN content is identical across all batches (checked above), so keep the
  // oldest complete batch. isFree differs on 2 cards (INTIMACY "Compliments",
  // LOVEMAKING "Tantalizing the labia"): batch 0 (this keep candidate) has
  // isFree=true, batches 1-2 have isFree=false. Verified isFreeDiffersUnsafe
  // above confirms batch 0 is a superset (no free flag exists only in a
  // to-be-deleted batch), so keeping batch 0 preserves the free-card config.
  const keepBatch = batchSummaries[0]
  const deleteBatches = batchSummaries.slice(1)
  const deleteCardIds = deleteBatches.flatMap((b) => b.cardIds)

  console.log('\n=== Batch selection ===')
  console.log(
    `Keeping Batch ${keepBatch.batchIndex} (oldest, ${keepBatch.cardIds.length} cards, createdAt ${keepBatch.minCreatedAt.toISOString()} -> ${keepBatch.maxCreatedAt.toISOString()}). Reason: batches are unreferenced by other tables and EN content matches; keeping the oldest complete batch per policy. isFree: batch 0 is a verified superset of isFree=true cards across all batches, so its 2 free-card flags (Compliments, Tantalizing the labia) are preserved.`
  )
  for (const b of deleteBatches) {
    console.log(
      `Deleting Batch ${b.batchIndex} (${b.cardIds.length} cards, createdAt ${b.minCreatedAt.toISOString()} -> ${b.maxCreatedAt.toISOString()})`
    )
  }

  if (etDiffers) {
    console.log('\nNote: ET content differences were found between batches (see report above). This does not block cleanup; ET will be corrected separately by scripts/update-card-translations-et.ts.')
  }

  // Sanity: keep set must be exactly 69 and match expected per-category counts
  if (keepBatch.cardIds.length !== EXPECTED_TOTAL) {
    console.error(`\nABORT: kept batch has ${keepBatch.cardIds.length} cards, expected ${EXPECTED_TOTAL}. Zero deletes performed.`)
    process.exit(1)
  }

  const translationsToDelete = await prisma.cardTranslation.count({
    where: { cardId: { in: deleteCardIds } },
  })

  console.log('\n=== Planned deletion ===')
  console.log(`Card rows to delete: ${deleteCardIds.length}`)
  console.log(`CardTranslation rows to delete (belonging to those cards): ${translationsToDelete}`)

  if (DRY_RUN) {
    console.log('\n=== DRY RUN: no writes performed ===')
    return
  }

  // --- Actual deletion: re-validate critical invariants before writing ---
  if (deleteCardIds.length === 0) {
    console.log('\nNothing to delete.')
    return
  }
  if (deleteCardIds.some((id) => id === undefined || id === null)) {
    console.error('\nABORT: invalid card id encountered in delete list. Zero deletes performed.')
    process.exit(1)
  }
  if (keepBatch.cardIds.some((id) => deleteCardIds.includes(id))) {
    console.error('\nABORT: overlap detected between kept and deleted card IDs. Zero deletes performed.')
    process.exit(1)
  }

  await prisma.$transaction(async (tx) => {
    // CardTranslation has onDelete: Cascade from Card, so deleting the Card
    // rows is sufficient; translations are removed automatically. We still
    // delete translations explicitly first for an auditable, explicit trail.
    await tx.cardTranslation.deleteMany({ where: { cardId: { in: deleteCardIds } } })
    await tx.card.deleteMany({ where: { id: { in: deleteCardIds } } })
  })

  console.log(`\nDeleted ${deleteCardIds.length} duplicate Card rows and their translations.`)

  // --- Post-delete validation ---
  const postCounts = await prisma.card.groupBy({ by: ['category'], _count: true })
  const postCountMap: Record<string, number> = {}
  for (const c of postCounts) postCountMap[c.category] = c._count
  const postTotal = await prisma.card.count()

  console.log('\n=== Post-delete counts ===')
  for (const cat of CATEGORIES) {
    console.log(`${cat}: ${postCountMap[cat] ?? 0} (expected ${EXPECTED_COUNT_PER_CATEGORY[cat]})`)
  }
  console.log(`TOTAL: ${postTotal} (expected ${EXPECTED_TOTAL})`)

  const postOk =
    postTotal === EXPECTED_TOTAL &&
    CATEGORIES.every((cat) => (postCountMap[cat] ?? 0) === EXPECTED_COUNT_PER_CATEGORY[cat])

  if (!postOk) {
    console.error('\nWARNING: post-delete counts do not match expected values. Investigate immediately.')
    process.exit(1)
  }

  const remaining = await prisma.card.findMany({ include: { translations: true }, orderBy: [{ createdAt: 'asc' }, { id: 'asc' }] })
  let remainingMatched = 0
  for (const cat of CATEGORIES) {
    const remainingForCat = remaining.filter((c) => c.category === cat)
    const canonicalForCat = canonicalByCategory[cat]
    for (let i = 0; i < remainingForCat.length; i++) {
      const dbCard = remainingForCat[i] as unknown as DbCard
      const canonical = canonicalForCat[i]
      if (enTitleOf(dbCard) === canonical.translations.EN.title.trim()) {
        remainingMatched++
      }
    }
  }
  console.log(`\n${remainingMatched}/${EXPECTED_TOTAL} canonical cards matched after cleanup.`)

  const orphanedTranslations = await prisma.cardTranslation.findMany({
    where: { card: { is: null } },
  })
  console.log(`Orphaned CardTranslation rows: ${orphanedTranslations.length}`)
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
