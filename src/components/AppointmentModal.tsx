'use client';

import React, { useState } from 'react';
import { useModal } from '@/context/ModalContext';
import { clinicConfig } from '@/clinicConfig';
import { X, CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AppointmentModal() {
  const { isOpen, closeModal } = useModal();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setIsSubmitting(true);

    // Format WhatsApp message
    const message = `Hello Doctor, I would like to book an appointment.\nName: ${name}\nPhone: ${phone}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${clinicConfig.whatsappNumber}?text=${encodedMessage}`;

    // Simulate small delay for premium visual feedback, then redirect and show success state
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.open(whatsappUrl, '_blank');
    }, 1200);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setIsSuccess(false);
    closeModal();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleReset}
            className="fixed inset-0 bg-med-dark/70 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-100"
          >
            {/* Header Gradient */}
            <div className="bg-gradient-to-r from-med-blue to-med-teal p-6 text-white">
              <button
                onClick={handleReset}
                className="absolute top-4 right-4 rounded-full bg-white/10 p-1 text-white hover:bg-white/20 transition-all cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
              <h3 className="text-xl font-bold font-sans">Book Consultation</h3>
              <p className="mt-1 text-sm text-slate-100/90 font-light">
                Connect with {clinicConfig.doctorName} instantly.
              </p>
            </div>

            <div className="p-6">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="modal-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      Full Name
                    </label>
                    <input
                      id="modal-name"
                      type="text"
                      required
                      placeholder="e.g. Rahul Kumar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition-all focus:border-med-teal focus:bg-white focus:ring-2 focus:ring-med-teal/20"
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label htmlFor="modal-phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      WhatsApp/Phone Number
                    </label>
                    <input
                      id="modal-phone"
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition-all focus:border-med-teal focus:bg-white focus:ring-2 focus:ring-med-teal/20"
                    />
                  </div>

                  {/* Trust Info */}
                  <div className="flex items-center gap-2 rounded-xl bg-slate-50 p-3 text-xs text-slate-500 border border-slate-100">
                    <CheckCircle2 className="h-4 w-4 text-med-teal flex-shrink-0" />
                    <span>Clicking below will open WhatsApp to confirm your slot immediately.</span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative w-full flex items-center justify-center gap-2 rounded-xl bg-med-teal hover:bg-med-teal-hover py-4 font-semibold text-white shadow-lg shadow-med-teal/20 transition-all cursor-pointer select-none active:scale-[0.98] disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        <MessageSquare className="h-5 w-5" />
                        <span>Book Consultation</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-4 text-center"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800">Booking Initiated!</h4>
                  <p className="mt-2 text-sm text-slate-600">
                    We have opened WhatsApp on your device. Please send the prefilled message to lock in your appointment with {clinicConfig.doctorName}.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-6 rounded-xl border border-slate-200 hover:bg-slate-50 px-6 py-2.5 text-sm font-semibold text-slate-600 transition-all cursor-pointer"
                  >
                    Close Window
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
