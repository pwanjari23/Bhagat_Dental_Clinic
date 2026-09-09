"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { clinicData } from "@/lib/clinic-data";

export function FloatingWhatsApp() {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-3">
      {/* Interactive Tooltip / Prompt */}
      {!tooltipDismissed && (
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-elevated border border-teal-800/10 text-xs text-charcoal flex items-center gap-3 animate-fade-in max-w-xs">
          <div>
            <p className="font-bold text-teal-950">Questions?</p>
            <p className="text-[11px] text-charcoal-muted leading-tight">
              Chat directly with our dental clinic on WhatsApp.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setTooltipDismissed(true)}
            className="text-charcoal-light hover:text-charcoal p-1"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Circular Action Button */}
      <a
        href={`https://wa.me/${clinicData.contact.whatsapp}?text=${encodeURIComponent(
          "Hello Dr. Rashmi Bhagat Dental Clinic, I would like to enquire about an appointment."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-teal-800 hover:bg-teal-700 text-champagne shadow-elevated flex items-center justify-center transition-all hover:scale-110 active:scale-95 group relative border-2 border-white"
        aria-label="Chat with Dr. Rashmi Bhagat Dental Clinic on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-champagne-gold rounded-full border-2 border-white animate-pulse" />
      </a>
    </div>
  );
}
