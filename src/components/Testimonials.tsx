'use client';

import React from 'react';
import Image from 'next/image';
import { clinicConfig } from '@/clinicConfig';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      {/* Background radial accent */}
      <div className="absolute bottom-0 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-med-blue/5 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-med-teal">
            Patient Success
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-med-blue sm:text-4xl font-sans tracking-tight">
            Our Patients, Their Stories
          </h2>
          <p className="mt-4 text-slate-500 font-light text-base">
            Read about our patients’ journeys back to healthy living, showing the impact of our personalized treatments.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {clinicConfig.testimonials.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col justify-between rounded-3xl border border-slate-100 bg-slate-50/50 p-8 shadow-sm hover:shadow-md transition-all hover:bg-white relative group"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-6 right-8 text-slate-200/50 group-hover:text-med-teal/10 transition-colors">
                <Quote className="h-10 w-10 fill-current" />
              </div>

              <div>
                {/* Rating */}
                <div className="flex text-amber-500 mb-6">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-sm/relaxed text-slate-600 font-light italic relative z-10">
                  &ldquo;{test.feedback}&rdquo;
                </p>
              </div>

              {/* Patient Profile */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3">
                {test.image ? (
                  <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white shadow-sm bg-slate-100 flex-shrink-0">
                    <Image
                      src={test.image}
                      alt={test.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-med-blue text-sm font-bold text-white flex-shrink-0">
                    {test.name[0]}
                  </div>
                )}
                <div>
                  <h4 className="text-sm font-bold text-slate-800 font-sans">{test.name}</h4>
                  <p className="text-xs text-slate-400 font-light mt-0.5">{test.location}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
