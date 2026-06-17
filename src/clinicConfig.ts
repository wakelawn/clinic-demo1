export interface ClinicService {
  id: string;
  title: string;
  description: string;
  iconName: 'Stethoscope' | 'Baby' | 'Sparkles' | 'Activity' | 'Accessibility' | 'ShieldAlert' | 'Heart' | 'Clock';
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  feedback: string;
  image?: string;
}

export interface GoogleReview {
  id: string;
  name: string;
  rating: number;
  text: string;
  time: string;
  avatarUrl?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface WhyChooseUsReason {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TrustMetrics {
  patientsServed: string;
  yearsExperience: string;
  satisfactionRate: string;
  emergencySupport: string;
  googleRating: string;
}

export interface BeforeAfterPoint {
  old: string;
  new: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceTag: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface FlowStep {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface ClinicConfig {
  clinicName: string;
  clinicTagline: string;
  doctorName: string;
  doctorRole: string;
  qualification: string;
  experience: string;
  phone: string;
  email: string;
  address: string;
  googleMapsEmbedUrl: string;
  whatsappNumber: string;
  doctorImage: string;
  clinicImage: string;
  consultationImage: string;
  trustMetrics: TrustMetrics;
  about: {
    mission: string;
    vision: string;
    philosophy: string;
    description: string;
  };
  specializations: string[];
  certifications: string[];
  services: ClinicService[];
  whyChooseUs: WhyChooseUsReason[];
  beforeAfter: BeforeAfterPoint[];
  leadFlow: FlowStep[];
  googleReviews: GoogleReview[];
  testimonials: Testimonial[];
  pricingPlans: PricingPlan[];
  faqs: FAQ[];
  timings: {
    weekdays: string;
    saturdays: string;
    sundays: string;
  };
  socialLinks: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export const clinicConfig: ClinicConfig = {
  clinicName: "Apex Premium Clinic",
  clinicTagline: "Luxury healthcare and expert medical care for you and your family",
  doctorName: "Dr. Vikram Aditya",
  doctorRole: "Chief Medical Officer & Senior Physician",
  qualification: "MD (General Medicine), MBBS - AIIMS, New Delhi",
  experience: "15+ Years",
  phone: "+91 98765 43210",
  email: "contact@apexclinic.in",
  address: "Suite 402, 4th Floor, Skyline Towers, Sector 62, Noida, UP - 201301",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.562013348128!2d77.36011427618037!3d28.61291198484196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5631488c9f5%3A0xe21f7e0253457a4!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  whatsappNumber: "919876543210", // No +, with country code
  doctorImage: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop", // Professional doctor
  clinicImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop", // Premium clinic reception
  consultationImage: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?q=80&w=800&auto=format&fit=crop", // Doctor consultation
  trustMetrics: {
    patientsServed: "10,000+",
    yearsExperience: "15+",
    satisfactionRate: "98%",
    emergencySupport: "24/7",
    googleRating: "4.9"
  },
  about: {
    description: "Apex Premium Clinic is a state-of-the-art medical facility offering personalized, high-quality primary care. We merge executive-level diagnostics with a boutique hospitality experience to provide healthcare that truly prioritizes your time, comfort, and long-term health outcomes.",
    mission: "To deliver elite-tier clinical solutions that combine cutting-edge technology, deep expertise, and patient comfort.",
    vision: "To set the benchmark for luxury primary care and preventive medicine in private practice.",
    philosophy: "Healthcare is not transactional. We believe in building lifelong partnerships focused on total well-being, trust, and absolute clinical precision."
  },
  specializations: [
    "Chronic Disease Management (Diabetes, Hypertension)",
    "Advanced Preventive Diagnostics & Health Screenings",
    "Pediatric & Child Wellness Consultations",
    "Dermatology & Skin Rejuvenation Therapies",
    "Geriatric Care & Lifestyle Modifications"
  ],
  certifications: [
    "Board Certified in Internal Medicine",
    "Fellowship in Preventive Cardiology - Royal College of Physicians",
    "Ex-Resident Physician, AIIMS New Delhi",
    "Member of American College of Physicians (ACP)"
  ],
  services: [
    {
      id: "gen-med",
      title: "General Medicine",
      description: "Comprehensive care for acute illnesses, custom wellness plans, and chronic health management.",
      iconName: "Stethoscope"
    },
    {
      id: "child-care",
      title: "Child Care",
      description: "Dedicated pediatric wellness checks, developmental milestone monitoring, and immunizations.",
      iconName: "Baby"
    },
    {
      id: "skin-care",
      title: "Skin Care & Aesthetics",
      description: "Premium clinical dermatology treatments for healthy, glowing skin under expert guidance.",
      iconName: "Sparkles"
    },
    {
      id: "diabetes-mgt",
      title: "Diabetes Management",
      description: "Evidence-based, personalized protocols to control sugar levels and prevent complications.",
      iconName: "Activity"
    },
    {
      id: "physio",
      title: "Physiotherapy & Rehab",
      description: "Advanced musculoskeletal rehabilitation to restore movement, strength, and relieve pain.",
      iconName: "Accessibility"
    },
    {
      id: "diag",
      title: "Diagnostics & Screenings",
      description: "In-house lab tests, high-precision scans, and comprehensive executive body profiles.",
      iconName: "Heart"
    }
  ],
  whyChooseUs: [
    {
      id: "why-1",
      title: "Experienced Doctors",
      description: "Consultations led exclusively by double-boarded physicians and senior specialists from top-tier institutes.",
      iconName: "Award"
    },
    {
      id: "why-2",
      title: "Modern Equipment",
      description: "Equipped with FDA-approved diagnostic technology to ensure zero margin of error.",
      iconName: "Cpu"
    },
    {
      id: "why-3",
      title: "Hygienic Environment",
      description: "Boutique, luxury clinic interior operating under strict hospital-grade sterilization protocols.",
      iconName: "Sparkles"
    },
    {
      id: "why-4",
      title: "Personalized Treatment",
      description: "We cap daily appointments to spend a minimum of 30 focused minutes with every single patient.",
      iconName: "HeartHandshake"
    },
    {
      id: "why-5",
      title: "Affordable Care",
      description: "Transparent billing structures, zero hidden costs, and custom care packages tailored for families.",
      iconName: "PiggyBank"
    },
    {
      id: "why-6",
      title: "Emergency Support",
      description: "24/7 dedicated triage call line for registered families, ensuring immediate clinical guidance.",
      iconName: "PhoneCall"
    }
  ],
  beforeAfter: [
    {
      old: "❌ No Website: Patients can't find you online",
      new: "✅ Professional Website: Impressive 24/7 online presence"
    },
    {
      old: "❌ Hard to Find: Invisible on Google Search maps",
      new: "✅ Google Visibility: Patients search and navigate directly"
    },
    {
      old: "❌ No Online Trust: Zero patient reviews visible",
      new: "✅ Verified Trust: Showcase 4.9★ ratings & patient feedback"
    },
    {
      old: "❌ Complex Booking: Phone lines busy or unreachable",
      new: "✅ WhatsApp Booking: Instant appointment requests in one click"
    }
  ],
  leadFlow: [
    {
      id: 1,
      title: "Google Search",
      description: "Patient searches for top doctors/clinics near them",
      iconName: "Search"
    },
    {
      id: 2,
      title: "Premium Website",
      description: "They visit your beautiful site and read verified reviews",
      iconName: "Monitor"
    },
    {
      id: 3,
      title: "WhatsApp Tap",
      description: "They click to book, sending a prefilled booking text",
      iconName: "MessageSquare"
    },
    {
      id: 4,
      title: "Confirmed Visit",
      description: "You confirm the slot, converting a visitor into a patient",
      iconName: "UserCheck"
    }
  ],
  googleReviews: [
    {
      id: "rev-1",
      name: "Rohan Malhotra",
      rating: 5,
      text: "Extremely professional doctor and clean facilities. Dr. Vikram takes the time to explain everything in detail. Highly recommended for families.",
      time: "2 days ago",
      avatarUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100&auto=format&fit=crop"
    },
    {
      id: "rev-2",
      name: "Priyanka Sharma",
      rating: 5,
      text: "Excellent treatment and caring staff. The clinic feels like a premium hotel and is spotlessly clean. WhatsApp booking was very smooth.",
      time: "1 week ago",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
    },
    {
      id: "rev-3",
      name: "Col. R. K. Singh",
      rating: 5,
      text: "A truly international standard clinic. No long waiting times, state-of-the-art testing equipment, and very polite support staff.",
      time: "2 weeks ago",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
    }
  ],
  testimonials: [
    {
      id: "test-1",
      name: "Ananya Deshmukh",
      location: "Sector 50, Noida",
      rating: 5,
      feedback: "I was struggling with chronic diabetes management for years. Dr. Vikram's personalized wellness program got my HbA1c down from 8.2 to 6.1 in just four months! The attention to detail here is unmatched.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop"
    },
    {
      id: "test-2",
      name: "Arjun Verma",
      location: "Indirapuram, Ghaziabad",
      rating: 5,
      feedback: "Best child care facility in the region. The pediatric checkup was very comforting; my son was completely at ease. The doctor explained the vaccine schedule with absolute clarity.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop"
    },
    {
      id: "test-3",
      name: "Meera Nair",
      location: "Vasundhara, Enclave",
      rating: 5,
      feedback: "Highly impressed with their diagnostics division. Got my comprehensive senior health screening done and received detailed reports with a 45-minute consultation explaining each value. Truly professional.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
    }
  ],
  pricingPlans: [
    {
      id: "starter",
      name: "Starter Clinic Website",
      priceTag: "Starting from ₹9,999",
      description: "Perfect for individual doctors looking to establish a professional digital address and handle WhatsApp inquiries.",
      features: [
        "Premium Single Page Website",
        "WhatsApp Direct Appointment Link",
        "Google Maps & Location Integration",
        "Mobile-First Responsive Layout",
        "Free Hosting Setup"
      ]
    },
    {
      id: "professional",
      name: "Professional Web Presence",
      priceTag: "Starting from ₹19,999",
      description: "Ideal for growing clinics looking to rank on search engines, build credibility, and capture leads directly.",
      features: [
        "Everything in Starter",
        "Google Search SEO Setup",
        "Lead Capture Booking Form",
        "Google Reviews Showcase",
        "Interactive FAQ & Services Accordion",
        "Doctor Authority Profile Section"
      ],
      isPopular: true
    },
    {
      id: "premium",
      name: "Premium Healthcare Growth",
      priceTag: "Starting from ₹29,999",
      description: "For luxury clinics and multi-doctor polyclinics aiming to dominate their local market and share educational content.",
      features: [
        "Everything in Professional",
        "Health & Wellness Blog",
        "Priority Support & Edits",
        "Custom Patient Testimonial Showcase",
        "Multi-Doctor Profile Support",
        "Premium Micro-Animations & Speed Optimization"
      ]
    }
  ],
  faqs: [
    {
      id: "faq-1",
      question: "How do I book an appointment?",
      answer: "You can book easily by clicking the 'Book Appointment' button anywhere on our website, filling in your name and phone, and submitting. This instantly initiates a WhatsApp conversation with our front desk to confirm your preferred slot."
    },
    {
      id: "faq-2",
      question: "What are your clinic timings?",
      answer: "We are open Monday to Friday from 9:00 AM to 8:00 PM, Saturday from 9:00 AM to 5:00 PM, and closed on Sundays except for emergencies."
    },
    {
      id: "faq-3",
      question: "Do you accept walk-ins?",
      answer: "While we recommend booking ahead to avoid waiting times, we do accept walk-in patients for general consultations depending on slot availability. Emergencies are triaged immediately."
    },
    {
      id: "faq-4",
      question: "Is there parking available at the clinic?",
      answer: "Yes, we have dedicated basement visitor parking with valet service available free of charge for all consulting patients at Skyline Towers."
    }
  ],
  timings: {
    weekdays: "Mon - Fri: 9:00 AM - 8:00 PM",
    saturdays: "Saturday: 9:00 AM - 5:00 PM",
    sundays: "Sunday: Closed (Emergency Support Available)"
  },
  socialLinks: {
    facebook: "https://facebook.com/apexclinic",
    instagram: "https://instagram.com/apexclinic",
    twitter: "https://twitter.com/apexclinic",
    linkedin: "https://linkedin.com/company/apexclinic"
  }
};
