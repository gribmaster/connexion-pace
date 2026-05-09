'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/Button'

type Modal = 'help' | 'language' | null

export function ProfileClient() {
  const router = useRouter()
  const [modal, setModal] = useState<Modal>(null)
  const [language, setLanguage] = useState('English')
  const [dailyConnection, setDailyConnection] = useState(false)

  async function handleLogout() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <>
      {/* Settings section */}
      <div className="flex flex-col gap-0 rounded-3xl bg-white shadow-sm overflow-hidden">
        {/* Daily connection */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#D2AF9C]/20">
          <span className="text-sm font-medium text-[#1a0a0e]">Daily connection</span>
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
          className="flex items-center justify-between px-5 py-4 border-b border-[#D2AF9C]/20 text-left hover:bg-[#f9f5f3] transition-colors"
        >
          <span className="text-sm font-medium text-[#1a0a0e]">Help &amp; Support</span>
          <ChevronRight />
        </button>

        {/* Language */}
        <button
          onClick={() => setModal('language')}
          className="flex items-center justify-between px-5 py-4 border-b border-[#D2AF9C]/20 text-left hover:bg-[#f9f5f3] transition-colors"
        >
          <span className="text-sm font-medium text-[#1a0a0e]">Language</span>
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#5a3a3a]">{language}</span>
            <ChevronRight />
          </div>
        </button>

        {/* Log out */}
        <button
          onClick={handleLogout}
          className="flex items-center px-5 py-4 text-left hover:bg-[#fff0f0] transition-colors"
        >
          <span className="text-sm font-medium text-[#860119]">Log out</span>
        </button>
      </div>

      {/* Help & Support modal */}
      {modal === 'help' && (
        <BottomModal onClose={() => setModal(null)}>
          <h2 className="text-base font-semibold text-[#1a0a0e] mb-3">Help &amp; Support</h2>
          <p className="text-sm text-[#5a3a3a] mb-6">
            For help and support, please contact our team via{' '}
            <span className="text-[#860119]">support@connexion.com</span>. We&apos;re here to assist you anytime.
          </p>
          <a href="mailto:support@connexion.com">
            <Button variant="primary">Contact us</Button>
          </a>
        </BottomModal>
      )}

      {/* Language modal */}
      {modal === 'language' && (
        <BottomModal onClose={() => setModal(null)}>
          <h2 className="text-base font-semibold text-[#1a0a0e] mb-4">Language</h2>
          <div className="flex flex-col gap-2 mb-6">
            {(['English', 'Estonian'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`flex items-center justify-between rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
                  language === lang
                    ? 'border-[#860119] bg-[#860119]/5 text-[#860119]'
                    : 'border-[#D2AF9C]/30 text-[#1a0a0e] hover:bg-[#f9f5f3]'
                }`}
              >
                {lang}
                {language === lang && <CheckIcon />}
              </button>
            ))}
          </div>
          <Button variant="primary" onClick={() => setModal(null)}>OK</Button>
        </BottomModal>
      )}
    </>
  )
}

function BottomModal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-t-3xl bg-white px-6 pt-6 pb-10 shadow-xl">
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
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#D2AF9C]">
      <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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
