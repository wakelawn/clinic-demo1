'use client';

import React from 'react';
import Image from 'next/image';
import { clinicConfig } from '@/clinicConfig';
import { Star, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function GoogleReviews() {
  return (
    <section id="reviews" className="relative bg-slate-50/50 py-20 lg:py-28 border-y border-slate-100 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Rating Overview Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 pb-12 border-b border-slate-200/60">
          <div className="text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-med-teal">
              Patient Reviews
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-med-blue sm:text-4xl font-sans tracking-tight">
              What Patients Are Saying
            </h2>
            <p className="mt-3 text-slate-500 font-light text-base max-w-xl">
              Real feedback from Google-verified profiles about their treatment and clinic experiences.
            </p>
          </div>

          {/* Google Summary Badge */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-6 rounded-3xl bg-white border border-slate-100 p-6 shadow-md shadow-slate-100/50 select-none"
          >
            {/* Google G Logo */}
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 text-lg font-bold">
              <svg className="h-6 w-6" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>

            <div>
              <div className="flex items-center gap-1">
                <span className="text-2xl font-extrabold text-slate-800 font-sans">
                  {clinicConfig.trustMetrics.googleRating}
                </span>
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-500 font-light mt-1">
                Based on 450+ verified patient ratings
              </p>
            </div>
          </motion.div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {clinicConfig.googleReviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col justify-between rounded-3xl border border-slate-100 bg-white p-6.5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              {/* Review Content */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Rating Stars */}
                  <div className="flex text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-500" />
                    ))}
                  </div>
                  {/* Google Logo representation */}
                  <span className="text-[10px] uppercase font-bold text-slate-300 font-sans">
                    Google Review
                  </span>
                </div>

                <p className="text-sm/relaxed text-slate-600 font-light italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="mt-6 pt-4 border-t border-slate-50 flex items-center gap-3">
                {review.avatarUrl ? (
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border border-slate-100 bg-slate-50">
                    <Image
                      src={review.avatarUrl}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-med-blue">
                    {review.name[0]}
                  </div>
                )}
                
                <div>
                  <div className="flex items-center gap-1">
                    <h4 className="text-sm font-bold text-slate-800 font-sans">{review.name}</h4>
                    <ShieldCheck className="h-4 w-4 text-emerald-500 fill-emerald-50" />
                  </div>
                  <p className="text-[11px] text-slate-400 font-light mt-0.5">{review.time}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
