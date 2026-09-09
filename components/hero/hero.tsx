"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  MessageCircle,
  Phone,
  Clock,
  MapPin,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { clinicData } from "@/lib/clinic-data";
import { useTab } from "@/components/tab-context";

export function Hero() {
  const { setActiveTab } = useTab();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-sage-50/70 via-ivory to-ivory"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-teal-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 right-0 w-96 h-96 bg-champagne-light/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Editorial Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col text-left"
          >
            {/* Eyebrow badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-sage-200/80 text-teal-900 border border-teal-800/10 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
                Trusted Dental Care in Saoner
              </span>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl md:text-6xl text-teal-950 font-normal tracking-tight leading-[1.12] mb-6"
            >
              A healthier smile <br />
              <span className="italic font-serif text-teal-700">starts with</span> feeling cared for.
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-charcoal-muted leading-relaxed max-w-2xl mb-8 font-sans"
            >
              Thoughtful, personalized dental care designed around your comfort and confidence. From preventive checkups to restorative care, experience unhurried dentistry right here on Main Road, Saoner.
            </motion.p>

            {/* CTA Group (Desktop only - mobile is served by the fixed sticky concierge bar) */}
            <motion.div
              variants={itemVariants}
              className="hidden sm:flex flex-row items-center gap-3.5 mb-10"
            >
              <button
                type="button"
                onClick={() => setActiveTab("Contact")}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide uppercase bg-teal-800 text-ivory hover:bg-teal-900 transition-all shadow-soft hover:shadow-elevated hover:scale-[1.01] active:scale-[0.99] group"
              >
                <Calendar className="w-4 h-4 text-champagne" />
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`https://wa.me/${clinicData.contact.whatsapp}?text=${encodeURIComponent(
                  "Hello Dr. Rashmi Bhagat Dental Clinic, I would like to enquire about a dental consultation."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide text-teal-900 bg-white hover:bg-sage-50 border border-teal-800/15 transition-all shadow-sm hover:shadow hover:scale-[1.01]"
              >
                <MessageCircle className="w-4 h-4 text-teal-700" />
                <span>Chat on WhatsApp</span>
              </a>
            </motion.div>

            {/* Micro Trust Proofs */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-teal-800/10 grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-charcoal">
                  Gentle & Personal
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-charcoal">
                  Clear Advice
                </span>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-charcoal">
                  No Rushed Visits
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Border Ring */}
              <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-teal-800/10 via-champagne/20 to-teal-800/5 -z-10" />

              {/* Main Image Container */}
              <div className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden shadow-elevated border border-white/60 bg-sage-100">
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85"
                  alt="Dr. Rashmi Bhagat Dental Clinic Consultation Suite"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />

                {/* Subtle Inner Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/60 via-transparent to-transparent" />

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-5 left-5 right-5 text-ivory">
                  <div className="flex items-center gap-2 text-champagne-light text-xs font-semibold uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Personalized Concierge Care</span>
                  </div>
                  <p className="text-sm font-medium text-ivory/95">
                    Dr. Rashmi Bhagat Dental Clinic • Saoner
                  </p>
                </div>
              </div>

              {/* Floating Card 1: Timings */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -top-4 -left-4 sm:-left-6 glass-panel rounded-2xl p-3 sm:p-4 shadow-elevated flex items-center gap-3 border border-white/80"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-muted">
                    Open Today
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-teal-950">
                    9:00 AM – 8:00 PM
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2: Location */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-5 -right-4 sm:-right-6 glass-panel rounded-2xl p-3 sm:p-4 shadow-elevated flex items-center gap-3 border border-white/80"
              >
                <div className="w-10 h-10 rounded-xl bg-champagne-light/50 text-teal-900 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-teal-800" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-muted">
                    Location
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-teal-950">
                    Civil Line, Saoner
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
