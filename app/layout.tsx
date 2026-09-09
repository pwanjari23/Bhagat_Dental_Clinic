import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { clinicData } from "@/lib/clinic-data";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drashmibhagatdental.com"),
  title: {
    default: "Dr. Rashmi Bhagat Dental Clinic | Dentist in Saoner",
    template: "%s | Dr. Rashmi Bhagat Dental Clinic",
  },
  description:
    "Thoughtful, gentle, and personalized dental care for you and your family in Saoner, Maharashtra. Located at Civil Line, Main Road. Quick WhatsApp appointments & comfortable dental care.",
  keywords: [
    "Dentist in Saoner",
    "Dental Clinic in Saoner",
    "Dr. Rashmi Bhagat Dental Clinic",
    "Best dentist in Saoner",
    "Dental care in Saoner",
    "Dentist near Saoner",
    "Civil Line Saoner dentist",
    "Root canal Saoner",
    "Teeth cleaning Saoner",
  ],
  authors: [{ name: "Dr. Rashmi Bhagat" }],
  creator: "Dr. Rashmi Bhagat Dental Clinic",
  publisher: "Dr. Rashmi Bhagat Dental Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Dr. Rashmi Bhagat Dental Clinic | Dentist in Saoner",
    description:
      "Modern dentistry designed around patient comfort and confidence. Civil Line, Main Road, Saoner.",
    url: "https://drashmibhagatdental.com",
    siteName: "Dr. Rashmi Bhagat Dental Clinic",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Dr. Rashmi Bhagat Dental Clinic - Saoner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Rashmi Bhagat Dental Clinic | Dentist in Saoner",
    description:
      "Gentle, personal, and comfortable dental care in Saoner, Maharashtra.",
    images: ["https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://drashmibhagatdental.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org LocalBusiness & Dentist JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
    "@id": "https://drashmibhagatdental.com/#clinic",
    name: clinicData.name,
    legalName: clinicData.name,
    description: clinicData.subtagline,
    url: "https://drashmibhagatdental.com",
    telephone: clinicData.contact.phone,
    email: clinicData.contact.email,
    medicalSpecialty: "Dentistry",
    priceRange: "₹₹",
    image: [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: clinicData.address.line1,
      addressLocality: clinicData.address.city,
      addressRegion: clinicData.address.state,
      postalCode: clinicData.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.385,
      longitude: 78.91,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    areaServed: {
      "@type": "City",
      name: "Saoner",
    },
    founder: {
      "@type": "Person",
      name: clinicData.doctor.name,
      jobTitle: clinicData.doctor.role,
    },
  };

  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col bg-ivory text-charcoal antialiased selection:bg-teal-800 selection:text-ivory">
        {children}
      </body>
    </html>
  );
}
