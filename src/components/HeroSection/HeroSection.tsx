// ─────────────────────────────────────────────
// HeroSection — Cinematic Living Backdrop & Interactive Right-Side Console
//
// Solves:
//   1. Left 65% of screen: Video frames (character, monitor, breakthrough dawn)
//      are 100% visible and unblocked.
//   2. Right 35% of screen: A stunning, persistent glassmorphic Console
//      is ALWAYS visible (zero empty frames!) with an interactive 4-step
//      narrative rail that motivates employers to scroll:
//        [01 IDENTITY] -> [02 PROFILE] -> [03 SYSTEMS] -> [04 BREAKTHROUGH]
//   3. Bottom-Right: Canvas Telemetry HUD remains locked over watermark.
//   4. 380vh scroll height ensures lively, responsive pacing.
// ─────────────────────────────────────────────

import { useRef, useMemo } from 'react'
import { FrameCanvas } from '@/components/FrameCanvas/FrameCanvas'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { useResumeModal } from '@/context/ResumeModalContext'
import type { FrameSequenceState } from '@/types'

interface HeroSectionProps {
  frameState: FrameSequenceState
}

const HERO_HEIGHT = '380vh'

export function HeroSection({ frameState }: HeroSectionProps) {
  const { openResumeModal } = useResumeModal()
  const sectionRef = useRef<HTMLElement>(null)
  const progress = useScrollProgress(sectionRef)

  // Determine active narrative step [1..4]
  const activeStep = useMemo(() => {
    if (progress < 0.25) return 1
    if (progress < 0.50) return 2
    if (progress < 0.75) return 3
    return 4
  }, [progress])

  // Smooth scroll handler for step clicks
  function scrollToStep(step: number) {
    const el = sectionRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const containerTop = window.scrollY + rect.top
    const scrollDist = el.offsetHeight - window.innerHeight
    const targets = [0, 0.32, 0.60, 0.90]
    const targetScroll = containerTop + scrollDist * targets[step - 1]
    window.scrollTo({ top: targetScroll, behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label="Cinematic introduction"
      style={{ height: HERO_HEIGHT, position: 'relative' }}
    >
      {/* ── Background Canvas: Scrubbed 240-frame sequence ── */}
      <FrameCanvas progress={progress} images={frameState.images} />

      {/* ── Fixed 100vh Viewport Overlay Container (Pinned over canvas, zIndex: 10) ── */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          zIndex: 10,
          pointerEvents: 'none',
          opacity: progress >= 0.96 ? Math.max(0, (1 - progress) / 0.04) : 1,
          display: progress >= 1 ? 'none' : 'block',
          transition: 'opacity 0.2s ease',
        }}
      >
        <div style={{ position: 'relative', width: '100%', height: '100%', pointerEvents: 'none' }}>
          {/* Subtle Ambient Vignette — bottom edge transition only; NO top or side darkening so frames and character remain 100% bright and unclipped */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              zIndex: 5,
              background: 'linear-gradient(to top, rgba(7,8,10,0.7) 0%, transparent 10%)',
            }}
          />

          {/* ── Minimal Left-Side Narrative Whispers (Responsive & Non-Overlapping) ── */}
          <div
            className="hero-narrative-whisper"
            aria-hidden="true"
          >
            <div
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: '10px',
                letterSpacing: '0.24em',
                color: '#e5c378',
                textTransform: 'uppercase',
                marginBottom: '6px',
                textShadow: '0 2px 10px rgba(0,0,0,0.95)',
              }}
            >
              {activeStep === 1 && '02:13 AM // THE NIGHT BEGINS'}
              {activeStep === 2 && '03:45 AM // PROBLEM FORMULATION'}
              {activeStep === 3 && '05:15 AM // AUTONOMOUS RUNTIMES'}
              {activeStep === 4 && '06:30 AM // MORNING BREAKTHROUGH'}
            </div>
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(13px, 1.6vw, 19px)',
                fontWeight: 200,
                color: '#f5f5f0',
                letterSpacing: '-0.02em',
                lineHeight: 1.25,
                textShadow: '0 2px 16px rgba(0,0,0,0.95)',
              }}
            >
              {activeStep === 1 && "I didn't start by building AI. I started by trying to understand it."}
              {activeStep === 2 && 'Deconstructing probabilistic models into deterministic state graphs.'}
              {activeStep === 3 && 'Architecting multi-agent fleets that reason, connect, and execute.'}
              {activeStep === 4 && 'From continuous questions to production-grade breakthrough.'}
            </div>
          </div>

          {/* ── Illuminated Center Scroll Indicator (Separated from Whisper) ── */}
          <div
            className="hero-center-scroll-indicator"
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: 'clamp(14px, 2.5vh, 24px)',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 20,
              pointerEvents: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
              opacity: progress > 0.06 ? 0 : Math.max(0, 1 - progress * 16),
              transition: 'opacity 0.3s ease',
            }}
          >
            <span
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: '9.5px',
                fontWeight: 600,
                letterSpacing: '0.36em',
                color: '#ffffff',
                textTransform: 'uppercase',
                textShadow: '0 2px 10px rgba(0,0,0,0.95), 0 0 12px rgba(229,195,120,0.5)',
                paddingLeft: '0.36em',
              }}
            >
              SCROLL
            </span>
            <div
              style={{
                width: '1px',
                height: '28px',
                background: 'linear-gradient(to bottom, rgba(229, 195, 120, 0.95) 0%, rgba(229, 195, 120, 0.1) 100%)',
                boxShadow: '0 0 8px rgba(229, 195, 120, 0.7)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to bottom, transparent, #ffffff, transparent)',
                  animation: 'scrollLinePulse 1.6s cubic-bezier(0.65, 0, 0.35, 1) infinite',
                }}
              />
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              RIGHT-SIDE COMPACT HUD WIREFRAME (Responsive, Zero Blocking)
             ══════════════════════════════════════════════════════════════ */}
          <aside
            className="hero-console"
            aria-label="Agentic AI Engineer Console"
          >
            {/* Top Interactive Stepper Rail */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                borderBottom: '1px solid rgba(200, 184, 140, 0.18)',
                backgroundColor: 'transparent',
              }}
            >
              {[
                { step: 1, label: '01 ID' },
                { step: 2, label: '02 DNA' },
                { step: 3, label: '03 RUN' },
                { step: 4, label: '04 DAWN' },
              ].map((item) => {
                const isActive = activeStep === item.step
                return (
                  <button
                    key={item.step}
                    type="button"
                    onClick={() => scrollToStep(item.step)}
                    style={{
                      padding: '8px 2px',
                      background: 'transparent',
                      border: 'none',
                      borderBottom: isActive
                        ? '2px solid #e5c378'
                        : '2px solid transparent',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '4px',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <span
                      style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: isActive ? '#e5c378' : '#6a6a64',
                        boxShadow: isActive ? '0 0 6px #e5c378' : 'none',
                      }}
                    />
                    <span
                      style={{
                        fontFamily: '"Space Mono", monospace',
                        fontSize: '8.5px',
                        fontWeight: isActive ? 700 : 400,
                        color: isActive ? '#ffffff' : '#9a9a96',
                        letterSpacing: '0.08em',
                        textShadow: isActive ? '0 1px 6px rgba(0,0,0,0.9)' : 'none',
                      }}
                    >
                      {item.label}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Dynamic Console Scrollable Body */}
            <div
              style={{
                padding: '10px 12px',
                overflowY: 'auto',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                gap: '8px',
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(200, 184, 140, 0.3) transparent',
              }}
            >
              {/* ── STEP 1: IDENTITY ── */}
              {activeStep === 1 && (
                <div>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '2px 0',
                      marginBottom: '6px',
                    }}
                  >
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: '#57cc99',
                        boxShadow: '0 0 8px #57cc99',
                      }}
                    />
                    <span
                      style={{
                        fontFamily: '"Space Mono", monospace',
                        fontSize: '8.5px',
                        color: '#c8b88c',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                        textShadow: '0 2px 8px rgba(0,0,0,1), 0 1px 3px #000',
                      }}
                    >
                      HYDERABAD · AVAILABLE
                    </span>
                  </div>

                  <h2
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '17px',
                      fontWeight: 800,
                      color: '#ffffff',
                      margin: '0 0 2px 0',
                      letterSpacing: '0.04em',
                      textShadow: '0 2px 12px rgba(0,0,0,1), 0 1px 4px #000',
                    }}
                  >
                    M. DILIPCHENDRA
                  </h2>

                  <div
                    style={{
                      fontFamily: '"Space Mono", monospace',
                      fontSize: '9.5px',
                      color: '#e5c378',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      marginBottom: '8px',
                      fontWeight: 700,
                      textShadow: '0 2px 8px rgba(0,0,0,1), 0 1px 3px #000',
                    }}
                  >
                    AGENTIC AI ENGINEER
                  </div>

                  <p
                    style={{
                      fontSize: '11.5px',
                      lineHeight: 1.45,
                      color: '#ffffff',
                      margin: '0 0 10px 0',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 500,
                      textShadow: '0 2px 8px rgba(0,0,0,1), 0 1px 4px #000',
                    }}
                  >
                    Specializing in autonomous multi-agent systems, LangGraph cyclical workflows, and Model Context Protocol (MCP) tool calling.
                  </p>

                  {/* Core Framework Pills */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px',
                      marginBottom: '12px',
                    }}
                  >
                    {[
                      'LangGraph',
                      'MCP Protocol',
                      'Multi-Agent',
                      'Enterprise RAG',
                      'FastAPI',
                      'Python',
                    ].map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: '8.5px',
                          padding: '2px 0',
                          backgroundColor: 'transparent',
                          border: 'none',
                          color: '#e5c378',
                          fontFamily: '"Space Mono", monospace',
                          fontWeight: 600,
                          letterSpacing: '0.04em',
                          textShadow: '0 2px 8px rgba(0,0,0,1), 0 1px 3px #000',
                        }}
                      >
                        {tech} ·
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    <a
                      href="#work"
                      style={{
                        padding: '6px 12px',
                        background: 'linear-gradient(135deg, #e5c378 0%, #c8b88c 100%)',
                        color: '#07080a',
                        fontSize: '9.5px',
                        fontWeight: 700,
                        borderRadius: '4px',
                        textDecoration: 'none',
                        letterSpacing: '0.04em',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.8), 0 0 8px rgba(229, 195, 120, 0.4)',
                      }}
                    >
                      Systems ↓
                    </a>
                    <button
                      type="button"
                      onClick={openResumeModal}
                      style={{
                        padding: '6px 10px',
                        backgroundColor: 'rgba(10, 12, 16, 0.65)',
                        color: '#e5c378',
                        border: '1px solid rgba(229, 195, 120, 0.55)',
                        fontSize: '9.5px',
                        fontWeight: 700,
                        borderRadius: '4px',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        textShadow: '0 2px 6px rgba(0,0,0,1)',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <span>Resume</span>
                      <span aria-hidden="true" style={{ fontSize: '10px' }}>↗</span>
                    </button>
                    <a
                      href="#contact"
                      style={{
                        padding: '6px 10px',
                        backgroundColor: 'rgba(10, 12, 16, 0.65)',
                        color: '#ffffff',
                        border: '1px solid rgba(255, 255, 255, 0.35)',
                        fontSize: '9.5px',
                        fontWeight: 600,
                        borderRadius: '4px',
                        textDecoration: 'none',
                        textShadow: '0 2px 6px rgba(0,0,0,1)',
                      }}
                    >
                      Contact →
                    </a>
                  </div>
                </div>
              )}

              {/* ── STEP 2: OPERATING PROFILE ── */}
              {activeStep === 2 && (
                <div>
                  <div
                    style={{
                      fontFamily: '"Space Mono", monospace',
                      fontSize: '8px',
                      letterSpacing: '0.18em',
                      color: '#c8b88c',
                      textTransform: 'uppercase',
                      marginBottom: '3px',
                      fontWeight: 700,
                      textShadow: '0 2px 8px rgba(0,0,0,1), 0 1px 3px #000',
                    }}
                  >
                    01 // ARCHITECTURAL DNA
                  </div>

                  <h2
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      fontWeight: 800,
                      color: '#ffffff',
                      margin: '0 0 2px 0',
                      textShadow: '0 2px 12px rgba(0,0,0,1), 0 1px 4px #000',
                    }}
                  >
                    The Operating Profile
                  </h2>

                  <div
                    style={{
                      fontFamily: '"Space Mono", monospace',
                      fontSize: '8.5px',
                      color: '#e5c378',
                      letterSpacing: '0.1em',
                      marginBottom: '8px',
                      fontWeight: 700,
                      textShadow: '0 2px 8px rgba(0,0,0,1), 0 1px 3px #000',
                    }}
                  >
                    REASON · CONNECT · VALIDATE
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div
                      style={{
                        padding: '4px 0 6px 0',
                        backgroundColor: 'transparent',
                        borderBottom: '1px solid rgba(229, 195, 120, 0.25)',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          color: '#ffffff',
                          marginBottom: '2px',
                          textShadow: '0 2px 8px rgba(0,0,0,1), 0 1px 3px #000',
                        }}
                      >
                        01 · Multi-Agent State Graphs
                      </div>
                      <p style={{ fontSize: '10px', color: '#dedcd5', margin: 0, lineHeight: 1.4, textShadow: '0 2px 8px rgba(0,0,0,1), 0 1px 3px #000' }}>
                        LangGraph cyclical state machines with checkpointing & human-in-the-loop control.
                      </p>
                    </div>

                    <div
                      style={{
                        padding: '4px 0 6px 0',
                        backgroundColor: 'transparent',
                        borderBottom: '1px solid rgba(229, 195, 120, 0.25)',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          color: '#ffffff',
                          marginBottom: '2px',
                          textShadow: '0 2px 8px rgba(0,0,0,1), 0 1px 3px #000',
                        }}
                      >
                        02 · Model Context Protocol
                      </div>
                      <p style={{ fontSize: '10px', color: '#dedcd5', margin: 0, lineHeight: 1.4, textShadow: '0 2px 8px rgba(0,0,0,1), 0 1px 3px #000' }}>
                        Stdio and SSE protocol servers bridging autonomous LLMs to enterprise databases.
                      </p>
                    </div>

                    <div
                      style={{
                        padding: '4px 0 6px 0',
                        backgroundColor: 'transparent',
                        borderBottom: '1px solid rgba(229, 195, 120, 0.25)',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          color: '#ffffff',
                          marginBottom: '2px',
                          textShadow: '0 2px 8px rgba(0,0,0,1), 0 1px 3px #000',
                        }}
                      >
                        03 · Deterministic Guardrails
                      </div>
                      <p style={{ fontSize: '10px', color: '#dedcd5', margin: 0, lineHeight: 1.4, textShadow: '0 2px 8px rgba(0,0,0,1), 0 1px 3px #000' }}>
                        Pydantic output validation, policy firewalls, and HMAC ledgers for zero hallucination.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* ── STEP 3: FLAGSHIP SYSTEMS ── */}
              {activeStep === 3 && (
                <div>
                  <div
                    style={{
                      fontFamily: '"Space Mono", monospace',
                      fontSize: '8px',
                      letterSpacing: '0.18em',
                      color: '#e5c378',
                      textTransform: 'uppercase',
                      marginBottom: '3px',
                      fontWeight: 700,
                      textShadow: '0 2px 8px rgba(0,0,0,1), 0 1px 3px #000',
                    }}
                  >
                    02 // SELECTED SYSTEMS
                  </div>

                  <h2
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15.5px',
                      fontWeight: 800,
                      color: '#ffffff',
                      margin: '0 0 6px 0',
                      textShadow: '0 2px 12px rgba(0,0,0,1), 0 1px 4px #000',
                    }}
                  >
                    Autonomous AI Runtimes
                  </h2>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {/* System 1 */}
                    <div
                      style={{
                        padding: '4px 0 6px 0',
                        backgroundColor: 'transparent',
                        borderBottom: '1px solid rgba(229, 195, 120, 0.25)',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,1), 0 1px 3px #000' }}>ReviveOS</span>
                        <span style={{ fontSize: '8px', color: '#e5c378', fontFamily: '"Space Mono", monospace', fontWeight: 700, textShadow: '0 1px 4px #000' }}>TRACK 01</span>
                      </div>
                      <p style={{ fontSize: '10px', color: '#dedcd5', margin: '2px 0 4px 0', lineHeight: 1.4, textShadow: '0 2px 8px rgba(0,0,0,1), 0 1px 3px #000' }}>
                        Autonomous AI revenue-recovery control plane with policy firewalls.
                      </p>
                      <span style={{ fontSize: '8px', color: '#e5c378', fontFamily: '"Space Mono", monospace', fontWeight: 600, textShadow: '0 1px 4px #000' }}>LangGraph · FastAPI</span>
                    </div>

                    {/* System 2 */}
                    <div
                      style={{
                        padding: '4px 0 6px 0',
                        backgroundColor: 'transparent',
                        borderBottom: '1px solid rgba(229, 195, 120, 0.25)',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,1), 0 1px 3px #000' }}>AI Business Builder</span>
                        <span style={{ fontSize: '8px', color: '#e5c378', fontFamily: '"Space Mono", monospace', fontWeight: 700, textShadow: '0 1px 4px #000' }}>TRACK 02</span>
                      </div>
                      <p style={{ fontSize: '10px', color: '#dedcd5', margin: '2px 0 4px 0', lineHeight: 1.4, textShadow: '0 2px 8px rgba(0,0,0,1), 0 1px 3px #000' }}>
                        6-specialist autonomous venture fleet executing verified plans.
                      </p>
                      <span style={{ fontSize: '8px', color: '#e5c378', fontFamily: '"Space Mono", monospace', fontWeight: 600, textShadow: '0 1px 4px #000' }}>CrewAI · Gemini 2.0</span>
                    </div>

                    {/* System 3 */}
                    <div
                      style={{
                        padding: '4px 0 6px 0',
                        backgroundColor: 'transparent',
                        borderBottom: '1px solid rgba(229, 195, 120, 0.25)',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,1), 0 1px 3px #000' }}>ResearchFlow AI</span>
                        <span style={{ fontSize: '8px', color: '#e5c378', fontFamily: '"Space Mono", monospace', fontWeight: 700, textShadow: '0 1px 4px #000' }}>TRACK 03</span>
                      </div>
                      <p style={{ fontSize: '10px', color: '#dedcd5', margin: '2px 0 4px 0', lineHeight: 1.4, textShadow: '0 2px 8px rgba(0,0,0,1), 0 1px 3px #000' }}>
                        5-agent academic synthesis pipeline with citation grounding.
                      </p>
                      <span style={{ fontSize: '8px', color: '#e5c378', fontFamily: '"Space Mono", monospace', fontWeight: 600, textShadow: '0 1px 4px #000' }}>LangGraph · Pinecone</span>
                    </div>
                  </div>

                  <a
                    href="#work"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      marginTop: '8px',
                      fontSize: '9.5px',
                      color: '#e5c378',
                      textDecoration: 'none',
                      fontFamily: '"Space Mono", monospace',
                      letterSpacing: '0.08em',
                      fontWeight: 700,
                      textShadow: '0 2px 8px rgba(0,0,0,1), 0 1px 3px #000',
                    }}
                  >
                    Inspect All 6 Case Studies →
                  </a>
                </div>
              )}

              {/* ── STEP 4: BREAKTHROUGH & TRANSITION ── */}
              {activeStep === 4 && (
                <div>
                  <div
                    style={{
                      fontFamily: '"Space Mono", monospace',
                      fontSize: '8.5px',
                      letterSpacing: '0.18em',
                      color: '#e5c378',
                      textTransform: 'uppercase',
                      marginBottom: '4px',
                      fontWeight: 700,
                      textShadow: '0 2px 8px rgba(0,0,0,1), 0 1px 3px #000',
                    }}
                  >
                    03 // THE BREAKTHROUGH
                  </div>

                  <h2
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15.5px',
                      fontWeight: 800,
                      color: '#ffffff',
                      margin: '0 0 4px 0',
                      textShadow: '0 2px 12px rgba(0,0,0,1), 0 1px 4px #000',
                    }}
                  >
                    Ready for Production
                  </h2>

                  <div
                    style={{
                      fontFamily: '"Space Mono", monospace',
                      fontSize: '8.5px',
                      color: '#c8b88c',
                      letterSpacing: '0.1em',
                      marginBottom: '8px',
                      fontWeight: 700,
                      textShadow: '0 2px 8px rgba(0,0,0,1), 0 1px 3px #000',
                    }}
                  >
                    REASON · CONNECT & EXECUTE
                  </div>

                  <p
                    style={{
                      fontSize: '10.5px',
                      lineHeight: 1.45,
                      color: '#ffffff',
                      margin: '0 0 10px 0',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 500,
                      textShadow: '0 2px 8px rgba(0,0,0,1), 0 1px 3px #000',
                    }}
                  >
                    The cinematic night has transitioned into morning breakthrough. Explore the systems below.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <a
                      href="#stack"
                      style={{
                        padding: '7px 10px',
                        background: 'linear-gradient(135deg, #e5c378 0%, #c8b88c 100%)',
                        color: '#07080a',
                        fontSize: '9.5px',
                        fontWeight: 700,
                        borderRadius: '4px',
                        textDecoration: 'none',
                        letterSpacing: '0.04em',
                        textAlign: 'center',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.8), 0 0 8px rgba(229, 195, 120, 0.4)',
                      }}
                    >
                      Technical Arsenal ↓
                    </a>
                    <button
                      type="button"
                      onClick={openResumeModal}
                      style={{
                        padding: '7px 10px',
                        backgroundColor: 'rgba(10, 12, 16, 0.65)',
                        color: '#e5c378',
                        border: '1px solid rgba(229, 195, 120, 0.55)',
                        fontSize: '9.5px',
                        fontWeight: 700,
                        borderRadius: '4px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        textShadow: '0 2px 6px rgba(0,0,0,1)',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <span>See Verified Resume (PDF)</span>
                      <span aria-hidden="true">↗</span>
                    </button>
                    <a
                      href="#experience"
                      style={{
                        padding: '7px 10px',
                        backgroundColor: 'rgba(10, 12, 16, 0.65)',
                        color: '#ffffff',
                        border: '1px solid rgba(255, 255, 255, 0.35)',
                        fontSize: '9.5px',
                        fontWeight: 600,
                        borderRadius: '4px',
                        textDecoration: 'none',
                        textAlign: 'center',
                        textShadow: '0 2px 6px rgba(0,0,0,1)',
                      }}
                    >
                      Experience ↓
                    </a>
                  </div>
                </div>
              )}

              {/* Bottom Scroll Guide Indicator */}
              <div
                style={{
                  marginTop: '10px',
                  paddingTop: '6px',
                  borderTop: '1px solid rgba(200, 184, 140, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '8px',
                  color: '#a0a09c',
                  letterSpacing: '0.1em',
                }}
              >
                <span>SCROLL //</span>
                <span style={{ color: '#e5c378', textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
                  {Math.round(progress * 100)}% COMPLETE
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
