// ─────────────────────────────────────────────
// Story Beats Configuration
//
// Defines the narrative copy synchronized to the 300-frame sequence.
// All progress values are normalized [0, 1].
//
// TUNING GUIDE:
//   - All values in STORY_BEATS can be adjusted after visual inspection
//     without changing any component code.
//   - progressStart: beat begins fading in
//   - progressPeak: beat reaches full opacity (hold starts)
//   - progressFade: beat begins fading out
//   - progressEnd: beat is fully invisible
//   - Overlapping progressEnd/progressStart of adjacent beats is intentional
//     for smooth cross-dissolve transitions.
// ─────────────────────────────────────────────

import type { StoryBeat, BeatAnimationState } from '@/types'

export const STORY_BEATS: StoryBeat[] = [
  // ── BEAT 1: The night begins ──────────────────
  {
    id: 'beat-1',
    progressStart: 0.0,
    progressPeak: 0.025,
    progressFade: 0.09,
    progressEnd: 0.13,
    eyebrow: '02:13 AM',
    headline: "I DIDN'T START BY\nBUILDING AI.",
    secondary: 'I STARTED BY TRYING\nTO UNDERSTAND IT.',
    align: 'left',
    verticalPosition: 'bottom',
  },

  // ── BEAT 2: Immersion ─────────────────────────
  {
    id: 'beat-2',
    progressStart: 0.12,
    progressPeak: 0.17,
    progressFade: 0.23,
    progressEnd: 0.28,
    headline: 'LEARN.',
    align: 'left',
    verticalPosition: 'bottom',
  },

  // ── BEAT 3: The struggle ─────────────────────
  {
    id: 'beat-3',
    progressStart: 0.28,
    progressPeak: 0.33,
    progressFade: 0.40,
    progressEnd: 0.45,
    headline: 'BREAK IT.\nUNDERSTAND IT.\nTRY AGAIN.',
    align: 'left',
    verticalPosition: 'bottom',
  },

  // ── BEAT 4: The turning point ─────────────────
  {
    id: 'beat-4',
    progressStart: 0.45,
    progressPeak: 0.49,
    progressFade: 0.58,
    progressEnd: 0.65,
    headline: 'THEN I STARTED\nBUILDING.',
    align: 'right',
    verticalPosition: 'bottom',
  },

  // ── BEAT 5: Systems thinking ──────────────────
  {
    id: 'beat-5',
    progressStart: 0.65,
    progressPeak: 0.69,
    progressFade: 0.76,
    progressEnd: 0.82,
    headline: 'FROM QUESTIONS\nTO SYSTEMS.',
    align: 'right',
    verticalPosition: 'bottom',
  },

  // ── BEAT 6: Breakthrough ─────────────────────
  {
    id: 'beat-6',
    progressStart: 0.82,
    progressPeak: 0.85,
    progressFade: 0.90,
    progressEnd: 0.94,
    headline: 'MAKE IT WORK.',
    align: 'center',
    verticalPosition: 'middle',
  },

  // ── BEAT 7: Dawn / Identity statement ─────────
  {
    id: 'beat-7',
    progressStart: 0.90,
    progressPeak: 0.93,
    progressFade: 0.97,
    progressEnd: 1.0,
    headline: 'NOW I BUILD AI SYSTEMS\nTHAT REASON, CONNECT\n& EXECUTE.',
    secondary: 'Agentic AI Engineer\nLangGraph · MCP · RAG · Python · FastAPI',
    align: 'left',
    verticalPosition: 'bottom',
  },
]

// ─────────────────────────────────────────────
// Animation math
// ─────────────────────────────────────────────

function clamp(v: number, lo: number, hi: number): number {
  return Math.min(Math.max(v, lo), hi)
}

/** Smooth ease in/out — more cinematic than linear */
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

/**
 * Compute the opacity [0, 1] for a beat at a given scroll progress.
 * Envelope: fade-in → hold → fade-out.
 */
export function calculateBeatOpacity(progress: number, beat: StoryBeat): number {
  if (progress <= beat.progressStart || progress >= beat.progressEnd) return 0

  // Hold phase
  if (progress >= beat.progressPeak && progress <= beat.progressFade) return 1

  // Fade in
  if (progress < beat.progressPeak) {
    const span = beat.progressPeak - beat.progressStart
    if (span <= 0) return 1
    return easeInOutCubic(clamp((progress - beat.progressStart) / span, 0, 1))
  }

  // Fade out
  const span = beat.progressEnd - beat.progressFade
  if (span <= 0) return 0
  return 1 - easeInOutCubic(clamp((progress - beat.progressFade) / span, 0, 1))
}

/**
 * Return animation states for all beats that have non-zero opacity at this progress.
 * The translateY creates a subtle lift-into-view effect.
 */
export function getBeatAnimations(progress: number): BeatAnimationState[] {
  const results: BeatAnimationState[] = []

  for (const beat of STORY_BEATS) {
    const opacity = calculateBeatOpacity(progress, beat)
    if (opacity < 0.001) continue

    // Text lifts upward as it appears (0→16px offset when fully invisible)
    const translateY = (1 - opacity) * 18

    results.push({ beat, opacity, translateY })
  }

  return results
}
