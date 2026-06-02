import ScrollToTopButton from "../components/ScrollToTopButton";
import "./globals.css";
import type { Metadata } from "next";

const siteUrl = "https://anujdevkota.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dr. Anuj Devkota | ENT, Head and Neck Surgeon | Assistant Professor",
    template: "%s"
  },
  description:
    "Official website of Dr. Anuj Devkota, ENT, Head and Neck Surgeon and Assistant Professor at Teaching Hospital, Maharajgunj. Patient education, consultation schedule, research, and contact information.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Dr. Anuj Devkota | ENT, Head and Neck Surgeon",
    description:
      "Patient-focused ENT care, patient education, consultation schedule, and academic information.",
    url: siteUrl,
    siteName: "Dr. Anuj Devkota",
    type: "website",
    images: [
      {
        url: "/topic-visuals/tympanic-membrane-perforation.png",
        alt: "ENT patient education visual"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Anuj Devkota | ENT, Head and Neck Surgeon",
    description:
      "Patient-focused ENT care, patient education, consultation schedule, and academic information.",
    images: ["/topic-visuals/tympanic-membrane-perforation.png"]
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
        <ScrollToTopButton />
      </body>
    </html>
  );
}