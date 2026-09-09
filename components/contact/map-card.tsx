"use client";

import React from "react";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { clinicData } from "@/lib/clinic-data";

export function MapCard() {
  return (
    <div className="bg-white rounded-3xl border border-teal-800/10 shadow-elevated overflow-hidden flex flex-col h-full">
      {/* Map Header */}
      <div className="p-6 border-b border-teal-800/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sage-100 text-teal-800 flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold text-teal-950">
              Clinic Location
            </h4>
            <p className="text-xs text-charcoal-muted">
              {clinicData.address.line1}, {clinicData.address.city}
            </p>
          </div>
        </div>

        <a
          href={clinicData.address.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-teal-800 text-ivory hover:bg-teal-900 transition-colors shadow-soft"
        >
          <Navigation className="w-3.5 h-3.5 text-champagne" />
          <span>Get Directions</span>
        </a>
      </div>

      {/* Embedded Google Map */}
      <div className="relative w-full h-72 sm:h-96 bg-sage-100">
        <iframe
          src={clinicData.address.googleMapsEmbedUrl}
          title="Dr. Rashmi Bhagat Dental Clinic Saoner Google Map"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label="Google Map showing clinic location in Saoner"
        />
      </div>

      {/* Address Footer Banner */}
      <div className="p-4 bg-sage-50 text-xs text-charcoal-muted flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-teal-800/10">
        <span>{clinicData.address.fullAddress}</span>
        <a
          href={clinicData.address.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-800 font-semibold hover:underline flex items-center gap-1"
        >
          <span>Open in Google Maps</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
