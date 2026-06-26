import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://toshikadahal.github.io"),
  title: { default: "Dr Toshika Dahal | Pediatric Ophthalmologist", template: "%s | Dr Toshika Dahal" },
  description: "Official website of Dr Toshika Dahal, Pediatric Ophthalmologist and Strabismus Surgeon at Lumbini Eye Institute, Bhairahawa, Nepal.",
  keywords: ["Dr Toshika Dahal", "pediatric ophthalmologist Nepal", "strabismus surgeon Nepal", "squint eye doctor", "children eye doctor Bhairahawa", "Lumbini Eye Institute"],
  openGraph: { title: "Dr Toshika Dahal", description: "Pediatric ophthalmology, strabismus care, child vision screening, and patient education.", url: "https://toshikadahal.github.io", siteName: "Dr Toshika Dahal", images: [{ url: "/images/dr-toshika-dahal-portrait.jpg", width: 1200, height: 1200, alt: "Dr Toshika Dahal" }], type: "website" }
};
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
