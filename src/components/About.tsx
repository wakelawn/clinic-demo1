'use client';

import React from 'react';
import Image from 'next/image';
import { clinicConfig } from '@/clinicConfig';
import { Target, Compass, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const values = [
    {
      title: 'Our Mission',
      text: clinicConfig.about.mission,
      icon: Target,
      color: 'text-med-teal bg-teal-50 border-teal-100',
    },
    {
      title: 'Our Vision',
      text: clinicConfig.about.vision,
      icon: Compass,
      color: 'text-med-blue bg-blue-50 border-blue-100',
    },
    {
      title: 'Patient-First Philosophy',
      text: clinicConfig.about.philosophy,
      icon: HeartHandshake,
      color: 'text-rose-600 bg-rose-50 border-rose-100',
    },
  ];

  return (
    <section id="about" className="relative bg-slate-50/50 py-20 lg:py-28 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left: Premium Clinic Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="relative lg:col-span-6 flex justify-center"
          >
            {/* Soft decorative shadow backdrop */}
            <div className="absolute inset-0 -m-4 rounded-3xl bg-med-blue/5 blur-xl" />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200/80 shadow-2xl bg-slate-100">
              <Image
                src={clinicConfig.clinicImage}
                alt="Clinic Reception"
                fill
                className="object-cover hover:scale-[1.02] transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* Right: Text & Cards */}
          <div className="lg:col-span-6 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-bold uppercase tracking-wider text-med-teal">
                About the Clinic
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-med-blue sm:text-4xl font-sans tracking-tight">
                Modern Healthcare, Personalized for You
              </h2>
              <p className="mt-4 text-base text-slate-500 font-light leading-relaxed">
                {clinicConfig.about.description}
              </p>
            </motion.div>

            {/* Value cards list */}
            <div className="mt-8 space-y-4">
              {values.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    key={val.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex gap-4 rounded-2xl bg-white border border-slate-100 p-5 shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl border flex-shrink-0 ${val.color} shadow-sm group-hover:scale-105 transition-transform`}>
                      <Icon className="h-5.5 w-5.5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-800 font-sans">
                        {val.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500 font-light leading-relaxed">
                        {val.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
