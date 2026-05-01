'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const subjectOptions = [
  'Job Opportunity',
  'Consulting Inquiry',
  'Cloud Architecture Project',
  'AI/GenAI Initiative',
  'General Inquiry',
];

const SPREADSHEET_ID = '1IObyxIgOiUkkmiYXl8Ms-8zgj4y-272JoDeAHDLMqek';
const SHEET_NAME = 'Sheet1';

export default function ContactSection() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    subject: 'Job Opportunity',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setSubmitError(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(212,175,55,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-gold text-xs font-bold uppercase tracking-widest mb-3 block">Get in Touch</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Open to
            <br />
            <span className="text-shimmer">Opportunities</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">
            Interested in senior Cloud Architect, AI/GenAI, or consulting roles? Let's connect and explore how I can add value to your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Contact info */}
          <div className="lg:col-span-2 flex flex-col justify-between gap-8">
            {/* Info cards */}
            <div className="space-y-4">
              <a
                href="mailto:soudagartasleem@gmail.com"
                className="flex items-center gap-4 p-4 card-surface rounded-xl hover:border-gold/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Icon name="EnvelopeIcon" size={18} className="text-gold" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">Email</div>
                  <div className="text-sm font-medium text-foreground group-hover:text-gold transition-colors">
                    soudagartasleem@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/tasleem-soudagar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 card-surface rounded-xl hover:border-gold/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Icon name="LinkIcon" size={18} className="text-gold" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">LinkedIn</div>
                  <div className="text-sm font-medium text-foreground group-hover:text-gold transition-colors">
                    tasleem-soudagar
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 card-surface rounded-xl">
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                  <Icon name="MapPinIcon" size={18} className="text-gold" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">Location</div>
                  <div className="text-sm font-medium text-foreground">Kuala Lumpur, Malaysia</div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-3 p-4 card-surface rounded-xl border border-green-500/20">
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shrink-0" />
              <div>
                <div className="text-sm font-semibold text-foreground">Available for Opportunities</div>
                <div className="text-xs text-muted-foreground mt-0.5">Open · Full-time · Consulting · Remote</div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="card-surface rounded-2xl p-10 h-full flex flex-col items-center justify-center text-center gap-4 border-gold/30 gold-glow">
                <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center">
                  <Icon name="CheckIcon" size={28} className="text-gold" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">Message Sent!</h3>
                <p className="text-muted-foreground text-sm max-w-sm">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', subject: 'Job Opportunity', message: '' }); }}
                  className="mt-2 text-sm text-gold hover:text-accent transition-colors border-b border-gold/40 pb-0.5"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="card-surface rounded-2xl p-6 lg:p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Name <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-muted/50 border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/60 focus:bg-muted transition-all duration-200"
                      style={{ borderColor: errors.name ? '#EF4444' : 'var(--border)' }}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Email <span className="text-gold">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-muted/50 border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/60 focus:bg-muted transition-all duration-200"
                      style={{ borderColor: errors.email ? '#EF4444' : 'var(--border)' }}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your company name (optional)"
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/60 focus:bg-muted transition-all duration-200"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Inquiry Type
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-gold/60 focus:bg-muted transition-all duration-200 appearance-none cursor-pointer"
                  >
                    {subjectOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Message <span className="text-gold">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity or project..."
                    rows={5}
                    className="w-full bg-muted/50 border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/60 focus:bg-muted transition-all duration-200 resize-none"
                    style={{ borderColor: errors.message ? '#EF4444' : 'var(--border)' }}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                {submitError && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                    <Icon name="ExclamationCircleIcon" size={16} className="text-red-400 shrink-0" />
                    <p className="text-red-400 text-xs">{submitError}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background: submitting ? 'rgba(212,175,55,0.3)' : 'linear-gradient(135deg, #D4AF37 0%, #F0D060 100%)',
                    color: '#0A0A0F',
                  }}
                >
                  {submitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export { SPREADSHEET_ID, SHEET_NAME };