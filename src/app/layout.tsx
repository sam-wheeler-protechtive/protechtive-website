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
  openGraph: {
    title: "ProTechtive LLC — Cybersecurity Consulting",
    description:
      "vCISO, security assessments, compliance, and Zero Trust architecture services.",
    url: "https://protechtive.net",
    siteName: "ProTechtive LLC",
    images: [{ url: "/logo.png" }],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
