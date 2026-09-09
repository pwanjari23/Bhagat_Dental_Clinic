"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, ChevronRight, Home } from "lucide-react";
import { useTab, NavTab } from "@/components/tab-context";

interface TabHeaderProps {
  title: string;
  subtitle: string;
  eyebrow: string;
}

export function TabHeader({ title, subtitle, eyebrow }: TabHeaderProps) {
  const { activeTab, setActiveTab } = useTab();

  return (
    <div className="pt-28 pb-8 md:pt-36 md:pb-12 bg-gradient-to-b from-sage-100/70 via-ivory to-ivory border-b border-teal-800/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between gap-4 mb-6"
        >
          <div className="flex items-center gap-2 text-xs font-semibold text-charcoal-muted">
            <button
              type="button"
              onClick={() => setActiveTab("Home")}
              className="hover:text-teal-800 transition-colors flex items-center gap-1"
            >
              <Home className="w-3.5 h-3.5 text-teal-700" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-charcoal-light" />
            <span className="text-teal-900 bg-sage-200/80 px-2.5 py-0.5 rounded-full">
              {activeTab}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setActiveTab("Home")}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 hover:text-teal-950 bg-white/80 hover:bg-white px-3.5 py-1.5 rounded-full border border-teal-800/10 shadow-sm transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>
        </motion.div>

        {/* Tab Title & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-sage-200 text-teal-800 border border-teal-800/10 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-champagne-dark" />
            <span>{eyebrow}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-teal-950 font-normal tracking-tight leading-tight mb-3">
            {title}
          </h1>

          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-sans">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
