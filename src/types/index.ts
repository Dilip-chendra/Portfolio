// ─────────────────────────────────────────────
// Core domain types for the portfolio
// ─────────────────────────────────────────────

/**
 * A single narrative copy beat synchronized to the frame sequence.
 * progressStart → progressPeak: fade in
 * progressPeak → progressFade: fully visible
 * progressFade → progressEnd: fade out
 * All values are normalized [0, 1].
 */
export interface StoryBeat {
  id: string
  progressStart: number
  progressPeak: number
  progressFade: number
  progressEnd: number
  eyebrow?: string
  headline?: string
  secondary?: string
  align?: 'left' | 'right' | 'center'
  verticalPosition?: 'top' | 'middle' | 'bottom'
}

/**
 * Computed animation state for a beat at a given scroll progress.
 */
export interface BeatAnimationState {
  beat: StoryBeat
  opacity: number
  translateY: number
}

/**
 * Live state of the frame sequence loading pipeline.
 */
export interface FrameSequenceState {
  /** Mutable array — slots are filled progressively as images load. */
  images: (HTMLImageElement | null)[]
  loadedCount: number
  totalFrames: number
  /** True once enough critical frames are loaded to begin playback. */
  isReadyForPlayback: boolean
  /** Normalized loading progress [0, 1]. */
  loadingProgress: number
}
