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
  "RO Water Purifier",
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
   {
    name: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    name: "Terms & Conditions",
    href: "/terms-and-conditions",
  },
];


export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#090909]">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#d4af37]/5 blur-[160px] sm:h-[650px] sm:w-[650px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

        {/* Grid */}

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-14">

          {/* Company */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
              <span className="text-[#d4af37]">Bhavisha</span>
              <br />
              Home Care
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
              Reliable home appliance repair services across Chennai.
              Fast doorstep support with experienced technicians,
              genuine spare parts and affordable pricing.
            </p>


            {/* Social Icons */}

            <div className="mt-8 flex gap-3">

              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10

                      transition-all
                      duration-300

                      hover:scale-110
                      hover:border-[#d4af37]
                      hover:bg-[#d4af37]
                      hover:text-black

                      sm:h-11
                      sm:w-11
                    "
                  >
                    <Icon size={17} />
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
            transition={{ delay: 0.1 }}
          >
            <h3 className="mb-6 text-xl font-semibold text-white sm:text-2xl">
              Services
            </h3>

            <div className="space-y-3">

              {services.map((item) => (
                <Link
                  key={item}
                  href="#services"
                  className="
                    block
                    text-sm
                    text-gray-400
                    transition-all
                    duration-300

                    hover:translate-x-1
                    hover:text-[#d4af37]

                    sm:text-base
                  "
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
  transition={{ delay: 0.2 }}
>
  <h3 className="mb-6 text-xl font-semibold text-white sm:text-2xl">
    Company
  </h3>

  <div className="space-y-3">
    <Link href="/#about" className="block text-sm text-gray-400 hover:text-[#d4af37] transition-all duration-300">
      About Us
    </Link>

    <Link href="/#services" className="block text-sm text-gray-400 hover:text-[#d4af37] transition-all duration-300">
      Our Services
    </Link>

    <Link href="/#why-choose-us" className="block text-sm text-gray-400 hover:text-[#d4af37] transition-all duration-300">
      Why Choose Us
    </Link>

    <Link href="/#testimonials" className="block text-sm text-gray-400 hover:text-[#d4af37] transition-all duration-300">
      Testimonials
    </Link>

    <Link href="/#contact" className="block text-sm text-gray-400 hover:text-[#d4af37] transition-all duration-300">
      Contact
    </Link>
  </div>
</motion.div>

{/* Policies */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.3 }}
>
  <h3 className="mb-6 text-xl font-semibold text-white sm:text-2xl">
    Policies
  </h3>

  <div className="space-y-3">
    {policies.map((item) => (
  <Link
    key={item.name}
    href={item.href}
    className="block text-sm text-gray-400 hover:text-[#d4af37]"
  >
    {item.name}
  </Link>
))}
  </div>
</motion.div>

          

             
</div>   {/* End Grid */}
        {/* Bottom */}

        <div
          className="
            mt-12
            flex
            flex-col
            items-center
            justify-between
            gap-4

            border-t
            border-white/10

            pt-6

            text-center

            md:mt-16
            md:flex-row
            md:pt-8
          "
        >
          <p className="text-center text-sm text-gray-500 md:text-left">
            © 2026 Bhavisha Home Care. All Rights Reserved.
          </p>

          <p className="text-sm text-gray-500">
            Designed with Care for Better Home Service
          </p>

        </div>

      </div>

    </footer>
  
  );
}