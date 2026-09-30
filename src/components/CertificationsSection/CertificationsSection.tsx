// ─────────────────────────────────────────────
// CertificationsSection — Verified Credential Vault
// Factual, verified certifications across Anthropic, LangChain & Cloud.
// ─────────────────────────────────────────────

import { CERTIFICATIONS } from '@/data/portfolioData'

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      aria-label="Verified Certifications Vault"
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
        <div style={{ marginBottom: 'clamp(40px, 6vh, 64px)' }}>
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
            06 / CREDENTIAL VAULT
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
            Verified Industry Certifications
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(0.88rem, 1.2vw, 1rem)',
              color: '#8a8a86',
              maxWidth: '680px',
              margin: 0,
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            Rigorous programs completed across Model Context Protocol (MCP), advanced Claude tooling, LangChain framework engineering, and cloud AI systems.
          </p>
        </div>

        {/* Certifications List */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px',
          }}
        >
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              style={{
                backgroundColor: '#111111',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '2px',
                padding: '28px',
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
                    marginBottom: '16px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '10px',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: '#c8b88c',
                    }}
                  >
                    {cert.issuer}
                  </span>
                  <span
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '10px',
                      color: '#8a8a86',
                    }}
                  >
                    {cert.date}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 300,
                    letterSpacing: '-0.01em',
                    color: '#f5f5f0',
                    margin: '0 0 8px 0',
                    lineHeight: 1.4,
                  }}
                >
                  {cert.title}
                </h3>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  paddingTop: '16px',
                  marginTop: '16px',
                }}
              >
                <span
                  style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(200, 184, 140, 0.6)',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '9px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#8a8a86',
                  }}
                >
                  {cert.category} · VERIFIED CREDENTIAL
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
