import 'dotenv/config'
import { Category, Locale, PrismaClient } from '@prisma/client'
import { cards } from '../prisma/card-data'

const prisma = new PrismaClient()

const DRY_RUN = process.argv.includes('--dry-run')

// Update-only script: matches existing DB cards to prisma/seed.ts cards by
// (category, createdAt order), but does NOT trust that ordering blindly.
// Before any write, it validates that every DB card's existing EN title
// matches the expected EN title from seed.ts at the same (category, index)
// position. If any category count or any EN title fails to match exactly,
// the script aborts with zero writes. Only ET fields (Card.title/description/
// additional and CardTranslation ET row) are ever written. No card is
// created, deleted, reordered, or recategorized, and EN content is never
// touched.
async function main() {
  const categories: Category[] = [Category.CONNECTION, Category.INTIMACY, Category.LOVEMAKING]

  type PlannedUpdate = {
    dbCardId: string
    category: Category
    index: number
    enTitle: string
    et: { title: string; description: string; additional?: string }
  }

  const plan: PlannedUpdate[] = []
  const errors: string[] = []

  for (const category of categories) {
    const seedCardsForCategory = cards.filter((c) => c.category === category)
    const dbCardsForCategory = await prisma.card.findMany({
      where: { category },
      orderBy: { createdAt: 'asc' },
      include: { translations: { where: { locale: Locale.EN } } },
    })

    if (seedCardsForCategory.length !== dbCardsForCategory.length) {
      errors.push(
        `${category}: DB has ${dbCardsForCategory.length} cards but seed.ts has ${seedCardsForCategory.length}. Category count mismatch.`
      )
      continue
    }

    for (let i = 0; i < dbCardsForCategory.length; i++) {
      const dbCard = dbCardsForCategory[i]
      const seedCard = seedCardsForCategory[i]
      const expectedEnTitle = seedCard.translations.EN.title

      // Prefer the EN CardTranslation row when present; fall back to the
      // Card's own fallback title field only if no EN translation row exists.
      const actualEnTitle = dbCard.translations[0]?.title ?? dbCard.title

      if (actualEnTitle.trim() !== expectedEnTitle.trim()) {
        errors.push(
          `${category}[${i}]: DB card ${dbCard.id} EN title "${actualEnTitle}" does not match expected seed EN title "${expectedEnTitle}" at this position.`
        )
        continue
      }

      plan.push({
        dbCardId: dbCard.id,
        category,
        index: i,
        enTitle: expectedEnTitle,
        et: seedCard.translations.ET,
      })
    }
  }

  console.log('=== Validation summary ===')
  for (const category of categories) {
    const count = plan.filter((p) => p.category === category).length
    console.log(`${category}: ${count} cards validated`)
  }

  if (errors.length > 0) {
    console.error(`\n=== VALIDATION FAILED: ${errors.length} mismatch(es) ===`)
    for (const e of errors) console.error(' - ' + e)
    console.error('\nZero updates performed. Fix the mismatch(es) above before running this script.')
    process.exit(1)
  }

  if (plan.length !== cards.length) {
    console.error(
      `\nVALIDATION FAILED: validated ${plan.length} cards but seed.ts defines ${cards.length}. Zero updates performed.`
    )
    process.exit(1)
  }

  console.log(`\nAll ${plan.length} cards passed EN-title + category + order validation.`)

  if (DRY_RUN) {
    console.log('\n=== DRY RUN: no writes performed ===')
    for (const p of plan) {
      console.log(`Would update ${p.category}[${p.index}] card ${p.dbCardId} ("${p.enTitle}") ET -> "${p.et.title}"`)
    }
    return
  }

  let updated = 0
  for (const p of plan) {
    await prisma.$transaction([
      prisma.card.update({
        where: { id: p.dbCardId },
        data: {
          title: p.et.title,
          description: p.et.description,
          additional: p.et.additional,
        },
      }),
      prisma.cardTranslation.upsert({
        where: { cardId_locale: { cardId: p.dbCardId, locale: Locale.ET } },
        update: {
          title: p.et.title,
          description: p.et.description,
          additional: p.et.additional,
        },
        create: {
          cardId: p.dbCardId,
          locale: Locale.ET,
          title: p.et.title,
          description: p.et.description,
          additional: p.et.additional,
        },
      }),
    ])
    updated++
  }

  console.log(`\nDone. Updated ${updated} card ET translations.`)
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
