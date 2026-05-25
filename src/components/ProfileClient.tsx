'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/Button'
import { getTimerSoundAudio, preloadTimerSounds, stopAllTimerSounds, stopTimerSound } from '@/lib/audioCache'
import { useLocale } from '@/lib/i18n/useLocale'
import { WheelPicker } from '@/components/reminder/WheelPicker'
import { resetAppCache } from '@/lib/resetAppCache'

type Modal = 'help' | 'language' | 'timer_sound' | 'daily_connection' | 'reset_cache' | null

const SOUND_OPTIONS = [
  { label: 'Sound 1', file: 'beep1.mp3' },
  { label: 'Sound 2', file: 'beep2.mp3' },
  { label: 'Sound 3', file: 'beep3.mp3' },
  { label: 'Sound 4', file: 'beep4.mp3' },
  { label: 'Sound 5', file: 'beep5.mp3' },
  { label: 'Sound 6', file: 'beep6.mp3' },
]

const SOUND_KEY = 'connexion_timer_sound'
const VOLUME_KEY = 'connexion_timer_volume'
const DEFAULT_SOUND = 'beep1.wav'
const DEFAULT_VOLUME = 70

const LOCALE_TO_LANG: Record<string, 'Eesti' | 'English'> = {
  et: 'Eesti',
  en: 'English',
}

const DC_DRAFT_KEY = 'connexion_daily_connection_draft'
const DC_HOURS = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'))
const DC_MINUTES = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']
const DC_AMPM = ['AM', 'PM']
const DC_INTERVALS = [
  { label: '1 day', value: 1 },
  { label: '2 days', value: 2 },
  { label: '3 days', value: 3 },
  { label: '7 days', value: 7 },
]

function getDcDefaultTime(): { hour: string; minute: string; ampm: string } {
  const now = new Date()
  let h24 = now.getHours()
  let rawMin = now.getMinutes()
  const roundedMin = Math.ceil(rawMin / 5) * 5
  if (roundedMin >= 60) {
    h24 = (h24 + 1) % 24
    rawMin = 0
  } else {
    rawMin = roundedMin
  }
  const ampm = h24 >= 12 ? 'PM' : 'AM'
  const h12 = h24 % 12 || 12
  return {
    hour: String(h12).padStart(2, '0'),
    minute: String(rawMin).padStart(2, '0'),
    ampm,
  }
}

function buildDcTimeOfDay(hour: string, minute: string, ampm: string): string {
  let h24 = parseInt(hour, 10)
  if (ampm === 'PM' && h24 !== 12) h24 += 12
  if (ampm === 'AM' && h24 === 12) h24 = 0
  return `${String(h24).padStart(2, '0')}:${minute}`
}

export function ProfileClient() {
  const router = useRouter()
  const { locale, setLocale, dict } = useLocale()
  const dp = dict.profile
  const dc = dict.common
  const [modal, setModal] = useState<Modal>(null)
  const [language, setLanguage] = useState<'Eesti' | 'English'>('Eesti')

  // Switch reflects localStorage after mount to avoid hydration mismatch
  const [dcEnabled, setDcEnabled] = useState(false)
  // Whether DC was enabled before the current modal open (for cancel revert)
  const dcWasEnabledRef = useRef(false)

  // Daily Connection draft state — initialised lazily on modal open
  const [dcHour, setDcHour] = useState('')
  const [dcMinute, setDcMinute] = useState('')
  const [dcAmPm, setDcAmPm] = useState('')
  const [dcInterval, setDcInterval] = useState(1)
  const [dcSaved, setDcSaved] = useState(false)

  const [selectedSound, setSelectedSound] = useState<string>(() => {
    if (typeof window === 'undefined') return DEFAULT_SOUND
    return localStorage.getItem(SOUND_KEY) ?? DEFAULT_SOUND
  })
  const [volume, setVolume] = useState<number>(() => {
    if (typeof window === 'undefined') return DEFAULT_VOLUME
    const v = localStorage.getItem(VOLUME_KEY)
    return v !== null ? Number(v) : DEFAULT_VOLUME
  })
  const playingFileRef = useRef<string | null>(null)
  const [playingFile, setPlayingFile] = useState<string | null>(null)

  useEffect(() => {
    setLanguage(LOCALE_TO_LANG[locale])
  }, [locale])

  useEffect(() => {
    try {
      const raw = localStorage.getItem(DC_DRAFT_KEY)
      if (raw) {
        const draft = JSON.parse(raw)
        if (draft.enabled === true) setDcEnabled(true)
      }
    } catch {}
  }, [])

  useEffect(() => {
    preloadTimerSounds()
    return () => { stopAllTimerSounds() }
  }, [])

  function stopPreview() {
    if (playingFileRef.current) {
      stopTimerSound(`/sound/${playingFileRef.current}`)
      playingFileRef.current = null
    }
    setPlayingFile(null)
  }

  function previewSound(file: string) {
    stopPreview()
    const src = `/sound/${file}`
    const audio = getTimerSoundAudio(src)
    if (!audio) return
    audio.volume = Math.max(0, Math.min(1, volume / 100))
    audio.currentTime = 0
    audio.onended = () => {
      if (playingFileRef.current === file) {
        playingFileRef.current = null
        setPlayingFile(null)
      }
    }
    playingFileRef.current = file
    setPlayingFile(file)
    const result = audio.play()
    if (result instanceof Promise) result.catch(() => {})
  }

  function handleSoundOk() {
    stopPreview()
    localStorage.setItem(SOUND_KEY, selectedSound)
    localStorage.setItem(VOLUME_KEY, String(volume))
    setModal(null)
  }

  function handleCloseSoundModal() {
    stopPreview()
    setModal(null)
  }

  function openDailyConnection() {
    dcWasEnabledRef.current = dcEnabled

    // Seed picker from existing draft if present, otherwise use current time
    let seededHour = ''
    let seededMinute = ''
    let seededAmPm = ''
    let seededInterval = 1
    try {
      const raw = localStorage.getItem(DC_DRAFT_KEY)
      if (raw) {
        const draft = JSON.parse(raw)
        if (draft.hour) seededHour = String(draft.hour).padStart(2, '0')
        if (draft.minute !== undefined) seededMinute = String(draft.minute).padStart(2, '0')
        if (draft.period) seededAmPm = draft.period
        if (draft.intervalDays) seededInterval = draft.intervalDays
      }
    } catch {}

    if (!seededHour || !seededMinute || !seededAmPm) {
      const defaults = getDcDefaultTime()
      seededHour = defaults.hour
      seededMinute = defaults.minute
      seededAmPm = defaults.ampm
    }

    setDcHour(seededHour)
    setDcMinute(seededMinute)
    setDcAmPm(seededAmPm)
    setDcInterval(seededInterval)
    setDcSaved(false)
    setModal('daily_connection')
  }

  function handleDcToggle() {
    if (dcEnabled) {
      // Turn OFF: update localStorage, flip switch
      try {
        const raw = localStorage.getItem(DC_DRAFT_KEY)
        const existing = raw ? JSON.parse(raw) : {}
        localStorage.setItem(DC_DRAFT_KEY, JSON.stringify({ ...existing, enabled: false }))
      } catch {}
      setDcEnabled(false)
    } else {
      // Turn ON: open setup modal
      openDailyConnection()
    }
  }

  function handleDcModalClose() {
    // Revert switch to what it was before opening if user didn't save
    if (!dcSaved) setDcEnabled(dcWasEnabledRef.current)
    setModal(null)
  }

  function onDcPickerChange(setter: (v: string) => void) {
    return (v: string) => {
      setter(v)
      setDcSaved(false)
    }
  }

  function onDcIntervalChange(value: number) {
    setDcInterval(value)
    setDcSaved(false)
  }

  function handleDcSave() {
    const timeOfDay = buildDcTimeOfDay(dcHour, dcMinute, dcAmPm)
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const draft = {
      enabled: true,
      timeOfDay,
      hour: parseInt(dcHour, 10),
      minute: parseInt(dcMinute, 10),
      period: dcAmPm as 'AM' | 'PM',
      intervalDays: dcInterval,
      timezone,
      savedAt: new Date().toISOString(),
    }
    localStorage.setItem(DC_DRAFT_KEY, JSON.stringify(draft))
    setDcEnabled(true)
    setDcSaved(true)
  }

  const [resetting, setResetting] = useState(false)
  const [resetError, setResetError] = useState(false)

  async function handleReset() {
    setResetting(true)
    setResetError(false)
    try {
      await resetAppCache()
    } catch {
      setResetting(false)
      setResetError(true)
    }
  }

  async function handleLogout() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <>
      {/* Settings section */}
      <div className="flex flex-col gap-0 text-[#D2AF9C]">
        {/* Daily connection */}
        <div className="flex items-center justify-between p-2">
          <span className="text-[16px] leading-[24px] font-medium">{dp.dailyConnection}</span>
          <button
            role="switch"
            aria-checked={dcEnabled}
            onClick={handleDcToggle}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              dcEnabled ? 'bg-[#860119]' : 'bg-[#D2AF9C]/30'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 rounded-full bg-white shadow transition-transform ${
                dcEnabled ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Help & Support */}
        <button
          onClick={() => setModal('help')}
          className="flex items-center justify-between p-2"
        >
          <span className="text-[16px] leading-[24px] font-medium">{dp.helpAndSupport}</span>
          <ChevronRight />
        </button>

        {/* Language */}
        <button
          onClick={() => setModal('language')}
          className="flex items-center justify-between p-2"
        >
          <span className="text-[16px] leading-[24px] font-medium">{dp.language}</span>
          <div className="flex items-center gap-2">
            <span className="text-xs">{language === 'Eesti' ? 'Eesti' : 'English'}</span>
            <ChevronRight />
          </div>
        </button>

        {/* Timer sound */}
        <button
          onClick={() => setModal('timer_sound')}
          className="flex items-center justify-between p-2"
        >
          <span className="text-[16px] leading-[24px] font-medium">{dp.timerSound}</span>
          <ChevronRight />
        </button>

        {/* Reset app cache */}
        <button
          onClick={() => { setResetError(false); setModal('reset_cache') }}
          className="flex items-center justify-between p-2"
        >
          <span className="text-[16px] leading-[24px] font-medium">Reset app cache</span>
          <ChevronRight />
        </button>

        {/* Log out */}
        <button
          onClick={handleLogout}
          className="flex items-center justify-between p-2 text-left"
        >
          <span className="text-[16px] leading-[24px] font-medium">{dp.logOut}</span>
          <LogoutIcon />
        </button>
      </div>

      {/* Help & Support modal */}
      {modal === 'help' && (
        <BottomModal onClose={() => setModal(null)}>
          <h2 className="text-[20px] leading-[24px] font-semibold mb-6">{dp.helpAndSupport}</h2>
          <p className="text-[16px] leading-[24px] text-[#D2AF9C] mb-6">
            {dp.helpText}
          </p>
          <a href="mailto:support@connexion.com">
            <Button variant="primary">{dp.contactUs}</Button>
          </a>
        </BottomModal>
      )}

      {/* Language modal */}
      {modal === 'language' && (
        <BottomModal onClose={() => setModal(null)}>
          <h2 className="text-[20px] leading-[24px] font-semibold mb-6">{dp.language}</h2>
          <div className="flex flex-col gap-2 mb-6">
            {(['Eesti', 'English'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`flex items-center justify-between rounded-[12px] px-2 py-3 mb-1 text-sm font-medium transition-colors leading-[24px] ${
                  language === lang && 'bg-[#69584E33]'
                }`}
              >
                <div className="flex">
                  <img src={`img/${lang}.svg`} alt="lang"/>
                  <span className="ml-2">{lang}</span>
                </div>
                {language === lang && <CheckIcon />}
              </button>
            ))}
          </div>
          <Button
            variant="primary"
            onClick={() => {
              setLocale(language === 'English' ? 'en' : 'et')
              setModal(null)
            }}
          >
            {dc.ok}
          </Button>
        </BottomModal>
      )}

      {/* Daily Connection modal */}
      {modal === 'daily_connection' && (
        <BottomModal onClose={handleDcModalClose}>
          <h2 className="text-[20px] leading-[24px] font-semibold mb-2">Daily Connection</h2>
          <p className="text-[14px] leading-[22px] opacity-60 mb-6">
            Choose when you want to receive your connection reminder.
          </p>

          {/* Wheel time picker */}
          <div className="flex items-center justify-center gap-2 py-2 mb-6">
            <WheelPicker options={DC_HOURS} value={dcHour} onChange={onDcPickerChange(setDcHour)} />
            <span className="text-[20px] font-semibold opacity-40 pb-1">:</span>
            <WheelPicker options={DC_MINUTES} value={dcMinute} onChange={onDcPickerChange(setDcMinute)} />
            <div className="w-2" />
            <WheelPicker options={DC_AMPM} value={dcAmPm} onChange={onDcPickerChange(setDcAmPm)} />
          </div>

          {/* Interval selection */}
          <div className="mb-6">
            <p className="text-[14px] font-medium mb-3 opacity-80">Repeat every</p>
            <div className="flex gap-2 flex-wrap">
              {DC_INTERVALS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => onDcIntervalChange(opt.value)}
                  className={`px-4 py-2 rounded-xl text-[14px] font-medium transition-colors border ${
                    dcInterval === opt.value
                      ? 'border-[#D2AF9C]/60 bg-[#69584E33] text-[#D2AF9C]'
                      : 'border-[#D2AF9C]/20 text-[#D2AF9C]/50'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Status / success */}
          {dcSaved && (
            <div className="mb-4 text-center">
              <p className="text-[14px] font-medium text-[#D2AF9C]">Daily Connection time saved.</p>
              <p className="text-[12px] opacity-50 mt-1">Recurring reminders will be enabled in the next step.</p>
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            {!dcSaved && (
              <Button variant="primary" onClick={handleDcSave}>Save</Button>
            )}
            <Button variant="secondary" onClick={handleDcModalClose}>Cancel</Button>
          </div>
        </BottomModal>
      )}

      {/* Reset app cache confirmation modal */}
      {modal === 'reset_cache' && (
        <BottomModal onClose={() => !resetting && setModal(null)}>
          <h2 className="text-[20px] leading-[24px] font-semibold mb-4">Reset app cache?</h2>
          <p className="text-[14px] leading-[22px] opacity-60 mb-6">
            This will clear local app data, cached files, saved settings, and reload the app. You may need to sign in again.
          </p>
          {resetError && (
            <p className="text-[13px] text-red-400 mb-4 text-center">
              Could not fully reset app cache. Please try again.
            </p>
          )}
          <div className="flex flex-col gap-3">
            <Button variant="primary" onClick={handleReset} disabled={resetting}>
              {resetting ? 'Resetting…' : 'Reset'}
            </Button>
            <Button variant="secondary" onClick={() => setModal(null)} disabled={resetting}>
              Cancel
            </Button>
          </div>
        </BottomModal>
      )}

      {/* Timer sound modal */}
      {modal === 'timer_sound' && (
        <BottomModal onClose={handleCloseSoundModal}>
          <h2 className="text-[20px] leading-[24px] font-semibold mb-6">{dp.timerSound}</h2>
          <div className="flex flex-col gap-2 mb-5">
            {SOUND_OPTIONS.map((opt) => {
              const isPlaying = playingFile === opt.file
              return (
                <div
                  key={opt.file}
                  role="button"
                  tabIndex={0}
                  onClick={() => { stopPreview(); setSelectedSound(opt.file) }}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { stopPreview(); setSelectedSound(opt.file) } }}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors cursor-pointer ${
                    selectedSound === opt.file && 'bg-[#69584E33]'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    {selectedSound === opt.file && <CheckIcon />}
                    {selectedSound !== opt.file && <span className="w-4" />}
                    {opt.label}
                  </span>
                  <span className="flex items-center" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => isPlaying ? stopPreview() : previewSound(opt.file)}
                      className="p-1.5 rounded-full hover:bg-[#D2AF9C]/20 transition-colors text-[#D2AF9C] hover:text-[#5a3a3a]"
                      aria-label={isPlaying ? `Stop ${opt.label}` : `Preview ${opt.label}`}
                    >
                      {isPlaying ? <StopIcon /> : <PlayIcon />}
                    </button>
                  </span>
                </div>
              )
            })}
          </div>
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">{dp.volume}</span>
              <span className="text-sm">{volume}%</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-full accent-[#860119] input-range"
            />
          </div>
          <Button variant="primary" onClick={handleSoundOk}>{dc.ok}</Button>
        </BottomModal>
      )}
    </>
  )
}

function BottomModal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-t-3xl bg-black px-6 py-9 text-[#D2AF9C] bottom-modal-body">
        <button
          onClick={onClose}
          className="absolute right-5 top-4 text-[#D2AF9C]/60 hover:text-[#D2AF9C] transition-colors"
          aria-label="Close"
        >
          <XIcon />
        </button>
        {children}
      </div>
    </div>
  )
}

function ChevronRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_113_14079)">
        <path d="M9 4.5L16.5 12L9 19.5" stroke="#69584E" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_113_14079">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8l4 4 6-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M5 3.5l8 4.5-8 4.5V3.5z" fill="currentColor" />
    </svg>
  )
}

function LogoutIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9M16 17L21 12M21 12L16 7M21 12H9"
        stroke="#860119" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function StopIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="4" y="4" width="8" height="8" rx="1" fill="currentColor"/>
    </svg>
  )
}
