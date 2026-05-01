import React from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Logo + tagline */}
        <div className="flex items-center gap-3">
          <AppLogo size={28} />
          <div>
            <span className="font-display font-semibold text-sm text-foreground">
              Tasleem Banu
            </span>
            <p className="text-xs text-muted-foreground">Multi-Cloud Architect · AI Generalist</p>
          </div>
        </div>

        {/* Right: Links */}
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a
            href="https://www.linkedin.com/in/tasleem-soudagar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors flex items-center gap-1.5"
          >
            <Icon name="LinkIcon" size={14} />
            LinkedIn
          </a>
          <a
            href="mailto:soudagartasleem@gmail.com"
            className="hover:text-gold transition-colors"
          >
            soudagartasleem@gmail.com
          </a>
          <span className="text-muted-foreground/50">·</span>
          <span>© 2026 Tasleem Banu</span>
        </div>
      </div>
    </footer>
  );
}