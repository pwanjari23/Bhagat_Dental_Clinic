"use client";

import React from "react";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { clinicData } from "@/lib/clinic-data";
import { useTab } from "@/components/tab-context";

export function MobileStickyBar() {
  const { setActiveTab } = useTab();
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-teal-800/15 px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] pb-[calc(0.625rem+env(safe-area-inset-bottom))]">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Action */}
        <a
          href={`tel:${clinicData.contact.phone.replace(/\s+/g, "")}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-sage-50 text-teal-950 hover:bg-sage-100 transition-colors active:scale-95 text-center"
        >
          <Phone className="w-4 h-4 text-teal-800 mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wider">
            Call
          </span>
        </a>

        {/* WhatsApp Action */}
        <a
          href={`https://wa.me/${clinicData.contact.whatsapp}?text=${encodeURIComponent(
            "Hello Dr. Rashmi Bhagat Dental Clinic, I would like to book an appointment."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-teal-800 text-ivory hover:bg-teal-900 transition-colors active:scale-95 text-center shadow-soft"
        >
          <MessageCircle className="w-4 h-4 text-champagne mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wider">
            WhatsApp
          </span>
        </a>

        {/* Book Action */}
        <button
          type="button"
          onClick={() => setActiveTab("Contact")}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-champagne text-teal-950 hover:bg-champagne-light transition-colors active:scale-95 text-center font-semibold"
        >
          <Calendar className="w-4 h-4 text-teal-950 mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wider">
            Book
          </span>
        </button>
      </div>
    </div>
  );
}
