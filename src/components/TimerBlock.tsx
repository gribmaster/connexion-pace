'use client'

import { useEffect, useReducer, useRef } from 'react'
import { Button } from '@/components/ui/Button'
import { playTimerSound, preloadTimerSounds, stopAllTimerSounds, unlockAudio } from '@/lib/audioCache'
import { useLocale } from '@/lib/i18n/useLocale'

type TimerState = {
  seconds: number
  noLimit: boolean
  running: boolean
  started: boolean
  timeUp: boolean
  resetKey: string
  storageKey: string
}

type TimerAction =
  | { type: 'TICK' }
  | { type: 'TOGGLE_RUNNING' }
  | { type: 'ADD_SECONDS'; amount: number }
  | { type: 'SUBTRACT_SECONDS'; amount: number }
  | { type: 'RESET'; resetKey: string }

function getStoredTimerValues(storageKey: string): { seconds: number; noLimit: boolean } {
  if (typeof window === 'undefined') return { seconds: 300, noLimit: false }
  const stored = window.localStorage.getItem(storageKey) ?? '5'
  if (stored === 'no_limit') return { seconds: 300, noLimit: true }
  const minutes = Number(stored)
  if (!Number.isFinite(minutes) || minutes <= 0) return { seconds: 300, noLimit: false }
  return { seconds: minutes * 60, noLimit: false }
}

function timerReducer(state: TimerState, action: TimerAction): TimerState {
  switch (action.type) {
    case 'RESET': {
      const { seconds, noLimit } = getStoredTimerValues(state.storageKey)
      return { ...state, seconds, noLimit, running: false, started: false, timeUp: false, resetKey: action.resetKey }
    }
    case 'TICK': {
      if (state.noLimit || !state.running || state.seconds <= 0) return state
      if (state.seconds <= 1) {
        return { ...state, seconds: 0, running: false, timeUp: true }
      }
      return { ...state, seconds: state.seconds - 1 }
    }
    case 'TOGGLE_RUNNING': {
      const isTimeUp = !state.noLimit && state.seconds <= 0
      if (isTimeUp) return state
      return { ...state, running: !state.running, started: true }
    }
    case 'ADD_SECONDS': {
      const next = state.seconds + action.amount
      return { ...state, seconds: next, timeUp: false }
    }
    case 'SUBTRACT_SECONDS': {
      const next = Math.max(0, state.seconds - action.amount)
      const hitZero = !state.noLimit && next <= 0
      return { ...state, seconds: next, running: hitZero ? false : state.running, timeUp: hitZero ? true : state.timeUp }
    }
    default:
      return state
  }
}

type Props = {
  resetKey: string
  storageKey: string
  stopSoundRef?: React.MutableRefObject<() => void>
}

export function TimerBlock({ resetKey, storageKey, stopSoundRef }: Props) {
  const { dict } = useLocale()
  const dt = dict.timer
  const [state, dispatch] = useReducer(timerReducer, undefined, () => {
    const { seconds, noLimit } = getStoredTimerValues(storageKey)
    return { seconds, noLimit, running: false, started: false, timeUp: false, resetKey, storageKey }
  })

  const currentSoundRef = useRef<string | null>(null)

  const stopSound = () => {
    if (currentSoundRef.current) {
      stopAllTimerSounds()
      currentSoundRef.current = null
    }
  }

  useEffect(() => {
    preloadTimerSounds()
  }, [])

  useEffect(() => {
    if (stopSoundRef) stopSoundRef.current = stopSound
  })

  useEffect(() => {
    if (state.resetKey !== resetKey) {
      stopSound()
      dispatch({ type: 'RESET', resetKey })
    }
  }, [resetKey, state.resetKey])

  useEffect(() => {
    return () => { stopSound() }
  }, [])

  useEffect(() => {
    const wasTimeUp = !state.noLimit && state.seconds === 0 && state.timeUp
    if (wasTimeUp) {
      const file = localStorage.getItem('connexion_timer_sound') ?? 'beep1.mp3'
      const vol = localStorage.getItem('connexion_timer_volume')
      const volume = vol !== null ? Number(vol) / 100 : 0.7
      const src = `/sound/${file}`
      currentSoundRef.current = src
      playTimerSound(src, volume)
    }
  }, [state.noLimit, state.seconds, state.timeUp])

  useEffect(() => {
    if (state.noLimit || !state.running || state.seconds <= 0) return
    const id = setInterval(() => {
      dispatch({ type: 'TICK' })
    }, 1000)
    return () => clearInterval(id)
  }, [state.noLimit, state.running, state.seconds])

  const { seconds, noLimit, running, started, timeUp } = state
  const mm = String(Math.floor(seconds / 60)).padStart(2, '0')
  const ss = String(seconds % 60).padStart(2, '0')

  return (
    <div className="flex flex-col items-center gap-3">
      {noLimit ? (
        <span className="text-3xl font-mono font-semibold text-[#D2AF9C]">{dt.noLimit}</span>
      ) : (
        <div className="flex items-center gap-3">
          <button
            onClick={() => dispatch({type: 'SUBTRACT_SECONDS', amount: 30})}
          >
            <img src="/img/timer-minus.svg" width="32" height="32" alt=""/>
          </button>
          <span className="min-w-[60px] text-center text-[16px] leading-[24px] font-mono font-semibold text-[#D2AF9C]">
            {`${mm}:${ss}`}
          </span>
          <button
            onClick={() => { stopSound(); dispatch({ type: 'ADD_SECONDS', amount: 30 }); }}
          >
            <img src="/img/timer-plus.svg" width="32" height="32" alt=""/>
          </button>
        </div>
      )}
      {/*{!noLimit && timeUp && (*/}
      {/*  <span className="text-sm font-semibold text-red-400">Time is up</span>*/}
      {/*)}*/}
      {!noLimit && (
        <Button
          variant="primary"
          className="w-auto px-8"
          disabled={timeUp}
          onClick={() => { unlockAudio(); dispatch({ type: 'TOGGLE_RUNNING' }) }}
        >
          {running && !timeUp ? dt.stop : started ? dt.play : dt.start}
        </Button>
      )}
    </div>
  )
}
