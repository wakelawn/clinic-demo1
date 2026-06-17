import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustMetrics from '@/components/TrustMetrics';
import BeforeAfter from '@/components/BeforeAfter';
import LeadCaptureDemo from '@/components/LeadCaptureDemo';
import About from '@/components/About';
import DoctorProfile from '@/components/DoctorProfile';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import GoogleReviews from '@/components/GoogleReviews';
import Testimonials from '@/components/Testimonials';
import PricingPreview from '@/components/PricingPreview';
import AppointmentCTA from '@/components/AppointmentCTA';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import MobileActionBar from '@/components/MobileActionBar';
import AppointmentModal from '@/components/AppointmentModal';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-med-teal/20 selection:text-med-teal">
      {/* Sticky Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Trust Metrics Bar */}
        <TrustMetrics />

        {/* 3. Before vs After Comparison */}
        <BeforeAfter />

        {/* 4. Lead Capture Funnel Diagram */}
        <LeadCaptureDemo />

        {/* 5. About Clinic Section */}
        <About />

        {/* 6. Doctor Profile Section */}
        <DoctorProfile />

        {/* 7. Services Section */}
        <Services />

        {/* 8. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 9. Google Reviews Section */}
        <GoogleReviews />

        {/* 10. Testimonials Grid */}
        <Testimonials />

        {/* 11. Website Pricing Preview */}
        <PricingPreview />

        {/* 12. Quick Action CTA Bar */}
        <AppointmentCTA />

        {/* 13. FAQ Section */}
        <FAQ />

        {/* 14. Contact Form & Google Maps Embed */}
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Floating Elements */}
      <FloatingWhatsApp />
      <MobileActionBar />
      
      {/* Modal overlays */}
      <AppointmentModal />
    </div>
  );
}
