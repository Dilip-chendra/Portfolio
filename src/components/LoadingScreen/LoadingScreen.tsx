// ─────────────────────────────────────────────
// LoadingScreen — Cinematic White & Gold Typewriter Preloader
//
// Features:
//   - High-contrast, luxurious White & Radiant Gold palette
//   - Precise typewriter effect typing "M. DILIPCHENDRA" and "AGENTIC AI ENGINEER"
//   - Glowing White-Gold progress bar with trailing particle
//   - Real-time terminal initialization status log
//   - High visibility against deep obsidian radial backdrop
// ─────────────────────────────────────────────

import { useEffect, useState } from 'react'

interface LoadingScreenProps {
  progress: number // 0–1, reflects real loading state
  isReady: boolean
}

const NAME_TARGET = 'M. DILIPCHENDRA'
const ROLE_TARGET = 'AGENTIC AI ENGINEER'

export function LoadingScreen({ progress, isReady }: LoadingScreenProps) {
  const [phase, setPhase] = useState<'loading' | 'fading' | 'done'>('loading')
  const [typedName, setTypedName] = useState('')
  const [typedRole, setTypedRole] = useState('')
  const [typingComplete, setTypingComplete] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)
  const [displayPct, setDisplayPct] = useState(0)

  // 1. Blinking terminal cursor
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorVisible((v) => !v)
    }, 450)
    return () => clearInterval(blinkInterval)
  }, [])

  // 2. Typewriter animation sequence
  useEffect(() => {
    let nameIdx = 0
    let roleIdx = 0
    let roleStarted = false

    const interval = setInterval(() => {
      if (nameIdx < NAME_TARGET.length) {
        nameIdx++
        setTypedName(NAME_TARGET.slice(0, nameIdx))
      } else if (!roleStarted) {
        roleStarted = true
      } else if (roleIdx < ROLE_TARGET.length) {
        roleIdx++
        setTypedRole(ROLE_TARGET.slice(0, roleIdx))
      } else {
        setTypingComplete(true)
        clearInterval(interval)
      }
    }, 55)

    return () => clearInterval(interval)
  }, [])

  // 3. Smooth percentage counter progression
  const targetPct = Math.round(progress * 100)
  useEffect(() => {
    const step = setInterval(() => {
      setDisplayPct((prev) => {
        if (prev < targetPct) {
          return Math.min(prev + 2, targetPct)
        }
        if (isReady && typingComplete && prev < 100) {
          return prev + 1
        }
        return prev
      })
    }, 25)
    return () => clearInterval(step)
  }, [targetPct, isReady, typingComplete])

  // 4. Smooth cinematic exit once both assets are ready AND typing is complete
  useEffect(() => {
    if (isReady && typingComplete && phase === 'loading') {
      const exitTimer = setTimeout(() => {
        setPhase('fading')
        setTimeout(() => setPhase('done'), 900)
      }, 500)
      return () => clearTimeout(exitTimer)
    }
  }, [isReady, typingComplete, phase])

  if (phase === 'done') return null

  // Dynamic system status line based on progress
  let statusLog = 'INITIALIZING AGENT RUNTIME KERNEL...'
  if (displayPct > 20 && displayPct <= 45) {
    statusLog = 'MOUNTING LANGGRAPH STATE GRAPH WORKFLOWS...'
  } else if (displayPct > 45 && displayPct <= 70) {
    statusLog = 'ESTABLISHING MODEL CONTEXT PROTOCOL (MCP)...'
  } else if (displayPct > 70 && displayPct < 100) {
    statusLog = 'SYNCHRONIZING 240 CINEMATIC MASTER FRAMES...'
  } else if (displayPct >= 100 || (isReady && typingComplete)) {
    statusLog = 'SYSTEM ARCHITECTURE ONLINE // READY'
  }

  // Name split into Gold "M. " and Pure White "DILIPCHENDRA"
  const goldPrefix = typedName.slice(0, 3)
  const whiteName = typedName.slice(3)

  return (
    <div
      role="status"
      aria-label="Initializing cinematic experience"
      aria-live="polite"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        backgroundColor: '#07080a',
        backgroundImage:
          'radial-gradient(ellipse at 50% 45%, rgba(200, 184, 140, 0.08) 0%, rgba(7, 8, 10, 0.98) 75%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        transition:
          'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: phase === 'fading' ? 0 : 1,
        transform: phase === 'fading' ? 'scale(1.02)' : 'scale(1)',
        pointerEvents: phase === 'fading' ? 'none' : 'all',
        userSelect: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Subtle corner technical coordinate indicators */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '28px',
          left: '32px',
          fontFamily: '"Space Mono", monospace',
          fontSize: '9px',
          letterSpacing: '0.22em',
          color: 'rgba(200, 184, 140, 0.45)',
          textTransform: 'uppercase',
        }}
      >
        + HYD // 17.3850° N, 78.4867° E
      </div>
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '28px',
          right: '32px',
          fontFamily: '"Space Mono", monospace',
          fontSize: '9px',
          letterSpacing: '0.22em',
          color: 'rgba(200, 184, 140, 0.45)',
          textTransform: 'uppercase',
        }}
      >
        FRAME ARCHITECTURE // 240 FPS
      </div>

      {/* Top Eyebrow Badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '5px 14px',
          borderRadius: '9999px',
          backgroundColor: 'rgba(200, 184, 140, 0.09)',
          border: '1px solid rgba(200, 184, 140, 0.35)',
          marginBottom: '26px',
          boxShadow: '0 0 20px rgba(200, 184, 140, 0.12)',
        }}
      >
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: '#e5c378',
            boxShadow: '0 0 10px #e5c378',
          }}
        />
        <span
          style={{
            fontFamily: '"Space Mono", "JetBrains Mono", monospace',
            fontSize: '10px',
            letterSpacing: '0.24em',
            color: '#c8b88c',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          SYSTEM KERNEL // v2.4
        </span>
      </div>

      {/* Primary Headline with Typewriter Animation (Gold + White) */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '48px',
          marginBottom: '8px',
        }}
      >
        <h1
          style={{
            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
            fontSize: 'clamp(24px, 4.5vw, 40px)',
            fontWeight: 700,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            margin: 0,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {/* Radiant Champagne Gold "M. " */}
          <span
            style={{
              color: '#e5c378',
              textShadow: '0 0 24px rgba(229, 195, 120, 0.55)',
            }}
          >
            {goldPrefix}
          </span>
          {/* Luminous Pure White "DILIPCHENDRA" */}
          <span
            style={{
              color: '#ffffff',
              textShadow:
                '0 0 32px rgba(255, 255, 255, 0.4), 0 0 60px rgba(200, 184, 140, 0.25)',
            }}
          >
            {whiteName}
          </span>
          {/* Cursor while name is typing */}
          {!typedRole && (
            <span
              style={{
                display: 'inline-block',
                width: '3px',
                height: '1.05em',
                backgroundColor: '#e5c378',
                marginLeft: '6px',
                boxShadow: '0 0 12px #e5c378',
                opacity: cursorVisible ? 1 : 0,
                transition: 'opacity 0.1s ease',
              }}
            />
          )}
        </h1>
      </div>

      {/* Subtitle with Secondary Typewriter Animation (Champagne Gold) */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '22px',
          marginBottom: '40px',
        }}
      >
        <span
          style={{
            fontFamily: '"Space Mono", "JetBrains Mono", monospace',
            fontSize: 'clamp(10px, 1.8vw, 13px)',
            letterSpacing: '0.36em',
            color: '#c8b88c',
            textTransform: 'uppercase',
            fontWeight: 500,
            textShadow: '0 0 16px rgba(200, 184, 140, 0.4)',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {typedRole}
          {typedRole && !typingComplete && (
            <span
              style={{
                display: 'inline-block',
                width: '2px',
                height: '1em',
                backgroundColor: '#e5c378',
                marginLeft: '5px',
                boxShadow: '0 0 10px #e5c378',
                opacity: cursorVisible ? 1 : 0,
                transition: 'opacity 0.1s ease',
              }}
            />
          )}
        </span>
      </div>

      {/* Stunning White & Gold Glowing Progress Bar */}
      <div
        style={{
          width: 'clamp(260px, 45vw, 360px)',
          marginBottom: '16px',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '2px',
            backgroundColor: 'rgba(200, 184, 140, 0.2)',
            borderRadius: '9999px',
            position: 'relative',
            overflow: 'visible',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${displayPct}%`,
              background:
                'linear-gradient(90deg, #aa8a46 0%, #e5c378 60%, #ffffff 100%)',
              borderRadius: '9999px',
              boxShadow:
                '0 0 14px rgba(229, 195, 120, 0.75), 0 0 28px rgba(200, 184, 140, 0.4)',
              transition: 'width 0.08s ease-out',
              position: 'relative',
            }}
          >
            {/* Luminous beacon particle at the leading edge */}
            <div
              style={{
                position: 'absolute',
                right: '-3px',
                top: '-3px',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                boxShadow:
                  '0 0 12px 2px #e5c378, 0 0 20px 4px rgba(255, 255, 255, 0.9)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Telemetry Row (Gold Label & Pure White Percentage) */}
      <div
        style={{
          width: 'clamp(260px, 45vw, 360px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '22px',
          fontFamily: '"Space Mono", "JetBrains Mono", monospace',
          fontSize: '10px',
          letterSpacing: '0.24em',
          textTransform: 'uppercase',
        }}
      >
        <span style={{ color: '#c8b88c', fontWeight: 500 }}>
          INITIALIZING
        </span>
        <span
          style={{
            color: '#ffffff',
            fontWeight: 700,
            textShadow: '0 0 12px rgba(255, 255, 255, 0.6)',
          }}
        >
          {displayPct}%
        </span>
      </div>

      {/* Dynamic Terminal Initialization Status Line */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: '"Space Mono", "JetBrains Mono", monospace',
          fontSize: '9.5px',
          letterSpacing: '0.18em',
          color: '#a6a5a0',
          maxWidth: '90vw',
          textAlign: 'center',
        }}
      >
        <span style={{ color: '#e5c378', fontWeight: 700 }}>&gt;</span>
        <span style={{ color: '#f0ede6' }}>{statusLog}</span>
      </div>
    </div>
  )
}
