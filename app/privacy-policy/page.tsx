import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 py-20">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-[160px]" />
        </div>

        <div className="relative mx-auto max-w-5xl px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 transition hover:text-[#d4af37]"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <h1 className="mt-8 text-5xl font-bold">
            Privacy <span className="text-[#d4af37]">Policy</span>
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-gray-400">
            Your privacy is important to us. This policy explains how
            Bhavisa Home Care collects, uses, stores and protects your
            personal information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-[#0d0d0d] p-10 shadow-2xl">

          <div className="space-y-12">

            <div>
              <h2 className="text-2xl font-bold text-[#d4af37]">
                Information Collection
              </h2>

              <p className="mt-4 text-gray-300 leading-8">
                We collect basic personal information such as:
              </p>

              <ul className="mt-5 list-disc space-y-2 pl-6 text-gray-300">
                <li>Full Name</li>
                <li>Phone Number</li>
                <li>Email Address</li>
                <li>Residential Address</li>
                <li>Appliance Details (for service)</li>
              </ul>

              <p className="mt-5 text-gray-300 leading-8">
                Information is collected through service request forms,
                phone calls, WhatsApp and email strictly for
                service-related purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#d4af37]">
                Use of Information
              </h2>

              <ul className="mt-5 list-disc space-y-2 pl-6 text-gray-300">
                <li>Scheduling appointments</li>
                <li>Service communication</li>
                <li>Billing and internal records</li>
                <li>Customer feedback and service improvements</li>
              </ul>

              <p className="mt-5 text-gray-300">
                We never sell or rent customer information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#d4af37]">
                Data Security
              </h2>

              <p className="mt-4 text-gray-300 leading-8">
                Bhavisa Home Care uses physical, electronic and managerial
                safeguards to protect customer information from
                unauthorized access, misuse or disclosure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#d4af37]">
                Third-Party Disclosure
              </h2>

              <p className="mt-4 text-gray-300 leading-8">
                We do not share your information with third parties,
                advertisers or vendors without your consent, except where
                required by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#d4af37]">
                Cookies
              </h2>

              <p className="mt-4 text-gray-300 leading-8">
                Cookies help improve website performance, remember user
                preferences and analyze website traffic. You may disable
                cookies in your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#d4af37]">
                Data Retention
              </h2>

              <p className="mt-4 text-gray-300 leading-8">
                Personal data is retained only as long as necessary for
                service delivery, customer support and legal compliance.
                It is securely deleted when no longer required.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#d4af37]">
                Your Rights
              </h2>

              <ul className="mt-5 list-disc space-y-2 pl-6 text-gray-300">
                <li>Request access to your information</li>
                <li>Request corrections</li>
                <li>Request deletion of inaccurate data</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#d4af37]">
                Policy Updates
              </h2>

              <p className="mt-4 text-gray-300 leading-8">
                We may revise this Privacy Policy from time to time.
                Updated versions will always be published on our website.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}