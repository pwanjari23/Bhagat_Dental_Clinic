"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";
import { useTab, NavTab } from "@/components/tab-context";
import { clinicData } from "@/lib/clinic-data";

interface NextTabBannerProps {
  nextTab: NavTab;
  label: string;
  sublabel: string;
}

export function NextTabBanner({ nextTab, label, sublabel }: NextTabBannerProps) {
  const { setActiveTab } = useTab();

  return (
    <div className="py-12 bg-ivory border-t border-teal-800/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-6 sm:p-8 border border-teal-800/10 shadow-soft flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <span className="text-[11px] uppercase tracking-wider font-semibold text-teal-700">
              Continue Exploring
            </span>
            <h4 className="font-serif text-xl sm:text-2xl text-teal-950 font-normal mt-0.5">
              {label}
            </h4>
            <p className="text-xs text-charcoal-muted mt-1 font-sans">
              {sublabel}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setActiveTab(nextTab)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-800 text-ivory hover:bg-teal-900 transition-all shadow-soft group cursor-pointer"
            >
              <span>Explore {nextTab}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-champagne" />
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("Contact")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold text-teal-900 bg-sage-100 hover:bg-sage-200 transition-colors cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-teal-700" />
              <span>Book Visit</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
