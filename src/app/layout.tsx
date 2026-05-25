import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ProTechtive LLC — Cybersecurity Consulting",
  description:
    "ProTechtive LLC provides vCISO, security assessments, compliance readiness (SOC 2, HIPAA, NIST), and Zero Trust architecture services for modern businesses.",
  metadataBase: new URL("https://protechtive.net"),
  alternates: { canonical: "https://protechtive.net" },
  openGraph: {
    title: "ProTechtive LLC — Cybersecurity Consulting",
    description:
      "vCISO, security assessments, compliance, and Zero Trust architecture services.",
    url: "https://protechtive.net",
    siteName: "ProTechtive LLC",
    images: [{ url: "/logo.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProTechtive LLC — Cybersecurity Consulting",
    description: "vCISO, security assessments, compliance, and Zero Trust architecture services.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#2D5F7A] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
        >
          Skip to main content
        </a>
        <Nav />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
