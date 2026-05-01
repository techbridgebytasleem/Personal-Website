'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Role {
  company: string;
  title: string;
  dates: string;
  duration: string;
  location: string;
  type: string;
  color: string;
  icon: string;
  responsibilities: string[];
}

const roles: Role[] = [
  {
    company: 'Tata Consultancy Services',
    title: 'Cloud Consultant',
    dates: 'Jan 2022 – Present',
    duration: '4+ years',
    location: 'Kuala Lumpur, Malaysia',
    type: 'Full-time',
    color: '#0066CC',
    icon: 'CloudIcon',
    responsibilities: [
      'Working as an AWS Solution Architect delivering enterprise-scale, cloud-native and multi-cloud transformations',
      'Serving Telecommunications, Media, and Financial Services clients across APAC',
      'Building migration strategies for customer lines of business to AWS Cloud',
      'Designing and deploying AWS infrastructure in close collaboration with client stakeholders',
      'Improving AWS infrastructure performance, availability, and cost optimization',
    ],
  },
  {
    company: 'IBM',
    title: 'Information Technology Architect (GCP Cloud Solution Architect)',
    dates: 'Feb 2020 – Jan 2022',
    duration: '2 years',
    location: 'Bangalore, India',
    type: 'Full-time',
    color: '#054ADA',
    icon: 'ServerIcon',
    responsibilities: [
      'Served as GCP Cloud Solution Architect — key role in migrating on-premise customer data to Datalake on Google Cloud',
      'Led data migration from on-premise to Datalake using BigQuery in GCP',
      'Created detailed architectural diagrams (HLD and LLD) for cloud solution deployments',
      'Planned and organized handover sessions for Operations teams for production support',
      'Led internal information-sharing sessions to disseminate cloud best practices',
    ],
  },
  {
    company: 'Dell EMC',
    title: 'Senior Lead Software Engineer',
    dates: 'Jul 2013 – Feb 2020',
    duration: '6 years 8 months',
    location: 'Bengaluru, India',
    type: 'Full-time',
    color: '#007DB8',
    icon: 'CircleStackIcon',
    responsibilities: [
      'Storage subject matter expert managing petabyte-scale EMC Symmetrix and NetApp storage systems',
      'Part of 20-member team handling enterprise-scale storage infrastructure',
      'Member of Cloud as a Service (CASE) team — building greenfield cloud adoption processes',
      'Bridging client on-premise infrastructure with public cloud-native solutions (hybrid architecture)',
    ],
  },
  {
    company: 'Mphasis Software Private Limited',
    title: 'Module Lead',
    dates: 'Nov 2006 – Jun 2013',
    duration: '6 years 8 months',
    location: 'Bengaluru, India',
    type: 'Full-time',
    color: '#8B2FC9',
    icon: 'CpuChipIcon',
    responsibilities: [
      'SAN storage provisioning on EMC arrays (DMX3, DMX4, VMAX) and troubleshooting',
      'Re-engineered investment banking site from Java/J2EE to .NET 2.0 — one of the largest fixed-bid assignments with 100+ third-party integration points',
      'Full lifecycle business system development with developers, analysts, and testers',
      'Also served as Quality Assurance Engineer during the investment banking re-engineering project',
    ],
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll('.reveal-item');
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 lg:py-28 relative">
      {/* Section divider top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 reveal-item hidden-initially">
          <span className="text-gold text-xs font-bold uppercase tracking-widest mb-3 block">Career Timeline</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight">
            Professional
            <br />
            <span className="text-shimmer">Experience</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl text-sm leading-relaxed">
            20+ years of progressive IT leadership — from storage engineering to enterprise cloud architecture and AI-powered transformation.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent" />

          <div className="space-y-8">
            {roles.map((role, index) => (
              <div
                key={index}
                className="reveal-item hidden-initially lg:pl-24 relative"
                style={{ transitionDelay: `${index * 0.12}s` }}
              >
                {/* Timeline dot */}
                <div
                  className="hidden lg:flex absolute left-5 top-6 w-6 h-6 rounded-full border-2 border-gold items-center justify-center -translate-x-1/2"
                  style={{ background: '#0A1628' }}
                >
                  <div className="w-2 h-2 rounded-full bg-gold" />
                </div>

                {/* Card */}
                <div className="card-surface rounded-2xl p-6 lg:p-8 hover:border-gold/40 transition-all duration-300 group cursor-default"
                  style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-5">
                    {/* Company icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${role.color}20`, border: `1px solid ${role.color}40` }}
                    >
                      <Icon name={role.icon as Parameters<typeof Icon>[0]['name']} size={22} style={{ color: role.color }} />
                    </div>

                    {/* Title block */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="font-semibold text-foreground text-base leading-snug">{role.title}</h3>
                          <p className="text-gold font-semibold text-sm mt-0.5">{role.company}</p>
                        </div>
                        <span className="text-xs font-medium text-gold/70 bg-gold/10 px-2 py-1 rounded-full whitespace-nowrap">
                          {role.duration}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-3 mt-2">
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Icon name="CalendarDaysIcon" size={12} />
                          {role.dates}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Icon name="MapPinIcon" size={12} />
                          {role.location}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Icon name="BriefcaseIcon" size={12} />
                          {role.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2">
                    {role.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                        <Icon name="ChevronRightIcon" size={14} className="text-gold shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Education card */}
          <div className="reveal-item hidden-initially lg:pl-24 relative mt-8" style={{ transitionDelay: '0.5s' }}>
            <div className="hidden lg:flex absolute left-5 top-6 w-6 h-6 rounded-full border-2 border-gold/40 items-center justify-center -translate-x-1/2"
              style={{ background: '#0A1628' }}
            >
              <div className="w-2 h-2 rounded-full bg-gold/40" />
            </div>

            <div className="card-surface rounded-2xl p-6 lg:p-8 border-dashed">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                  <Icon name="AcademicCapIcon" size={22} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-base">Bachelor's Degree</h3>
                  <p className="text-gold font-semibold text-sm mt-0.5">VTU University · B.L.D.E. College of Engineering</p>
                  <p className="text-muted-foreground text-xs mt-1">Electrical, Electronic and Communications Engineering · Bijapur, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}