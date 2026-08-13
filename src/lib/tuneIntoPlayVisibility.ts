export type TuneIntoPlayMode = 'intuitive' | 'journey' | 'surprise'

const STORAGE_KEYS: Record<TuneIntoPlayMode, string> = {
  intuitive: 'connexion_tune_into_play_intuitive_last_shown',
  journey: 'connexion_tune_into_play_journey_last_shown',
  surprise: 'connexion_tune_into_play_surprise_last_shown',
}

const SUPPRESS_MS = 365 * 24 * 60 * 60 * 1000

function readTimestamp(mode: TuneIntoPlayMode): number | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(STORAGE_KEYS[mode])
    if (!raw) return null
    const parsed = Number(raw)
    if (!Number.isFinite(parsed)) return null
    return parsed
  } catch {
    return null
  }
}

export function shouldShowTuneIntoPlay(mode: TuneIntoPlayMode): boolean {
  const lastShown = readTimestamp(mode)
  if (lastShown === null) return true
  return Date.now() - lastShown >= SUPPRESS_MS
}

export function markTuneIntoPlayShown(mode: TuneIntoPlayMode): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(STORAGE_KEYS[mode], String(Date.now()))
  } catch {
    // ignore write failures (e.g. private browsing storage limits)
  }
}
