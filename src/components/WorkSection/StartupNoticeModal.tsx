// ─────────────────────────────────────────────
// StartupNoticeModal — Attractive Commercial Startup Notice
// Displayed when visitors explore private startup repositories (Veyra AI, ResearchFlow AI)
// Instead of a 404 error, showcases commercial venture incubation, proprietary IP, and access requests.
// ─────────────────────────────────────────────

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import type { CaseStudy } from '@/data/portfolioData'
import { PROFILE } from '@/data/portfolioData'

interface StartupNoticeModalProps {
  system: CaseStudy | null
  onClose: () => void
  onInspectArchitecture?: (system: CaseStudy) => void
}

export function StartupNoticeModal({
  system,
  onClose,
  onInspectArchitecture,
}: StartupNoticeModalProps) {
  const [copiedEmail, setCopiedEmail] = useState(false)

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    if (system) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [system, onClose])

  if (!system) return null

  const startup = system.startupDetails || {
    ventureStage: 'Independently Engineered Production Platform',
    tagline: system.subtitle,
    noticeHeadline: 'Independently Engineered Production Platform',
    overview: `${system.title} was independently created, architected, and deployed as a production platform. The codebase, model pipelines, and system architectures are maintained under a private repository.`,
    ipHighlights: [
      'Proprietary Multi-Agent Orchestration & Workflow State Machine',
      'Production-Grade Real-Time Integration & Schema Validation Engines',
      'Enterprise Data Isolation & Vector Security Protocols',
    ],
    accessProtocol: 'Recruiters, engineering leads, and technical collaborators can request private repository access or an architecture walkthrough.',
  }

  function handleRequestAccess() {
    if (!system) return
    const email = PROFILE.email
    navigator.clipboard.writeText(email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)

    const subject = encodeURIComponent(`Accredited Repository Access Inquiry: ${system.title}`)
    const body = encodeURIComponent(
      `Hi Dilip,\n\nI explored your portfolio and would like to request accredited access to the ${system.title} repository for review.\n\nName / Organization:\nInquiry Purpose (Investment / Partnership / Technical Hiring):\nGitHub Username (for access invitation):\n\nBest regards,`
    )
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_blank')
  }

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="startup-modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100000,
        backgroundColor: 'rgba(5, 6, 9, 0.94)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(12px, 3vw, 32px)',
        boxSizing: 'border-box',
      }}
      onClick={onClose}
    >
      <div
        className="startup-modal-shell"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 'min(720px, 94vw)',
          maxHeight: 'min(880px, 92vh)',
          backgroundColor: '#0c0e13',
          border: '1px solid rgba(229, 195, 120, 0.35)',
          borderRadius: '8px',
          boxShadow: '0 24px 80px rgba(0, 0, 0, 0.95), 0 0 60px rgba(229, 195, 120, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'modalFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        }}
      >
        {/* Top Control Bar */}
        <div
          style={{
            padding: '14px 20px',
            backgroundColor: '#080a0e',
            borderBottom: '1px solid rgba(229, 195, 120, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
          }}
        >
          {/* Header Status Indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '3px 9px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(229, 195, 120, 0.12)',
                border: '1px solid rgba(229, 195, 120, 0.35)',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#e5c378',
                  boxShadow: '0 0 8px #e5c378',
                }}
              />
              <span
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '9px',
                  color: '#e5c378',
                  letterSpacing: '0.14em',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                }}
              >
                COMMERCIAL VENTURE // PRIVATE IP
              </span>
            </div>
          </div>

          {/* Close Action */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Startup Notice"
            style={{
              background: 'transparent',
              border: '1px solid rgba(200, 184, 140, 0.3)',
              color: '#e5c378',
              fontFamily: '"Space Mono", monospace',
              fontSize: '10px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '6px 12px',
              borderRadius: '4px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s ease',
            }}
          >
            <span>CLOSE</span>
            <span aria-hidden="true" style={{ fontSize: '13px' }}>✕</span>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div
          style={{
            padding: 'clamp(20px, 3.5vw, 36px)',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          {/* Identity & Venture Stage Hero Card */}
          <div
            style={{
              padding: '20px 24px',
              background: 'linear-gradient(135deg, rgba(229, 195, 120, 0.08) 0%, rgba(12, 14, 19, 0.6) 100%)',
              border: '1px solid rgba(229, 195, 120, 0.25)',
              borderRadius: '6px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
              <span
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '9.5px',
                  color: '#57cc99',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                STATUS: {startup.ventureStage.toUpperCase()}
              </span>
              <span
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '9px',
                  color: '#8a8a86',
                  letterSpacing: '0.1em',
                }}
              >
                PROPRIETARY CODEBASE
              </span>
            </div>

            <h2
              id="startup-modal-title"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                fontWeight: 700,
                color: '#ffffff',
                margin: 0,
                letterSpacing: '-0.02em',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                flexWrap: 'wrap',
              }}
            >
              <span>{system.title}</span>
              <span
                style={{
                  fontSize: '11px',
                  fontFamily: '"Space Mono", monospace',
                  color: '#e5c378',
                  padding: '3px 8px',
                  backgroundColor: 'rgba(229, 195, 120, 0.14)',
                  border: '1px solid rgba(229, 195, 120, 0.35)',
                  borderRadius: '3px',
                  letterSpacing: '0.08em',
                  fontWeight: 600,
                }}
              >
                PRODUCTION PLATFORM
              </span>
            </h2>

            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.92rem',
                color: '#c8b88c',
                lineHeight: 1.5,
              }}
            >
              {startup.tagline}
            </div>
          </div>

          {/* Strategic Overview & Rationale */}
          <div>
            <div
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: '9.5px',
                color: '#e5c378',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span>🛡️</span>
              <span>COMMERCIAL TRANSITION NOTICE</span>
            </div>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.94rem',
                color: '#e2e2dc',
                lineHeight: 1.75,
                margin: 0,
                fontWeight: 350,
              }}
            >
              {startup.overview}
            </p>
          </div>

          {/* Proprietary IP Protected Highlights */}
          <div
            style={{
              padding: '18px 20px',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '6px',
            }}
          >
            <div
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: '9px',
                color: '#8a8a86',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                marginBottom: '14px',
              }}
            >
              CORE PROPRIETARY INTELLECTUAL PROPERTY
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {startup.ipHighlights.map((highlight, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12.5px',
                    color: '#dedcd5',
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      color: '#e5c378',
                      fontFamily: '"Space Mono", monospace',
                      fontSize: '11px',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    ✦
                  </span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Accredited Access Protocol */}
          <div
            style={{
              padding: '14px 18px',
              backgroundColor: 'rgba(87, 204, 153, 0.05)',
              border: '1px solid rgba(87, 204, 153, 0.25)',
              borderRadius: '6px',
            }}
          >
            <div
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: '9px',
                color: '#57cc99',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                marginBottom: '6px',
                fontWeight: 600,
              }}
            >
              ACCREDITED ACCESS PROTOCOL
            </div>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                color: '#c0c0b8',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {startup.accessProtocol}
            </p>
          </div>

          {/* Primary Action Buttons Rail */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '6px' }}>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {/* Request Access Button */}
              <button
                type="button"
                onClick={handleRequestAccess}
                style={{
                  flex: 1,
                  minWidth: '220px',
                  padding: '13px 20px',
                  backgroundColor: '#e5c378',
                  color: '#07080a',
                  border: 'none',
                  borderRadius: '4px',
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 18px rgba(229, 195, 120, 0.35)',
                  transition: 'all 0.2s ease',
                }}
              >
                <span>{copiedEmail ? 'EMAIL COPIED TO CLIPBOARD! ✓' : 'REQUEST REPOSITORY ACCESS ✉'}</span>
              </button>

              {/* View Architecture Blueprint Button */}
              {onInspectArchitecture && (
                <button
                  type="button"
                  onClick={() => {
                    onClose()
                    onInspectArchitecture(system)
                  }}
                  style={{
                    flex: 1,
                    minWidth: '220px',
                    padding: '13px 20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(229, 195, 120, 0.4)',
                    color: '#e5c378',
                    borderRadius: '4px',
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <span>INSPECT ARCHITECTURE BLUEPRINT</span>
                  <span aria-hidden="true">⚡</span>
                </button>
              )}
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {/* LinkedIn Direct Inquiry */}
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  padding: '10px 16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '4px',
                  color: '#d0cfca',
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '10px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease',
                }}
              >
                <span>CONNECT ON LINKEDIN</span>
                <span aria-hidden="true" style={{ color: '#e5c378' }}>↗</span>
              </a>

              {/* Copy Email Fast Action */}
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(PROFILE.email)
                  setCopiedEmail(true)
                  setTimeout(() => setCopiedEmail(false), 2500)
                }}
                style={{
                  padding: '10px 16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '4px',
                  color: '#d0cfca',
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '10px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                }}
              >
                <span>{copiedEmail ? 'COPIED!' : 'COPY EMAIL'}</span>
                <span aria-hidden="true">📋</span>
              </button>
            </div>
          </div>

          {/* Open-Source Catalog Alternative Footer */}
          <div
            style={{
              paddingTop: '16px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '10px',
            }}
          >
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#8a8a86' }}>
              Looking for public open-source repositories?
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <a
                href="https://github.com/Dilip-chendra/REVIVEOS"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '9.5px',
                  color: '#e5c378',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(229, 195, 120, 0.4)',
                }}
              >
                ReviveOS (Public) ↗
              </a>
              <span style={{ color: '#555' }}>·</span>
              <a
                href="https://github.com/Dilip-chendra/CITYFORGE-AI"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '9.5px',
                  color: '#e5c378',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(229, 195, 120, 0.4)',
                }}
              >
                CITYFORGE AI (Public) ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
