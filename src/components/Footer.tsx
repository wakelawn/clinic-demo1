'use client';

import React from 'react';
import { clinicConfig } from '@/clinicConfig';
import { Stethoscope, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'Doctor Profile', href: '#doctor' },
  ];

  const secondaryLinks = [
    { label: 'Reviews', href: '#reviews' },
    { label: 'Pricing Plan', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  // Render SVG icons directly to avoid lucide-react brand icon deprecations
  const renderSocialIcon = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return (
          <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        );
      case 'instagram':
        return (
          <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        );
      case 'twitter':
        return (
          <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
        );
      case 'linkedin':
        return (
          <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="bg-med-dark text-slate-400 pt-16 pb-28 lg:pb-16 border-t border-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#" className="flex items-center gap-2 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-med-blue to-med-teal text-white shadow-md">
                <Stethoscope className="h-5 w-5" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white font-sans">
                {clinicConfig.clinicName.split(' ')[0]}
                <span className="text-med-teal font-normal">
                  {clinicConfig.clinicName.substring(clinicConfig.clinicName.split(' ')[0].length)}
                </span>
              </span>
            </a>
            <p className="text-sm text-slate-400 font-light leading-relaxed">
              {clinicConfig.clinicTagline}. Experience double-boarded expert diagnoses and treatment care.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3.5">
              {Object.entries(clinicConfig.socialLinks).map(([platform, url]) => {
                if (!url) return null;
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 hover:bg-med-teal hover:text-white transition-all text-slate-300"
                    aria-label={`Follow us on ${platform}`}
                  >
                    {renderSocialIcon(platform)}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Navigation Links 1 */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 font-sans">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm hover:text-med-teal font-light transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation Links 2 */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 font-sans">Resources</h4>
            <ul className="space-y-3">
              {secondaryLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm hover:text-med-teal font-light transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 font-sans">Clinic Timings</h4>
            <div className="space-y-2.5 text-sm font-light">
              <p className="text-slate-300">{clinicConfig.address}</p>
              <div className="h-px bg-slate-800 my-3" />
              <p>{clinicConfig.timings.weekdays}</p>
              <p>{clinicConfig.timings.saturdays}</p>
              <p className="text-slate-500">{clinicConfig.timings.sundays}</p>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-slate-500">
          <p>&copy; {currentYear} {clinicConfig.clinicName}. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <span>Designed with</span>
            <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
            <span>for Healthcare Excellence</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
