"use client";

import ContactInfo from "@/components/contact/ContactInfo";
import GoogleMap from "@/components/contact/GoogleMap";
import Footer from "@/components/contact/Footer";
import { motion } from "framer-motion";
import Submit from "@/components/contact/Submit";

export default function ContactPage() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#d4af37]/10 blur-[180px]" />
      </div>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6 lg:px-10">

        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-bold">
              Connect With Us
            </h1>

            <div className="mt-5 flex justify-center">
              <div className="w-24 h-1 bg-[#d4af37] rounded-full"></div>
            </div>

            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Our experts are available 7 days a week.
              Schedule your service or reach us through phone,
              email or WhatsApp.
            </p>

          </motion.div>

          {/* Main Grid */}

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* LEFT */}

            <div className="space-y-10">

              <ContactInfo />

              <GoogleMap />

            </div>

            {/* RIGHT */}

            <Submit />

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}