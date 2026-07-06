import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsAndConditions() {
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
            Terms & <span className="text-[#d4af37]">Conditions</span>
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-gray-400">
            Please read these terms carefully before using Bhavisa Home
            Care services. By booking a service, you agree to the
            following terms and conditions.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-[#0d0d0d] p-10 shadow-2xl">

          <div className="space-y-12">

            <div>
              <h2 className="text-2xl font-bold text-[#d4af37]">
                Service Scope
              </h2>

              <p className="mt-4 text-gray-300 leading-8">
                Bhavisa Home Care provides expert repair, servicing and
                installation for:
              </p>

              <ul className="mt-5 list-disc pl-6 space-y-2 text-gray-300">
                <li>Air Conditioners</li>
                <li>Washing Machines</li>
                <li>Water Heaters (Geysers)</li>
                <li>RO Water Purifiers</li>
              </ul>

              <p className="mt-5 text-gray-300 leading-8">
                Our services include diagnosis, repair,
                installation and preventive maintenance.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#d4af37]">
                Service Charges
              </h2>

              <p className="mt-4 text-gray-300 leading-8">
                Charges depend on the appliance type,
                complexity of repair and replacement parts.
                A transparent quotation will always be shared
                before repair work begins.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#d4af37]">
                Appointment Scheduling
              </h2>

              <p className="mt-4 text-gray-300 leading-8">
                Services can be booked through our website,
                phone call or email. Appointment confirmation
                will be provided after booking.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#d4af37]">
                Payment Terms
              </h2>

              <ul className="mt-5 list-disc pl-6 space-y-2 text-gray-300">
                <li>Payment is due after service completion.</li>
                <li>Cash</li>
                <li>UPI</li>
                <li>Credit & Debit Cards</li>
                <li>Online Bank Transfer</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#d4af37]">
                Cancellation & Rescheduling
              </h2>

              <p className="mt-4 text-gray-300 leading-8">
                Appointments may be cancelled or rescheduled
                at least 24 hours in advance without charges.
                Late cancellations may incur a cancellation fee.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#d4af37]">
                Service Warranty
              </h2>

              <p className="mt-4 text-gray-300 leading-8">
                Repairs performed by Bhavisa Home Care are
                covered by a limited service warranty.
                Warranty duration and conditions will be
                communicated during service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#d4af37]">
                Customer Responsibilities
              </h2>

              <ul className="mt-5 list-disc pl-6 space-y-2 text-gray-300">
                <li>Provide accurate appliance details.</li>
                <li>Clearly describe the issue.</li>
                <li>Ensure easy access to the appliance.</li>
                <li>Be available during the scheduled visit.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#d4af37]">
                Liability Disclaimer
              </h2>

              <p className="mt-4 text-gray-300 leading-8">
                Bhavisa Home Care is not responsible for
                pre-existing damages or problems unrelated
                to our repair work. We are also not liable
                for damages caused by misuse after service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#d4af37]">
                Dispute Resolution
              </h2>

              <p className="mt-4 text-gray-300 leading-8">
                We encourage resolving disputes through
                direct communication. If necessary,
                mediation may be used to reach an
                amicable solution.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#d4af37]">
                Changes to These Terms
              </h2>

              <p className="mt-4 text-gray-300 leading-8">
                Bhavisa Home Care reserves the right to
                modify these terms at any time.
                Updated terms will be published on
                our website.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}