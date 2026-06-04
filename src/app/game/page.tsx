// force-dynamic: page uses per-request auth (supabase.auth.getUser) and cookies,
// so it cannot be statically generated. Card counts are cached inside the helpers.
export const dynamic = 'force-dynamic'

import { Container } from '@/components/ui/Container'
import { GameModeTabs } from '@/components/GameModeTabs'
import { getUserPremiumStatus } from '@/lib/premium/getUserPremiumStatus'
import { getAllCardsMinimalCached } from '@/lib/cards/cachedCards'
import { isDevAuthBypassEnabled } from '@/lib/devAuth'

const categories = [
  { label: 'Connection', value: 'CONNECTION' },
  { label: 'Intimacy', value: 'INTIMACY' },
  { label: 'Lovemaking', value: 'LOVEMAKING' },
] as const

export default async function GamePage({
  searchParams,
}: {
  searchParams: Promise<{ mode?: string }>
}) {
  const t0 = Date.now()

  // --- phase: dev auth bypass check (sync, ~0ms) ---
  const devBypass = isDevAuthBypassEnabled()
  const t1 = Date.now()
  console.log(`[/game] devBypass=${devBypass} | bypassCheckMs=${t1 - t0}ms`)

  const { mode } = await searchParams
  const initialTab = mode === 'surprise' ? 'surprise' : mode === 'journey' ? 'journey' : 'intuitive'

  // --- phase: card counts (cached) + premium/subscription (per-request DB) in parallel ---
  const t2 = Date.now()
  const [cardsRaw, isPremium] = await Promise.all([
    getAllCardsMinimalCached(),
    getUserPremiumStatus(),
  ])
  const t3 = Date.now()
  console.log(
    `[/game] parallel(cards+premium)=${t3 - t2}ms` +
    ` | cards=${cardsRaw.length} isPremium=${isPremium}`
  )

  // --- phase: rendering data preparation (sync, ~0ms) ---
  const t4 = Date.now()
  const categoriesWithCounts = categories.map((cat) => ({
    ...cat,
    count: cardsRaw.filter((c) => c.category === cat.value).length,
  }))
  const t5 = Date.now()

  console.log(
    `[/game] TOTAL=${t5 - t0}ms` +
    ` | breakdown: bypassCheck=${t1 - t0}ms parallel=${t3 - t2}ms dataPrep=${t5 - t4}ms`
  )

  return (
    <div className="max-w-[525px] mx-auto h-screen overflow-y-auto bg-[#000000]">
      <Container className="flex flex-col">
        <GameModeTabs
          categories={categoriesWithCounts}
          cards={cardsRaw}
          initialTab={initialTab}
          isPremium={isPremium}
        />
      </Container>
    </div>
  )
}
