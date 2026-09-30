// ─────────────────────────────────────────────
// AboutSection — Operating Profile
// Editorial, restrained, high-conviction engineering statement.
// ─────────────────────────────────────────────

import { ABOUT_BLOCKS, DISCIPLINES, PROFILE } from '@/data/portfolioData'
import { useResumeModal } from '@/context/ResumeModalContext'

export function AboutSection() {
  const { openResumeModal } = useResumeModal()
  return (
    <section
      id="about"
      aria-label="About and Operating Profile"
      style={{
        position: 'relative',
        zIndex: 10,
        backgroundColor: '#0a0a0a',
        padding: 'clamp(80px, 12vh, 140px) clamp(16px, 4vw, 80px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
            01 / OPERATING PROFILE
          </div>
          <h2
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(2rem, 4.5vw, 4.2rem)',
              fontWeight: 200,
              letterSpacing: '-0.03em',
              lineHeight: 1.08,
              color: '#f5f5f0',
              maxWidth: '960px',
              margin: 0,
            }}
          >
            {PROFILE.coreStatement}
          </h2>

          {/* Action & Credentials Bar */}
          <div style={{ marginTop: '28px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={openResumeModal}
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: '11px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#07080a',
                backgroundColor: '#e5c378',
                border: '1px solid #e5c378',
                padding: '10px 22px',
                borderRadius: '3px',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                boxShadow: '0 2px 14px rgba(229, 195, 120, 0.35)',
                transition: 'all 0.2s ease',
              }}
            >
              <span>SEE VERIFIED RESUME (PDF)</span>
              <span aria-hidden="true">↗</span>
            </button>

            <a
              href="/resume.pdf"
              download="Resume_Dilipchendra.pdf"
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: '10.5px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#f5f5f0',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                padding: '10px 18px',
                borderRadius: '3px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s ease',
              }}
            >
              <span>DIRECT DOWNLOAD</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        {/* Narrative Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(24px, 3.5vw, 48px)',
            marginBottom: 'clamp(48px, 8vh, 88px)',
          }}
        >
          {ABOUT_BLOCKS.map((block) => (
            <div
              key={block.headline}
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderLeft: '1px solid rgba(200, 184, 140, 0.3)',
                paddingLeft: '24px',
              }}
            >
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '10px',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#8a8a86',
                  marginBottom: '12px',
                }}
              >
                {block.eyebrow}
              </span>
              <h3
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(1.15rem, 1.8vw, 1.45rem)',
                  fontWeight: 300,
                  color: '#f5f5f0',
                  letterSpacing: '-0.02em',
                  marginBottom: '16px',
                  lineHeight: 1.3,
                }}
              >
                {block.headline}
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                  lineHeight: 1.75,
                  color: '#8a8a86',
                  margin: 0,
                  fontWeight: 300,
                }}
              >
                {block.body}
              </p>
            </div>
          ))}
        </div>

        {/* Core Disciplines List */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: 'clamp(40px, 6vh, 64px)',
          }}
        >
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '10px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#8a8a86',
              marginBottom: '32px',
            }}
          >
            CORE ENGINEERING DISCIPLINES
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: 'clamp(16px, 2.5vw, 24px)',
            }}
          >
            {DISCIPLINES.map((disc, idx) => (
              <div
                key={disc.title}
                style={{
                  backgroundColor: '#111111',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  padding: '24px',
                  borderRadius: '2px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '11px',
                      color: '#c8b88c',
                      letterSpacing: '0.15em',
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(200, 184, 140, 0.5)',
                    }}
                  />
                </div>
                <h4
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1rem',
                    fontWeight: 400,
                    color: '#f5f5f0',
                    margin: '6px 0 0 0',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {disc.title}
                </h4>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.82rem',
                    lineHeight: 1.6,
                    color: '#8a8a86',
                    margin: 0,
                    fontWeight: 300,
                  }}
                >
                  {disc.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
