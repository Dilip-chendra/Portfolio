// ─────────────────────────────────────────────
// App — Root Cinematic Portfolio Composition
//
// 1. Cinematic Hero (300-Frame Master Video Sequence)
// 2. Identity / Operating Profile (About)
// 3. Selected AI Systems (Work & Case Studies)
// 4. Technical Arsenal (Stack & System Relationships)
// 5. Professional Experience (Engineering Tenures)
// 6. Systems Archive (More Repositories)
// 7. Credential Vault (Verified Certifications)
// 8. Academic Foundation (Education)
// 9. Open Source Presence (GitHub & LinkedIn)
// 10. Contact & Inquiries (Footer)
// ─────────────────────────────────────────────

import { Navigation } from '@/components/Navigation/Navigation'
import { HeroSection } from '@/components/HeroSection/HeroSection'
import { LoadingScreen } from '@/components/LoadingScreen/LoadingScreen'
import { AboutSection } from '@/components/AboutSection/AboutSection'
import { WorkSection } from '@/components/WorkSection/WorkSection'
import { StackSection } from '@/components/StackSection/StackSection'
import { ExperienceSection } from '@/components/ExperienceSection/ExperienceSection'
import { ArchiveSection } from '@/components/ArchiveSection/ArchiveSection'
import { CertificationsSection } from '@/components/CertificationsSection/CertificationsSection'
import { EducationSection } from '@/components/EducationSection/EducationSection'
import { PresenceSection } from '@/components/PresenceSection/PresenceSection'
import { ContactSection } from '@/components/ContactSection/ContactSection'
import { ResumeModal } from '@/components/ResumeModal/ResumeModal'
import { ResumeModalProvider } from '@/context/ResumeModalContext'
import { useFrameSequence } from '@/hooks/useFrameSequence'

export default function App() {
  const frameState = useFrameSequence()

  return (
    <ResumeModalProvider>
      {/* Loading gate — unmounts once critical frames are ready */}
      <LoadingScreen
        progress={frameState.loadingProgress}
        isReady={frameState.isReadyForPlayback}
      />

      {/* Fixed top navigation layer */}
      <Navigation />

      {/* Interactive Curriculum Vitae / Resume Modal */}
      <ResumeModal />

      <main style={{ backgroundColor: '#0a0a0a', color: '#f5f5f0' }}>
        {/* 1. Cinematic Hero — Scroll-Controlled Frame Sequence */}
        <HeroSection frameState={frameState} />

        {/* 2. Identity & Operating Profile */}
        <AboutSection />

        {/* 3. Selected Flagship AI Systems */}
        <WorkSection />

        {/* 4. Technical Arsenal & Architecture DNA */}
        <StackSection />

        {/* 5. Professional Experience & ML Tenures */}
        <ExperienceSection />

        {/* 6. Systems Archive / Repository Catalog */}
        <ArchiveSection />

        {/* 7. Verified Credential Vault */}
        <CertificationsSection />

        {/* 8. Academic Foundation */}
        <EducationSection />

        {/* 9. GitHub & LinkedIn Presence */}
        <PresenceSection />

        {/* 10. Contact & Inquiries */}
        <ContactSection />
      </main>
    </ResumeModalProvider>
  )
}
