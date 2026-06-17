'use client';

import React from 'react';
import { useModal } from '@/context/ModalContext';
import { clinicConfig } from '@/clinicConfig';
import { Check, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PricingPreview() {
  const { openModal } = useModal();

  return (
    <section id="pricing" className="relative bg-slate-50/50 py-20 lg:py-28 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-med-teal">
            Affordable Packages
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-med-blue sm:text-4xl font-sans tracking-tight">
            Select Your Website Tier
          </h2>
          <p className="mt-4 text-slate-500 font-light text-base">
            Transparent pricing plans designed specifically for medical clinics, individual doctors, and specialized health facilities.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 items-stretch">
          {clinicConfig.pricingPlans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex flex-col justify-between rounded-3xl p-8 transition-all relative ${
                plan.isPopular
                  ? 'bg-white border-2 border-med-teal shadow-xl shadow-teal-950/5 lg:-translate-y-4'
                  : 'bg-white border border-slate-100 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-med-teal px-4 py-1 text-xs font-bold text-white shadow-md">
                  <Flame className="h-3.5 w-3.5 fill-white" />
                  <span>MOST POPULAR</span>
                </span>
              )}

              <div>
                {/* Plan Name & Price */}
                <h3 className="text-xl font-bold text-slate-800 font-sans">{plan.name}</h3>
                <p className="mt-2 text-sm text-slate-400 font-light">{plan.description}</p>
                
                <div className="my-6">
                  <span className="text-2xl sm:text-3xl font-extrabold text-med-blue font-sans">
                    {plan.priceTag}
                  </span>
                  <span className="text-slate-400 text-xs font-light block mt-1">One-time setup cost</span>
                </div>

                {/* Features Checklist */}
                <ul className="space-y-4 pt-6 border-t border-slate-50">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-light">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-50 text-med-teal border border-teal-100 flex-shrink-0 mt-0.5">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={openModal}
                className={`mt-8 w-full py-4 rounded-xl font-bold text-sm transition-all cursor-pointer text-center active:scale-[0.98] ${
                  plan.isPopular
                    ? 'bg-med-teal text-white hover:bg-med-teal-hover shadow-lg shadow-med-teal/20'
                    : 'bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                Inquire For This Tier
              </button>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
