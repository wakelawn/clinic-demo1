'use client';

import React, { useState } from 'react';
import { clinicConfig } from '@/clinicConfig';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative bg-slate-50/50 py-20 lg:py-28 scroll-mt-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-med-teal">
            Common Inquiries
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-med-blue sm:text-4xl font-sans tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-500 font-light text-base">
            Find immediate answers to standard questions about appointments, timings, and services.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {clinicConfig.faqs.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => toggleFAQ(faq.id)}
              >
                {/* Accordion Trigger */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-med-teal flex-shrink-0" />
                    <h3 className="text-base font-bold text-slate-800 font-sans leading-tight">
                      {faq.question}
                    </h3>
                  </div>
                  
                  {/* Chevron Toggle Icon */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-400 flex-shrink-0"
                  >
                    <ChevronDown className="h-4.5 w-4.5" />
                  </motion.div>
                </div>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-slate-50 pt-4 text-sm/relaxed text-slate-500 font-light pl-8">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
