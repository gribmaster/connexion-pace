'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { TimerBlock } from '@/components/TimerBlock'
import { getCategoryTheme } from '@/lib/categoryThemes'
import { HtmlContent } from '@/components/HtmlContent'
import { useLocale } from '@/lib/i18n/useLocale'
import { resolveCardTranslation } from '@/lib/i18n/resolveCardTranslation'
import {InfoCircleIcon} from "@/components/icons/InfoCircleIcon";
import { AbcEmotionsModal } from '@/components/AbcEmotionsModal'

type Translation = {
  locale: string
  title: string
  description: string | null
  additional: string | null
}

type CardData = {
  id: string
  title: string
  description: string | null
  imageUrl: string | null
  additional?: string | null
  translations: Translation[]
}

type Props = {
  category: string
  initialCardId: string
  allCards: CardData[]
}

export function IntuitiveGameplay({ category, initialCardId, allCards }: Props) {
  const router = useRouter()
  const stopSoundRef = useRef<() => void>(() => {})
  const [currentCardId] = useState(initialCardId)
  const [isNextLoading, setIsNextLoading] = useState(false)
  const [isAbcEmotionsOpen, setIsAbcEmotionsOpen] = useState(false)
  const { locale, dict } = useLocale()
  const dg = dict.gameplay

  const theme = getCategoryTheme(category)
  const rawCard = allCards.find((c) => c.id === currentCardId) ?? allCards.find((c) => c.id === initialCardId)
  const card = rawCard ? { ...rawCard, ...resolveCardTranslation(rawCard, locale) } : undefined

  const handleNext = () => {
    if (isNextLoading) return
    stopSoundRef.current()
    setIsNextLoading(true)
    router.push(`/game/intuitive/${category.toLowerCase()}`)
  }

  const handleFinish = () => {
    stopSoundRef.current()
    router.push('/game/intuitive/result')
  }

  if (!card) return null

  return (
    <div className={`min-h-screen py-10 ${theme.screenClassName}`}>
      <Container className="">
        <div className="text-[#D2AF9C] mb-3">
          <div className={`h-[582px] overflow-auto border border-[#69584E] p-4 ${theme.cardContainerClassName} rounded-[24px]`}>
            <div className="flex justify-between items-start">
              <h1 className="text-[20px] leading-[26px] mb-4 font-semibold flex items-center">
                {card.title}
                <span
                  className="ml-1 abc-emotions-call"
                  onClick={() => setIsAbcEmotionsOpen(true)}
                >
                  <InfoCircleIcon/>
                </span>
              </h1>
              <img src="/img/x-plhldr.svg" width="48" className="hidden" alt="" />
            </div>

            {card.imageUrl && (
              <div className="relative h-[190px] w-full mb-4">
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  fill
                  className="object-cover rounded-[12px]"
                />
              </div>
            )}
            <HtmlContent html={card.description} className="game-card-content" />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <TimerBlock resetKey={currentCardId} storageKey="connexion_timer_intuitive" stopSoundRef={stopSoundRef} />
          <div className="flex gap-3">
            <Button variant="secondary" onClick={handleFinish} className="border-none">
              {dg.finishGame}
            </Button>
            <Button variant="secondary" onClick={handleNext} disabled={isNextLoading} className="border-none">
              {isNextLoading ? dict.common.loading : dg.nextCard}
            </Button>
          </div>
        </div>
      </Container>
      <AbcEmotionsModal
        isOpen={isAbcEmotionsOpen}
        onClose={() => setIsAbcEmotionsOpen(false)}
        locale={locale}
      />
    </div>
  )
}
