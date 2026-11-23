import type { Metadata } from "next";
import { Jost, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { site } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Flower Shop`,
    template: `%s | ${site.name}`,
  },
  description:
    "Handcrafted floral arrangements, wedding flowers, subscriptions and event styling. Order fresh blooms on WhatsApp with same-day delivery.",
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | Flower Shop`,
    description: site.tagline,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${jost.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
