import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#1E4057] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Image src="/logo.png" alt="ProTechtive LLC" width={140} height={52} className="h-12 w-auto mb-4" />
            <p className="text-sm text-gray-300 leading-relaxed">
              Proactive cybersecurity for modern businesses. We protect what matters most.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#F5C022] mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>vCISO / Fractional CISO</li>
              <li>Security Assessments</li>
              <li>SOC 2 / HIPAA / NIST Compliance</li>
              <li>Zero Trust Architecture</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#F5C022] mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 text-center text-xs text-gray-400">
          &copy; {year} ProTechtive LLC. All rights reserved. | Olathe, Kansas
        </div>
      </div>
    </footer>
  );
}
