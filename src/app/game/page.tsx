import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { TimerSettings } from '@/components/TimerSettings'
import { LogoutButton } from '@/components/LogoutButton'
import { UserCircleIcon } from '@/components/icons/UserCircleIcon'
import {InfoCircleIcon} from "@/components/icons/InfoCircleIcon";

const categories = [
  { label: 'Connection', value: 'CONNECTION' },
  { label: 'Intimacy', value: 'INTIMACY' },
  { label: 'Lovemaking', value: 'LOVEMAKING' },
] as const

export default async function GamePage() {
  const counts = await Promise.all(
    categories.map(({ value }) =>
      prisma.card.count({ where: { category: value } })
    )
  )

  const categoriesWithCounts = categories.map((cat, i) => ({
    ...cat,
    count: counts[i],
  }))

  return (
    <div className="flex flex-col items-center w-[375px] mx-auto h-[800px] bg-[#000000]">
      <Container className="flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="flex items-center font-semibold text-[20px] leading-[100%]">
            <span>Choose your cards</span>
            <div className="ml-1">
              <InfoCircleIcon />
            </div>
          </h1>
          <div className="flex items-center">
            <Link href="/profile" aria-label="Profile">
              <UserCircleIcon className="h-6 w-6 text-[#D2AF9C]/60 hover:text-[#D2AF9C] transition-colors" />
            </Link>
            {/*<LogoutButton />*/}
          </div>
        </div>
        <div className="font-normal text-[16px] leading-[150%] mt-[10px] opacity-70">Choose the number of cards and set the time for each category before starting your session.</div>
        {/* Mode tabs */}
        <div className="flex mt-5">
          <button className="font-semibold text-[14px] leading-[20px] p-2 border-b border-[#69584E] flex-1">
            Intuitive
          </button>
          <button
            disabled
            className="font-semibold text-[14px] leading-[20px] p-2 border-b border-[#69584E80] flex-1"
          >
            Journey
          </button>
          <button
            disabled
            className="font-semibold text-[14px] leading-[20px] p-2 border-b border-[#69584E80] flex-1"
          >
            Surprise me
          </button>
        </div>

        {/* Category cards */}
        <Card className="flex flex-col mt-5 gap-3">
          {categoriesWithCounts.map(({ label, value, count }) => (
            <div
              key={value}
              className={`flex items-center justify-between p-3 bg-${value} rounded-[24px] border border-[#69584E] shadow-[0px_0px_20px_0px_#000000]`}
            >
              <div className="flex flex-col self-start p-2">
                <span className="font-['Baskervville'] font-normal text-[24px] leading-[31px]">{label}</span>
                <span className="font-normal text-[16px] leading-[100%]">{count} cards</span>
              </div>
              <Link href={`/game/intuitive/${value}`} className={`h-[154px] w-[96px] cat-${value} cat-card`}>
                <div className="font-semibold text-[12px] leading-[100%]">Choose</div>
              </Link>
            </div>
          ))}
        </Card>

        {/* Timer settings */}
        <TimerSettings />
      </Container>
    </div>
  )
}
