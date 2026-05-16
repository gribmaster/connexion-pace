'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>
}

const DISMISSED_KEY = 'connexion_pwa_install_dismissed_at'
const DISMISS_TTL_MS = 7 * 24 * 60 * 60 * 1000 // 7 days

function isStandalone(): boolean {
  if (typeof window === 'undefined') return false
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    ('standalone' in navigator && (navigator as { standalone?: boolean }).standalone === true)
  )
}

function isIosSafari(): boolean {
  if (typeof window === 'undefined') return false
  const ua = window.navigator.userAgent
  const isIos = /iphone|ipad|ipod/i.test(ua)
  // Safari on iOS does not have 'CriOS' or 'FxiOS'
  const isSafari = /safari/i.test(ua) && !/crios|fxios|opios|edgios/i.test(ua)
  return isIos && isSafari
}

function wasDismissedRecently(): boolean {
  try {
    const raw = localStorage.getItem(DISMISSED_KEY)
    if (!raw) return false
    return Date.now() - Number(raw) < DISMISS_TTL_MS
  } catch {
    return false
  }
}

function saveDismissal() {
  try {
    localStorage.setItem(DISMISSED_KEY, String(Date.now()))
  } catch {}
}

function shouldShow(pathname: string): { ios: boolean; canListen: boolean } {
  if (pathname === '/auth/callback') return { ios: false, canListen: false }
  if (isStandalone()) return { ios: false, canListen: false }
  if (wasDismissedRecently()) return { ios: false, canListen: false }
  if (isIosSafari()) return { ios: true, canListen: false }
  return { ios: false, canListen: true }
}

export default function PwaInstallPrompt() {
  const pathname = usePathname()
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showIosModal, setShowIosModal] = useState(false)
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  const { ios, canListen } = shouldShow(pathname)
  const showIosBanner = ios && !dismissed

  useEffect(() => {
    if (!canListen) return

    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      setVisible(true)
    }
    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [canListen])

  async function handleInstall() {
    if (!deferredPrompt) return
    await deferredPrompt.prompt()
    await deferredPrompt.userChoice
    setVisible(false)
    setDeferredPrompt(null)
  }

  function handleDismiss() {
    saveDismissal()
    setVisible(false)
    setDeferredPrompt(null)
  }

  function handleIosDismiss() {
    saveDismissal()
    setDismissed(true)
    setShowIosModal(false)
  }

  // ── Chromium banner ───────────────────────────────────────────────
  if (visible && deferredPrompt) {
    return (
      <div
        role="region"
        aria-label="Install app"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9000,
          paddingBottom: 'env(safe-area-inset-bottom)',
          background: '#1a1412',
          borderTop: '1px solid #3a2e28',
        }}
      >
        <div style={{ padding: '16px', maxWidth: 480, margin: '0 auto' }}>
          <p style={{ color: '#D2AF9C', fontWeight: 600, fontSize: 14, marginBottom: 4 }}>
            Install Connexion Space
          </p>
          <p style={{ color: '#9a8070', fontSize: 13, marginBottom: 14, lineHeight: 1.4 }}>
            Add the app to your home screen for a better full-screen experience.
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            <button
              onClick={handleInstall}
              style={{
                flex: 1,
                padding: '10px 0',
                borderRadius: 10,
                background: '#D2AF9C',
                color: '#000',
                fontWeight: 600,
                fontSize: 14,
                cursor: 'pointer',
              }}
            >
              Install app
            </button>
            <button
              onClick={handleDismiss}
              style={{
                flex: 1,
                padding: '10px 0',
                borderRadius: 10,
                background: 'transparent',
                border: '1px solid #3a2e28',
                color: '#9a8070',
                fontSize: 14,
                cursor: 'pointer',
              }}
            >
              Not now
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ── iOS banner + modal ────────────────────────────────────────────
  if (showIosBanner) {
    return (
      <>
        {/* Collapsed banner */}
        {!showIosModal && (
          <div
            role="region"
            aria-label="Install app"
            style={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 9000,
              paddingBottom: 'env(safe-area-inset-bottom)',
              background: '#1a1412',
              borderTop: '1px solid #3a2e28',
            }}
          >
            <div style={{ padding: '16px', maxWidth: 480, margin: '0 auto' }}>
              <p style={{ color: '#D2AF9C', fontWeight: 600, fontSize: 14, marginBottom: 4 }}>
                Install Connexion Space
              </p>
              <p style={{ color: '#9a8070', fontSize: 13, marginBottom: 14, lineHeight: 1.4 }}>
                Add the app to your home screen for a better full-screen experience.
              </p>
              <div style={{ display: 'flex', gap: 10 }}>
                <button
                  onClick={() => setShowIosModal(true)}
                  style={{
                    flex: 1,
                    padding: '10px 0',
                    borderRadius: 10,
                    background: '#D2AF9C',
                    color: '#000',
                    fontWeight: 600,
                    fontSize: 14,
                    cursor: 'pointer',
                  }}
                >
                  How to install
                </button>
                <button
                  onClick={handleIosDismiss}
                  style={{
                    flex: 1,
                    padding: '10px 0',
                    borderRadius: 10,
                    background: 'transparent',
                    border: '1px solid #3a2e28',
                    color: '#9a8070',
                    fontSize: 14,
                    cursor: 'pointer',
                  }}
                >
                  Not now
                </button>
              </div>
            </div>
          </div>
        )}

        {/* iOS instructions modal */}
        {showIosModal && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9100,
              background: 'rgba(0,0,0,0.75)',
              display: 'flex',
              alignItems: 'flex-end',
            }}
          >
            <div
              style={{
                width: '100%',
                background: '#1a1412',
                borderRadius: '16px 16px 0 0',
                padding: '24px 20px',
                paddingBottom: 'calc(24px + env(safe-area-inset-bottom))',
                maxWidth: 480,
                margin: '0 auto',
              }}
            >
              <p style={{ color: '#D2AF9C', fontWeight: 600, fontSize: 16, marginBottom: 16 }}>
                Install on iPhone
              </p>
              <ol style={{ listStyle: 'decimal', paddingLeft: 20, marginBottom: 24 }}>
                {[
                  'Tap the Share button (rectangle with arrow) in Safari',
                  'Scroll down and tap Add to Home Screen',
                  'Tap Add in the top-right corner',
                ].map((step, i) => (
                  <li
                    key={i}
                    style={{
                      color: '#9a8070',
                      fontSize: 14,
                      lineHeight: 1.5,
                      marginBottom: 10,
                    }}
                  >
                    {step}
                  </li>
                ))}
              </ol>
              <div style={{ display: 'flex', gap: 10 }}>
                <button
                  onClick={handleIosDismiss}
                  style={{
                    flex: 1,
                    padding: '12px 0',
                    borderRadius: 10,
                    background: '#D2AF9C',
                    color: '#000',
                    fontWeight: 600,
                    fontSize: 14,
                    cursor: 'pointer',
                  }}
                >
                  Got it
                </button>
                <button
                  onClick={() => setShowIosModal(false)}
                  style={{
                    flex: 1,
                    padding: '12px 0',
                    borderRadius: 10,
                    background: 'transparent',
                    border: '1px solid #3a2e28',
                    color: '#9a8070',
                    fontSize: 14,
                    cursor: 'pointer',
                  }}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }

  return null
}
