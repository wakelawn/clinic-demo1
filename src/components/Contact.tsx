'use client';

import React, { useState } from 'react';
import { clinicConfig } from '@/clinicConfig';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    // Prefill WhatsApp text
    const text = `Hello Doctor, I would like to make an inquiry.\nName: ${name}\nPhone: ${phone}${message ? `\nMessage: ${message}` : ''}`;
    const url = `https://wa.me/${clinicConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
    
    setIsSuccess(true);
    setTimeout(() => {
      window.open(url, '_blank');
      setIsSuccess(false);
      setName('');
      setPhone('');
      setMessage('');
    }, 1000);
  };

  return (
    <section id="contact" className="relative bg-white py-20 lg:py-28 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-med-teal">
            Get in Touch
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-med-blue sm:text-4xl font-sans tracking-tight">
            Contact & Location Details
          </h2>
          <p className="mt-4 text-slate-500 font-light text-base">
            Reach out to schedule your visit or speak with our consulting staff for clinical queries.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Left: Contact Info & Map */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Quick Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone & Email */}
              <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6 flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-slate-100 text-med-teal shadow-sm flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 font-sans">Call or Email</h4>
                  <a href={`tel:${clinicConfig.phone.replace(/\s+/g, '')}`} className="block text-sm text-med-blue font-semibold mt-1 hover:underline">
                    {clinicConfig.phone}
                  </a>
                  <a href={`mailto:${clinicConfig.email}`} className="block text-xs text-slate-500 mt-1 hover:underline">
                    {clinicConfig.email}
                  </a>
                </div>
              </div>

              {/* Clinic Timings */}
              <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6 flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-slate-100 text-med-teal shadow-sm flex-shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 font-sans">Working Hours</h4>
                  <p className="text-xs text-slate-600 font-light mt-1.5">{clinicConfig.timings.weekdays}</p>
                  <p className="text-xs text-slate-600 font-light mt-1">{clinicConfig.timings.saturdays}</p>
                  <p className="text-xs text-slate-400 font-light mt-1">{clinicConfig.timings.sundays}</p>
                </div>
              </div>

            </div>

            {/* Clinic Address Card */}
            <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6 flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-slate-100 text-med-teal shadow-sm flex-shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800 font-sans">Our Address</h4>
                <p className="text-sm text-slate-600 font-light mt-1.5 leading-relaxed">
                  {clinicConfig.address}
                </p>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-slate-200/80 shadow-md bg-slate-50">
              <iframe
                src={clinicConfig.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Map Location"
              />
            </div>

          </div>

          {/* Right: Quick Enquiry Form */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-100 bg-slate-50/50 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 font-sans mb-1">Quick Inquiry</h3>
              <p className="text-xs text-slate-400 font-light mb-6">Fill in details to get a callback from our front desk.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Priyanshu Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition-all focus:border-med-teal focus:ring-2 focus:ring-med-teal/20"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition-all focus:border-med-teal focus:ring-2 focus:ring-med-teal/20"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    How can we help? (Optional)
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Describe your health issue or preferred timing..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition-all resize-none focus:border-med-teal focus:ring-2 focus:ring-med-teal/20"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSuccess}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-med-blue hover:bg-med-blue-hover py-4 font-bold text-white shadow-md transition-all cursor-pointer active:scale-[0.98]"
                >
                  {isSuccess ? (
                    <>
                      <MessageSquare className="h-5 w-5 fill-white/10" />
                      <span>Opening WhatsApp...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
