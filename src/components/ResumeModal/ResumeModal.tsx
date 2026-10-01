// ─────────────────────────────────────────────
// ResumeModal — High-Definition Curriculum Vitae Inspection
//
// Dual-column Executive Command Center:
// - Left: Fast-scan Executive Brief (Role alignment, education, certifications, contact)
// - Right: Interactive Native PDF Document Viewer with instant download and zoom
// ─────────────────────────────────────────────

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useResumeModal } from '@/context/ResumeModalContext'

export function ResumeModal() {
  const { isOpen, closeResumeModal } = useResumeModal()
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [mobileTab, setMobileTab] = useState<'profile' | 'pdf'>('profile')

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') closeResumeModal()
    }

    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, closeResumeModal])

  if (!isOpen) return null
  if (typeof document === 'undefined') return null

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('dilip.madagari@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="resume-modal-overlay"
      onClick={closeResumeModal}
    >
      <div
        className="resume-modal-shell"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Desktop Top Control Bar */}
        <div className="resume-header-desktop">
          {/* Header Identity */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '3px 8px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(87, 204, 153, 0.12)',
                border: '1px solid rgba(87, 204, 153, 0.35)',
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
                  fontSize: '9px',
                  color: '#57cc99',
                  letterSpacing: '0.12em',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}
              >
                VERIFIED CANDIDATE
              </span>
            </div>

            <div>
              <h3
                id="resume-modal-title"
                style={{
                  margin: 0,
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#ffffff',
                  letterSpacing: '0.04em',
                }}
              >
                M. DILIPCHENDRA // RESUME
              </h3>
            </div>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Direct Download Button */}
            <a
              href="/resume.pdf"
              download="Resume_Dilipchendra.pdf"
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: '10.5px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#07080a',
                backgroundColor: '#e5c378',
                padding: '8px 16px',
                borderRadius: '4px',
                textDecoration: 'none',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 2px 12px rgba(229, 195, 120, 0.35)',
                transition: 'all 0.2s ease',
              }}
            >
              <span>DOWNLOAD PDF</span>
              <span aria-hidden="true" style={{ fontSize: '12px' }}>↓</span>
            </a>

            {/* Open In New Tab */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: '10px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#d0cfca',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                padding: '7px 14px',
                borderRadius: '4px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                transition: 'all 0.2s ease',
              }}
            >
              <span>NEW TAB</span>
              <span aria-hidden="true" style={{ color: '#e5c378' }}>↗</span>
            </a>

            {/* Close Button */}
            <button
              type="button"
              onClick={closeResumeModal}
              aria-label="Close Resume Modal"
              style={{
                background: 'transparent',
                border: '1px solid rgba(200, 184, 140, 0.3)',
                color: '#e5c378',
                fontFamily: '"Space Mono", monospace',
                fontSize: '10px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '7px 14px',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              CLOSE [ESC]
            </button>
          </div>
        </div>

        {/* Mobile Dedicated Single-Row Top Control Bar */}
        <div className="resume-header-mobile">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: '#57cc99',
                boxShadow: '0 0 8px #57cc99',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              M. DILIPCHENDRA <span style={{ color: '#e5c378', fontSize: '10.5px', fontFamily: '"Space Mono", monospace', fontWeight: 500 }}>// RESUME</span>
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            <a
              href="/resume.pdf"
              download="Resume_Dilipchendra.pdf"
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: '9.5px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: '#07080a',
                backgroundColor: '#e5c378',
                padding: '6px 10px',
                borderRadius: '4px',
                textDecoration: 'none',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '3px',
                boxShadow: '0 2px 8px rgba(229, 195, 120, 0.4)',
              }}
            >
              <span>PDF</span>
              <span aria-hidden="true" style={{ fontSize: '11px' }}>↓</span>
            </a>

            <button
              type="button"
              onClick={closeResumeModal}
              aria-label="Close Resume Modal"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(200, 184, 140, 0.45)',
                color: '#e5c378',
                fontSize: '18px',
                fontWeight: 700,
                width: '36px',
                height: '36px',
                borderRadius: '5px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
                touchAction: 'manipulation',
              }}
            >
              ✕
            </button>
          </div>
        </div>

        {/* Mobile View Tab Switcher: Fullscreen PDF vs Fullscreen Executive Brief */}
        <div
          className="resume-mobile-tab-bar"
          style={{
            display: 'none',
            gridTemplateColumns: '1fr 1fr',
            borderBottom: '1px solid rgba(200, 184, 140, 0.25)',
            backgroundColor: '#07080a',
          }}
        >
          <button
            type="button"
            onClick={() => setMobileTab('pdf')}
            style={{
              padding: '11px',
              background: mobileTab === 'pdf' ? 'rgba(229, 195, 120, 0.16)' : 'transparent',
              border: 'none',
              borderBottom: mobileTab === 'pdf' ? '2px solid #e5c378' : '2px solid transparent',
              color: mobileTab === 'pdf' ? '#ffffff' : '#8a8a86',
              fontFamily: '"Space Mono", monospace',
              fontSize: '10px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
            }}
          >
            <span>📄</span>
            <span>PDF DOCUMENT</span>
          </button>
          <button
            type="button"
            onClick={() => setMobileTab('profile')}
            style={{
              padding: '11px',
              background: mobileTab === 'profile' ? 'rgba(229, 195, 120, 0.16)' : 'transparent',
              border: 'none',
              borderBottom: mobileTab === 'profile' ? '2px solid #e5c378' : '2px solid transparent',
              color: mobileTab === 'profile' ? '#ffffff' : '#8a8a86',
              fontFamily: '"Space Mono", monospace',
              fontSize: '10px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
            }}
          >
            <span>📋</span>
            <span>EXECUTIVE BRIEF</span>
          </button>
        </div>

        {/* Modal Body: Split-Screen on Desktop, Tabbed Fullscreen on Mobile */}
        <div
          className={`resume-modal-body ${mobileTab === 'pdf' ? 'show-pdf' : 'show-profile'}`}
          style={{
            display: 'flex',
            flex: 1,
            overflow: 'hidden',
          }}
        >
          {/* Left Column: Quick Executive Dossier */}
          <div
            className="resume-modal-sidebar"
            style={{
              width: '320px',
              backgroundColor: '#0a0c0f',
              borderRight: '1px solid rgba(200, 184, 140, 0.18)',
              padding: '24px 20px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            {/* Candidate Summary */}
            <div>
              <div
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '9px',
                  color: '#8a8a86',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                }}
              >
                TARGET ENGINEERING ROLE
              </div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#f5f5f0',
                  lineHeight: 1.4,
                  marginBottom: '4px',
                }}
              >
                Forward Deployed Engineer (AI Solutions & Integrations)
              </div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11px',
                  color: '#e5c378',
                  lineHeight: 1.4,
                }}
              >
                Agentic Systems · LangGraph · Model Context Protocol (MCP) · Deterministic Firewalls
              </div>
            </div>

            {/* Contact Action Rail */}
            <div
              style={{
                padding: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(200, 184, 140, 0.15)',
                borderRadius: '5px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontSize: '10px', color: '#8a8a86', fontFamily: '"Space Mono", monospace' }}>EMAIL</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: copiedEmail ? '#57cc99' : '#e5c378',
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '9px',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  {copiedEmail ? 'COPIED ✓' : 'COPY'}
                </button>
              </div>
              <a
                href="mailto:dilip.madagari@gmail.com"
                style={{
                  fontSize: '11px',
                  color: '#f5f5f0',
                  textDecoration: 'none',
                  wordBreak: 'break-all',
                }}
              >
                dilip.madagari@gmail.com
              </a>

              <div style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.06)', margin: '2px 0' }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '10px', color: '#8a8a86', fontFamily: '"Space Mono", monospace' }}>PHONE</span>
                <span style={{ fontSize: '11px', color: '#d0cfca' }}>+91 7075464029</span>
              </div>

              <div style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.06)', margin: '2px 0' }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '10px', color: '#8a8a86', fontFamily: '"Space Mono", monospace' }}>LOCATION</span>
                <span style={{ fontSize: '11px', color: '#57cc99' }}>Hyderabad (Remote-Ready)</span>
              </div>
            </div>

            {/* Education & Academic Rigor */}
            <div>
              <div
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '9px',
                  color: '#8a8a86',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                }}
              >
                ACADEMIC FOUNDATION
              </div>
              <div style={{ fontSize: '11.5px', fontWeight: 600, color: '#f5f5f0' }}>
                B.Tech in Artificial Intelligence & Data Science
              </div>
              <div style={{ fontSize: '10.5px', color: '#c0beba', margin: '2px 0' }}>
                Nalla Malla Reddy Engineering College
              </div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginTop: '4px',
                  padding: '2px 7px',
                  borderRadius: '3px',
                  backgroundColor: 'rgba(200, 184, 140, 0.12)',
                  border: '1px solid rgba(200, 184, 140, 0.3)',
                }}
              >
                <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '9px', color: '#e5c378', fontWeight: 700 }}>
                  CGPA: 8.5 / 10
                </span>
                <span style={{ fontSize: '9px', color: '#8a8a86' }}>· Class of 2027</span>
              </div>
            </div>

            {/* Verified Certifications */}
            <div>
              <div
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '9px',
                  color: '#8a8a86',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                VERIFIED CREDENTIALS
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div
                  style={{
                    padding: '8px 10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '4px',
                  }}
                >
                  <div style={{ fontSize: '10.5px', fontWeight: 600, color: '#f5f5f0' }}>
                    Model Context Protocol (MCP) & Claude Code
                  </div>
                  <div style={{ fontSize: '9px', color: '#c8b88c', fontFamily: '"Space Mono", monospace' }}>
                    Anthropic · Aug 2026
                  </div>
                </div>

                <div
                  style={{
                    padding: '8px 10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '4px',
                  }}
                >
                  <div style={{ fontSize: '10.5px', fontWeight: 600, color: '#f5f5f0' }}>
                    LangChain Certification
                  </div>
                  <div style={{ fontSize: '9px', color: '#c8b88c', fontFamily: '"Space Mono", monospace' }}>
                    HCL GUVI · Jun 2026
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Direct Channels */}
            <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a
                  href="https://github.com/Dilip-chendra"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '4px',
                    color: '#d0cfca',
                    fontSize: '9.5px',
                    fontFamily: '"Space Mono", monospace',
                    textDecoration: 'none',
                  }}
                >
                  GITHUB ↗
                </a>
                <a
                  href="https://linkedin.com/in/dilip-chendra"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '4px',
                    color: '#d0cfca',
                    fontSize: '9.5px',
                    fontFamily: '"Space Mono", monospace',
                    textDecoration: 'none',
                  }}
                >
                  LINKEDIN ↗
                </a>
              </div>

              {/* Mobile Quick Close Action */}
              <div className="resume-mobile-bottom-close" style={{ display: 'none', marginTop: '12px' }}>
                <button
                  type="button"
                  onClick={closeResumeModal}
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: 'rgba(200, 184, 140, 0.1)',
                    border: '1px solid rgba(200, 184, 140, 0.35)',
                    borderRadius: '4px',
                    color: '#e5c378',
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    cursor: 'pointer',
                    touchAction: 'manipulation',
                  }}
                >
                  CLOSE RESUME ✕
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Native Interactive PDF Viewer */}
          <div
            className="resume-modal-viewer"
            style={{
              flex: 1,
              backgroundColor: '#16191f',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Mobile Touch-Friendly PDF Access Card */}
            <div className="resume-mobile-pdf-card">
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(229, 195, 120, 0.12)',
                  border: '1px solid rgba(229, 195, 120, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  marginBottom: '16px',
                }}
              >
                📄
              </div>
              <h4
                style={{
                  color: '#ffffff',
                  margin: '0 0 8px 0',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 700,
                  textAlign: 'center',
                }}
              >
                Official Curriculum Vitae (PDF)
              </h4>
              <p
                style={{
                  color: '#9ba1a6',
                  fontSize: '12px',
                  margin: '0 0 24px 0',
                  fontFamily: '"Space Mono", monospace',
                  textAlign: 'center',
                  lineHeight: 1.6,
                  maxWidth: '320px',
                }}
              >
                ATS-optimized single-page engineering format · Systems, Agentic AI & Backend Engineering
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', maxWidth: '300px' }}>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    backgroundColor: '#e5c378',
                    color: '#07080a',
                    padding: '13px 20px',
                    borderRadius: '6px',
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '11.5px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    letterSpacing: '0.06em',
                    boxShadow: '0 4px 16px rgba(229, 195, 120, 0.35)',
                  }}
                >
                  <span>OPEN FULLSCREEN PDF</span>
                  <span aria-hidden="true">↗</span>
                </a>

                <a
                  href="/resume.pdf"
                  download="Resume_Dilipchendra.pdf"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(200, 184, 140, 0.3)',
                    color: '#d0cfca',
                    padding: '12px 20px',
                    borderRadius: '6px',
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '11.5px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    letterSpacing: '0.06em',
                  }}
                >
                  <span>DOWNLOAD DOCUMENT</span>
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            {/* Desktop Native PDF Viewer */}
            <iframe
              className="resume-pdf-iframe"
              src="/resume.pdf#view=FitH"
              title="M. Dilipchendra Official Resume"
            />
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
