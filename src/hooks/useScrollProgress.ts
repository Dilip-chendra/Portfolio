// ─────────────────────────────────────────────
// useScrollProgress
//
// Tracks how far the user has scrolled through a container element
// and returns a normalized progress value [0, 1].
//
// Uses RAF-throttled scroll events for performance.
// The ref may point to any scrolling container (e.g. the hero section).
// ─────────────────────────────────────────────

import { useEffect, useRef, useState } from 'react'

export function useScrollProgress(
  containerRef: React.RefObject<HTMLElement | null>,
): number {
  const [progress, setProgress] = useState(0)
  const rafId = useRef<number | null>(null)
  const progressRef = useRef(0)

  useEffect(() => {
    function tick() {
      rafId.current = null
      const container = containerRef.current
      if (!container) return

      const rect = container.getBoundingClientRect()
      const containerHeight = container.offsetHeight
      const viewportHeight = window.innerHeight
      const scrollableDistance = containerHeight - viewportHeight

      if (scrollableDistance <= 0) return

      // rect.top is 0 at start, goes negative as user scrolls down
      const scrolled = -rect.top
      const next = Math.min(Math.max(scrolled / scrollableDistance, 0), 1)

      if (Math.abs(next - progressRef.current) > 0.00005) {
        progressRef.current = next
        setProgress(next)
      }
    }

    function onScroll() {
      // Debounce to one RAF per scroll event burst
      if (rafId.current !== null) return
      rafId.current = requestAnimationFrame(tick)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    tick() // Initialize on mount

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId.current !== null) cancelAnimationFrame(rafId.current)
    }
  }, [containerRef])

  return progress
}
