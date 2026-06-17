'use client';

import React from 'react';
import { clinicConfig } from '@/clinicConfig';
import { XCircle, CheckCircle2, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BeforeAfter() {
  return (
    <section className="relative bg-slate-50/70 py-20 border-y border-slate-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-med-teal/10 px-4 py-1.5 text-xs font-semibold text-med-teal mb-4">
            <TrendingUp className="h-4 w-4" />
            <span>Digital Transformation</span>
          </div>
          <h2 className="text-3xl font-extrabold text-med-blue sm:text-4xl font-sans tracking-tight">
            How a Premium Website Grows Your Clinic
          </h2>
          <p className="mt-4 text-slate-500 font-light text-base">
            See how upgrading your online presence immediately builds patient trust and makes bookings frictionless.
          </p>
        </div>

        {/* Comparison Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Old Clinic Presence */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col rounded-3xl border border-red-100 bg-red-50/20 p-8 md:p-10 shadow-sm relative overflow-hidden"
          >
            {/* Soft Red Corner Accent */}
            <div className="absolute top-0 right-0 h-24 w-24 bg-red-500/5 rounded-bl-full" />
            
            <h3 className="text-xl font-bold text-red-800 flex items-center gap-2 mb-6 font-sans">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100 text-red-600">
                ❌
              </span>
              <span>Without a Website</span>
            </h3>

            <ul className="space-y-6 flex-grow">
              {clinicConfig.beforeAfter.map((point, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-700 font-medium text-sm sm:text-base">
                      {point.old.split(': ')[0].replace('❌ ', '')}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 font-light">
                      {point.old.split(': ')[1]}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* New Digital Presence */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col rounded-3xl border border-emerald-200 bg-white p-8 md:p-10 shadow-xl shadow-emerald-950/5 relative overflow-hidden"
          >
            {/* Soft Green Corner Accent */}
            <div className="absolute top-0 right-0 h-24 w-24 bg-med-teal/5 rounded-bl-full" />
            
            <h3 className="text-xl font-bold text-med-teal flex items-center gap-2 mb-6 font-sans">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-50 text-med-teal border border-teal-100">
                ✅
              </span>
              <span>With a Premium Website</span>
            </h3>

            <ul className="space-y-6 flex-grow">
              {clinicConfig.beforeAfter.map((point, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <CheckCircle2 className="h-5.5 w-5.5 text-med-teal flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-med-blue font-bold text-sm sm:text-base font-sans">
                      {point.new.split(': ')[0].replace('✅ ', '')}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 font-light">
                      {point.new.split(': ')[1]}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
