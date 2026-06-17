'use client';

import React, { useState, useEffect } from 'react';
import { useModal } from '@/context/ModalContext';
import { clinicConfig } from '@/clinicConfig';
import { Menu, X, Stethoscope, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const { openModal } = useModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Monitor scroll for visual changes
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'Doctor Profile', href: '#doctor' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Pricing Plan', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-effect shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group cursor-pointer">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-med-blue to-med-teal text-white shadow-md shadow-med-teal/20 transition-all group-hover:scale-105">
              <Stethoscope className="h-5.5 w-5.5" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-med-blue font-sans">
              {clinicConfig.clinicName.split(' ')[0]}
              <span className="text-med-teal font-normal">
                {clinicConfig.clinicName.substring(clinicConfig.clinicName.split(' ')[0].length)}
              </span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm font-semibold text-slate-600 transition-colors hover:text-med-blue py-1 group cursor-pointer"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-med-teal transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={openModal}
              className="flex items-center gap-2 rounded-xl bg-med-blue hover:bg-med-blue-hover px-5 py-3 text-sm font-bold text-white shadow-lg shadow-med-blue/15 transition-all cursor-pointer hover:-translate-y-[1px]"
            >
              <Calendar className="h-4 w-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="rounded-xl border border-slate-200/80 bg-white/50 p-2.5 text-slate-700 backdrop-blur-sm transition-all hover:bg-white cursor-pointer active:scale-95"
            >
              {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 top-[64px] z-30 bg-med-dark/40 backdrop-blur-sm lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed left-0 right-0 top-[68px] z-30 border-b border-slate-200/80 bg-white/95 px-6 py-8 shadow-xl backdrop-blur-md lg:hidden"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="border-b border-slate-100 pb-3 text-base font-semibold text-slate-700 transition-colors hover:text-med-teal cursor-pointer"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setIsMobileOpen(false);
                    openModal();
                  }}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-med-blue to-med-teal py-4 font-bold text-white shadow-lg shadow-med-teal/20 transition-all cursor-pointer active:scale-[0.98]"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Book Appointment</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
