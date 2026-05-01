'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface SkillGroup {
  category: string;
  icon: string;
  color: string;
  skills: string[];
  colSpan?: string;
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Cloud Platforms',
    icon: 'CloudIcon',
    color: '#D4AF37',
    skills: ['Amazon Web Services (AWS)', 'Google Cloud Platform (GCP)', 'Microsoft Azure', 'Multi-Cloud Architecture', 'Cloud Migration Strategy', 'Amazon EC2 & Lambda'],
    colSpan: 'lg:col-span-2',
  },
  {
    category: 'AI & GenAI',
    icon: 'SparklesIcon',
    color: '#F0D060',
    skills: ['Generative AI', 'Enterprise AI Architecture', 'Vertex AI', 'Google Gemini', 'AI Applications', 'Search & Recommendations'],
  },
  {
    category: 'DevOps & Engineering',
    icon: 'CpuChipIcon',
    color: '#60A5FA',
    skills: ['CI/CD Pipelines', 'Infrastructure as Code (IaC)', 'Automation', 'DevOps Implementation', 'Kubernetes', 'Terraform'],
  },
  {
    category: 'Strategy & Leadership',
    icon: 'ChartBarIcon',
    color: '#A78BFA',
    skills: ['Cloud Strategy', 'Enterprise Architecture', 'Program Management', 'Stakeholder Management', 'Cross-functional Collaboration', 'IT Strategy'],
  },
  {
    category: 'Data & Storage',
    icon: 'CircleStackIcon',
    color: '#34D399',
    skills: ['BigQuery', 'Datalake Architecture', 'EMC Symmetrix', 'NetApp Storage', 'SAN Provisioning', 'Petabyte-scale Infrastructure'],
  },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll<HTMLElement>('.skill-card');
            items.forEach((item, i) => {
              setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
              }, i * 80);
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
    <section id="skills" className="py-20 lg:py-28 relative bg-secondary/20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6" ref={sectionRef}>
        {/* Header */}
        <div className="mb-16">
          <span className="text-gold text-xs font-bold uppercase tracking-widest mb-3 block">Expertise</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
            Skills &
            <br />
            <span className="text-shimmer">Expertise</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl text-sm leading-relaxed">
            A full-spectrum technology leader spanning cloud platforms, AI/GenAI, DevOps, and enterprise strategy.
          </p>
        </div>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, gIndex) => (
            <div
              key={gIndex}
              className={`skill-card card-surface rounded-2xl p-6 hover:border-gold/40 transition-all duration-300 group cursor-default ${group.colSpan || ''}`}
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s',
                boxShadow: '0 4px 24px rgba(0,0,0,0.25)',
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${group.color}18`, border: `1px solid ${group.color}30` }}
                >
                  <Icon name={group.icon as Parameters<typeof Icon>[0]['name']} size={18} style={{ color: group.color }} />
                </div>
                <h3 className="font-semibold text-foreground text-sm">{group.category}</h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-200 cursor-default"
                    style={{
                      background: `${group.color}08`,
                      borderColor: `${group.color}25`,
                      color: '#C8D4E8',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.background = `${group.color}20`;
                      el.style.borderColor = `${group.color}60`;
                      el.style.color = group.color;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.background = `${group.color}08`;
                      el.style.borderColor = `${group.color}25`;
                      el.style.color = '#C8D4E8';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key metrics row */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '20+', label: 'Years in IT', icon: 'CalendarDaysIcon' },
            { value: '3', label: 'Cloud Platforms', icon: 'CloudIcon' },
            { value: '4', label: 'Major Employers', icon: 'BuildingOfficeIcon' },
            { value: '7+', label: 'Certifications', icon: 'AcademicCapIcon' },
          ].map((metric, i) => (
            <div
              key={i}
              className="skill-card card-surface rounded-xl p-5 text-center hover:border-gold/40 transition-all duration-300"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s',
              }}
            >
              <Icon name={metric.icon as Parameters<typeof Icon>[0]['name']} size={20} className="text-gold mx-auto mb-2" />
              <div className="font-display text-2xl font-bold text-gold">{metric.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}