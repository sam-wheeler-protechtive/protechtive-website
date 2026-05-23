import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "vCISO / Fractional CISO",
    description:
      "Executive-level security leadership without the full-time cost. We embed in your organization to build and lead your security program, manage risk, and align security with business goals.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Security Assessments",
    description:
      "Comprehensive evaluations of your security posture — risk assessments, gap analysis, penetration testing, and security program reviews that give you a clear picture of where you stand and what to fix.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Compliance — SOC 2, HIPAA, NIST",
    description:
      "Navigate the compliance landscape with confidence. We guide you through SOC 2 readiness, HIPAA compliance, and NIST framework alignment — from gap assessment to audit-ready documentation.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Zero Trust Architecture",
    description:
      "Design and implement a Zero Trust security model built for how your business actually works. We translate the framework into a practical roadmap — identity, network, data, and device security.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "10+", label: "Years in Security" },
  { value: "SOC 2", label: "Audit Ready" },
  { value: "HIPAA", label: "Compliant Frameworks" },
  { value: "NIST", label: "CSF Aligned" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#2D5F7A] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F5C022]/20 text-[#F5C022] text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                Cybersecurity Consulting
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6">
                Security leadership your business can afford.
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                ProTechtive delivers enterprise-grade cybersecurity — vCISO services, compliance readiness, and Zero Trust architecture — tailored for organizations that need results without the overhead.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#F5C022] text-[#1E4057] font-bold px-6 py-3 rounded-lg hover:bg-[#FDD96A] transition-colors">
                  Get a Free Consultation
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/#services" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <Image src="/logo.png" alt="ProTechtive LLC" width={400} height={280} className="w-80 h-auto drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#F5C022]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-bold text-[#1E4057]">{s.value}</div>
                <div className="text-sm font-medium text-[#2D5F7A]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1E4057] mb-4">What We Do</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Practical security services built around your risk tolerance, compliance needs, and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.title} className="group p-8 rounded-2xl border border-gray-100 hover:border-[#F5C022] hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-xl bg-[#2D5F7A]/10 text-[#2D5F7A] flex items-center justify-center mb-5 group-hover:bg-[#F5C022] group-hover:text-[#1E4057] transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1E4057] mb-3">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#2D5F7A] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#1E4057] transition-colors">
              Start a Conversation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1E4057] mb-6">Security expertise, without the enterprise price tag.</h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                ProTechtive LLC was founded to bridge the gap between enterprise-grade security and the organizations that need it most. We bring the depth of a seasoned security leader — NIST frameworks, Zero Trust, SOC 2, HIPAA — and apply it in a way that actually fits your team and your budget.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Based in Olathe, Kansas, we work with clients across industries including healthcare, technology, and financial services. Whether you need a fractional CISO to lead your program or a one-time assessment to understand your risk, we meet you where you are.
              </p>
              <ul className="space-y-3">
                {[
                  "Deep expertise in Zero Trust and NIST frameworks",
                  "Healthcare and PHI data handling (HIPAA)",
                  "SOC 2 Type I & II readiness",
                  "Practical, business-aligned security roadmaps",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <svg className="w-5 h-5 text-[#F5C022] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#2D5F7A] rounded-2xl p-10 text-white">
              <div className="text-[#F5C022] text-sm font-semibold uppercase tracking-widest mb-4">Why ProTechtive</div>
              <blockquote className="text-xl font-medium leading-relaxed mb-6">
                &ldquo;Security isn&rsquo;t just about tools and compliance checkboxes — it&rsquo;s about understanding your business risk and making smart, strategic decisions to protect what matters.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F5C022] flex items-center justify-center text-[#1E4057] font-bold text-lg">SW</div>
                <div>
                  <div className="font-semibold">Sam Wheeler</div>
                  <div className="text-sm text-gray-300">Founder, ProTechtive LLC</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#F5C022] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1E4057] mb-4">Ready to strengthen your security posture?</h2>
          <p className="text-[#2D5F7A] mb-8 text-lg">Schedule a free, no-obligation consultation and let&rsquo;s talk about your biggest security challenges.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#1E4057] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#2D5F7A] transition-colors text-lg">
            Schedule a Free Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
