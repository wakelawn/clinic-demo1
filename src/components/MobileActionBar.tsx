'use client';

import React from 'react';
import { clinicConfig } from '@/clinicConfig';
import { Phone, MessageSquare } from 'lucide-react';

export default function MobileActionBar() {
  const handleCall = () => {
    window.location.href = `tel:${clinicConfig.phone.replace(/\s+/g, '')}`;
  };

  const handleWhatsApp = () => {
    const message = "Hello Doctor, I would like to book an appointment.";
    const url = `https://wa.me/${clinicConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 grid grid-cols-2 bg-white/95 border-t border-slate-200/80 shadow-2xl backdrop-blur-md md:hidden">
      
      {/* Call Button */}
      <button
        onClick={handleCall}
        className="flex items-center justify-center gap-2.5 bg-slate-50 hover:bg-slate-100 py-4.5 text-sm font-bold text-med-blue transition-colors cursor-pointer border-r border-slate-200/60"
      >
        <Phone className="h-4.5 w-4.5 text-med-blue" />
        <span>Call Now</span>
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 py-4.5 text-sm font-bold text-white transition-colors cursor-pointer"
      >
        <MessageSquare className="h-4.5 w-4.5 fill-white/10" />
        <span>WhatsApp</span>
      </button>

    </div>
  );
}
