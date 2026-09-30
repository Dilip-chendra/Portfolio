// ─────────────────────────────────────────────
// ContactSection — Direct Engineering Inquiries
// High-conviction closing section with verified contact channels.
// ─────────────────────────────────────────────

import { useState } from 'react'
import { PROFILE } from '@/data/portfolioData'
import { useResumeModal } from '@/context/ResumeModalContext'

export function ContactSection() {
  const { openResumeModal } = useResumeModal()
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <footer
      id="contact"
      aria-label="Contact and Inquiries"
      style={{
        position: 'relative',
        zIndex: 10,
        backgroundColor: '#0a0a0a',
        padding: 'clamp(80px, 12vh, 140px) clamp(16px, 4vw, 80px) 48px clamp(16px, 4vw, 80px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Main Pitch */}
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
            08 / INITIATE CONTACT
          </div>

          <h2
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
              fontWeight: 200,
              letterSpacing: '-0.035em',
              lineHeight: 1.05,
              color: '#f5f5f0',
              maxWidth: '920px',
              margin: '0 0 24px 0',
            }}
          >
            LET'S BUILD SOMETHING THAT MATTERS.
          </h2>

          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)',
              lineHeight: 1.7,
              color: '#8a8a86',
              maxWidth: '740px',
              margin: 0,
              fontWeight: 300,
            }}
          >
            Open to engineering roles and collaborations involving Agentic AI, autonomous multi-agent orchestration, enterprise RAG architectures, and production tool execution.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: 'clamp(16px, 2.5vw, 24px)',
            marginBottom: 'clamp(48px, 8vh, 88px)',
          }}
        >
          {/* Email */}
          <div
            style={{
              backgroundColor: '#111111',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '2px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#8a8a86',
                  marginBottom: '12px',
                }}
              >
                DIRECT EMAIL
              </div>
              <a
                href={`mailto:${PROFILE.email}`}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1.05rem',
                  color: '#f5f5f0',
                  textDecoration: 'none',
                  wordBreak: 'break-all',
                  display: 'block',
                  marginBottom: '16px',
                }}
              >
                {PROFILE.email}
              </a>
            </div>
            <button
              type="button"
              onClick={copyEmail}
              style={{
                background: 'none',
                border: '1px solid rgba(200, 184, 140, 0.3)',
                color: '#c8b88c',
                fontFamily: 'Inter, sans-serif',
                fontSize: '10px',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                padding: '8px 14px',
                cursor: 'pointer',
                borderRadius: '2px',
                width: 'fit-content',
              }}
            >
              {copied ? 'COPIED TO CLIPBOARD ✓' : 'COPY ADDRESS'}
            </button>
          </div>

          {/* Phone */}
          <div
            style={{
              backgroundColor: '#111111',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '2px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#8a8a86',
                  marginBottom: '12px',
                }}
              >
                PHONE / WHATSAPP
              </div>
              <a
                href={`tel:${PROFILE.phone}`}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1.15rem',
                  color: '#f5f5f0',
                  textDecoration: 'none',
                  display: 'block',
                  marginBottom: '16px',
                }}
              >
                {PROFILE.phone}
              </a>
            </div>
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '10px',
                letterSpacing: '0.12em',
                color: '#8a8a86',
              }}
            >
              IST (UTC +5:30)
            </span>
          </div>

          {/* Location */}
          <div
            style={{
              backgroundColor: '#111111',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '2px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#8a8a86',
                  marginBottom: '12px',
                }}
              >
                OPERATIONAL BASE
              </div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1.15rem',
                  color: '#f5f5f0',
                  marginBottom: '16px',
                  fontWeight: 300,
                }}
              >
                {PROFILE.location}
              </div>
            </div>
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '10px',
                letterSpacing: '0.12em',
                color: '#c8b88c',
              }}
            >
              GLOBAL REMOTE / HYBRID
            </span>
          </div>

          {/* Curriculum Vitae / Resume Card */}
          <div
            style={{
              backgroundColor: '#111111',
              border: '1px solid rgba(200, 184, 140, 0.28)',
              borderRadius: '2px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#e5c378',
                  marginBottom: '12px',
                }}
              >
                CURRICULUM VITAE
              </div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1.15rem',
                  color: '#f5f5f0',
                  marginBottom: '8px',
                  fontWeight: 400,
                }}
              >
                Verified Engineering Resume
              </div>
              <p
                style={{
                  margin: '0 0 16px 0',
                  fontSize: '0.85rem',
                  color: '#8a8a86',
                  lineHeight: 1.5,
                  fontWeight: 300,
                }}
              >
                Comprehensive breakdown of agentic architectures, ML tenures, and academic foundation.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={openResumeModal}
                style={{
                  background: '#e5c378',
                  border: 'none',
                  color: '#07080a',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  padding: '9px 16px',
                  cursor: 'pointer',
                  borderRadius: '2px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  boxShadow: '0 2px 10px rgba(229, 195, 120, 0.3)',
                  transition: 'all 0.2s ease',
                }}
              >
                <span>SEE RESUME</span>
                <span aria-hidden="true">↗</span>
              </button>
              <a
                href="/resume.pdf"
                download="Resume_Dilipchendra.pdf"
                style={{
                  background: 'none',
                  border: '1px solid rgba(200, 184, 140, 0.35)',
                  color: '#e5c378',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '10px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  padding: '8px 14px',
                  textDecoration: 'none',
                  borderRadius: '2px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'all 0.2s ease',
                }}
              >
                <span>PDF ↓</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Sub-Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '32px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                letterSpacing: '0.15em',
                color: '#f5f5f0',
                textTransform: 'uppercase',
              }}
            >
              {PROFILE.name}
            </span>
            <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '11px' }}>—</span>
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                color: '#8a8a86',
              }}
            >
              {PROFILE.role}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '10px',
                letterSpacing: '0.18em',
                color: '#8a8a86',
                textDecoration: 'none',
                textTransform: 'uppercase',
              }}
            >
              GITHUB
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '10px',
                letterSpacing: '0.18em',
                color: '#8a8a86',
                textDecoration: 'none',
                textTransform: 'uppercase',
              }}
            >
              LINKEDIN
            </a>
            <a
              href="#"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '10px',
                letterSpacing: '0.18em',
                color: '#c8b88c',
                textDecoration: 'none',
                textTransform: 'uppercase',
              }}
            >
              TOP ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
