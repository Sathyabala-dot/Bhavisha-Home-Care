"use client";

import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FloatingContact() {
  return (
    <>
      {/* Mobile Bottom Bar */}
      <motion.div
        initial={{ y: 120 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="
          fixed
          bottom-0
          left-0
          right-0
          z-[999]
          bg-[#0b0b0b]/95
          backdrop-blur-md
          border-t
          border-white/10
          p-3
          md:hidden
        "
      >
        <div className="flex gap-3">
          {/* WhatsApp */}

          <a
            href="https://wa.me/918062178399"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1
              h-14
              rounded-full
              bg-[#25D366]
              hover:bg-[#20c85a]
              flex
              items-center
              justify-center
              gap-3
              text-white
              font-semibold
              text-lg
              transition-all
              duration-300
              active:scale-95
            "
          >
            <FaWhatsapp size={24} />
            WhatsApp
          </a>

          {/* Call */}

          <a
            href="tel:+918062178399"
            className="
              flex-1
              h-14
              rounded-full
              bg-[#D6B56C]
              hover:bg-[#c8a553]
              flex
              items-center
              justify-center
              gap-3
              text-black
              font-semibold
              text-lg
              transition-all
              duration-300
              active:scale-95
            "
          >
            <Phone size={22} />
            Call Now
          </a>
        </div>
      </motion.div>

      {/* Desktop Floating Buttons */}
      <div className="hidden md:flex fixed right-6 bottom-6 z-[999] flex-col gap-4">
        <a
          href="https://wa.me/918062178399"
          target="_blank"
          className="
            w-14
            h-14
            rounded-full
            bg-[#25D366]
            flex
            items-center
            justify-center
            shadow-xl
            hover:scale-110
            transition
          "
        >
          <FaWhatsapp size={26} className="text-white" />
        </a>

        <a
          href="tel:+918062178399"
          className="
            w-14
            h-14
            rounded-full
            bg-[#D6B56C]
            flex
            items-center
            justify-center
            shadow-xl
            hover:scale-110
            transition
          "
        >
          <Phone size={24} className="text-black" />
        </a>
      </div>
    </>
  );
}