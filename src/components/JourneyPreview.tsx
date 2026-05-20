'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import {
  DndContext,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  closestCenter,
} from '@dnd-kit/core'
import {
  SortableContext,
  useSortable,
  arrayMove,
  rectSortingStrategy,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ExpandIcon } from '@/components/icons/ExpandIcon'
import { CollapseIcon } from '@/components/icons/CollapseIcon'
import { HtmlContent } from '@/components/HtmlContent'
import { getCategoryTheme } from '@/lib/categoryThemes'

const SELECTION_KEY = 'connexion_journey_selection'
const QUEUE_KEY = 'connexion_journey_queue'

const CATEGORY_ORDER = ['CONNECTION', 'INTIMACY', 'LOVEMAKING'] as const
type Category = (typeof CATEGORY_ORDER)[number]

const CATEGORY_LABELS: Record<Category, string> = {
  CONNECTION: 'Connection',
  INTIMACY: 'Intimacy',
  LOVEMAKING: 'Lovemaking',
}

type JourneySelection = {
  CONNECTION: string[]
  INTIMACY: string[]
  LOVEMAKING: string[]
}

type CardData = {
  id: string
  title: string
  description: string | null
  imageUrl: string | null
  additional: string | null
  category: string
}

type QueueEntry = {
  id: string
  category: Category
}

type Props = {
  cards: CardData[]
}

function readSelection(): JourneySelection | null {
  try {
    const raw = localStorage.getItem(SELECTION_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    const result: JourneySelection = {
      CONNECTION: Array.isArray(parsed.CONNECTION) ? parsed.CONNECTION : [],
      INTIMACY: Array.isArray(parsed.INTIMACY) ? parsed.INTIMACY : [],
      LOVEMAKING: Array.isArray(parsed.LOVEMAKING) ? parsed.LOVEMAKING : [],
    }
    const total = result.CONNECTION.length + result.INTIMACY.length + result.LOVEMAKING.length
    if (total === 0) return null
    return result
  } catch {
    return null
  }
}

function saveSelection(sel: JourneySelection) {
  localStorage.setItem(SELECTION_KEY, JSON.stringify(sel))
}

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function buildQueue(selection: JourneySelection, randomOrder: boolean): QueueEntry[] {
  const queue: QueueEntry[] = []
  for (const cat of CATEGORY_ORDER) {
    const ids = selection[cat]
    if (ids.length === 0) continue
    const entries: QueueEntry[] = ids.map((id) => ({ id, category: cat }))
    queue.push(...(randomOrder ? shuffleArray(entries) : entries))
  }
  return queue
}

// ── Sortable card item ────────────────────────────────────────────────────────

type SortableCardProps = {
  card: CardData
  counter: number
  theme: ReturnType<typeof getCategoryTheme>
  onOpenPreview: (card: CardData) => void
}

function SortableCard({ card, counter, theme, onOpenPreview }: SortableCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: card.id })

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1,
    position: 'relative',
    zIndex: isDragging ? 10 : undefined,
  }

  function handleCardClick() {
    if (isDragging) return
    onOpenPreview(card)
  }

  function handleExpandClick(e: React.MouseEvent) {
    e.stopPropagation()
    if (isDragging) return
    onOpenPreview(card)
  }

  return (
    <div ref={setNodeRef} style={style} className="w-[33.3%] p-[3px]">
      <div className="relative h-[100%]" onClick={handleCardClick}>
        <Card className={`${theme.singleCardClassName} border-1 border-[#D2AF9C]`}>
          <div className="cat-card-head flex flex-grow-1 items-start justify-between mb-[10px]">
            <h2 className="text-[8px] text-[#D2AF9C] pr-[3px] pt-[3px]">
              {card.title}
            </h2>
            <button
              onClick={handleExpandClick}
              aria-label="Card details"
              className="flex flex-none basis-[16px] items-center justify-center"
            >
              <ExpandIcon className="h-4 w-4" />
            </button>
          </div>
          {card.imageUrl && (
            <img
              src={card.imageUrl}
              alt={card.title}
              className="h-[136px] w-full rounded-[5px] object-cover"
            />
          )}
        </Card>

        {/* Global counter badge */}
        <div className="absolute top-[6px] left-[6px] h-5 w-5 rounded-full bg-[#860119] flex items-center justify-center pointer-events-none">
          <span className="text-[#D2AF9C] text-[9px] font-semibold leading-none">{counter}</span>
        </div>

        {/* Drag handle — bottom-right corner */}
        <div
          ref={setActivatorNodeRef}
          {...attributes}
          {...listeners}
          className="absolute bottom-[6px] right-[6px] flex h-10 w-10 items-center justify-center touch-none cursor-grab active:cursor-grabbing"
          aria-label="Drag to reorder"
          onClick={(e) => e.stopPropagation()}
        >
          <svg width="25" height="25" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3.5" cy="2.5" r="1" fill="#000000" fillOpacity="0.6" />
            <circle cx="8.5" cy="2.5" r="1" fill="#000000" fillOpacity="0.6" />
            <circle cx="3.5" cy="6" r="1" fill="#000000" fillOpacity="0.6" />
            <circle cx="8.5" cy="6" r="1" fill="#000000" fillOpacity="0.6" />
            <circle cx="3.5" cy="9.5" r="1" fill="#000000" fillOpacity="0.6" />
            <circle cx="8.5" cy="9.5" r="1" fill="#000000" fillOpacity="0.6" />
          </svg>
        </div>
      </div>
    </div>
  )
}

// ── Sortable category group ───────────────────────────────────────────────────

type SortableGroupProps = {
  cat: Category
  ids: string[]
  cardMap: Map<string, CardData>
  counterOffset: number
  onReorder: (cat: Category, newIds: string[]) => void
  onOpenPreview: (card: CardData) => void
}

function SortableCategoryGroup({
  cat,
  ids,
  cardMap,
  counterOffset,
  onReorder,
  onOpenPreview,
}: SortableGroupProps) {
  const theme = getCategoryTheme(cat)

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    }),
    useSensor(TouchSensor, {
      activationConstraint: { delay: 200, tolerance: 8 },
    })
  )

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (!over || active.id === over.id) return
    const oldIndex = ids.indexOf(active.id as string)
    const newIndex = ids.indexOf(over.id as string)
    if (oldIndex === -1 || newIndex === -1) return
    onReorder(cat, arrayMove(ids, oldIndex, newIndex))
  }

  const cards = ids.map((id) => cardMap.get(id)).filter(Boolean) as CardData[]

  return (
    <div>
      <h2 className="font-['Baskervville'] font-normal text-[20px] leading-[26px] text-[#D2AF9C] mb-3">
        {CATEGORY_LABELS[cat]}
      </h2>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={ids} strategy={rectSortingStrategy}>
          <div className="flex flex-wrap mx-[-3px]">
            {cards.map((card, idx) => (
              <SortableCard
                key={card.id}
                card={card}
                counter={counterOffset + idx + 1}
                theme={theme}
                onOpenPreview={onOpenPreview}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  )
}

// ── Main preview component ────────────────────────────────────────────────────

export function JourneyPreview({ cards }: Props) {
  const router = useRouter()
  const cardMap = new Map(cards.map((c) => [c.id, c]))

  const [selection, setSelection] = useState<JourneySelection | null>(null)
  const [randomOrder, setRandomOrder] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [previewCard, setPreviewCard] = useState<CardData | null>(null)
  const [learnMoreCard, setLearnMoreCard] = useState<CardData | null>(null)
  const [introOpen, setIntroOpen] = useState(false)
  const [moreSuggestionsOpen, setMoreSuggestionsOpen] = useState(false)

  useEffect(() => {
    const sel = readSelection()
    if (!sel) {
      router.replace('/game?mode=journey')
      return
    }
    setSelection(sel)
    setMounted(true)
  }, [router])

  function handleReorder(cat: Category, newIds: string[]) {
    if (!selection) return
    const updated: JourneySelection = { ...selection, [cat]: newIds }
    setSelection(updated)
    saveSelection(updated)
  }

  function handleStartPlaying() {
    setIntroOpen(true)
  }

  function handleOK() {
    if (!selection) return
    const queue = buildQueue(selection, randomOrder)
    localStorage.setItem(
      QUEUE_KEY,
      JSON.stringify({ cards: queue, currentIndex: 0, randomOrder })
    )
    router.push('/game/journey/play')
  }

  if (!mounted || !selection) return null

  const groups = CATEGORY_ORDER.map((cat) => ({
    cat,
    ids: selection[cat].filter((id) => cardMap.has(id)),
  })).filter((g) => g.ids.length > 0)

  // compute counter offsets per group
  let runningOffset = 0
  const groupsWithOffset = groups.map((g) => {
    const offset = runningOffset
    runningOffset += g.ids.length
    return { ...g, offset }
  })

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-3 pt-2">
        <button onClick={() => router.push('/game?mode=journey')} aria-label="Back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_journey_preview_back)">
              <path d="M20.25 12L3.75 12" stroke="#D2AF9C" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.5 5.25L3.75 12L10.5 18.75" stroke="#D2AF9C" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_journey_preview_back">
                <rect width="24" height="24" fill="white" transform="translate(24 1.04907e-06) rotate(90)" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <h1 className="font-semibold text-[20px] leading-[30px] text-[#D2AF9C]">
          Selected cards
        </h1>
        <div className="w-6" />
      </div>

      {/* Random order toggle */}
      <div className="flex flex-col py-4 border-b border-[#69584E40] mb-4 gap-2">
        <div className="flex items-center justify-between">
          <span className="font-normal text-[16px] leading-[100%] text-[#D2AF9C]">Random order</span>
          <button
            onClick={() => setRandomOrder((v) => !v)}
            aria-label="Toggle random order"
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              randomOrder ? 'bg-[#860119]' : 'bg-[#69584E40]'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-[#D2AF9C] transition-transform ${
                randomOrder ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
        <p className="font-normal text-[13px] leading-[18px] text-[#D2AF9C] opacity-60">
          {randomOrder
            ? 'Cards are shuffled inside each category when you start.'
            : 'Drag cards inside each category to set the play order.'}
        </p>
      </div>

      {/* Grouped sortable cards */}
      <div className="flex flex-col gap-6 pb-36">
        {groupsWithOffset.map(({ cat, ids, offset }) => (
          <SortableCategoryGroup
            key={cat}
            cat={cat}
            ids={ids}
            cardMap={cardMap}
            counterOffset={offset}
            onReorder={handleReorder}
            onOpenPreview={setPreviewCard}
          />
        ))}
      </div>

      {/* Bottom buttons */}
      <div className="fixed bottom-0 left-0 right-0 px-4 py-6 bg-[#000000] flex flex-col gap-2">
        <Button onClick={handleStartPlaying}>Start playing</Button>
        <Button variant="secondary" onClick={() => router.push('/game?mode=journey')}>
          Change cards
        </Button>
      </div>

      {/* Card preview modal */}
      {previewCard && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center p-5 bg-black/60"
          onClick={() => setPreviewCard(null)}
        >
          <div
            className={`w-full max-h-[80vh] max-w-lg overflow-auto rounded-[24px] bg-white p-5 pb-10 border border-[#69584E] ${getCategoryTheme(previewCard.category).descriptionModalClassName}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-[20px] text-[#D2AF9C] pr-2">{previewCard.title}</h2>
              <div className="h-6 w-6 flex-none basis-[24px]" onClick={() => setPreviewCard(null)}>
                <CollapseIcon />
              </div>
            </div>
            {previewCard.imageUrl && (
              <img
                src={previewCard.imageUrl}
                alt={previewCard.title}
                className="mb-4 h-48 w-full rounded-2xl object-cover"
              />
            )}
            {previewCard.description && (
              <HtmlContent
                html={previewCard.description}
                className="mb-6 text-[14px] leading-[140%] text-[#D2AF9C]"
              />
            )}
            <Button
              disabled={!previewCard.additional}
              variant="brown-transparent"
              className={!previewCard.additional ? 'opacity-40 bg-[#D2AF9C1A]' : ''}
              onClick={() => setLearnMoreCard(previewCard)}
            >
              Learn more
            </Button>
          </div>
        </div>
      )}

      {/* Learn more modal */}
      {learnMoreCard && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setLearnMoreCard(null)}
        >
          <div
            className="w-full overflow-auto max-h-[80vh] max-w-lg rounded-[16px] bg-black p-6 border border-[#69584E] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="mb-4 font-semibold text-[20px] leading-[120%] text-[#D2AF9C]">
              Appreciative Words
            </h2>
            <HtmlContent
              html={learnMoreCard.additional}
              className="text-[16px] leading-[150%] text-[#D2AF9C]/70"
            />
            <div onClick={() => setLearnMoreCard(null)} className="absolute right-[24px] top-[24px]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Intro modal */}
      {introOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black px-4"
          onClick={() => setIntroOpen(false)}
        >
          <div
            className="w-full max-w-sm h-[100vh] py-6 overflow-auto bg-black text-[#D2AF9C]"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="my-4 text-[20px] font-semibold">Tune into the play</h2>
            <div className="mb-8 text-[16px] leading-[150%] modal-html-content">
              <p>When starting the game, guidelines are presented before start of play:</p>
              <h5>Consent</h5>
              <p>Make sure that you both want to play. Respect each other&apos;s boundaries and desires.</p>
              <h5>Get in the mood</h5>
              <p>Arrange the room the way you want it, choose romantic lighting and mood music, make sure that you won&apos;t be disturbed, put your phones on silent or switch them off.</p>
              <h5>Use oil</h5>
              <p>Some cards require use of oil. Make sure you have a high-quality intimacy oil on hand.</p>
              <h5>Cleanliness</h5>
              <p>Wash your whole body, including brushing teeth, so ensure that there aren&apos;t any little turnoffs.</p>
              <h5>Get attuned</h5>
              <p>Before beginning play, tell yourselves:</p>
              <ul>
                <li>&ldquo;Neither of us have any expectations or preconceived notions about what might happen.&rdquo;</li>
                <li>&ldquo;I now devote myself to enjoying the moment. I&apos;ll come back to everyday thoughts later.&rdquo;</li>
                <li>&ldquo;I&apos;m ready to discover and experience something new.&rdquo;</li>
                <li>&ldquo;I&apos;m going to let my body relax, become aroused and experience pleasure.&rdquo;</li>
              </ul>
            </div>
            <div>
              <Button className="flex-1 mb-1" onClick={handleOK}>OK</Button>
              <Button variant="link" className="flex-1" onClick={() => setMoreSuggestionsOpen(true)}>
                More suggestions
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* More suggestions modal */}
      {moreSuggestionsOpen && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setMoreSuggestionsOpen(false)}
        >
          <div
            className="relative w-full max-w-sm max-h-[85vh] overflow-auto rounded-3xl bg-black p-6 border border-[#69584E]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setMoreSuggestionsOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-6 flex h-8 w-8 items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
              </svg>
            </button>
            <h2 className="mb-4 text-[20px] font-semibold">More suggestions</h2>
            <div className="text-sm leading-relaxed modal-html-content">
              <h5>Spontaneity</h5>
              <p>Creating a shared pleasure space is what is important, not necessarily following all rules and guidelines for their own sake. If you lose track of time, trust your instincts and continue in a spontaneous manner.</p>
              <h5>Perfectionism</h5>
              <p>Don&apos;t sweat it if it doesn&apos;t come out exactly the way you intended. Taking sexuality to deeper levels is a journey. Don&apos;t be hard or too demanding on yourselves.</p>
              <h5>Feedback</h5>
              <p>After playing cards, talk to each other in the first person about what you liked, what could be different, and what could be repeated.</p>
              <p>Time out for the male partner: if arousal exceeds 70%, try the following techniques:</p>
              <ul>
                <li>pause the activity and wait until the arousal level subsides, then resume from exactly where you left off</li>
                <li>clench all the muscles in your body at once, hold your breath for 30 seconds and then release the tension. Repeat; bring your attention from the sex organs to your heart or your third eye</li>
                <li>if you begin intercourse while extremely aroused, that can make premature ejaculation more likely. Go back to the intimacy cards to let the arousal level subside a little</li>
              </ul>
              <h5>Responsibility</h5>
              <p>Each partner is responsible for their own physical, mental and emotional well-being. If you experience strong feelings, see &ldquo;ABCs of Emotions&rdquo;.</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
