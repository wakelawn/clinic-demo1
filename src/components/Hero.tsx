'use client';

import React from 'react';
import Image from 'next/image';
import { useModal } from '@/context/ModalContext';
import { clinicConfig } from '@/clinicConfig';
import { Star, MessageSquare, Calendar, Award, ShieldCheck, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const { openModal } = useModal();

  const handleWhatsAppChat = () => {
    const message = "Hello Doctor, I would like to book an appointment.";
    const url = `https://wa.me/${clinicConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-slate-100/50 to-white pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Background blobs for depth */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-med-teal/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] rounded-full bg-med-blue/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Text Content */}
          <div className="flex flex-col lg:col-span-7 text-center lg:text-left">
            
            {/* Top Micro-Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-4 mb-6"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1.5 border border-amber-100 text-xs font-bold text-amber-700 shadow-sm">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-amber-500" />
                  ))}
                </div>
                <span>Rated by Patients</span>
              </div>

              {/* Exp Badge */}
              <div className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 border border-slate-200/60 shadow-sm">
                <Award className="h-3.5 w-3.5 text-med-teal" />
                <span>{clinicConfig.trustMetrics.yearsExperience} Experience</span>
              </div>

              {/* Patients Badge */}
              <div className="flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1.5 text-xs font-semibold text-med-teal border border-teal-100 shadow-sm">
                <Users className="h-3.5 w-3.5 text-med-teal" />
                <span>{clinicConfig.trustMetrics.patientsServed} Happy Patients</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl font-extrabold tracking-tight text-med-blue sm:text-5xl lg:text-6xl/tight font-sans"
            >
              Trusted Healthcare <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-med-blue to-med-teal">
                For Your Family
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg/relaxed text-slate-600 font-light max-w-2xl mx-auto lg:mx-0"
            >
              Providing compassionate, expert, and premium medical care for over 15 years. Experience healthcare that prioritizes your comfort, time, and well-being.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={openModal}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-med-blue hover:bg-med-blue-hover px-8 py-4 font-bold text-white shadow-lg shadow-med-blue/20 transition-all cursor-pointer hover:-translate-y-[1px] active:scale-[0.98]"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Appointment</span>
              </button>

              <button
                onClick={handleWhatsAppChat}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 px-8 py-4 font-bold text-slate-700 shadow-md shadow-slate-100 transition-all cursor-pointer hover:-translate-y-[1px] active:scale-[0.98]"
              >
                <MessageSquare className="h-5 w-5 text-emerald-500 fill-emerald-500/20" />
                <span>WhatsApp Now</span>
              </button>
            </motion.div>

            {/* Extra assurance */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-medium"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                <span>No pre-payment required</span>
              </div>
              <div className="h-3 w-px bg-slate-300" />
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                <span>Instant confirmation</span>
              </div>
            </motion.div>
          </div>

          {/* Right Image Content */}
          <div className="relative flex justify-center lg:col-span-5">
            {/* Visual design elements under the doctor portrait */}
            <div className="absolute inset-0 -m-6 rounded-3xl bg-gradient-to-tr from-med-blue/10 to-med-teal/10 blur-xl" />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
              className="relative w-[300px] h-[360px] sm:w-[350px] sm:h-[420px] lg:w-[380px] lg:h-[450px] overflow-hidden rounded-3xl border-4 border-white shadow-2xl bg-slate-100"
            >
              <Image
                src={clinicConfig.doctorImage}
                alt={clinicConfig.doctorName}
                fill
                priority
                className="object-cover object-top hover:scale-[1.03] transition-transform duration-500"
              />
            </motion.div>

            {/* Floating Trust Indicator: 15+ Years Exp */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="glass-card absolute -left-8 top-16 hidden sm:flex items-center gap-3 rounded-2xl p-4 shadow-xl select-none"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-med-blue text-white">
                <Award className="h-5.5 w-5.5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Experience</p>
                <p className="text-base font-bold text-med-blue">{clinicConfig.trustMetrics.yearsExperience} Years</p>
              </div>
            </motion.div>

            {/* Floating Trust Indicator: 10k+ Patients */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
              className="glass-card absolute -right-6 bottom-16 hidden sm:flex items-center gap-3 rounded-2xl p-4 shadow-xl select-none"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-med-teal text-white">
                <Users className="h-5.5 w-5.5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Happy Patients</p>
                <p className="text-base font-bold text-med-blue">{clinicConfig.trustMetrics.patientsServed}</p>
              </div>
            </motion.div>

            {/* Floating Trust Indicator: 4.9 rating */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
              className="glass-card absolute right-12 top-4 hidden sm:flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl select-none"
            >
              <div className="flex items-center text-amber-500">
                <Star className="h-4.5 w-4.5 fill-amber-500" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Google Rating</p>
                <p className="text-base font-extrabold text-slate-800">{clinicConfig.trustMetrics.googleRating} ★</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
