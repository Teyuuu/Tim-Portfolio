import React, { useState } from 'react'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { SelectedWork } from '@/components/SelectedWork'
import { Services } from '@/components/Services'
import { Certifications } from '@/components/Certifications'
import { Experience } from '@/components/Experience'
import { ContactFooter } from '@/components/ContactFooter'
import { ContactModal } from '@/components/ContactModal'

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  const handleOpenContact = () => setIsContactOpen(true)
  const handleCloseContact = () => setIsContactOpen(false)

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 1. Hero Section (matching Screenshot 1) */}
        <Hero onOpenContact={handleOpenContact} />

        {/* 2. Selected Work Section (matching Screenshot 2) */}
        <SelectedWork onOpenContact={handleOpenContact} />

        {/* 3. Services Section (matching Screenshot 3) */}
        <Services onOpenContact={handleOpenContact} />

        {/* 4. Certifications Section (TESDA & Technical Qualifications) */}
        <Certifications />

        {/* 5. Experience Section (Dark Mode, matching Screenshot 4) */}
        <Experience />
      </main>

      {/* 6. Contact CTA & Footer (matching Screenshot 5) */}
      <ContactFooter onOpenContact={handleOpenContact} />

      {/* Contact Dialog Modal */}
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
    </div>
  )
}
