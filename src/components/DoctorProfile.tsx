'use client';

import React from 'react';
import Image from 'next/image';
import { clinicConfig } from '@/clinicConfig';
import { Award, GraduationCap, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DoctorProfile() {
  return (
    <section id="doctor" className="relative bg-white py-20 lg:py-28 scroll-mt-16">
      <div className="absolute top-1/2 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-slate-50 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Side: Doctor Portrait with styling */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Visual background wrapper */}
            <div className="absolute inset-0 -m-6 rounded-3xl bg-med-blue/5 blur-2xl" />
            <div className="relative aspect-[3/4] w-[300px] sm:w-[350px] lg:w-full overflow-hidden rounded-3xl border border-slate-200/80 shadow-2xl bg-slate-100">
              <Image
                src={clinicConfig.doctorImage}
                alt={clinicConfig.doctorName}
                fill
                className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
              />
              
              {/* Bottom tag overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-med-blue/95 via-med-blue/80 to-transparent p-6 text-white text-center">
                <p className="text-lg font-bold font-sans">{clinicConfig.doctorName}</p>
                <p className="text-xs text-slate-300 font-light mt-1">{clinicConfig.qualification}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Authority bio details */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-med-teal">
                <Heart className="h-4.5 w-4.5 fill-med-teal/10" />
                <span>Meet the Expert</span>
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-med-blue sm:text-4xl font-sans tracking-tight">
                {clinicConfig.doctorName}
              </h2>
              <p className="text-base text-med-teal font-semibold mt-1.5 font-sans">
                {clinicConfig.doctorRole}
              </p>
              <p className="mt-6 text-base text-slate-500 font-light leading-relaxed">
                A distinguished physician with over {clinicConfig.experience} of medical expertise, dedicated to high-precision diagnosis and patient-centric management. Trained at premier clinical institutes to provide general and specialized care for all demographics.
              </p>
            </motion.div>

            {/* Quick stats & qualifications grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              
              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-3.5"
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <GraduationCap className="h-4.5 w-4.5 text-med-teal" />
                  <span>Qualifications</span>
                </h3>
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100/80">
                  <p className="text-sm font-semibold text-slate-800 font-sans">{clinicConfig.qualification.split(' - ')[0]}</p>
                  <p className="text-xs text-slate-500 mt-1 font-light">{clinicConfig.qualification.split(' - ')[1] || 'Top Medical Institute'}</p>
                </div>
              </motion.div>

              {/* Experience */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-3.5"
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Award className="h-4.5 w-4.5 text-med-teal" />
                  <span>Clinical Standing</span>
                </h3>
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100/80">
                  <p className="text-sm font-semibold text-slate-800 font-sans">{clinicConfig.experience} Active Practice</p>
                  <p className="text-xs text-slate-500 mt-1 font-light">Over 10,000 successful case records</p>
                </div>
              </motion.div>
            </div>

            {/* Specializations & Certifications check lists */}
            <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Specializations */}
              <div className="space-y-3.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Focus Areas
                </h3>
                <ul className="space-y-3">
                  {clinicConfig.specializations.map((spec, index) => (
                    <li key={index} className="flex gap-2 items-start text-sm text-slate-600 font-light">
                      <CheckCircle2 className="h-4 w-4 text-med-teal flex-shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certifications */}
              <div className="space-y-3.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Affiliations & Boards
                </h3>
                <ul className="space-y-3">
                  {clinicConfig.certifications.map((cert, index) => (
                    <li key={index} className="flex gap-2 items-start text-sm text-slate-600 font-light">
                      <ShieldCheck className="h-4 w-4 text-med-blue flex-shrink-0 mt-0.5" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
