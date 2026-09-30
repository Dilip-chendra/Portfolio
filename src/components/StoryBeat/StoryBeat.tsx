// ─────────────────────────────────────────────
// StoryBeat
//
// Renders a single narrative beat as an absolutely positioned overlay.
// Opacity and position are driven by scroll progress — no CSS transitions
// are needed because the easing happens in calculateBeatOpacity().
//
// Layout is determined by beat.align and beat.verticalPosition.
// Text shadows ensure readability over the frame sequence.
// ─────────────────────────────────────────────

import type { CSSProperties } from 'react'
import type { BeatAnimationState } from '@/types'

interface StoryBeatProps {
  state: BeatAnimationState
}

const H_PAD = 'clamp(24px, 5.5vw, 80px)'

export function StoryBeatOverlay({ state }: StoryBeatProps) {
  const { beat, opacity, translateY } = state

  // Skip render entirely when invisible — no DOM node overhead
  if (opacity < 0.0005) return null

  const { align = 'left', verticalPosition = 'bottom' } = beat

  // ── Horizontal positioning ────────────────────
  const horizontal: CSSProperties =
    align === 'left'
      ? { left: H_PAD, right: 'clamp(24px, 32%, 480px)' }
      : align === 'right'
        ? { right: H_PAD, left: 'clamp(24px, 32%, 480px)', textAlign: 'right' }
        : { left: H_PAD, right: H_PAD, textAlign: 'center' }

  // ── Vertical positioning + translate ─────────
  let vertical: CSSProperties
  if (verticalPosition === 'bottom') {
    vertical = {
      bottom: 'clamp(52px, 9vh, 108px)',
      transform: `translateY(${translateY}px)`,
    }
  } else if (verticalPosition === 'top') {
    vertical = {
      top: 'clamp(80px, 11vh, 130px)',
      transform: `translateY(${-translateY}px)`,
    }
  } else {
    // middle — center vertically with transform
    vertical = {
      top: '50%',
      transform: `translateY(calc(-50% + ${translateY}px))`,
    }
  }

  return (
    <div
      aria-hidden={opacity < 0.1}
      style={{
        position: 'absolute',
        zIndex: 20,
        pointerEvents: 'none',
        opacity,
        ...horizontal,
        ...vertical,
      }}
    >
      {/* Eyebrow label (e.g. "02:13 AM") */}
      {beat.eyebrow && (
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '10px',
            fontWeight: 400,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: '#8a8a86',
            margin: '0 0 18px',
            textShadow: '0 1px 8px rgba(0,0,0,0.8)',
          }}
        >
          {beat.eyebrow}
        </p>
      )}

      {/* Main headline */}
      {beat.headline && (
        <h2
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(1.85rem, 4.8vw, 5.2rem)',
            fontWeight: 200,
            letterSpacing: '-0.035em',
            lineHeight: 0.98,
            color: '#f5f5f0',
            margin: beat.secondary ? '0 0 22px' : '0',
            whiteSpace: 'pre-line',
            textShadow:
              '0 2px 24px rgba(0,0,0,0.6), 0 1px 4px rgba(0,0,0,0.9)',
          }}
        >
          {beat.headline}
        </h2>
      )}

      {/* Secondary / descriptor line */}
      {beat.secondary && (
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(0.72rem, 1.2vw, 0.88rem)',
            fontWeight: 400,
            letterSpacing: '0.025em',
            lineHeight: 1.65,
            color: '#8a8a86',
            margin: 0,
            whiteSpace: 'pre-line',
            textShadow: '0 1px 8px rgba(0,0,0,0.8)',
          }}
        >
          {beat.secondary}
        </p>
      )}
    </div>
  )
}
