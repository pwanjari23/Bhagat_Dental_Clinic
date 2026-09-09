"use client";

import React from "react";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Mail,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { clinicData } from "@/lib/clinic-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { MapCard } from "./map-card";

export function ContactSection() {
  const contactCards = [
    {
      icon: MapPin,
      title: "Clinic Address",
      subtitle: clinicData.address.line1,
      description: `${clinicData.address.city}, ${clinicData.address.state} ${clinicData.address.pincode}`,
      actionText: "Directions",
      actionHref: clinicData.address.googleMapsDirectionsUrl,
      isExternal: true,
    },
    {
      icon: Phone,
      title: "Phone Enquiries",
      subtitle: clinicData.contact.displayPhone,
      description: "Direct line for consultations and appointment queries",
      actionText: "Call Now",
      actionHref: `tel:${clinicData.contact.phone.replace(/\s+/g, "")}`,
      isExternal: false,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Chat",
      subtitle: "Instant Messaging",
      description: "Chat directly with our reception for quick answers",
      actionText: "Open WhatsApp",
      actionHref: `https://wa.me/${clinicData.contact.whatsapp}?text=${encodeURIComponent(
        "Hello Dr. Rashmi Bhagat Dental Clinic, I would like to enquire about appointments."
      )}`,
      isExternal: true,
    },
    {
      icon: Clock,
      title: "Operating Hours",
      subtitle: clinicData.hours.weekdays,
      description: "Monday to Saturday (Sunday by Prior Appointment)",
      actionText: "Book Slot",
      actionHref: "#appointment",
      isExternal: false,
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact & Location"
          title="We look forward to"
          highlightedText="welcoming you."
          description="Conveniently located on Main Road, Civil Line, Saoner. Feel free to message, call, or drop by during clinic hours."
        />

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-white rounded-3xl p-6 border border-teal-800/10 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sage-100 text-teal-800 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-1">
                    {card.title}
                  </h4>
                  <div className="font-serif text-lg text-teal-950 font-bold mb-1">
                    {card.subtitle}
                  </div>
                  <p className="text-xs text-charcoal-muted leading-relaxed mb-6 font-sans">
                    {card.description}
                  </p>
                </div>

                <a
                  href={card.actionHref}
                  target={card.isExternal ? "_blank" : undefined}
                  rel={card.isExternal ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 hover:text-teal-900 group"
                >
                  <span>{card.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Google Map Card */}
        <div className="max-w-5xl mx-auto">
          <MapCard />
        </div>
      </div>
    </section>
  );
}
