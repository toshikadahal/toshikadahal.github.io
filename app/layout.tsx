import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://toshikadahal.github.io"),
  title: {
    default: "Dr Toshika Dahal | Pediatric Ophthalmologist",
    template: "%s | Dr Toshika Dahal"
  },
  description:
    "Official website of Dr Toshika Dahal, Pediatric Ophthalmologist and Strabismus Surgeon at Lumbini Eye Institute, Bhairahawa, Nepal."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
