import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemsSection } from './components/ProblemsSection';
import { WorkflowSection } from './components/WorkflowSection';
import { MediationServicesSection } from './components/MediationServicesSection';
import { MediationForm } from './components/MediationForm';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedIssue, setSelectedIssue] = useState<string | undefined>(undefined);

  const scrollToForm = (issueType?: string) => {
    if (issueType) {
      setSelectedIssue(issueType);
    }
    const formElement = document.getElementById('mulai-mediasi');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#172033] antialiased selection:bg-[#06B6D4]/20 selection:text-[#0F2A43]">
      {/* Navigation Bar */}
      <Navbar onOpenForm={() => scrollToForm()} />

      {/* Main Content Sections strictly in order 1 to 6 */}
      <main className="flex-1">
        {/* 1. HERO */}
        <Hero onOpenForm={() => scrollToForm()} />

        {/* 2. MASALAH YANG BISA DIBANTU */}
        <ProblemsSection onOpenForm={(problemType) => scrollToForm(problemType)} />

        {/* 3. CARA KERJA */}
        <WorkflowSection onOpenForm={() => scrollToForm()} />

        {/* 4. LAYANAN MEDIASI */}
        <MediationServicesSection />

        {/* 5. MULAI MEDIASI (Form CTA Terbesar) */}
        <MediationForm initialIssue={selectedIssue} />

        {/* 6. FAQ */}
        <FaqSection />
      </main>

      {/* 7. FOOTER */}
      <Footer onOpenForm={() => scrollToForm()} />

      {/* Floating Desktop WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Mobile Sticky CTA ("💬 Mulai Mediasi") */}
      <StickyMobileBar onOpenForm={() => scrollToForm()} />
    </div>
  );
}
