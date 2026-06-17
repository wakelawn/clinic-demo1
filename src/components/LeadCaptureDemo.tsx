'use client';

import React from 'react';
import { clinicConfig } from '@/clinicConfig';
import { Search, Monitor, MessageSquare, UserCheck, ArrowRight, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LeadCaptureDemo() {
  // Map strings to Lucide icons
  const getIcon = (name: string) => {
    switch (name) {
      case 'Search':
        return Search;
      case 'Monitor':
        return Monitor;
      case 'MessageSquare':
        return MessageSquare;
      case 'UserCheck':
        return UserCheck;
      default:
        return Monitor;
    }
  };

  return (
    <section className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-med-blue sm:text-4xl font-sans tracking-tight">
            How Patients Reach You
          </h2>
          <p className="mt-4 text-slate-500 font-light text-base">
            A frictionless patient journey engineered to convert online searches into scheduled appointments.
          </p>
        </div>

        {/* Funnel Layout */}
        <div className="relative">
          {/* Desktop connecting lines */}
          <div className="absolute top-1/2 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-med-blue/20 via-med-teal/20 to-emerald-500/20 -translate-y-10 hidden lg:block -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clinicConfig.leadFlow.map((step, idx) => {
              const Icon = getIcon(step.iconName);
              return (
                <div key={step.id} className="relative flex flex-col items-center text-center">
                  
                  {/* Step Circle Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-50 border border-slate-100 shadow-md group-hover:scale-105 transition-all text-med-blue relative z-10"
                  >
                    {/* Glowing effect for WhatsApp and confirmed step */}
                    {(step.id === 3 || step.id === 4) && (
                      <div className="absolute inset-0 -z-10 rounded-3xl bg-med-teal/10 blur-md animate-pulse-slow" />
                    )}
                    <Icon className={`h-8 w-8 ${step.id === 3 ? 'text-emerald-500 fill-emerald-50' : 'text-med-blue'}`} />
                    
                    {/* Step number badge */}
                    <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-med-blue text-xs font-bold text-white shadow-md">
                      {step.id}
                    </span>
                  </motion.div>

                  {/* Text details */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.2 + 0.2 }}
                    className="mt-6 max-w-[240px]"
                  >
                    <h3 className="text-lg font-bold text-slate-800 font-sans">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Mobile Connecting Arrow */}
                  {idx < 3 && (
                    <div className="mt-6 text-slate-300 lg:hidden">
                      <ArrowDown className="h-6 w-6 animate-bounce" />
                    </div>
                  )}

                  {/* Desktop Connecting Arrow (floating overlap) */}
                  {idx < 3 && (
                    <div className="absolute top-[34px] -right-[15%] hidden lg:block text-slate-400">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
