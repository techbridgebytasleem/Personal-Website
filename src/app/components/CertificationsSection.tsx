'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Cert {
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  category: string;
  color: string;
  icon: string;
  featured?: boolean;
}

const certifications: Cert[] = [
  {
    name: 'Google Cloud Digital Leader',
    issuer: 'Google',
    issueDate: 'Jan 2026',
    expiryDate: 'Jan 2029',
    category: 'Cloud Leadership',
    color: '#4285F4',
    icon: 'CloudIcon',
    featured: true,
  },
  {
    name: 'Generative AI Leader Certification',
    issuer: 'Google',
    issueDate: 'Dec 2025',
    expiryDate: 'Dec 2028',
    category: 'AI & GenAI',
    color: '#D4AF37',
    icon: 'SparklesIcon',
    featured: true,
  },
  {
    name: 'Extend Gemini Enterprise Assistant Capabilities',
    issuer: 'Google Cloud Skills Boost',
    issueDate: 'Jan 2026',
    credentialId: '4dd5360b-7691-4cb3-930c-6d6c374e17b4',
    category: 'AI & GenAI',
    color: '#F0D060',
    icon: 'CpuChipIcon',
  },
  {
    name: 'Create and maintain Vertex AI Search data stores',
    issuer: 'Google Cloud Skills Boost',
    issueDate: 'Dec 2025',
    credentialId: 'b11cf7b7-b040-4705-9408-e820dfb29026',
    category: 'Vertex AI',
    color: '#34A853',
    icon: 'MagnifyingGlassIcon',
  },
  {
    name: 'Create media search and media recommendations with AI Applications',
    issuer: 'Google Cloud Skills Boost',
    issueDate: 'Jan 2026',
    credentialId: '84c2fa50-3bba-41ca-bec2-4238ec446768',
    category: 'AI Applications',
    color: '#EA4335',
    icon: 'FilmIcon',
  },
  {
    name: 'Configure AI Applications to optimize search results',
    issuer: 'Google Cloud Skills Boost',
    issueDate: 'Dec 2025',
    credentialId: '3c9251c1-5fa2-40ec-acf7-c67faffe381b',
    category: 'AI Applications',
    color: '#FBBC05',
    icon: 'AdjustmentsHorizontalIcon',
  },
  {
    name: 'Build search and recommendations applications with AI Applications',
    issuer: 'Google Cloud Skills Boost',
    issueDate: 'Dec 2025',
    credentialId: '5217da6d-7dc5-4379-a4e6-176f7530ade0',
    category: 'AI Applications',
    color: '#4285F4',
    icon: 'RectangleStackIcon',
  },
];

export default function CertificationsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll<HTMLElement>('.cert-card');
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              }, i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="certifications" className="py-20 lg:py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6" ref={sectionRef}>
        {/* Header */}
        <div className="mb-16">
          <span className="text-gold text-xs font-bold uppercase tracking-widest mb-3 block">Credentials</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
            Certifications
            <br />
            <span className="text-shimmer">Gallery</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl text-sm leading-relaxed">
            Validated expertise across Google Cloud, AI/GenAI, and enterprise cloud technologies.
          </p>
        </div>

        {/* Grid — BENTO AUDIT:
          Array has 7 cards: [GCP Digital Leader, GenAI Leader, Extend Gemini, Vertex AI Search, Media Search, Configure AI, Build Search]
          Desktop grid-cols-3:
          Row 1: [col-1: GCP Digital Leader featured cs-1] [col-2: GenAI Leader featured cs-1] [col-3: Extend Gemini cs-1]
          Row 2: [col-1: Vertex AI Search cs-1] [col-2: Media Search cs-1] [col-3: Configure AI cs-1]
          Row 3: [col-1: Build Search cs-3]
          Placed 7/7 ✓

          Mobile grid-cols-1: All 7 stack ✓
          Tablet grid-cols-2:
          Row 1: [col-1: GCP Digital Leader] [col-2: GenAI Leader]
          Row 2: [col-1: Extend Gemini] [col-2: Vertex AI Search]
          Row 3: [col-1: Media Search] [col-2: Configure AI]
          Row 4: [col-1: Build Search cs-2]
          Placed 7/7 ✓
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1: GCP Digital Leader — featured */}
          {/* Card 2: GenAI Leader — featured */}
          {/* Cards 3-6: regular */}
          {/* Card 7: Build Search — last row full width */}
          {certifications.map((cert, index) => {
            const isLast = index === certifications.length - 1;
            return (
              <div
                key={index}
                className={`cert-card card-surface rounded-2xl p-6 group cursor-default transition-all duration-300 hover:border-gold/50 relative overflow-hidden ${isLast ? 'md:col-span-2 lg:col-span-3' : ''} ${cert.featured ? 'border-gold/30' : ''}`}
                style={{
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s, box-shadow 0.3s',
                  boxShadow: cert.featured
                    ? `0 0 30px rgba(212,175,55,0.12), 0 4px 24px rgba(0,0,0,0.3)`
                    : '0 4px 24px rgba(0,0,0,0.25)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${cert.color}20, 0 8px 32px rgba(0,0,0,0.4)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = cert.featured
                    ? '0 0 30px rgba(212,175,55,0.12), 0 4px 24px rgba(0,0,0,0.3)'
                    : '0 4px 24px rgba(0,0,0,0.25)';
                }}
              >
                {/* Background accent */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5 pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${cert.color} 0%, transparent 70%)`, filter: 'blur(20px)' }}
                />

                <div className="relative z-10">
                  {/* Icon + Category */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${cert.color}18`, border: `1px solid ${cert.color}35` }}
                    >
                      <Icon name={cert.icon as Parameters<typeof Icon>[0]['name']} size={20} style={{ color: cert.color }} />
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span
                        className="text-xs font-semibold px-2 py-1 rounded-full"
                        style={{ background: `${cert.color}12`, color: cert.color, border: `1px solid ${cert.color}25` }}
                      >
                        {cert.category}
                      </span>
                      {cert.featured && (
                        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-gold/15 border border-gold/30">
                          <Icon name="StarIcon" size={10} className="text-gold" variant="solid" />
                          <span className="text-gold text-xs font-semibold">Featured</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Cert name */}
                  <h3 className="font-semibold text-foreground text-sm leading-snug mb-2 group-hover:text-gold transition-colors duration-200">
                    {cert.name}
                  </h3>

                  {/* Issuer */}
                  <p className="text-muted-foreground text-xs font-medium mb-3">{cert.issuer}</p>

                  {/* Dates */}
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Icon name="CalendarDaysIcon" size={11} />
                      Issued {cert.issueDate}
                    </span>
                    {cert.expiryDate && (
                      <span className="flex items-center gap-1">
                        <Icon name="ClockIcon" size={11} />
                        Expires {cert.expiryDate}
                      </span>
                    )}
                  </div>

                  {/* Credential ID */}
                  {cert.credentialId && (
                    <div className="mt-3 pt-3 border-t border-border">
                      <p className="text-xs text-muted-foreground/60">
                        <span className="font-medium text-muted-foreground">Credential ID:</span>{' '}
                        <span className="font-mono text-xs">{cert.credentialId}</span>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* LinkedIn credentials CTA */}
        <div className="mt-8 text-center">
          <a
            href="https://www.linkedin.com/in/tasleem-soudagar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gold hover:text-accent transition-colors border-b border-gold/40 hover:border-accent pb-0.5"
          >
            <Icon name="LinkIcon" size={14} />
            View all credentials on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}