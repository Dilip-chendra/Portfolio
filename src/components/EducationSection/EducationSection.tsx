// ─────────────────────────────────────────────
// EducationSection — Academic Foundation
// Clean, understated, factual academic background.
// ─────────────────────────────────────────────

import { EDUCATION_RECORD } from '@/data/portfolioData'

export function EducationSection() {
  return (
    <section
      id="education"
      aria-label="Academic Foundation"
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
            backgroundColor: '#111111',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '2px',
            padding: 'clamp(32px, 5vw, 56px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            alignItems: 'center',
          }}
        >
          {/* Left Info */}
          <div>
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
              07 / ACADEMIC FOUNDATION
            </div>

            <h3
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(1.4rem, 2.2vw, 2rem)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                color: '#f5f5f0',
                margin: '0 0 10px 0',
              }}
            >
              {EDUCATION_RECORD.degree}
            </h3>

            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.05rem',
                color: '#c8b88c',
                fontWeight: 400,
                marginBottom: '12px',
              }}
            >
              {EDUCATION_RECORD.specialization}
            </div>

            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.92rem',
                color: '#d0d0cb',
                marginBottom: '6px',
                fontWeight: 300,
              }}
            >
              {EDUCATION_RECORD.institution} ({EDUCATION_RECORD.institutionAbbr})
            </div>

            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.82rem',
                color: '#8a8a86',
              }}
            >
              {EDUCATION_RECORD.location}
            </div>
          </div>

          {/* Right Metrics */}
          <div
            style={{
              display: 'flex',
              gap: 'clamp(24px, 4vw, 48px)',
              justifyContent: 'flex-start',
              borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
              paddingLeft: 'clamp(20px, 4vw, 48px)',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: 200,
                  letterSpacing: '-0.03em',
                  color: '#f5f5f0',
                  lineHeight: 1,
                  marginBottom: '8px',
                }}
              >
                {EDUCATION_RECORD.cgpa}
              </div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '10px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#c8b88c',
                }}
              >
                CUMULATIVE GPA
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: 200,
                  letterSpacing: '-0.03em',
                  color: '#f5f5f0',
                  lineHeight: 1,
                  marginBottom: '8px',
                }}
              >
                2027
              </div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '10px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#8a8a86',
                }}
              >
                EXPECTED GRADUATION
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
