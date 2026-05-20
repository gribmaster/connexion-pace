const SOUND_FILES = [
  '/sound/beep1.mp3',
  '/sound/beep2.mp3',
  '/sound/beep3.mp3',
  '/sound/beep4.mp3',
  '/sound/beep5.mp3',
  '/sound/beep6.mp3',
]

const cache = new Map<string, HTMLAudioElement>()

function getOrCreate(src: string): HTMLAudioElement {
  let audio = cache.get(src)
  if (!audio) {
    audio = new Audio(src)
    audio.preload = 'auto'
    audio.load()
    cache.set(src, audio)
  }
  return audio
}

export function getTimerSoundAudio(src: string): HTMLAudioElement | undefined {
  if (typeof window === 'undefined') return undefined
  return getOrCreate(src)
}

export function preloadTimerSounds(): void {
  if (typeof window === 'undefined') return
  for (const src of SOUND_FILES) {
    getOrCreate(src)
  }
}

export function playTimerSound(src: string, volume: number): void {
  if (typeof window === 'undefined') return
  try {
    const audio = getOrCreate(src)
    audio.volume = Math.max(0, Math.min(1, volume))
    audio.currentTime = 0
    const result = audio.play()
    if (result instanceof Promise) {
      result.catch(() => {})
    }
  } catch {}
}

export function stopTimerSound(src: string): void {
  if (typeof window === 'undefined') return
  const audio = cache.get(src)
  if (!audio) return
  try {
    audio.pause()
    audio.currentTime = 0
  } catch {}
}

export function stopAllTimerSounds(): void {
  if (typeof window === 'undefined') return
  for (const audio of cache.values()) {
    try {
      audio.pause()
      audio.currentTime = 0
    } catch {}
  }
}

// Attempts a silent unlock of audio context on first user interaction (iOS/mobile).
// Call this once from a user-gesture handler before the real play.
export function unlockAudio(): void {
  if (typeof window === 'undefined') return
  const first = cache.values().next().value
  if (!first) return
  const prev = first.volume
  first.volume = 0
  const result = first.play()
  if (result instanceof Promise) {
    result
      .then(() => { first.pause(); first.currentTime = 0; first.volume = prev })
      .catch(() => { first.volume = prev })
  } else {
    first.pause()
    first.currentTime = 0
    first.volume = prev
  }
}
