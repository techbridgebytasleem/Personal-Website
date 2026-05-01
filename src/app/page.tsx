import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import ExperienceSection from '@/app/components/ExperienceSection';
import SkillsSection from '@/app/components/SkillsSection';
import CertificationsSection from '@/app/components/CertificationsSection';
import AIJourneySection from '@/app/components/AIJourneySection';
import ContactSection from '@/app/components/ContactSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <CertificationsSection />
      <AIJourneySection />
      <ContactSection />
      <Footer />
    </main>
  );
}