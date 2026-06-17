'use client';

import React from 'react';
import { clinicConfig } from '@/clinicConfig';
import { MessageSquare } from 'lucide-react';

export default function FloatingWhatsApp() {
  const handleWhatsAppChat = () => {
    const message = "Hello Doctor, I would like to book an appointment.";
    const url = `https://wa.me/${clinicConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-24 right-6 z-45 md:bottom-8 md:right-8">
      {/* Outer Pulse Ring */}
      <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping" />
      
      {/* Floating Button */}
      <button
        onClick={handleWhatsAppChat}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/25 transition-all hover:bg-emerald-600 hover:scale-105 active:scale-95 cursor-pointer animate-float"
        aria-label="Chat with us on WhatsApp"
      >
        {/* Customized WhatsApp styled bubble */}
        <MessageSquare className="h-6.5 w-6.5 fill-white/10" />
      </button>
    </div>
  );
}
