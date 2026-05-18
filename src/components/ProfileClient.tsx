'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/Button'

type Modal = 'help' | 'language' | 'timer_sound' | null

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

export function ProfileClient() {
  const router = useRouter()
  const [modal, setModal] = useState<Modal>(null)
  const [language, setLanguage] = useState('English')
  const [dailyConnection] = useState(false)

  const [selectedSound, setSelectedSound] = useState<string>(() => {
    if (typeof window === 'undefined') return DEFAULT_SOUND
    return localStorage.getItem(SOUND_KEY) ?? DEFAULT_SOUND
  })
  const [volume, setVolume] = useState<number>(() => {
    if (typeof window === 'undefined') return DEFAULT_VOLUME
    const v = localStorage.getItem(VOLUME_KEY)
    return v !== null ? Number(v) : DEFAULT_VOLUME
  })
  const previewRef = useRef<HTMLAudioElement | null>(null)
  const [playingFile, setPlayingFile] = useState<string | null>(null)

  useEffect(() => {
    return () => {
      previewRef.current?.pause()
    }
  }, [])

  function stopPreview() {
    if (previewRef.current) {
      previewRef.current.pause()
      previewRef.current.currentTime = 0
      previewRef.current = null
    }
    setPlayingFile(null)
  }

  function previewSound(file: string) {
    try {
      stopPreview()
      const audio = new Audio(`/sound/${file}`)
      audio.volume = volume / 100
      audio.onended = () => setPlayingFile(null)
      previewRef.current = audio
      audio.play()
      setPlayingFile(file)
    } catch {}
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
          <span className="text-[16px] leading-[24px] font-medium ">Daily connection</span>
          <button
            role="switch"
            aria-checked={dailyConnection}
            disabled
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#D2AF9C]/30 cursor-not-allowed opacity-50"
          >
            <span className="inline-block h-4 w-4 translate-x-1 rounded-full bg-white shadow transition" />
          </button>
        </div>

        {/* Help & Support */}
        <button
          onClick={() => setModal('help')}
          className="flex items-center justify-between p-2"
        >
          <span className="text-[16px] leading-[24px] font-medium">Help &amp; Support</span>
          <ChevronRight />
        </button>

        {/* Language */}
        <button
          onClick={() => setModal('language')}
          className="flex items-center justify-between p-2"
        >
          <span className="text-[16px] leading-[24px] font-medium">Language</span>
          <div className="flex items-center gap-2">
            <span className="text-xs">{language}</span>
            <ChevronRight />
          </div>
        </button>

        {/* Timer sound */}
        <button
          onClick={() => setModal('timer_sound')}
          className="flex items-center justify-between p-2"
        >
          <span className="text-[16px] leading-[24px] font-medium">Timer sound</span>
          <ChevronRight />
        </button>

        {/* Log out */}
        <button
          onClick={handleLogout}
          className="flex items-center justify-between p-2 text-left"
        >
          <span className="text-[16px] leading-[24px] font-medium">Log out</span>
          <LogoutIcon />
        </button>
      </div>

      {/* Help & Support modal */}
      {modal === 'help' && (
        <BottomModal onClose={() => setModal(null)}>
          <h2 className="text-[20px] leading-[24px] font-semibold mb-6">Help &amp; Support</h2>
          <p className="text-[16px] leading-[24px] text-[#D2AF9C] mb-6">
            For help and support, please contact our team via{' '}
            <span>support@connexion.com</span>. We&apos;re here to assist you anytime.
          </p>
          <a href="mailto:support@connexion.com">
            <Button variant="primary">Contact us</Button>
          </a>
        </BottomModal>
      )}

      {/* Language modal */}
      {modal === 'language' && (
        <BottomModal onClose={() => setModal(null)}>
          <h2 className="text-[20px] leading-[24px] font-semibold mb-6">Language</h2>
          <div className="flex flex-col gap-2 mb-6">
            {(['English', 'Estonian'] as const).map((lang) => (
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
          <Button variant="primary" onClick={() => setModal(null)}>OK</Button>
        </BottomModal>
      )}

      {/* Timer sound modal */}
      {modal === 'timer_sound' && (
        <BottomModal onClose={handleCloseSoundModal}>
          <h2 className="text-[20px] leading-[24px] font-semibold mb-6">Timer sound</h2>
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
              <span className="text-sm font-medium">Volume</span>
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
          <Button variant="primary" onClick={handleSoundOk}>OK</Button>
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
