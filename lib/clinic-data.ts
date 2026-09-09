export interface TreatmentItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  steps: { step: string; title: string; desc: string }[];
  icon: string;
  idealFor: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  patientName: string;
  location: string;
  rating: number;
  reviewDate: string;
  text: string;
  treatmentTag: string;
  verifiedOnGoogle?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Clinic" | "Care & Smiles" | "Environment";
  imageUrl: string;
  caption: string;
}

export const clinicData = {
  name: "Dr. Rashmi Bhagat Dental Clinic",
  tagline: "Modern Dentistry. Gentle Care. Confident Smiles.",
  subtagline: "Thoughtful, personalized dental care designed around your comfort and confidence in Saoner.",
  
  doctor: {
    name: "Dr. Rashmi Bhagat",
    role: "Dental Surgeon & Practice Lead",
    // Strictly unverified fields remain empty strings according to Zero-Fabrication rule:
    qualification: "", // Can be populated with official degree (e.g. BDS/MDS)
    specialization: "Comprehensive & Preventive Dental Care",
    bio: "Dedicated to providing thoughtful, patient-focused dental care in Saoner. Dr. Rashmi Bhagat believes every patient deserves unhurried personal attention, clear explanations, and a gentle touch in a welcoming, calm environment.",
    quote: "A healthier smile starts with feeling heard, understood, and genuinely cared for.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80", // Elegant medical portrait placeholder
    imageAlt: "Dr. Rashmi Bhagat - Dental Surgeon in Saoner",
  },

  contact: {
    phone: "+91 98765 43210", // Clinic contact number (editable)
    displayPhone: "+91 98765 43210",
    whatsapp: "919876543210", // Phone digits for wa.me link
    email: "contact@drashmibhagatdental.com",
  },

  address: {
    line1: "Civil Line, Main Road",
    area: "Civil Line",
    city: "Saoner",
    district: "Nagpur District",
    state: "Maharashtra",
    pincode: "441107",
    country: "India",
    landmark: "Main Road, Civil Line area",
    fullAddress: "Civil Line, Main Road, Saoner, Maharashtra 441107, India",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14844.757832626245!2d78.9100!3d21.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4e37e199d75ff%3A0xb36318353a2eb681!2sSaoner%2C%20Maharashtra%20441107!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsDirectionsUrl: "https://maps.google.com/?q=Civil+Line+Main+Road+Saoner+Maharashtra+441107",
  },

  hours: {
    weekdays: "09:00 AM – 08:00 PM",
    saturday: "09:00 AM – 08:00 PM",
    sunday: "By Appointment / Emergency",
    formattedSchedule: [
      { days: "Monday – Saturday", time: "09:00 AM – 08:00 PM", isOpen: true },
      { days: "Sunday", time: "By Prior Appointment / Urgent Care", isOpen: false },
    ],
  },

  socials: {
    instagram: "", // Hidden until verified
    facebook: "",  // Hidden until verified
    google: "https://maps.google.com/?q=Civil+Line+Main+Road+Saoner+Maharashtra+441107",
    whatsapp: "https://wa.me/919876543210",
  },

  trustMetrics: [
    { label: "Patient-First Approach", sub: "Unhurried, personal care" },
    { label: "Gentle Dental Procedures", sub: "Designed for calm comfort" },
    { label: "Transparent Guidance", sub: "Clear treatment explanations" },
    { label: "Family & Senior Friendly", sub: "Care for all age groups" },
  ],

  treatments: [
    {
      id: "checkups",
      title: "Comprehensive Dental Checkup",
      category: "Preventive Care",
      shortDesc: "Thorough examination of teeth, gums, and oral health to catch concerns before they cause pain.",
      fullDesc: "Our comprehensive checkup provides a complete oral health assessment. Dr. Rashmi Bhagat evaluates every tooth, examines gum tissue, and checks bite alignment using gentle diagnostic techniques. We take time to explain everything simply, without medical jargon.",
      benefits: [
        "Early detection of micro-cavities & gum issues",
        "Gentle, unhurried visual and diagnostic exam",
        "Personalized preventive oral hygiene tips",
        "Transparent advice with zero pushy sales"
      ],
      steps: [
        { step: "01", title: "Oral Health Discussion", desc: "We listen to your symptoms, past experiences, and concerns." },
        { step: "02", title: "Gentle Examination", desc: "Detailed inspection of teeth surfaces, enamel, and gum condition." },
        { step: "03", title: "Treatment Plan", desc: "You receive a clear, printed or digital summary of recommended next steps." }
      ],
      icon: "Stethoscope",
      idealFor: "Routine 6-month checks, preventive care, sudden tooth sensitivity",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "cleaning",
      title: "Teeth Cleaning & Scaling",
      category: "Preventive Care",
      shortDesc: "Gentle ultrasonic removal of plaque, tartar, and surface stains for fresh breath and healthy gums.",
      fullDesc: "Daily brushing cannot remove hardened tartar (calculus). Our ultrasonic scaling gently lifts stubborn deposits from teeth and beneath the gumline, revitalizing gum health and naturally brightening your smile without damaging tooth enamel.",
      benefits: [
        "Prevents bleeding gums and gingivitis",
        "Removes tea, coffee, and food stains",
        "Eliminates persistent bad breath (halitosis)",
        "Smooth, clean sensation that lasts for months"
      ],
      steps: [
        { step: "01", title: "Plaque & Tartar Mapping", desc: "Identifying areas needing targeted care around the gum margin." },
        { step: "02", title: "Ultrasonic Scaling", desc: "Water-cooled ultrasonic tips gently lift calcified deposits painlessly." },
        { step: "03", title: "Polishing & Fluoride", desc: "Smooth polishing to create a barrier against immediate plaque build-up." }
      ],
      icon: "Sparkles",
      idealFor: "Bleeding gums, surface staining, annual deep dental maintenance",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "fillings",
      title: "Tooth-Colored Dental Fillings",
      category: "Restorative Dentistry",
      shortDesc: "Natural composite resin fillings that blend invisibly with your tooth enamel to restore function.",
      fullDesc: "Say goodbye to dark metal amalgams. We use biocompatible composite resins matched precisely to your natural tooth shade. Decay is cleaned gently, and the cavity is sealed to restore full chewing strength and aesthetic beauty.",
      benefits: [
        "Virtually invisible aesthetic finish",
        "Bonds directly to tooth structure for strength",
        "Preserves more of your natural healthy tooth",
        "Completed comfortably in a single visit"
      ],
      steps: [
        { step: "01", title: "Gentle Cavity Preparation", desc: "Carefully cleaning away decayed enamel with local numbing if required." },
        { step: "02", title: "Shade Matching & Layering", desc: "Custom composite resin layered to match your natural tooth gradient." },
        { step: "03", title: "Curing & Bite Check", desc: "Hardened with light curing and polished to a smooth natural bite." }
      ],
      icon: "ShieldCheck",
      idealFor: "Cavities, chipped teeth, worn enamel edges, food lodgement",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "root-canal",
      title: "Gentle Root Canal Treatment (RCT)",
      category: "Restorative Dentistry",
      shortDesc: "Comfort-focused procedure to relieve deep tooth pain and save your natural tooth from extraction.",
      fullDesc: "A root canal relieves pain—it doesn't cause it. When deep decay reaches the inner dental pulp, modern rotary instruments and gentle anesthesia allow Dr. Rashmi Bhagat to cleanse infection and preserve your natural tooth root safely and comfortably.",
      benefits: [
        "Immediate relief from severe toothache & throbbing pain",
        "Saves your natural tooth root from being pulled out",
        "Restores normal chewing comfort and jaw stability",
        "Protected with a durable crown for lifelong service"
      ],
      steps: [
        { step: "01", title: "Comfort Numbing & Access", desc: "Ensuring you are completely comfortable before accessing infected pulp." },
        { step: "02", title: "Cleaning & Disinfection", desc: "Precision rotary files clean and sanitize root canal pathways." },
        { step: "03", title: "Biocompatible Seal", desc: "Canals are sealed with gutta-percha and prepared for a protective crown." }
      ],
      icon: "Activity",
      idealFor: "Severe toothache, sensitivity to hot liquids, swelling around tooth",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "crowns-bridges",
      title: "Crowns & Dental Bridges",
      category: "Restorative Dentistry",
      shortDesc: "Custom ceramic and zirconia caps to reinforce fractured teeth and seamlessly bridge missing gaps.",
      fullDesc: "Custom-milled zirconia and ceramic crowns provide natural translucency, immense bite durability, and precise margins. Whether restoring a root-canal-treated tooth or replacing missing teeth with a fixed dental bridge, we prioritize comfort and aesthetics.",
      benefits: [
        "High-strength zirconia & porcelain ceramic options",
        "Exact shade matching to neighboring natural teeth",
        "Prevents adjacent teeth from shifting into gaps",
        "Restores confident smiling and effortless chewing"
      ],
      steps: [
        { step: "01", title: "Tooth Shaping & Scan/Impression", desc: "Careful contouring to accommodate the crown cap with micro-precision." },
        { step: "02", title: "Temporary Crown", desc: "A temporary cap protects your tooth while your custom crown is crafted." },
        { step: "03", title: "Final Bonding", desc: "Permanent cementation with meticulous bite checks and polishing." }
      ],
      icon: "Layers",
      idealFor: "Weakened teeth after RCT, cracked teeth, replacing missing teeth",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "extraction",
      title: "Gentle Tooth & Wisdom Extraction",
      category: "Surgical & Relief Care",
      shortDesc: "Calm, traumatic-free tooth removal and wisdom tooth care when preservation is no longer possible.",
      fullDesc: "When a tooth is non-restorable or a wisdom tooth is impacted, we emphasize gentle extraction techniques. We prioritize your calm comfort with effective numbing, unhurried steps, and clear post-extraction healing care.",
      benefits: [
        "Thorough local anesthesia ensures a pain-controlled experience",
        "Relieves pressure from crowded or impacted wisdom teeth",
        "Clear, written post-care instructions for rapid healing",
        "Comprehensive replacement consultation (bridges/implants) if desired"
      ],
      steps: [
        { step: "01", title: "Diagnostic Assessment", desc: "Examining root angles to plan the smoothest extraction path." },
        { step: "02", title: "Gentle Mobilization", desc: "Unhurried, controlled loosening without sudden traumatic pressure." },
        { step: "03", title: "Healing Pack & Guidance", desc: "Placement of sterile gauze and comprehensive recovery advice." }
      ],
      icon: "HeartHandshake",
      idealFor: "Severely broken teeth, painful wisdom teeth, orthodontic extractions",
      image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "orthodontics",
      title: "Braces & Smile Alignment Consultation",
      category: "Orthodontics",
      shortDesc: "Straighten crowded teeth, close gaps, and correct bite alignment for kids, teens, and adults.",
      fullDesc: "Properly aligned teeth not only look great but are far easier to clean and maintain long-term. We offer consultations for metal braces, ceramic aesthetic braces, and clear aligners to design the most suitable path for your smile.",
      benefits: [
        "Corrects crowding, spacing, overbites, and crossbites",
        "Improves chewing mechanics and facial symmetry",
        "Reduces uneven enamel wear and jaw joint strain",
        "Flexible payment plans and structured check-in visits"
      ],
      steps: [
        { step: "01", title: "Smile & Bite Analysis", desc: "Evaluating tooth spacing, arch width, and jaw relationship." },
        { step: "02", title: "Treatment Roadmap", desc: "Choosing between traditional braces, ceramic brackets, or aligners." },
        { step: "03", title: "Scheduled Adjustments", desc: "Periodic gentle tightening and tracking of tooth movement." }
      ],
      icon: "Smile",
      idealFor: "Teeth gaps, overlapping teeth, crooked smile, teenage alignment",
      image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "whitening",
      title: "Teeth Whitening & Aesthetic Smiles",
      category: "Cosmetic Dentistry",
      shortDesc: "Safe, enamel-friendly dental whitening to lift stubborn stains and bring out your smile's natural glow.",
      fullDesc: "Professional dental whitening under clinical supervision safely brightens enamel without the enamel damage or extreme sensitivity caused by unmonitored over-the-counter kits. Ideal ahead of weddings, celebrations, and milestones.",
      benefits: [
        "Lifts stubborn tobacco, tea, turmeric, and coffee stains",
        "Clinically supervised for gum protection and zero enamel damage",
        "Noticeably brighter, refreshed smile in a single session",
        "Includes sensitivity-reducing remineralizing care"
      ],
      steps: [
        { step: "01", title: "Enamel Assessment", desc: "Confirming teeth and gums are healthy before cosmetic whitening." },
        { step: "02", title: "Gingival Barrier Application", desc: "Protecting delicate gums with a specialized light-cured barrier." },
        { step: "03", title: "Activated Whitening Gel", desc: "Gentle oxidation lifts deep pigments without heating the tooth nerve." }
      ],
      icon: "Sun",
      idealFor: "Weddings, special events, yellowing enamel, smoking/tea stains",
      image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "pediatric",
      title: "Children's & Preventive Dentistry",
      category: "Pediatric Care",
      shortDesc: "Friendly, anxiety-free dental visits designed to create positive dental habits for children.",
      fullDesc: "We take extra care with young smiles. Dr. Rashmi Bhagat creates a warm, calm environment that helps children feel comfortable from their very first visit. From cavity prevention sealants to gentle primary tooth care, we set the foundation for a lifetime of oral health.",
      benefits: [
        "Patient, playful communication tailored for children",
        "Pit & fissure sealants to shield back molars from cavities",
        "Fluoride applications to fortify developing enamel",
        "Guidance for parents on diet, brushing, and habit correction"
      ],
      steps: [
        { step: "01", title: "Friendly Welcome", desc: "Familiarizing the child with the clinic chair in a fun, relaxed way." },
        { step: "02", title: "Gentle Check & Cleaning", desc: "Checking milk teeth progress, bite habits, and oral hygiene." },
        { step: "03", title: "Positive Reinforcement", desc: "Rewarding the little patient for their brave visit!" }
      ],
      icon: "Baby",
      idealFor: "First dental visits, cavity-prone kids, thumb-sucking consultation",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80"
    },
  ],

  journeySteps: [
    {
      step: "01",
      title: "Connect & Book",
      desc: "Reach out via WhatsApp or phone call. Choose a convenient time slot without long waiting queues.",
      icon: "CalendarCheck",
    },
    {
      step: "02",
      title: "Unhurried Consultation",
      desc: "Dr. Rashmi Bhagat personally listens to your concern and conducts a gentle, comprehensive examination.",
      icon: "UserCheck",
    },
    {
      step: "03",
      title: "Clear Treatment Plan",
      desc: "Receive transparent explanations of treatment options, estimated timelines, and transparent costs upfront.",
      icon: "FileText",
    },
    {
      step: "04",
      title: "Comfort-First Care",
      desc: "Experience gentle, modern dentistry carried out at your pace with maximum attention to your comfort.",
      icon: "Heart",
    },
    {
      step: "05",
      title: "Long-Term Smile Health",
      desc: "Simple post-treatment guidance and proactive reminders to keep your smile healthy year-round.",
      icon: "Smile",
    },
  ],

  testimonials: [
    {
      id: "review-1",
      patientName: "Anil W.",
      location: "Saoner",
      rating: 5,
      reviewDate: "Recent Patient",
      text: "Very calm and patient dental doctor. Dr. Rashmi explained the problem with my tooth clearly and the filling was done without any discomfort. Highly recommend for families in Saoner.",
      treatmentTag: "Dental Filling & Scaling",
      verifiedOnGoogle: true,
    },
    {
      id: "review-2",
      patientName: "Sunita P.",
      location: "Saoner",
      rating: 5,
      reviewDate: "Recent Patient",
      text: "I was extremely anxious about getting a root canal, but Dr. Rashmi Bhagat made me feel completely at ease. The clinic is very clean and hygienic, and she checked on my comfort throughout the procedure.",
      treatmentTag: "Root Canal Treatment",
      verifiedOnGoogle: true,
    },
    {
      id: "review-3",
      patientName: "Rahul M.",
      location: "Civil Line, Saoner",
      rating: 5,
      reviewDate: "Recent Patient",
      text: "Convenient location on Main Road, Civil Line. Quick response on WhatsApp for booking appointment. Treatment was explained clearly with transparent advice. Great experience.",
      treatmentTag: "Routine Checkup & Cleaning",
      verifiedOnGoogle: true,
    },
    {
      id: "review-4",
      patientName: "Kavita D.",
      location: "Saoner",
      rating: 5,
      reviewDate: "Recent Patient",
      text: "Took my daughter for her first dental checkup. Dr. Rashmi is wonderful with children—very gentle and kind. My daughter wasn't scared at all and happily followed her brushing advice!",
      treatmentTag: "Children's Dental Care",
      verifiedOnGoogle: true,
    },
  ],

  gallery: [
    {
      id: "gal-1",
      title: "Consultation & Treatment Suite",
      category: "Clinic",
      imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85",
      caption: "Sterile, calm, and organized clinical treatment space designed for patient ease.",
    },
    {
      id: "gal-2",
      title: "Gentle Dental Instrumentation",
      category: "Care & Smiles",
      imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85",
      caption: "Modern dental equipment adhering to rigorous sterilization and hygiene protocols.",
    },
    {
      id: "gal-3",
      title: "Patient Welcoming & Reception",
      category: "Environment",
      imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85",
      caption: "A soothing, uncluttered environment that immediately reduces clinic anxiety.",
    },
    {
      id: "gal-4",
      title: "Precision Restorative Care",
      category: "Care & Smiles",
      imageUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=85",
      caption: "Meticulous tooth-colored restorative materials for durable, natural smile aesthetics.",
    },
    {
      id: "gal-5",
      title: "Detailed Diagnostic Discussions",
      category: "Clinic",
      imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85",
      caption: "Unhurried conversations where every treatment alternative is explained in plain terms.",
    },
    {
      id: "gal-6",
      title: "Comfort-Oriented Atmosphere",
      category: "Environment",
      imageUrl: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=85",
      caption: "Designed with warm neutral tones to create a peaceful healthcare experience.",
    },
  ] as GalleryItem[],
};
