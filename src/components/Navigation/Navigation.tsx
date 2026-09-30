// ─────────────────────────────────────────────
// Navigation
//
// Responsive minimal navigation layer over the cinematic hero.
// - Desktop (>= 1100px): Clean inline links with guaranteed spacing (no wordmark collision)
// - Tablet & Mobile (< 1100px): Compact gold Resume pill + sleek slide-down cybernetic menu drawer
// ─────────────────────────────────────────────

import { useEffect, useRef, useState } from 'react'
import { useResumeModal } from '@/context/ResumeModalContext'

const NAV_LINKS = [
  { label: 'WORK', href: '#work', sub: 'Selected Flagship Systems' },
  { label: 'EXPERIENCE', href: '#experience', sub: 'Production Engineering Tenures' },
  { label: 'STACK', href: '#stack', sub: 'Technical Arsenal & MCP Protocol' },
  { label: 'ABOUT', href: '#about', sub: 'Operating Profile & Background' },
  { label: 'CONTACT', href: '#contact', sub: 'Direct Engineering Inquiries' },
] as const

export function Navigation() {
  const { openResumeModal } = useResumeModal()
  const [scrolledPastHero, setScrolledPastHero] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const rafId = useRef<number | null>(null)

  useEffect(() => {
    function check() {
      rafId.current = null
      const hero = document.getElementById('hero')
      if (hero) {
        const heroBottom = hero.offsetTop + hero.offsetHeight - 180
        setScrolledPastHero(window.scrollY > heroBottom)
      } else {
        setScrolledPastHero(window.scrollY > window.innerHeight * 3.4)
      }
    }

    function onScroll() {
      if (rafId.current !== null) return
      rafId.current = requestAnimationFrame(check)
    }

    function onResize() {
      check()
      if (window.innerWidth >= 1100) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize, { passive: true })
    check()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      if (rafId.current !== null) cancelAnimationFrame(rafId.current)
    }
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <>
      <nav
        aria-label="Primary navigation"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 clamp(16px, 3.5vw, 48px)',
          backgroundColor: scrolledPastHero || mobileMenuOpen ? 'rgba(7,8,10,0.95)' : 'transparent',
          backdropFilter: scrolledPastHero || mobileMenuOpen ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolledPastHero || mobileMenuOpen ? 'blur(16px)' : 'none',
          transition: 'background-color 0.3s ease, border-bottom 0.3s ease, backdrop-filter 0.3s ease',
          borderBottom: scrolledPastHero || mobileMenuOpen ? '1px solid rgba(200,184,140,0.22)' : 'none',
          boxSizing: 'border-box',
        }}
      >
        {/* Wordmark */}
        <a
          href="#"
          aria-label="Back to top"
          onClick={() => setMobileMenuOpen(false)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.18em',
            color: '#ffffff',
            textDecoration: 'none',
            textTransform: 'uppercase',
            textShadow: '0 2px 12px rgba(0,0,0,0.9)',
            userSelect: 'none',
            flexShrink: 0,
          }}
        >
          <span style={{ color: '#e5c378' }}>M.</span>
          <span>DILIPCHENDRA</span>
        </a>

        {/* ── DESKTOP NAVIGATION (>= 1100px) ── */}
        <div className="nav-desktop-container">
          <ul
            style={{
              display: 'flex',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              gap: 'clamp(14px, 1.8vw, 28px)',
              alignItems: 'center',
            }}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '9.5px',
                    fontWeight: link.label === 'CONTACT' ? 500 : 400,
                    letterSpacing: '0.18em',
                    color: link.label === 'CONTACT' ? '#e5c378' : '#e0dfda',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    textShadow: '0 2px 10px rgba(0,0,0,0.9)',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* Resume Primary Pill */}
            <li>
              <a
                href="/resume.pdf"
                onClick={(e) => {
                  e.preventDefault()
                  openResumeModal()
                }}
                aria-label="View Resume"
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '9px',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  color: '#07080a',
                  backgroundColor: '#e5c378',
                  padding: '5px 12px',
                  borderRadius: '3px',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  boxShadow: '0 2px 10px rgba(229, 195, 120, 0.3)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}
              >
                <span>RESUME</span>
                <span aria-hidden="true" style={{ fontSize: '10px' }}>↗</span>
              </a>
            </li>
          </ul>
        </div>

        {/* ── TABLET & MOBILE CONTROLS (< 1100px) ── */}
        <div className="nav-mobile-controls">
          {/* Quick Resume Button */}
          <button
            type="button"
            onClick={openResumeModal}
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: '8.5px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              color: '#07080a',
              backgroundColor: '#e5c378',
              padding: '4px 9px',
              borderRadius: '3px',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '3px',
              boxShadow: '0 2px 8px rgba(229, 195, 120, 0.3)',
            }}
          >
            <span>RESUME</span>
            <span aria-hidden="true">↗</span>
          </button>

          {/* Hamburger / Close Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(200, 184, 140, 0.3)',
              borderRadius: '3px',
              padding: '5px 10px',
              color: '#f5f5f0',
              fontFamily: '"Space Mono", monospace',
              fontSize: '11px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span style={{ color: '#e5c378', fontSize: '12px' }}>
              {mobileMenuOpen ? '✕' : '☰'}
            </span>
            <span style={{ fontSize: '9px', letterSpacing: '0.1em' }}>
              {mobileMenuOpen ? 'CLOSE' : 'MENU'}
            </span>
          </button>
        </div>
      </nav>

      {/* ── MOBILE SLIDE-DOWN DRAWER OVERLAY ── */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-label="Mobile Navigation"
          style={{
            position: 'fixed',
            top: '56px',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99,
            backgroundColor: 'rgba(7, 8, 11, 0.97)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 'clamp(20px, 4vh, 36px) clamp(20px, 5vw, 40px)',
            boxSizing: 'border-box',
            overflowY: 'auto',
          }}
        >
          {/* Mobile Links List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: '9px',
                color: '#c8b88c',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                paddingBottom: '12px',
              }}
            >
              DIRECTORY // NAVIGATION
            </div>

            {NAV_LINKS.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  textDecoration: 'none',
                  padding: '8px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '18px',
                      fontWeight: 300,
                      color: link.label === 'CONTACT' ? '#e5c378' : '#f5f5f0',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {link.label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '11px',
                      color: '#8a8a86',
                      fontWeight: 300,
                      marginTop: '2px',
                    }}
                  >
                    {link.sub}
                  </div>
                </div>

                <span
                  style={{
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '10px',
                    color: '#c8b88c',
                  }}
                >
                  0{idx + 1} →
                </span>
              </a>
            ))}
          </div>

          {/* Bottom Action Cards inside Mobile Drawer */}
          <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false)
                openResumeModal()
              }}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#e5c378',
                border: 'none',
                borderRadius: '4px',
                color: '#07080a',
                fontFamily: '"Space Mono", monospace',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 4px 16px rgba(229, 195, 120, 0.35)',
                cursor: 'pointer',
                marginBottom: '12px',
              }}
            >
              <span>INSPECT VERIFIED RESUME (PDF)</span>
              <span aria-hidden="true">↗</span>
            </button>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '9px',
                  color: '#8a8a86',
                  letterSpacing: '0.1em',
                }}
              >
                M. DILIPCHENDRA · HYDERABAD
              </span>
              <a
                href="https://github.com/Dilip-chendra"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '9px',
                  color: '#e5c378',
                  textDecoration: 'none',
                }}
              >
                GITHUB ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
