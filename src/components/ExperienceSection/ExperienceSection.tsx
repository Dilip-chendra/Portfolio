// ─────────────────────────────────────────────
// ExperienceSection — Professional Track Record
// Impact-driven engineering tenure and pipeline milestones.
// ─────────────────────────────────────────────

import { EXPERIENCES } from '@/data/portfolioData'

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-label="Professional Experience"
      style={{
        position: 'relative',
        zIndex: 10,
        backgroundColor: '#0a0a0a',
        padding: 'clamp(96px, 14vh, 160px) clamp(24px, 6vw, 96px)',
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
            04 / EXPERIENCE
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
            Production Engineering & ML Tenures
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)',
              color: '#8a8a86',
              maxWidth: '720px',
              margin: 0,
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            Real contributions across machine learning workflows, conversational voice pipelines, and backend automation systems.
          </p>
        </div>

        {/* Timeline Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.id}
              style={{
                backgroundColor: '#111111',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '2px',
                padding: 'clamp(28px, 4vw, 40px)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '28px',
              }}
            >
              {/* Left Column: Role & Company */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '12px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '10px',
                      color: '#c8b88c',
                      letterSpacing: '0.18em',
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <span
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '11px',
                      color: '#8a8a86',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {exp.location}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(1.25rem, 1.8vw, 1.55rem)',
                    fontWeight: 300,
                    letterSpacing: '-0.02em',
                    color: '#f5f5f0',
                    margin: '0 0 6px 0',
                  }}
                >
                  {exp.role}
                </h3>

                <div
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.95rem',
                    color: '#c8b88c',
                    fontWeight: 400,
                    marginBottom: '16px',
                  }}
                >
                  {exp.company}
                </div>

                <div
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.82rem',
                    color: '#8a8a86',
                    letterSpacing: '0.05em',
                    marginBottom: '24px',
                  }}
                >
                  {exp.period}
                </div>

                {/* Tech Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {exp.techTags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '10px',
                        color: '#a0a09b',
                        backgroundColor: '#181818',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        padding: '3px 8px',
                        borderRadius: '2px',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Factual Responsibilities */}
              <div
                style={{
                  borderLeft: '1px solid rgba(255, 255, 255, 0.05)',
                  paddingLeft: 'clamp(16px, 3vw, 32px)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '10px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#8a8a86',
                    marginBottom: '16px',
                  }}
                >
                  DELIVERABLES & CONTRIBUTIONS
                </div>

                <ul
                  style={{
                    margin: 0,
                    paddingLeft: '18px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  {exp.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.88rem',
                        lineHeight: 1.68,
                        color: '#d0d0cb',
                        fontWeight: 300,
                      }}
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
