'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const milestones = [
  {
    year: '2006',
    title: 'Storage Engineering',
    description: 'Started at Mphasis with SAN storage and enterprise infrastructure',
    icon: 'CircleStackIcon',
  },
  {
    year: '2013',
    title: 'Cloud Emergence',
    description: 'Dell EMC — joined Cloud as a Service team, bridging on-premise and cloud',
    icon: 'CloudIcon',
  },
  {
    year: '2020',
    title: 'GCP Architecture',
    description: 'IBM — GCP Cloud Solution Architect, leading Datalake migrations on BigQuery',
    icon: 'ServerIcon',
  },
  {
    year: '2022',
    title: 'Multi-Cloud Leadership',
    description: 'TCS — AWS Solution Architect delivering enterprise-scale transformations',
    icon: 'GlobeAltIcon',
  },
  {
    year: '2025',
    title: 'AI Generalist Journey',
    description: 'Pursuing GenAI certifications — bridging 20 years of cloud expertise with AI',
    icon: 'SparklesIcon',
  },
];

export default function AIJourneySection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll<HTMLElement>('.journey-item');
            items.forEach((item, i) => {
              setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
              }, i * 120);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-card/40">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Atmospheric background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,175,55,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Watermark text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="text-[20vw] font-display font-black tracking-tighter leading-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(212,175,55,0.04) 0%, transparent 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          AI
        </span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6" ref={sectionRef}>
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <span className="text-gold text-xs font-bold uppercase tracking-widest mb-3 block">Evolution</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              The Road
              <br />
              <span className="text-shimmer">Ahead</span>
            </h2>
          </div>
          <div className="flex flex-col justify-between h-full">
            <p className="text-muted-foreground leading-relaxed text-sm">
              My career has always been driven by curiosity and the desire to stay at the forefront of technology. Now, as AI reshapes every industry, I'm channeling 20+ years of enterprise cloud expertise into mastering Generative AI — becoming an <span className="text-gold font-semibold">AI Generalist</span> who can bridge the gap between cloud infrastructure and intelligent applications.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm mt-4">
              My goal: help enterprises move from <span className="text-foreground font-medium">AI experimentation to real, operationalized AI at scale</span> — delivering scalable, secure, and measurable business outcomes.
            </p>

            {/* Quote card */}
            <div className="mt-6 p-5 rounded-xl border border-gold/25 bg-gold/5 relative">
              <Icon name="ChatBubbleLeftIcon" size={20} className="text-gold/50 mb-3" />
              <p className="text-foreground text-sm font-medium italic leading-relaxed">
                "Expanding Generative AI expertise to architect enterprise-ready solutions, helping organizations pragmatically operationalize AI within cloud ecosystems."
              </p>
              <p className="text-gold text-xs font-semibold mt-3">— Tasleem Banu</p>
            </div>
          </div>
        </div>

        {/* Milestone flow */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="journey-item relative"
                style={{
                  opacity: 0,
                  transform: 'translateX(-16px)',
                  transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {/* Dot on timeline */}
                <div
                  className="hidden lg:flex absolute -top-1 left-0 right-0 justify-center"
                >
                  <div
                    className="w-4 h-4 rounded-full border-2 border-gold"
                    style={{
                      background: index === milestones.length - 1 ? '#D4AF37' : '#0A1628',
                      boxShadow: index === milestones.length - 1 ? '0 0 12px rgba(212,175,55,0.6)' : 'none',
                    }}
                  />
                </div>

                <div className="lg:mt-8 card-surface rounded-xl p-4 hover:border-gold/40 transition-all duration-300 h-full">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                    style={{
                      background: index === milestones.length - 1 ? 'rgba(212,175,55,0.2)' : 'rgba(255,255,255,0.05)',
                      border: `1px solid ${index === milestones.length - 1 ? 'rgba(212,175,55,0.4)' : 'rgba(255,255,255,0.08)'}`,
                    }}
                  >
                    <Icon
                      name={milestone.icon as Parameters<typeof Icon>[0]['name']}
                      size={16}
                      className={index === milestones.length - 1 ? 'text-gold' : 'text-muted-foreground'}
                    />
                  </div>
                  <div className="text-gold text-xs font-bold mb-1">{milestone.year}</div>
                  <h4 className="font-semibold text-foreground text-sm mb-1.5 leading-snug">{milestone.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}