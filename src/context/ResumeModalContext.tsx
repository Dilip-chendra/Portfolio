import React, { createContext, useContext, useState, useCallback } from 'react'

interface ResumeModalContextType {
  isOpen: boolean
  openResumeModal: () => void
  closeResumeModal: () => void
}

const ResumeModalContext = createContext<ResumeModalContextType | undefined>(undefined)

export function ResumeModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openResumeModal = useCallback(() => setIsOpen(true), [])
  const closeResumeModal = useCallback(() => setIsOpen(false), [])

  return (
    <ResumeModalContext.Provider value={{ isOpen, openResumeModal, closeResumeModal }}>
      {children}
    </ResumeModalContext.Provider>
  )
}

export function useResumeModal() {
  const context = useContext(ResumeModalContext)
  if (!context) {
    throw new Error('useResumeModal must be used within a ResumeModalProvider')
  }
  return context
}
