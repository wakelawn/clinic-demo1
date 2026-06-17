'use client';

import React from 'react';
import { clinicConfig } from '@/clinicConfig';
import { Phone, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AppointmentCTA() {
  const handleCall = () => {
    window.location.href = `tel:${clinicConfig.phone.replace(/\s+/g, '')}`;
  };

  const handleWhatsApp = () => {
    const message = "Hello Doctor, I would like to book an appointment.";
    const url = `https://wa.me/${clinicConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-med-blue to-med-blue-light py-20 text-white">
      {/* Decorative background glows */}
      <div className="absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-med-teal/20 blur-3xl" />
      <div className="absolute left-10 bottom-0 -z-10 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Animated Headline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl font-sans tracking-tight">
            Book Your Consultation Today
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Take the first step towards personalized, expert healthcare. Call us directly or send a WhatsApp message to secure your slot instantly.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <button
            onClick={handleCall}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-xl bg-white text-med-blue hover:bg-slate-50 px-8 py-4 font-bold transition-all shadow-lg cursor-pointer active:scale-[0.98]"
          >
            <Phone className="h-5 w-5 text-med-blue" />
            <span>Call Now</span>
          </button>

          <button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 font-bold transition-all shadow-lg shadow-emerald-500/15 cursor-pointer active:scale-[0.98]"
          >
            <MessageSquare className="h-5 w-5 fill-white/10" />
            <span>WhatsApp Appointment</span>
          </button>
        </motion.div>

        {/* Timings summary */}
        <p className="mt-6 text-xs text-slate-400 font-medium">
          Registered patients receive 24/7 emergency support lines.
        </p>

      </div>
    </section>
  );
}
