'use client'

import { useRef, useEffect } from 'react'

const ITEM_HEIGHT = 48

type WheelPickerProps = {
  options: string[]
  value: string
  onChange: (value: string) => void
  formatLabel?: (value: string) => string
}

export function WheelPicker({ options, value, onChange, formatLabel }: WheelPickerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isScrolling = useRef(false)
  const rafRef = useRef<number | null>(null)

  const selectedIndex = options.indexOf(value)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    // Cancel any pending frame from a previous render
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)

    // Defer scroll until after the browser has painted and the scroll
    // container has its full layout height. Without rAF the container
    // may have height 0 at Effect time on client-side navigation, causing
    // scrollTop to be silently ignored or reset by CSS snap.
    rafRef.current = requestAnimationFrame(() => {
      isScrolling.current = true
      el.scrollTop = selectedIndex * ITEM_HEIGHT
      // Release the guard on the next frame so snap-settle doesn't
      // trigger a spurious onChange.
      rafRef.current = requestAnimationFrame(() => {
        isScrolling.current = false
        rafRef.current = null
      })
    })

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }
  // Run on mount and whenever the selected index or option list changes.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex, options])

  function handleScroll() {
    if (isScrolling.current) return
    const el = containerRef.current
    if (!el) return
    const idx = Math.round(el.scrollTop / ITEM_HEIGHT)
    const clamped = Math.max(0, Math.min(options.length - 1, idx))
    if (options[clamped] !== value) {
      onChange(options[clamped])
    }
  }

  function handleClick(opt: string) {
    onChange(opt)
  }

  return (
    <div className="relative flex flex-col items-center" style={{ width: 90 }}>
      {/* Highlight band for selected row */}
      <div
        className="pointer-events-none absolute inset-x-0 rounded-lg z-10"
        style={{
          top: '50%',
          transform: 'translateY(-50%)',
          height: ITEM_HEIGHT,
          background: 'rgba(210,175,156,0.12)',
          border: '1px solid rgba(210,175,156,0.25)',
        }}
      />

      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="overflow-y-scroll no-scrollbar w-full"
        style={{
          height: ITEM_HEIGHT * 5,
          scrollSnapType: 'y mandatory',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {/* Padding so first/last options can be centered */}
        <div style={{ height: ITEM_HEIGHT * 2 }} />

        {options.map((opt) => (
          <div
            key={opt}
            onClick={() => handleClick(opt)}
            style={{
              height: ITEM_HEIGHT,
              scrollSnapAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: 18,
              fontWeight: opt === value ? 600 : 400,
              color: opt === value ? '#D2AF9C' : 'rgba(210,175,156,0.4)',
              transition: 'color 0.15s, font-weight 0.15s',
              userSelect: 'none',
            }}
          >
            {formatLabel ? formatLabel(opt) : opt}
          </div>
        ))}

        <div style={{ height: ITEM_HEIGHT * 2 }} />
      </div>
    </div>
  )
}
