// ─────────────────────────────────────────────
// useFrameSequence
//
// Loads all 300 frames before signalling ready for playback.
// On localhost the full 8.24MB loads in ~200-400ms.
// This guarantees every frame is in the cache before the user
// can scroll — no missing frames, no frame jumping.
//
// The images array is a MUTABLE REF (not state) — the RAF render loop
// always sees the latest loaded images without triggering re-renders.
// ─────────────────────────────────────────────

import { useEffect, useRef, useState } from 'react'
import {
  FRAME_COUNT,
  CRITICAL_FRAME_COUNT,
  loadFrameBatch,
} from '@/lib/frameLoader'
import type { FrameSequenceState } from '@/types'

export function useFrameSequence(): FrameSequenceState {
  const [loadedCount, setLoadedCount] = useState(0)
  const [isReadyForPlayback, setIsReadyForPlayback] = useState(false)

  const imagesRef = useRef<(HTMLImageElement | null)[]>(
    new Array(FRAME_COUNT).fill(null),
  )
  const loadingStarted = useRef(false)
  const isReadyRef = useRef(false)

  useEffect(() => {
    if (loadingStarted.current) return
    loadingStarted.current = true

    const cache = imagesRef.current
    let totalLoaded = 0

    // Batch state updates into one RAF to avoid 300 separate re-renders
    let pendingUpdate = false
    function scheduleUpdate() {
      if (pendingUpdate) return
      pendingUpdate = true
      requestAnimationFrame(() => {
        pendingUpdate = false
        setLoadedCount(totalLoaded)

        if (totalLoaded >= CRITICAL_FRAME_COUNT && !isReadyRef.current) {
          isReadyRef.current = true
          setIsReadyForPlayback(true)
        }
      })
    }

    function onFrameLoaded(_index: number) {
      totalLoaded++
      scheduleUpdate()
    }

    // Load all 300 frames. The browser manages its connection queue
    // (6 parallel). Each frame enters the cache immediately on download.
    const allIndices = Array.from({ length: FRAME_COUNT }, (_, i) => i)
    loadFrameBatch(allIndices, cache, onFrameLoaded)
  }, [])

  return {
    images: imagesRef.current,
    loadedCount,
    totalFrames: FRAME_COUNT,
    isReadyForPlayback,
    loadingProgress: loadedCount / FRAME_COUNT,
  }
}
