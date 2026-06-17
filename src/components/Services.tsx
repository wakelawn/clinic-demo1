'use client';

import React from 'react';
import { useModal } from '@/context/ModalContext';
import { clinicConfig } from '@/clinicConfig';
import { Stethoscope, Baby, Sparkles, Activity, Accessibility, Heart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const { openModal } = useModal();

  // Helper to map string to Lucide icon
  const getIcon = (name: string) => {
    switch (name) {
      case 'Stethoscope':
        return Stethoscope;
      case 'Baby':
        return Baby;
      case 'Sparkles':
        return Sparkles;
      case 'Activity':
        return Activity;
      case 'Accessibility':
        return Accessibility;
      case 'Heart':
        return Heart;
      default:
        return Stethoscope;
    }
  };

  return (
    <section id="services" className="relative bg-slate-50/50 py-20 lg:py-28 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-med-teal">
            Our Specialties
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-med-blue sm:text-4xl font-sans tracking-tight">
            Premium Clinical Services
          </h2>
          <p className="mt-4 text-slate-500 font-light text-base">
            Providing comprehensive care across a range of specialties, customized to support your path to complete wellness.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {clinicConfig.services.map((service, idx) => {
            const Icon = getIcon(service.iconName);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-med-teal/5 cursor-pointer"
                onClick={openModal}
              >
                <div>
                  {/* Icon Wrapper */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 text-med-teal shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-gradient-to-tr group-hover:from-med-blue group-hover:to-med-teal group-hover:text-white group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-med-teal/15">
                    <Icon className="h-6.5 w-6.5" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-800 font-sans group-hover:text-med-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm/relaxed text-slate-500 font-light">
                    {service.description}
                  </p>
                </div>

                {/* Card footer/button */}
                <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-med-teal transition-colors">
                  <span>Schedule Consultation</span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 border border-slate-100 transition-all duration-300 group-hover:bg-med-teal/10 group-hover:text-med-teal group-hover:translate-x-1 group-hover:border-transparent">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
