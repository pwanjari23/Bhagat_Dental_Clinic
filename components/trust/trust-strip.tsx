"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Smile,
  MessageSquare,
  Users,
  CalendarCheck,
  ShieldCheck,
} from "lucide-react";

export function TrustStrip() {
  const trustPoints = [
    {
      icon: Heart,
      title: "Personalized Care",
      desc: "Unhurried, tailored attention",
    },
    {
      icon: Smile,
      title: "Comfort-First Focus",
      desc: "Calm, anxiety-reducing environment",
    },
    {
      icon: MessageSquare,
      title: "Clear Communication",
      desc: "Transparent advice in plain language",
    },
    {
      icon: Users,
      title: "Family & Senior Friendly",
      desc: "Welcoming care for all ages",
    },
    {
      icon: CalendarCheck,
      title: "Easy WhatsApp Booking",
      desc: "Prompt appointment scheduling",
    },
    {
      icon: ShieldCheck,
      title: "Strict Hygiene & Safety",
      desc: "Clean, sterilized instruments",
    },
  ];

  return (
    <div className="border-y border-teal-800/10 bg-sage-50/60 py-6 sm:py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-2xl bg-white shadow-soft border border-teal-800/10 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-teal-50 transition-all">
                  <Icon className="w-5 h-5 text-teal-800" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-teal-950 tracking-tight leading-snug">
                    {item.title}
                  </span>
                  <span className="text-[11px] text-charcoal-muted leading-tight mt-0.5">
                    {item.desc}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
