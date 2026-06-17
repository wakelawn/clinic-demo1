'use client';

import React from 'react';
import { clinicConfig } from '@/clinicConfig';
import { Award, Cpu, Sparkles, HeartHandshake, PiggyBank, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  // Map icons
  const getIcon = (name: string) => {
    switch (name) {
      case 'Award':
        return Award;
      case 'Cpu':
        return Cpu;
      case 'Sparkles':
        return Sparkles;
      case 'HeartHandshake':
        return HeartHandshake;
      case 'PiggyBank':
        return PiggyBank;
      case 'PhoneCall':
        return PhoneCall;
      default:
        return Award;
    }
  };

  return (
    <section id="why-choose-us" className="relative bg-white py-20 lg:py-28 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-med-teal">
            Our Standards
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-med-blue sm:text-4xl font-sans tracking-tight">
            Why Patients Choose Our Clinic
          </h2>
          <p className="mt-4 text-slate-500 font-light text-base">
            We hold ourselves to the highest standards of hygiene, safety, and clinical excellence to deliver premium care you can trust.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clinicConfig.whyChooseUs.map((reason, idx) => {
            const Icon = getIcon(reason.iconName);
            return (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex items-start gap-4 rounded-2xl bg-slate-50/50 p-6 border border-slate-100 hover:border-med-teal/20 hover:bg-white hover:shadow-lg hover:shadow-med-teal/5 transition-all group"
              >
                {/* Icon Wrapper */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-slate-100 text-med-blue shadow-sm flex-shrink-0 group-hover:bg-med-teal/5 group-hover:text-med-teal group-hover:border-med-teal/10 transition-colors">
                  <Icon className="h-5.5 w-5.5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800 font-sans group-hover:text-med-blue transition-colors">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 font-light leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
