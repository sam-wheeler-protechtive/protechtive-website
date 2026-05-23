"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="ProTechtive LLC" width={120} height={45} className="h-10 w-auto" />
          </Link>

          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm font-medium text-gray-700 hover:text-[#2D5F7A] transition-colors">
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="text-sm font-semibold bg-[#2D5F7A] text-white px-4 py-2 rounded-lg hover:bg-[#1E4057] transition-colors">
              Get a Consultation
            </Link>
          </nav>

          <button className="md:hidden p-2 text-gray-600" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open} aria-controls="mobile-menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div id="mobile-menu" className="md:hidden py-4 border-t border-gray-100">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium text-gray-700 hover:text-[#2D5F7A]">
                {l.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="mt-3 block text-center text-sm font-semibold bg-[#2D5F7A] text-white px-4 py-2 rounded-lg">
              Get a Consultation
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
