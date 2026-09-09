"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  User,
  Sparkles,
  HeartHandshake,
  Image as ImageIcon,
  ArrowRight,
  MessageCircle,
  Phone,
  Calendar,
  ShieldCheck,
  Star,
} from "lucide-react";
import { useTab, NavTab } from "@/components/tab-context";
import { clinicData } from "@/lib/clinic-data";

export function HomeExploreHub() {
  const { setActiveTab } = useTab();

  const hubs = [
    {
      tab: "About" as NavTab,
      badge: "Our Philosophy",
      title: "Our Practice Story",
      subtitle: "More Than A Dental Visit",
      desc: "Learn how our practice replaces dental apprehension with calm, unhurried attention and transparent care.",
      icon: HeartHandshake,
      actionText: "Read Our Story",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=700&q=80",
    },
    {
      tab: "Doctor" as NavTab,
      badge: "Meet Your Dentist",
      title: "Dr. Rashmi Bhagat",
      subtitle: "Dental Surgeon & Practice Lead",
      desc: "Unhurried, personal consultations focused on calm comfort, clear explanations, and preventive oral wellness.",
      icon: User,
      actionText: "Meet Dr. Rashmi",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=80",
    },
    {
      tab: "Treatments" as NavTab,
      badge: "Comprehensive Care",
      title: "Modern Treatments",
      subtitle: "From Routine Care to Restorations",
      desc: "Ultrasonic scaling, tooth-colored composite fillings, gentle RCT, dental crowns, teeth whitening, and pediatric visits.",
      icon: Sparkles,
      actionText: "Explore Treatments",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=700&q=80",
    },
    {
      tab: "Contact" as NavTab,
      badge: "Seamless Booking",
      title: "Connect & Book",
      subtitle: "WhatsApp & In-Clinic Visits",
      desc: "Connect directly with our clinic on WhatsApp, check operating hours, or request your preferred appointment date.",
      icon: ImageIcon,
      actionText: "Book Appointment",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=700&q=80",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-ivory relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-champagne-light/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-sage-200 text-teal-800 border border-teal-800/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold animate-pulse" />
            Explore Our Practice
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-teal-950 font-normal tracking-tight leading-[1.2] mb-4">
            Thoughtful Dentistry,{" "}
            <span className="italic font-serif text-teal-700">crafted for you.</span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted font-sans leading-relaxed">
            Select an area below to explore our doctor, comprehensive treatments, patient journey, and clinic spaces.
          </p>
        </div>

        {/* 4 Feature Hub Cards Grid: 2 per line on mobile, 2 columns on desktop */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
          {hubs.map((hub, idx) => {
            const Icon = hub.icon;
            return (
              <motion.div
                key={hub.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => setActiveTab(hub.tab)}
                className="group relative bg-white rounded-2xl sm:rounded-[2rem] border border-teal-800/10 shadow-soft hover:shadow-elevated transition-all overflow-hidden cursor-pointer flex flex-col justify-between"
              >
                <div className="grid grid-cols-1 sm:grid-cols-12 items-center h-full">
                  {/* Left Thumbnail (Top on mobile, Left on tablet/desktop) */}
                  <div className="sm:col-span-5 relative aspect-[16/10] sm:aspect-auto sm:h-full sm:min-h-[220px] overflow-hidden bg-sage-100">
                    <Image
                      src={hub.image}
                      alt={hub.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 100vw, 300px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-teal-950/40 via-transparent to-transparent" />
                  </div>

                  {/* Right Details (Bottom on mobile, Right on tablet/desktop) */}
                  <div className="sm:col-span-7 p-3 sm:p-6 lg:p-7 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                        <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-teal-700 bg-sage-100 px-2 sm:px-2.5 py-0.5 rounded-full truncate">
                          {hub.badge}
                        </span>
                      </div>

                      <h3 className="font-serif text-sm sm:text-xl lg:text-2xl text-teal-950 font-bold mb-0.5 sm:mb-1 group-hover:text-teal-800 transition-colors line-clamp-1">
                        {hub.title}
                      </h3>

                      <div className="text-[10px] sm:text-xs font-semibold text-charcoal-muted uppercase tracking-wider mb-1.5 sm:mb-3 line-clamp-1">
                        {hub.subtitle}
                      </div>

                      <p className="text-[11px] sm:text-xs text-charcoal-muted leading-relaxed font-sans mb-3 sm:mb-5 line-clamp-2 sm:line-clamp-3">
                        {hub.desc}
                      </p>
                    </div>

                    <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs font-bold text-teal-800 group-hover:text-teal-950 transition-colors pt-2 border-t border-teal-800/5 mt-auto">
                      <span className="truncate">{hub.actionText}</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1.5 transition-transform text-champagne-dark shrink-0" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Reviews Teaser Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-sage-100/70 rounded-3xl p-6 sm:p-8 border border-teal-800/10 mb-16 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-800 text-champagne flex items-center justify-center shrink-0 shadow-soft">
              <Star className="w-6 h-6 fill-champagne" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-sm font-bold text-teal-950">
                  5.0 ★ Rated by Patients in Saoner
                </span>
                <span className="text-xs text-teal-700 font-semibold">• Civil Line, Main Road</span>
              </div>
              <p className="text-xs text-charcoal-muted">
                “Very calm and patient dental doctor. Explained the problem clearly without any discomfort.”
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setActiveTab("Reviews")}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-teal-900 hover:bg-teal-50 border border-teal-800/15 transition-all shadow-sm"
          >
            <span>Read Patient Reviews</span>
            <ArrowRight className="w-3.5 h-3.5 text-teal-700" />
          </button>
        </motion.div>

        {/* High-Impact Appointment Concierge Callout Banner */}
        <div className="bg-gradient-to-tr from-teal-900 via-teal-800 to-teal-900 rounded-[2.5rem] p-8 sm:p-12 text-ivory relative overflow-hidden shadow-elevated">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-700/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-teal-700/80 text-champagne border border-champagne/30 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Direct Clinic Access
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-normal leading-tight mb-4">
              Have a dental concern? <br />
              <span className="italic font-serif text-champagne-light">
                Talk to us directly on WhatsApp.
              </span>
            </h3>

            <p className="text-teal-100/90 text-sm leading-relaxed mb-8">
              Whether you need to check availability, inquire about treatment costs, or book an appointment with Dr. Rashmi Bhagat, we respond promptly.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${clinicData.contact.whatsapp}?text=${encodeURIComponent(
                  "Hello Dr. Rashmi Bhagat Dental Clinic, I would like to book an appointment."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-champagne text-teal-950 hover:bg-champagne-light transition-all shadow-soft font-sans"
              >
                <MessageCircle className="w-4 h-4 text-teal-950" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => setActiveTab("Contact")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-ivory border border-white/20 transition-all shadow-soft"
              >
                <Calendar className="w-4 h-4 text-champagne" />
                <span>Appointment Form</span>
              </button>

              <a
                href={`tel:${clinicData.contact.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-xs font-semibold text-teal-100 hover:text-ivory transition-colors"
              >
                <Phone className="w-4 h-4 text-champagne" />
                <span>{clinicData.contact.displayPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
