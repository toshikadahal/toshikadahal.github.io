import Script from "next/script";

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Anuj Devkota",
  url: "https://anujdevkota.vercel.app",
  image: "https://anujdevkota.vercel.app/og-image.jpg",
  description:
    "Dr. Anuj Devkota is an ENT Doctor in Kathmandu, Nepal and Head and Neck Surgeon. He is Assistant Professor in the Department of ENT-HNS at Maharajgunj Medical Campus, TU Teaching Hospital.",
  medicalSpecialty: ["Otolaryngology", "Head and Neck Surgery"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressRegion: "Bagmati",
    addressCountry: "NP"
  },
  affiliation: {
    "@type": "Hospital",
    name: "TU Teaching Hospital",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Maharajgunj, Kathmandu",
      addressCountry: "NP"
    }
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Maharajgunj Medical Campus"
  },
  jobTitle: "Assistant Professor, Department of ENT-HNS",
  knowsAbout: [
    "ENT doctor in Kathmandu Nepal",
    "Otolaryngology",
    "Head and Neck Surgery",
    "Ear disease",
    "Hearing loss",
    "Nasal blockage",
    "Sinusitis",
    "Throat and voice problems",
    "ENT surgery"
  ],
  email: "mailto:anujdevkota@gmail.com",
  telephone: "+977-1-4513917"
};

export default function PhysicianSchema() {
  return (
    <Script
      id="physician-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(physicianSchema)
      }}
    />
  );
}
