"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TabProvider, useTab } from "@/components/tab-context";
import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "@/components/hero/hero";
import { TrustStrip } from "@/components/trust/trust-strip";
import { HomeExploreHub } from "@/components/home/home-explore-hub";
import { AboutClinic } from "@/components/about/about-clinic";
import { DoctorSection } from "@/components/doctor/doctor-section";
import { ServicesInteractive } from "@/components/services/services-interactive";
import { WhyChooseUs } from "@/components/why-us/why-choose-us";
import { DentalJourney } from "@/components/journey/dental-journey";
import { BeforeAfterSection } from "@/components/before-after/before-after-section";
import { Testimonials } from "@/components/testimonials/testimonials";
import { ClinicGallery } from "@/components/gallery/clinic-gallery";
import { AppointmentForm } from "@/components/appointment/appointment-form";
import { ContactSection } from "@/components/contact/contact-section";
import { Footer } from "@/components/footer/footer";
import { MobileStickyBar } from "@/components/mobile/mobile-sticky-bar";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { TabHeader } from "@/components/ui/tab-header";
import { NextTabBanner } from "@/components/ui/next-tab-banner";

function TabbedViews() {
  const { activeTab } = useTab();

  const tabTransition = {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -18 },
    transition: { duration: 0.38, ease: "easeOut" as const },
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <AnimatePresence mode="wait">
        {activeTab === "Home" && (
          <motion.div key="home" {...tabTransition}>
            {/* Hero Section with Wow Entrance */}
            <Hero />

            {/* Trust Strip */}
            <TrustStrip />

            {/* Why Us Pillars (Added to Home) */}
            <WhyChooseUs />

            {/* 5-Step Patient Journey (Added to Home) */}
            <DentalJourney />

            {/* Visual Tour & Lightbox Gallery (Added to Home) */}
            <ClinicGallery />

            {/* Interactive Before & After Slider (Added to Home) */}
            <BeforeAfterSection />

            {/* Explore Our Practice Interactive Hub & Concierge */}
            <HomeExploreHub />
          </motion.div>
        )}

        {activeTab === "About" && (
          <motion.div key="about" {...tabTransition}>
            <TabHeader
              eyebrow="Our Practice Story"
              title="More than a dental visit. A more thoughtful experience."
              subtitle="Learn about our patient-first care philosophy, calm clinical atmosphere, and dedication to comfortable dentistry in Saoner."
            />
            <AboutClinic />
            <NextTabBanner
              nextTab="Doctor"
              label="Meet Dr. Rashmi Bhagat"
              sublabel="Discover our lead dental surgeon's approach to unhurried, gentle care."
            />
          </motion.div>
        )}

        {activeTab === "Doctor" && (
          <motion.div key="doctor" {...tabTransition}>
            <TabHeader
              eyebrow="Lead Dental Surgeon"
              title="Dedicated to gentle, unhurried patient care in Saoner."
              subtitle="Dr. Rashmi Bhagat brings warmth, modern techniques, and individualized dental attention to every patient."
            />
            <DoctorSection />
            <NextTabBanner
              nextTab="Treatments"
              label="Explore Our Treatments"
              sublabel="Comprehensive checkups, ultrasonic scaling, gentle root canals, and restorations."
            />
          </motion.div>
        )}

        {activeTab === "Treatments" && (
          <motion.div key="treatments" {...tabTransition}>
            <TabHeader
              eyebrow="Comprehensive Treatments"
              title="Thoughtful care for every stage of your smile."
              subtitle="Select any treatment to explore detailed clinical advantages, step-by-step visit protocols, and instant WhatsApp inquiry."
            />
            <ServicesInteractive />
            <NextTabBanner
              nextTab="Reviews"
              label="Read Patient Reflections"
              sublabel="See authentic reflections and ratings from families in Saoner."
            />
          </motion.div>
        )}

        {activeTab === "Reviews" && (
          <motion.div key="reviews" {...tabTransition}>
            <TabHeader
              eyebrow="Patient Feedback"
              title="Care that speaks through genuine smiles."
              subtitle="Authentic reflections from families and individuals in Saoner who visited Dr. Rashmi Bhagat Dental Clinic."
            />
            <Testimonials />
            <NextTabBanner
              nextTab="Contact"
              label="Schedule Your Visit"
              sublabel="Connect directly with our clinic on WhatsApp or request your preferred appointment date."
            />
          </motion.div>
        )}

        {activeTab === "Contact" && (
          <motion.div key="contact" {...tabTransition}>
            <TabHeader
              eyebrow="Contact & Location"
              title="We look forward to welcoming you."
              subtitle="Located on Main Road, Civil Line, Saoner. Message on WhatsApp, call directly, or book your preferred appointment slot."
            />
            <AppointmentForm />
            <ContactSection />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Comprehensive Footer */}
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <TabProvider>
      <main className="relative flex-1 w-full overflow-hidden bg-ivory">
        {/* Desktop Custom Cursor */}
        <CustomCursor />

        {/* Sticky Tab Navigation Bar */}
        <Navbar />

        {/* Dynamic Tab Views */}
        <TabbedViews />

        {/* Desktop Floating WhatsApp Button */}
        <FloatingWhatsApp />

        {/* Mobile Sticky Quick-Action Bar */}
        <MobileStickyBar />
      </main>
    </TabProvider>
  );
}
