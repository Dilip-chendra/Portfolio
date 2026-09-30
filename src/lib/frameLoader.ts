// ─────────────────────────────────────────────
// Frame Loader
//
// Responsible for:
// - Generating frame URLs from padded indices
// - Loading individual frames as HTMLImageElement
// - Batch-loading with individual onLoaded callbacks
//
// The source frames live at:
//   /frames/ezgif-frame-NNN.jpg  (served by vite.config.ts middleware)
//
// Frame indices are 0-based internally; filenames are 1-based, 3-digit padded.
// ─────────────────────────────────────────────

export const FRAME_COUNT = 240
// Load all 240 frames cleanly — on localhost (~28MB) this loads in under 1s
export const CRITICAL_FRAME_COUNT = 240

/**
 * Convert a 0-based frame index to the URL served by the dev middleware.
 * e.g. 0 → "/frames/ezgif-frame-001.jpg"
 *      149 → "/frames/ezgif-frame-150.jpg"
 */
export function getFrameUrl(index: number): string {
  const n = index + 1
  const padded = n.toString().padStart(3, '0')
  return `/frames-v2/ezgif-frame-${padded}.jpg?v=2`
}

/**
 * Load a single frame image. Returns a resolved Promise<HTMLImageElement>
 * or rejects if the network request fails.
 */
export function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.decoding = 'async'
    img.onload = () => {
      // Resolve IMMEDIATELY — frame is available to canvas.drawImage() now.
      // Start decode as a background hint (browser may pre-decode for future draws).
      // Do NOT await decode: it would block frames from entering the cache,
      // causing findBestFrame to return null for most scroll positions.
      resolve(img)
      img.decode().catch(() => {}) // best-effort background decode, ignore failures
    }
    img.onerror = () => reject(new Error(`Frame load failed: ${url}`))
    img.src = url
  })
}

/**
 * Load a batch of frame indices into the shared cache.
 * Skips already-loaded indices.
 * Calls onLoaded(index) immediately for each frame that completes.
 * Swallows individual errors gracefully (failed frames remain null).
 */
export async function loadFrameBatch(
  indices: number[],
  cache: (HTMLImageElement | null)[],
  onLoaded: (index: number) => void,
): Promise<void> {
  await Promise.allSettled(
    indices.map(async (i) => {
      if (cache[i] !== null && cache[i] !== undefined) return // already loaded
      try {
        const img = await loadImage(getFrameUrl(i))
        cache[i] = img
        onLoaded(i)
      } catch {
        // Leave slot as null; the renderer will skip gracefully
      }
    }),
  )
}
