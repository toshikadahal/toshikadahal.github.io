import SeoFooterLinks from "../components/SeoFooterLinks";
import PhysicianSchema from "../components/PhysicianSchema";
import LanguageToggle from "../components/LanguageToggle";
import ScrollToTopButton from "../components/ScrollToTopButton";
import "./globals.css";
import type { Metadata } from "next";

const siteUrl = "https://anujdevkota.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL("https://anujdevkota.vercel.app"),
  title: {
    default: "Dr Anuj Devkota | ENT Doctor in Kathmandu, Nepal | Head and Neck Surgeon",
    template: "%s | Dr Anuj Devkota ENT"
  },
  description:
    "Dr. Anuj Devkota is an ENT Doctor in Kathmandu, Nepal and Head and Neck Surgeon. He is Assistant Professor in the Department of ENT-HNS at Maharajgunj Medical Campus, TU Teaching Hospital.",
  keywords: [
    "ENT doctor in Kathmandu",
    "ENT doctor in Nepal",
    "ENT specialist Kathmandu",
    "Head and Neck Surgeon Nepal",
    "Ear Nose Throat doctor Kathmandu",
    "Dr Anuj Devkota ENT",
    "Otolaryngologist Kathmandu"
  ],
  authors: [{ name: "Dr. Anuj Devkota" }],
  creator: "Dr. Anuj Devkota",
  publisher: "Dr. Anuj Devkota",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Dr Anuj Devkota | ENT Doctor in Kathmandu, Nepal",
    description:
      "ENT Doctor in Kathmandu, Nepal. Head and Neck Surgeon and Assistant Professor at Maharajgunj Medical Campus, TU Teaching Hospital.",
    url: "https://anujdevkota.vercel.app",
    siteName: "Dr. Anuj Devkota ENT",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Anuj Devkota | ENT Doctor in Kathmandu, Nepal",
    description:
      "ENT Doctor in Kathmandu, Nepal. Head and Neck Surgeon and Assistant Professor at Maharajgunj Medical Campus, TU Teaching Hospital."
  },
  robots: {
    index: true,
    follow: true
  }
};

const physicianStructuredData = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Anuj Devkota",
  jobTitle: "ENT, Head and Neck Surgeon and Assistant Professor",
  medicalSpecialty: "Otolaryngology",
  identifier: "NMC Registration No. 15288",
  affiliation: {
    "@type": "Organization",
    name: "Teaching Hospital, Maharajgunj"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Maharajgunj, Kathmandu",
    addressCountry: "Nepal"
  },
  email: "anujdevkota@gmail.com",
  url: siteUrl,
  sameAs: [
    "https://orcid.org/0000-0001-8188-399X",
    "https://www.youtube.com/@anujdevkota"
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(physicianStructuredData)
          }}
        />
        {children}
        <SeoFooterLinks />
        <ScrollToTopButton />
        <LanguageToggle />

              <PhysicianSchema />
      </body>
    </html>
  );
}