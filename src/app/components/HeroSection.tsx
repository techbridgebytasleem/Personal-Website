'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '3', label: 'Cloud Platforms' },
  { value: '7+', label: 'Certifications' },
];

const credentials = [
  { icon: 'CloudIcon', label: 'AWS · GCP · Azure' },
  { icon: 'SparklesIcon', label: 'AI Generalist' },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const layers = container.querySelectorAll<HTMLElement>('[data-parallax]');
      layers.forEach((layer) => {
        const speed = parseFloat(layer.dataset.parallax || '0');
        layer.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-background" />

      {/* Atmospheric gradient blobs */}
      <div
        data-parallax="20"
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        data-parallax="12"
        className="absolute bottom-1/3 left-1/5 w-64 h-64 rounded-full opacity-8 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #1A4080 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            {/* Name */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.0] tracking-tight mb-4 animate-fade-up delay-100">
              Tasleem <span className="text-shimmer">Banu</span>
            </h1>

            {/* Role */}
            <p className="text-base sm:text-lg text-muted-foreground font-medium mb-6 animate-fade-up delay-200">
              Multi-Cloud Architect · Cloud Consultant at{' '}
              <span className="text-foreground font-semibold">TCS</span>
              {' '}·{' '}
              <span className="text-gold">AWS · GCP · Azure</span>
            </p>

            {/* Summary */}
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg mb-8 animate-fade-up delay-300">
              20+ years of progressive IT experience spanning cloud architecture, DevOps, enterprise transformation, and emerging AI/GenAI. Passionate about accelerating global cloud adoption and bridging cloud infrastructure with intelligent applications.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-12 animate-fade-up delay-400">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gold text-primary-foreground rounded-lg font-semibold text-sm hover:bg-accent transition-all duration-200 gold-glow-strong"
              >
                <Icon name="EnvelopeIcon" size={16} />
                Get In Touch
              </a>
              <a
                href="https://www.linkedin.com/in/tasleem-soudagar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-gold/40 text-gold rounded-lg font-semibold text-sm hover:bg-gold/10 transition-all duration-200"
              >
                <Icon name="LinkIcon" size={16} />
                LinkedIn Profile
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 animate-fade-up delay-500">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="font-display text-2xl font-bold text-gold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Headshot — clean, no floating badges */}
          <div className="order-1 lg:order-2 flex flex-col items-center gap-6">
            {/* Photo frame */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Outer gold ring */}
              <div className="absolute inset-0 rounded-full border-2 border-gold/30 animate-pulse-gold" />
              <div className="absolute inset-3 rounded-full border border-gold/20" />

              {/* Photo container */}
              <div
                className="absolute inset-6 rounded-full overflow-hidden border-2 border-gold/50 shadow-2xl"
                style={{ boxShadow: '0 0 60px rgba(212,175,55,0.2), 0 20px 60px rgba(0,0,0,0.5)' }}
              >
                <AppImage
                  src="/assets/images/ChatGPT_Image_Dec_21,_2025,_09_40_18_PM.png"
                  alt="Tasleem Banu — Multi-Cloud Architect and Cloud Consultant, professional headshot"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 640px) 200px, (max-width: 1024px) 280px, 336px"
                />
              </div>

              {/* Decorative arc */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="48" stroke="#D4AF37" strokeWidth="0.3" strokeDasharray="4 8" opacity="0.4" />
              </svg>
            </div>

            {/* Credential strip — centered below photo */}
            <div className="flex items-center gap-3 flex-wrap justify-center">
              {credentials.map((cred, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg card-surface border border-gold/20 text-xs font-medium text-foreground"
                >
                  <Icon name={cred.icon as any} size={14} className="text-gold shrink-0" />
                  <span>{cred.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Location bar */}
        <div className="mt-12 flex items-center gap-2 text-xs text-muted-foreground animate-fade-up delay-600">
          <Icon name="MapPinIcon" size={14} className="text-gold" />
          <span>Kuala Lumpur, Malaysia</span>
          <span className="mx-2 text-border">·</span>
          <Icon name="BriefcaseIcon" size={14} className="text-gold" />
          <span>Tata Consultancy Services</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <Icon name="ChevronDownIcon" size={16} />
      </div>
    </section>
  );
}