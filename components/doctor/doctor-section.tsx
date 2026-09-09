"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Calendar, Sparkles, Heart, CheckCircle2 } from "lucide-react";
import { clinicData } from "@/lib/clinic-data";
import { useTab } from "@/components/tab-context";

export function DoctorSection() {
  const { doctor } = clinicData;
  const { setActiveTab } = useTab();

  return (
    <section id="doctor" className="py-20 sm:py-28 bg-gradient-to-b from-ivory via-sage-50/50 to-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] border border-teal-800/10 shadow-elevated p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sage-100/60 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Doctor Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[2rem] overflow-hidden shadow-elevated border-4 border-white bg-sage-100">
                <Image
                  src={doctor.image}
                  alt={doctor.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/40 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl p-3 text-center border border-white/80 shadow-sm">
                  <span className="text-xs uppercase tracking-wider font-semibold text-teal-800">
                    Lead Dental Surgeon
                  </span>
                  <p className="text-sm font-bold text-teal-950">
                    Dr. Rashmi Bhagat
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Information & Bio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-sage-200 text-teal-800 border border-teal-800/10 mb-4 w-fit">
                <Sparkles className="w-3.5 h-3.5 text-champagne-dark" />
                Meet Your Dentist
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-teal-950 font-normal tracking-tight leading-[1.2] mb-3">
                {doctor.name}
              </h2>

              <p className="text-sm sm:text-base font-medium text-teal-700 mb-6">
                {doctor.specialization}
                {doctor.qualification ? ` • ${doctor.qualification}` : ""}
              </p>

              <p className="text-base text-charcoal-muted leading-relaxed mb-6 font-sans">
                {doctor.bio}
              </p>

              {/* Personal Quote Card */}
              <div className="p-5 rounded-2xl bg-sage-50 border border-teal-800/10 mb-8 flex items-start gap-3">
                <Heart className="w-5 h-5 text-teal-700 shrink-0 mt-1" />
                <p className="font-serif italic text-base sm:text-lg text-teal-950">
                  “{doctor.quote}”
                </p>
              </div>

              {/* Doctor Practice Pillars */}
              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2.5 text-sm text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>Personal, one-on-one consultations for every patient</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>Thorough explanations of all treatment choices and costs</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>Emphasis on gentle care and long-term tooth preservation</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => setActiveTab("Contact")}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-teal-800 text-ivory hover:bg-teal-900 transition-all shadow-soft hover:shadow-elevated text-center cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-champagne" />
                  <span>Book Consultation</span>
                </button>

                <a
                  href={`https://wa.me/${clinicData.contact.whatsapp}?text=${encodeURIComponent(
                    "Hello Dr. Rashmi Bhagat Dental Clinic, I would like to schedule a consultation with Dr. Rashmi Bhagat."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-xs font-semibold tracking-wide text-teal-900 bg-sage-100 hover:bg-sage-200 transition-colors text-center"
                >
                  <MessageCircle className="w-4 h-4 text-teal-700" />
                  <span>Message on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
