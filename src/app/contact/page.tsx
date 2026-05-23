import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — ProTechtive LLC",
  description: "Schedule a free consultation with ProTechtive LLC. We're ready to help with your cybersecurity needs.",
};

export default function ContactPage() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1E4057] mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Ready to talk security? Reach out directly and we&rsquo;ll set up a free consultation to discuss your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
            <h2 className="text-xl font-bold text-[#1E4057] mb-6">Contact Information</h2>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#2D5F7A]/10 text-[#2D5F7A] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Email</div>
                  <a href="mailto:sam.wheeler@protechtive.net" className="text-[#2D5F7A] font-medium hover:underline">
                    sam.wheeler@protechtive.net
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#2D5F7A]/10 text-[#2D5F7A] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Location</div>
                  <div className="text-gray-600">Olathe, Kansas</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#2D5F7A]/10 text-[#2D5F7A] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">LinkedIn</div>
                  <a href="https://linkedin.com/company/protechtive" target="_blank" rel="noopener noreferrer" className="text-[#2D5F7A] font-medium hover:underline">
                    linkedin.com/company/protechtive
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#2D5F7A] rounded-2xl p-8 text-white">
            <h2 className="text-xl font-bold mb-4">What to Expect</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              After you reach out, here&rsquo;s what happens next:
            </p>
            <ol className="space-y-4">
              {[
                { step: "1", text: "We respond within one business day to schedule a 30-minute discovery call." },
                { step: "2", text: "We learn about your business, your current security posture, and your biggest concerns." },
                { step: "3", text: "We provide a clear proposal — scope, approach, and pricing — with no obligation." },
              ].map((item) => (
                <li key={item.step} className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-[#F5C022] text-[#1E4057] font-bold text-sm flex items-center justify-center flex-shrink-0">
                    {item.step}
                  </span>
                  <span className="text-gray-300 text-sm leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 pt-6 border-t border-white/20">
              <Link
                href={`mailto:sam.wheeler@protechtive.net?subject=Security Consultation Request`}
                className="w-full flex items-center justify-center gap-2 bg-[#F5C022] text-[#1E4057] font-bold px-6 py-3 rounded-lg hover:bg-[#FDD96A] transition-colors"
              >
                Send an Email
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
