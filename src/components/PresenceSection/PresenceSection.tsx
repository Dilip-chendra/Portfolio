// ─────────────────────────────────────────────
// PresenceSection — GitHub & LinkedIn Open Source Presence
// Direct links to verified public code repositories and professional network.
// ─────────────────────────────────────────────

import { PROFILE } from '@/data/portfolioData'

export function PresenceSection() {
  return (
    <section
      aria-label="Open Source & Network Presence"
      style={{
        position: 'relative',
        zIndex: 10,
        backgroundColor: '#0a0a0a',
        padding: 'clamp(80px, 12vh, 128px) clamp(24px, 6vw, 96px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
          }}
        >
          {/* GitHub Presence Card */}
          <div
            style={{
              backgroundColor: '#111111',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '2px',
              padding: 'clamp(28px, 4vw, 40px)',
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
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#c8b88c',
                  marginBottom: '16px',
                }}
              >
                OPEN SOURCE CODEBASE
              </div>
              <h3
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(1.4rem, 2.2vw, 1.8rem)',
                  fontWeight: 300,
                  color: '#f5f5f0',
                  margin: '0 0 12px 0',
                  letterSpacing: '-0.02em',
                }}
              >
                github.com/Dilip-chendra
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.88rem',
                  lineHeight: 1.7,
                  color: '#8a8a86',
                  margin: '0 0 28px 0',
                  fontWeight: 300,
                }}
              >
                A public archive containing production runtimes, multi-agent frameworks, LangGraph state machines, RAG implementations, and full-stack experiments.
              </p>
            </div>

            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#f5f5f0',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '12px 24px',
                textDecoration: 'none',
                borderRadius: '2px',
                width: 'fit-content',
                transition: 'all 0.2s ease',
              }}
            >
              EXPLORE REPOSITORIES ↗
            </a>
          </div>

          {/* LinkedIn Network Card */}
          <div
            style={{
              backgroundColor: '#111111',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '2px',
              padding: 'clamp(28px, 4vw, 40px)',
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
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#c8b88c',
                  marginBottom: '16px',
                }}
              >
                PROFESSIONAL NETWORK
              </div>
              <h3
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(1.4rem, 2.2vw, 1.8rem)',
                  fontWeight: 300,
                  color: '#f5f5f0',
                  margin: '0 0 12px 0',
                  letterSpacing: '-0.02em',
                }}
              >
                linkedin.com/in/dilip-chendra
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.88rem',
                  lineHeight: 1.7,
                  color: '#8a8a86',
                  margin: '0 0 28px 0',
                  fontWeight: 300,
                }}
              >
                Technical updates, agentic system case studies, and ongoing engineering collaboration across the global AI builder community.
              </p>
            </div>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#0a0a0a',
                backgroundColor: '#c8b88c',
                padding: '12px 24px',
                textDecoration: 'none',
                borderRadius: '2px',
                fontWeight: 500,
                width: 'fit-content',
                transition: 'all 0.2s ease',
              }}
            >
              CONNECT ON LINKEDIN ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
