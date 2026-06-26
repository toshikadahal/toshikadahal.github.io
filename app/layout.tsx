import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr Toshika Dahal | Pediatric Ophthalmologist and Strabismus Surgeon",
  description:
    "Dr Toshika Dahal is a Pediatric Ophthalmologist and Strabismus Surgeon at Lumbini Eye Institute. Eye care information, clinic profile, training, and contact details.",
  keywords: [
    "Dr Toshika Dahal",
    "Pediatric Ophthalmologist Nepal",
    "Strabismus Surgeon Nepal",
    "Eye doctor Nepal",
    "Pediatric eye doctor Bhairahawa",
    "Ophthalmologist Nepal"
  ],
  openGraph: {
    title: "Dr Toshika Dahal | Pediatric Ophthalmologist and Strabismus Surgeon",
    description:
      "Pediatric ophthalmology, strabismus surgery, patient education, and eye care information.",
    images: ["/images/dr-toshika-hero.jpg"],
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
