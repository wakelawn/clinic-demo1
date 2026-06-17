'use client';

import React from 'react';
import { clinicConfig } from '@/clinicConfig';
import { Users, Award, HeartHandshake, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TrustMetrics() {
  const stats = [
    {
      id: 1,
      value: clinicConfig.trustMetrics.patientsServed,
      label: 'Patients Served',
      description: 'Trusted primary care for families',
      icon: Users,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    },
    {
      id: 2,
      value: clinicConfig.trustMetrics.yearsExperience,
      label: 'Years Experience',
      description: 'Expert, proven clinical skills',
      icon: Award,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    },
    {
      id: 3,
      value: clinicConfig.trustMetrics.satisfactionRate,
      label: 'Patient Satisfaction',
      description: 'Verified positive reviews',
      icon: HeartHandshake,
      color: 'text-rose-600 bg-rose-50 border-rose-100',
    },
    {
      id: 4,
      value: clinicConfig.trustMetrics.emergencySupport,
      label: 'Emergency Support',
      description: 'Immediate advice for families',
      icon: ShieldCheck,
      color: 'text-teal-600 bg-teal-50 border-teal-100',
    },
  ];

  return (
    <section className="relative bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Animated Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/50 p-8 shadow-sm transition-all hover:bg-white hover:shadow-md group"
              >
                {/* Decorative subtle background circle */}
                <div className="absolute -right-6 -bottom-6 h-28 w-28 rounded-full bg-slate-100/50 transition-all group-hover:scale-110" />

                <div className="flex items-center gap-4 mb-4">
                  {/* Icon */}
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${stat.color} shadow-sm`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-extrabold text-med-blue tracking-tight font-sans">
                      {stat.value}
                    </h3>
                  </div>
                </div>

                <h4 className="text-base font-bold text-slate-800 font-sans">
                  {stat.label}
                </h4>
                <p className="mt-1.5 text-sm text-slate-500 font-light">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
