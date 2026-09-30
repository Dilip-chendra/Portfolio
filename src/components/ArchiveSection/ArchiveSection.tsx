// ─────────────────────────────────────────────
// ArchiveSection — Systems Repository Directory
// Secondary repository catalog showcasing architectural breadth.
// ─────────────────────────────────────────────

import { useState } from 'react'
import { REPOSITORY_ARCHIVE } from '@/data/portfolioData'

export function ArchiveSection() {
  const [filter, setFilter] = useState<string>('ALL')

  const categories = ['ALL', ...Array.from(new Set(REPOSITORY_ARCHIVE.map((p) => p.category)))]

  const filteredProjects =
    filter === 'ALL'
      ? REPOSITORY_ARCHIVE
      : REPOSITORY_ARCHIVE.filter((p) => p.category === filter)

  return (
    <section
      id="archive"
      aria-label="Systems Repository Archive"
      style={{
        position: 'relative',
        zIndex: 10,
        backgroundColor: '#0a0a0a',
        padding: 'clamp(96px, 14vh, 160px) clamp(24px, 6vw, 96px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ marginBottom: '40px' }}>
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
            05 / SYSTEMS ARCHIVE
          </div>
          <h2
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)',
              fontWeight: 200,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              color: '#f5f5f0',
              margin: '0 0 16px 0',
            }}
          >
            Engineering Directory & Applied Work
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(0.88rem, 1.2vw, 1rem)',
              color: '#8a8a86',
              maxWidth: '720px',
              margin: 0,
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            A catalog of open-source repositories, specialized prototypes, and research tools demonstrating breadth across full-stack AI, computer vision, voice translation, and automation.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '40px',
          }}
        >
          {categories.map((cat) => {
            const isSelected = filter === cat
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                style={{
                  background: isSelected ? '#c8b88c' : 'rgba(255, 255, 255, 0.03)',
                  border: isSelected ? '1px solid #c8b88c' : '1px solid rgba(255, 255, 255, 0.08)',
                  color: isSelected ? '#0a0a0a' : '#8a8a86',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '10px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  padding: '6px 14px',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  fontWeight: isSelected ? 500 : 400,
                  transition: 'all 0.2s ease',
                }}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Repository Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '20px',
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.name}
              style={{
                backgroundColor: '#111111',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '2px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color 0.2s ease',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '14px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '9px',
                      letterSpacing: '0.15em',
                      color: '#c8b88c',
                      textTransform: 'uppercase',
                    }}
                  >
                    {project.category}
                  </span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} on GitHub`}
                    style={{
                      color: '#8a8a86',
                      textDecoration: 'none',
                      fontSize: '12px',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    ↗
                  </a>
                </div>

                <h3
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1.05rem',
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                    color: '#f5f5f0',
                    margin: '0 0 8px 0',
                  }}
                >
                  {project.name}
                </h3>

                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.82rem',
                    lineHeight: 1.6,
                    color: '#8a8a86',
                    margin: '0 0 18px 0',
                    fontWeight: 300,
                  }}
                >
                  {project.tagline}
                </p>
              </div>

              {/* Tech Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '9px',
                      color: '#9a9a95',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      padding: '3px 7px',
                      borderRadius: '2px',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
