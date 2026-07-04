"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const services = [
  "AC Repair",
  "Washing Machine",
  "Refrigerator",
  "RO Water Purifier",
  "Microwave Oven",
  "Water Heater",
];

const company = [
  "About Us",
  "Our Services",
  "Why Choose Us",
  "Testimonials",
  "Contact",
];

const policies = [
  "Privacy Policy",
  "Terms & Conditions",
  "Refund Policy",
  "Service Areas",
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#090909] overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#d4af37]/5 blur-[170px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14">

          {/* Company */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">
              <span className="text-[#d4af37]">Bhavisha</span>
              <br />
              Home Care
            </h2>

            <p className="text-gray-400 mt-6 leading-8">
              Reliable home appliance repair services across Chennai.
              Fast doorstep support with experienced technicians,
              genuine spare parts and affordable pricing.
            </p>

            {/* Social */}

            <div className="flex gap-4 mt-8">

             {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map(
  (Icon, index) => (
    <a
      key={index}
      href="#"
      className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#d4af37] hover:text-black transition-all duration-300"
    >
      <Icon size={18} />
    </a>
  )
)}

            </div>

          </motion.div>

          {/* Services */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: .1 }}
          >
            <h3 className="text-2xl font-semibold mb-8">
              Services
            </h3>

            <div className="space-y-4">

              {services.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block text-gray-400 hover:text-[#d4af37] transition-all"
                >
                  {item}
                </Link>
              ))}

            </div>

          </motion.div>

          {/* Company */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: .2 }}
          >
            <h3 className="text-2xl font-semibold mb-8">
              Company
            </h3>

            <div className="space-y-4">

              {company.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block text-gray-400 hover:text-[#d4af37]"
                >
                  {item}
                </Link>
              ))}

            </div>

            <h3 className="text-xl font-semibold mt-10 mb-5">
              Policies
            </h3>

            <div className="space-y-3">

              {policies.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block text-gray-400 hover:text-[#d4af37]"
                >
                  {item}
                </Link>
              ))}

            </div>

          </motion.div>

          {/* Newsletter */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: .3 }}
          >
            <h3 className="text-2xl font-semibold">
              Subscribe
            </h3>

            <p className="text-gray-400 mt-5 leading-8">
              Subscribe to receive service updates,
              offers and maintenance tips.
            </p>

            <div className="mt-8">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full bg-[#151515] border border-white/10 px-6 py-4 outline-none focus:border-[#d4af37]"
              />

              <button
                className="mt-5 w-full rounded-full bg-[#d4af37] py-4 font-semibold text-black hover:scale-[1.02] transition-all flex justify-center items-center gap-2"
              >
                <Send size={18} />

                Subscribe
              </button>

            </div>

          </motion.div>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-500 text-sm">
            © 2026 Bhavisha Home Care. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Designed & Developed with ❤️
          </p>

        </div>

      </div>

    </footer>
  );
}