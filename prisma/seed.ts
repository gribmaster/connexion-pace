import 'dotenv/config'
import { Category, Locale, PrismaClient } from '@prisma/client'
import { cards } from './card-data'

const prisma = new PrismaClient()

const CATEGORIES: Category[] = [Category.CONNECTION, Category.INTIMACY, Category.LOVEMAKING]

const EXPECTED_COUNT_PER_CATEGORY: Record<Category, number> = {
  CONNECTION: cards.filter((c) => c.category === Category.CONNECTION).length,
  INTIMACY: cards.filter((c) => c.category === Category.INTIMACY).length,
  LOVEMAKING: cards.filter((c) => c.category === Category.LOVEMAKING).length,
}
const EXPECTED_TOTAL = cards.length

// Idempotency guard: before creating anything, check what's already in the
// DB. Matching uses (category, createdAt/id order) + EN title, the same
// scheme validated in scripts/cleanup-duplicate-cards.ts and
// scripts/update-card-translations-et.ts, since Card has no stable
// slug/key field. Empty DB -> create canonical dataset. Exact canonical
// match -> skip (never overwrite existing ET content or IDs). Anything
// else -> abort with zero writes; this script never deletes or "repairs".
async function main() {
  const existingCards = await prisma.card.findMany({
    orderBy: [{ createdAt: 'asc' }, { id: 'asc' }],
    include: { translations: { where: { locale: Locale.EN } } },
  })

  if (existingCards.length === 0) {
    console.log('No cards found.')
    console.log('Creating canonical card dataset...')

    await prisma.$transaction(async (tx) => {
      for (const card of cards) {
        await tx.card.create({
          data: {
            // fallback/default fields — Estonian
            title: card.translations.ET.title,
            description: card.translations.ET.description,
            additional: card.translations.ET.additional,
            imageUrl: card.imageUrl,
            category: card.category,
            isFree: card.isFree ?? false,
            translations: {
              create: [
                {
                  locale: Locale.ET,
                  title: card.translations.ET.title,
                  description: card.translations.ET.description,
                  additional: card.translations.ET.additional,
                },
                {
                  locale: Locale.EN,
                  title: card.translations.EN.title,
                  description: card.translations.EN.description,
                  additional: card.translations.EN.additional,
                },
              ],
            },
          },
        })
      }
    })

    console.log(`Created ${cards.length} cards.`)
    return
  }

  console.log(`Found ${existingCards.length} existing cards.`)

  const errors: string[] = []

  const countsByCategory: Record<string, number> = {}
  for (const c of existingCards) {
    countsByCategory[c.category] = (countsByCategory[c.category] ?? 0) + 1
  }

  for (const cat of CATEGORIES) {
    const expected = EXPECTED_COUNT_PER_CATEGORY[cat]
    const found = countsByCategory[cat] ?? 0
    if (found !== expected) {
      errors.push(`${cat}: expected ${expected}, found ${found}`)
    }
  }
  if (existingCards.length !== EXPECTED_TOTAL) {
    errors.push(`TOTAL: expected ${EXPECTED_TOTAL}, found ${existingCards.length}`)
  }

  const canonicalByCategory: Record<Category, typeof cards> = {
    CONNECTION: cards.filter((c) => c.category === Category.CONNECTION),
    INTIMACY: cards.filter((c) => c.category === Category.INTIMACY),
    LOVEMAKING: cards.filter((c) => c.category === Category.LOVEMAKING),
  }

  let matchedCount = 0
  if (errors.length === 0) {
    for (const cat of CATEGORIES) {
      const dbCardsForCat = existingCards.filter((c) => c.category === cat)
      const canonicalForCat = canonicalByCategory[cat]

      for (let i = 0; i < dbCardsForCat.length; i++) {
        const dbCard = dbCardsForCat[i]
        const canonical = canonicalForCat[i]
        const expectedEnTitle = canonical.translations.EN.title.trim()
        const actualEnTitle = (dbCard.translations[0]?.title ?? dbCard.title).trim()

        if (actualEnTitle !== expectedEnTitle) {
          errors.push(
            `${cat}[${i}]: card ${dbCard.id} EN title "${actualEnTitle}" != canonical "${expectedEnTitle}"`
          )
          continue
        }

        matchedCount++
      }
    }
  }

  if (errors.length > 0) {
    console.error('Card seed validation failed.')
    console.error('Expected:')
    for (const cat of CATEGORIES) {
      console.error(`${cat} ${EXPECTED_COUNT_PER_CATEGORY[cat]}`)
    }
    console.error(`TOTAL ${EXPECTED_TOTAL}`)
    console.error('\nFound:')
    for (const cat of CATEGORIES) {
      console.error(`${cat} ${countsByCategory[cat] ?? 0}`)
    }
    console.error(`TOTAL ${existingCards.length}`)
    console.error('\nIssues:')
    for (const e of errors) console.error(' - ' + e)
    console.error('\nNo card changes were made.')
    process.exit(1)
  }

  console.log(`Validated ${matchedCount}/${EXPECTED_TOTAL} canonical cards.`)
  console.log('Cards already seeded — skipping card creation.')
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
