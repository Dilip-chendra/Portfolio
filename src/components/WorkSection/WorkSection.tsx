// ─────────────────────────────────────────────
// WorkSection — Selected AI Systems & Case Studies
// Cinematic showcase with deep technical case-study inspection.
// ─────────────────────────────────────────────

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { FEATURED_SYSTEMS, type CaseStudy } from '@/data/portfolioData'
import { SystemArchitectureVisualizer } from './SystemArchitectureVisualizer'

export function WorkSection() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null)

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setActiveCaseStudy(null)
    }
    if (activeCaseStudy) {
      window.addEventListener('keydown', onKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeCaseStudy])

  return (
    <section
      id="work"
      aria-label="Selected AI Systems"
      style={{
        position: 'relative',
        zIndex: 10,
        backgroundColor: '#0a0a0a',
        padding: 'clamp(80px, 12vh, 140px) clamp(16px, 4vw, 80px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ marginBottom: 'clamp(48px, 8vh, 80px)' }}>
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#c8b88c',
              marginBottom: '16px',
            }}
          >
            02 / SELECTED SYSTEMS
          </div>
          <h2
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3.8rem)',
              fontWeight: 200,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: '#f5f5f0',
              margin: '0 0 16px 0',
            }}
          >
            Autonomous Runtimes, Multi-Agent Planes & Grounded RAG
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)',
              color: '#8a8a86',
              maxWidth: '780px',
              margin: 0,
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            Flagship production-grade architectures built with LangGraph, Model Context Protocol (MCP), deterministic policy firewalls, and spatial intelligence.
          </p>
        </div>

        {/* Featured Systems Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(20px, 3vw, 32px)',
          }}
        >
          {FEATURED_SYSTEMS.map((system, idx) => (
            <article
              key={system.id}
              style={{
                backgroundColor: '#111111',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                borderRadius: '3px',
                padding: 'clamp(28px, 4vw, 36px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color 0.3s ease, transform 0.3s ease',
              }}
            >
              <div>
                {/* Meta Top */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '20px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '11px',
                      color: '#c8b88c',
                      letterSpacing: '0.15em',
                      fontWeight: 400,
                    }}
                  >
                    SYSTEM 0{idx + 1}
                  </span>
                  <span
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '10px',
                      color: '#8a8a86',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {system.category}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(1.35rem, 2vw, 1.7rem)',
                    fontWeight: 300,
                    letterSpacing: '-0.02em',
                    color: '#f5f5f0',
                    margin: '0 0 8px 0',
                  }}
                >
                  {system.title}
                </h3>
                <div
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.85rem',
                    color: '#c8b88c',
                    marginBottom: '18px',
                    fontWeight: 400,
                  }}
                >
                  {system.subtitle}
                </div>

                {/* Summary */}
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.88rem',
                    lineHeight: 1.7,
                    color: '#8a8a86',
                    margin: '0 0 24px 0',
                    fontWeight: 300,
                  }}
                >
                  {system.summary}
                </p>

                {/* Tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '32px',
                  }}
                >
                  {system.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '10px',
                        letterSpacing: '0.08em',
                        color: '#a8a8a2',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        padding: '4px 10px',
                        borderRadius: '2px',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  paddingTop: '20px',
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveCaseStudy(system)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '11px',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#f5f5f0',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span style={{ borderBottom: '1px solid rgba(245, 245, 240, 0.4)' }}>
                    INSPECT ARCHITECTURE
                  </span>
                  <span aria-hidden="true" style={{ color: '#c8b88c' }}>
                    →
                  </span>
                </button>

                <a
                  href={system.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${system.title} on GitHub`}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '11px',
                    letterSpacing: '0.14em',
                    color: '#8a8a86',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                  }}
                >
                  GITHUB ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Modal / Dual-Column Architecture Command Center */}
      {activeCaseStudy &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              backgroundColor: 'rgba(7, 8, 10, 0.96)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => setActiveCaseStudy(null)}
          >
          <div
            className="case-study-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Column: Interactive System Architecture Blueprint & Telemetry */}
            <div className="case-study-modal-left">
              <SystemArchitectureVisualizer system={activeCaseStudy} />
            </div>

            {/* Right Column: Case Study Documentation */}
            <div
              className="case-study-modal-right"
              style={{
                backgroundColor: '#101216',
                borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
                padding: 'clamp(28px, 4vw, 56px)',
                boxSizing: 'border-box',
              }}
            >
              {/* Modal Close & Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '28px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingBottom: '18px',
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: '"Space Mono", monospace',
                      fontSize: '9.5px',
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: '#c8b88c',
                    }}
                  >
                    SYSTEM ARCHIVE // CASE STUDY
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveCaseStudy(null)}
                  aria-label="Close Case Study"
                  style={{
                    background: 'none',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#f5f5f0',
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '10px',
                    padding: '6px 14px',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    transition: 'all 0.2s ease',
                  }}
                >
                  CLOSE [ESC]
                </button>
              </div>

            {/* Case Study Title */}
            <h2
              id="case-study-title"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 200,
                letterSpacing: '-0.03em',
                color: '#f5f5f0',
                margin: '0 0 8px 0',
              }}
            >
              {activeCaseStudy.title}
            </h2>
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.95rem',
                color: '#c8b88c',
                marginBottom: '28px',
              }}
            >
              {activeCaseStudy.subtitle}
            </div>

            {/* Links Bar */}
            <div
              style={{
                display: 'flex',
                gap: '16px',
                marginBottom: '40px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                paddingBottom: '24px',
              }}
            >
              <a
                href={activeCaseStudy.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#0a0a0a',
                  backgroundColor: '#c8b88c',
                  padding: '10px 20px',
                  textDecoration: 'none',
                  borderRadius: '2px',
                  fontWeight: 500,
                }}
              >
                VIEW REPOSITORY ↗
              </a>
              {activeCaseStudy.liveDemoUrl && (
                <a
                  href={activeCaseStudy.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '11px',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#f5f5f0',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    padding: '10px 20px',
                    textDecoration: 'none',
                    borderRadius: '2px',
                  }}
                >
                  LIVE DEMO ↗
                </a>
              )}
            </div>

            {/* Case Study Sections */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div>
                <h4 style={{ color: '#c8b88c', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 8px 0' }}>
                  WHAT IT IS
                </h4>
                <p style={{ color: '#d0d0cb', fontSize: '0.92rem', lineHeight: 1.7, margin: 0, fontWeight: 300 }}>
                  {activeCaseStudy.whatItIs}
                </p>
              </div>

              <div>
                <h4 style={{ color: '#c8b88c', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 8px 0' }}>
                  THE PROBLEM
                </h4>
                <p style={{ color: '#d0d0cb', fontSize: '0.92rem', lineHeight: 1.7, margin: 0, fontWeight: 300 }}>
                  {activeCaseStudy.problem}
                </p>
              </div>

              <div>
                <h4 style={{ color: '#c8b88c', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 8px 0' }}>
                  THE APPROACH
                </h4>
                <p style={{ color: '#d0d0cb', fontSize: '0.92rem', lineHeight: 1.7, margin: 0, fontWeight: 300 }}>
                  {activeCaseStudy.approach}
                </p>
              </div>

              <div>
                <h4 style={{ color: '#c8b88c', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 12px 0' }}>
                  SYSTEM ARCHITECTURE
                </h4>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#8a8a86', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {activeCaseStudy.architecture.map((item, i) => (
                    <li key={i} style={{ fontSize: '0.88rem', lineHeight: 1.6, color: '#d0d0cb', fontWeight: 300 }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ color: '#c8b88c', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 12px 0' }}>
                  KEY ENGINEERING DECISIONS
                </h4>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#8a8a86', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {activeCaseStudy.engineeringDecisions.map((item, i) => (
                    <li key={i} style={{ fontSize: '0.88rem', lineHeight: 1.6, color: '#d0d0cb', fontWeight: 300 }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ color: '#c8b88c', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 12px 0' }}>
                  AI / AGENTIC COMPONENTS
                </h4>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#8a8a86', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {activeCaseStudy.agenticComponents.map((item, i) => (
                    <li key={i} style={{ fontSize: '0.88rem', lineHeight: 1.6, color: '#d0d0cb', fontWeight: 300 }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ color: '#c8b88c', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 12px 0' }}>
                  GUARDRAILS & RELIABILITY
                </h4>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#8a8a86', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {activeCaseStudy.guardrails.map((item, i) => (
                    <li key={i} style={{ fontSize: '0.88rem', lineHeight: 1.6, color: '#d0d0cb', fontWeight: 300 }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ color: '#c8b88c', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 10px 0' }}>
                  TECH STACK
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {activeCaseStudy.techStack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '11px',
                        color: '#f5f5f0',
                        backgroundColor: '#181818',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '6px 12px',
                        borderRadius: '2px',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '20px' }}>
                <h4 style={{ color: '#c8b88c', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 8px 0' }}>
                  VERIFIED VALIDATION
                </h4>
                <p style={{ color: '#a0a09b', fontSize: '0.86rem', lineHeight: 1.7, margin: 0, fontWeight: 300 }}>
                  {activeCaseStudy.validation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>,
      document.body
    )}
  </section>
)
}
