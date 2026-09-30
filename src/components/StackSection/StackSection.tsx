// ─────────────────────────────────────────────
// StackSection — Technical Arsenal & Architectural DNA
// Categorized competencies and structural project relationships.
// ─────────────────────────────────────────────

import { useState } from 'react'
import { TECH_CATEGORIES, TECH_CONNECTIONS } from '@/data/portfolioData'

export function StackSection() {
  const [selectedConnection, setSelectedConnection] = useState<number>(0)

  return (
    <section
      id="stack"
      aria-label="Technical Arsenal and Architecture"
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
            03 / TECHNICAL ARSENAL
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
            Specialized Tools, Runtimes & Infrastructure
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
            A disciplined stack organized by architectural purpose — from autonomous multi-agent state machines to low-latency backend execution.
          </p>
        </div>

        {/* 4 Categorized Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginBottom: 'clamp(64px, 10vh, 96px)',
          }}
        >
          {TECH_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.id}
              style={{
                backgroundColor: '#111111',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '2px',
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '10px',
                    letterSpacing: '0.2em',
                    color: '#c8b88c',
                  }}
                >
                  CAT 0{idx + 1}
                </span>
                <span
                  style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(200, 184, 140, 0.4)',
                  }}
                />
              </div>

              <h3
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1.15rem',
                  fontWeight: 300,
                  color: '#f5f5f0',
                  margin: '0 0 6px 0',
                  letterSpacing: '-0.02em',
                }}
              >
                {cat.title}
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.8rem',
                  lineHeight: 1.5,
                  color: '#8a8a86',
                  margin: '0 0 24px 0',
                  fontWeight: 300,
                }}
              >
                {cat.subtitle}
              </p>

              {/* Skills List */}
              <ul
                style={{
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  paddingTop: '20px',
                }}
              >
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.88rem',
                      color: '#d0d0cb',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontWeight: 300,
                    }}
                  >
                    <span
                      style={{
                        width: '3px',
                        height: '3px',
                        backgroundColor: '#c8b88c',
                        borderRadius: '50%',
                        flexShrink: 0,
                      }}
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Visual Architecture Relationships */}
        <div
          style={{
            backgroundColor: '#111111',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '2px',
            padding: 'clamp(28px, 4vw, 40px)',
          }}
        >
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '10px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#c8b88c',
              marginBottom: '20px',
            }}
          >
            SYSTEM-TO-STACK RELATIONSHIPS
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {/* Left selector */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {TECH_CONNECTIONS.map((conn, idx) => {
                const isActive = selectedConnection === idx
                return (
                  <button
                    key={conn.tech}
                    type="button"
                    onClick={() => setSelectedConnection(idx)}
                    style={{
                      textAlign: 'left',
                      background: isActive ? 'rgba(200, 184, 140, 0.08)' : 'transparent',
                      border: isActive
                        ? '1px solid rgba(200, 184, 140, 0.35)'
                        : '1px solid rgba(255, 255, 255, 0.04)',
                      padding: '14px 18px',
                      borderRadius: '2px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.9rem',
                        fontWeight: isActive ? 400 : 300,
                        color: isActive ? '#f5f5f0' : '#8a8a86',
                      }}
                    >
                      {conn.tech}
                    </span>
                    <span
                      style={{
                        color: isActive ? '#c8b88c' : 'rgba(255,255,255,0.2)',
                        fontSize: '11px',
                      }}
                    >
                      →
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Right detail card */}
            <div
              style={{
                backgroundColor: '#161616',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '2px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#8a8a86',
                  marginBottom: '8px',
                }}
              >
                LINKED IMPLEMENTATIONS
              </div>

              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: 400,
                  color: '#c8b88c',
                  marginBottom: '16px',
                }}
              >
                {TECH_CONNECTIONS[selectedConnection].projects.join('  ·  ')}
              </div>

              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.88rem',
                  lineHeight: 1.7,
                  color: '#d0d0cb',
                  margin: 0,
                  fontWeight: 300,
                }}
              >
                {TECH_CONNECTIONS[selectedConnection].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
