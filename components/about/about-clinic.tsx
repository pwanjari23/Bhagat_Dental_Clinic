"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake, Eye, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutClinic() {
  const values = [
    {
      icon: HeartHandshake,
      title: "Patient-First Attention",
      desc: "We dedicate unhurried time to listen to your dental questions and dental history without feeling rushed.",
    },
    {
      icon: Eye,
      title: "Honest & Simple Explanations",
      desc: "Every procedure is explained in plain terms before starting, so you always know what to expect.",
    },
    {
      icon: ShieldCheck,
      title: "Calm & Hygienic Standards",
      desc: "Meticulous sanitization protocols and a tranquil clinic environment to help you feel at ease.",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Vertical Image Layout */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] w-full rounded-[2.5rem] overflow-hidden shadow-elevated border border-teal-800/10 bg-sage-50">
              <Image
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=85"
                alt="Dr. Rashmi Bhagat Dental Clinic Ambiance"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/70 via-transparent to-transparent" />

              {/* In-Image Tag */}
              <div className="absolute bottom-6 left-6 right-6 text-ivory">
                <span className="text-xs uppercase tracking-widest text-champagne font-semibold flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Saoner Healthcare
                </span>
                <p className="font-serif text-lg leading-snug">
                  A tranquil space where your comfort comes first.
                </p>
              </div>
            </div>

            {/* Decorative background shape */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-teal-100/50 rounded-full blur-2xl -z-10 pointer-events-none" />
          </motion.div>

          {/* Right Editorial Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-sage-200 text-teal-800 border border-teal-800/10 mb-4 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold" />
              About Our Practice
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-teal-950 font-normal tracking-tight leading-[1.2] mb-6">
              More than a dental visit. <br />
              <span className="italic font-serif text-teal-700">A more thoughtful</span> experience.
            </h2>

            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed mb-6 font-sans">
              At Dr. Rashmi Bhagat Dental Clinic, we understand that visiting a dentist can sometimes feel overwhelming. That is why our practice was built on a simple promise: to replace clinic anxiety with gentle, personal attention and clear, honest advice.
            </p>

            <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed mb-8">
              Whether you need a routine cleaning, cavity filling, or root canal treatment, every procedure is guided with patience. We prioritize preserving your natural teeth and fostering long-term oral wellness for individuals and families across Saoner.
            </p>

            {/* Editorial Pull Quote */}
            <div className="p-6 rounded-2xl bg-sage-100/70 border-l-4 border-teal-700 mb-8">
              <blockquote className="font-serif italic text-lg sm:text-xl text-teal-950">
                “Your comfort matters at every step—from your first question to your finished smile.”
              </blockquote>
              <span className="block text-xs uppercase tracking-widest font-semibold text-teal-700 mt-2">
                — Practice Philosophy • Dr. Rashmi Bhagat Dental Clinic
              </span>
            </div>

            {/* Core Values List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="flex flex-col gap-2">
                    <div className="w-9 h-9 rounded-xl bg-white shadow-soft border border-teal-800/10 flex items-center justify-center text-teal-800">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-teal-950">{v.title}</h4>
                    <p className="text-xs text-charcoal-muted leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
