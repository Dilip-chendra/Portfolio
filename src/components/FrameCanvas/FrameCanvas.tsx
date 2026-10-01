// ─────────────────────────────────────────────
// FrameCanvas — clean implementation
//
// NO blur, NO filters, NO pixelation, NO quality-degrading effects.
//
// Rendering pipeline:
//   1. Canvas buffer = window.innerWidth × window.innerHeight × devicePixelRatio
//   2. CONTAIN mode: full 1280×720 frame fitted inside viewport, centred
//   3. imageSmoothingEnabled=true, imageSmoothingQuality='high' (bicubic)
//   4. Source drawn only after full load (no partial/race draws)
//   5. No CSS filter on canvas element
// ─────────────────────────────────────────────

import { useEffect, useRef } from 'react'
import { FRAME_COUNT } from '@/lib/frameLoader'

interface FrameCanvasProps {
  progress: number
  images: (HTMLImageElement | null)[]
}

const SRC_W = 1280
const SRC_H = 720

/**
 * CONTAIN: fit the full 1280×720 source inside the canvas, centred.
 * No cropping. Remaining space is filled with the canvas background (#0a0a0a).
 */
function getContainRect(canvasW: number, canvasH: number) {
  // Pristine contain fit: always show the entire 1280x720 scene without cropping
  const scale = Math.min(canvasW / SRC_W, canvasH / SRC_H)
  const dw = Math.round(SRC_W * scale)
  const dh = Math.round(SRC_H * scale)
  const dx = Math.round((canvasW - dw) / 2)
  // On portrait mobile (aspect ratio < 0.9), position between top narrative whisper and bottom console
  const dy = canvasW / canvasH < 0.9
    ? Math.round((canvasH - dh) * 0.36)
    : Math.round((canvasH - dh) / 2)
  return { dx, dy, dw, dh }
}

/** Find the nearest decoded frame to the requested index. */
function findBestFrame(
  target: number,
  images: (HTMLImageElement | null)[],
): HTMLImageElement | null {
  // Exact match
  if (images[target]) return images[target]
  // Search outward from target
  for (let d = 1; d <= 30; d++) {
    if (target - d >= 0 && images[target - d]) return images[target - d]
    if (target + d < FRAME_COUNT && images[target + d]) return images[target + d]
  }
  return null
}

export function FrameCanvas({ progress, images }: FrameCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const progressRef = useRef(progress)
  const imagesRef = useRef(images)

  useEffect(() => {
    progressRef.current = progress
    imagesRef.current = images
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // alpha:false = faster compositing, black default background
    const ctx = canvas.getContext('2d', { alpha: false })
    if (!ctx) return

    let physW = 0
    let physH = 0
    let rafId: number
    let lastDrawnImg: HTMLImageElement | null = null

    // ── Sync canvas buffer to viewport × DPR ────────────────────────────────
    // Always use window.innerWidth/Height — most reliable source.
    function syncSize(): boolean {
      const dpr = window.devicePixelRatio || 1
      const pw = Math.round(window.innerWidth * dpr)
      const ph = Math.round(window.innerHeight * dpr)
      if (pw === physW && ph === physH) return false
      canvas!.width = pw
      canvas!.height = ph
      physW = pw
      physH = ph
      return true // buffer changed — caller must redraw
    }

    // ── Draw a single frame ──────────────────────────────────────────────────
    let lastDrawnProgress = -1

    function drawFrame(img: HTMLImageElement, force: boolean, currentProgress: number) {
      const progressDiff = Math.abs(currentProgress - lastDrawnProgress)
      if (img === lastDrawnImg && !force && progressDiff < 0.005) return
      lastDrawnImg = img
      lastDrawnProgress = currentProgress

      const { dx, dy, dw, dh } = getContainRect(physW, physH)

      // Clear bars (areas outside the frame rectangle) to background colour.
      // Only needed when canvas was resized or frame changed aspect ratio.
      if (force) {
        ctx!.fillStyle = '#0a0a0a'
        ctx!.fillRect(0, 0, physW, physH)
      }

      // High-quality bicubic resampling.
      // NEVER disabled. This is the only quality setting applied.
      ctx!.imageSmoothingEnabled = true
      ctx!.imageSmoothingQuality = 'high'

      // Draw the full source image into the contain rectangle.
      // No crop, no distortion, no additional filters.
      ctx!.drawImage(img, 0, 0, SRC_W, SRC_H, dx, dy, dw, dh)
    }

    // ── RAF render loop ──────────────────────────────────────────────────────
    function render() {
      const resized = syncSize()

      const target = Math.min(
        Math.round(progressRef.current * (FRAME_COUNT - 1)),
        FRAME_COUNT - 1,
      )

      const img = findBestFrame(target, imagesRef.current)
      if (img) drawFrame(img, resized, progressRef.current)

      rafId = requestAnimationFrame(render)
    }

    function onResize() {
      physW = 0 // force syncSize to re-read dimensions on next tick
    }

    // Initial size sync then start loop
    syncSize()
    window.addEventListener('resize', onResize)
    rafId = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        display: 'block',
        backgroundColor: '#0a0a0a',
        // NO filter. NO blur. NO saturate. NO pixelated. NO crisp-edges.
        // Canvas must render the source frame as cleanly as possible.
      }}
    />
  )
}
