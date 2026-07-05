"use client";

import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FloatingContact() {
  return (
   <div className="
  fixed
  right-4
  bottom-[190px]
  md:bottom-6
  z-[100]
  flex
  flex-col
  gap-3
">
      {/* WhatsApp */}

      <motion.a
        href="https://wa.me/918062178399"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{
          opacity: 0,
          scale: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          delay: 0.3,
          type: "spring",
          stiffness: 220,
        }}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.95,
        }}
         className="
    group
    w-16 h-16
    rounded-full
    bg-[#25D366]
    hover:bg-[#20c85a]
    shadow-2xl
    flex
    items-center
    justify-center
    transition-all
    duration-300
    hover:scale-110
  "
      >
        <FaWhatsapp
          size={28}
          className="text-white"
        />

        {/* Tooltip */}

        <span
          className="
            pointer-events-none
            absolute
            right-[75px]
            whitespace-nowrap
            rounded-full
            bg-[#111]
            px-4
            py-2
            text-sm
            text-white
            opacity-0
            shadow-xl
            transition-all
            duration-300
            group-hover:opacity-100
          "
        >
          WhatsApp Us
        </span>
      </motion.a>

      {/* Call */}

      <motion.a
        href="tel:+918062178399"
        aria-label="Call Now"
        initial={{
          opacity: 0,
          scale: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          delay: 0.45,
          type: "spring",
          stiffness: 220,
        }}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.95,
        }}
         className="
    group
    w-16 h-16
    rounded-full
    bg-[#E6C15A]
    hover:bg-[#d4af37]
    shadow-2xl
    flex
    items-center
    justify-center
    transition-all
    duration-300
    hover:scale-110
  "
      >
         <Phone
    size={28}
    className="text-black group-hover:-rotate-12 transition-transform duration-300"
  />


        {/* Tooltip */}

        <span
          className="
            pointer-events-none
            absolute
            right-[75px]
            whitespace-nowrap
            rounded-full
            bg-[#111]
            px-4
            py-2
            text-sm
            text-white
            opacity-0
            shadow-xl
            transition-all
            duration-300
            group-hover:opacity-100
          "
        >
          Call Now
        </span>
      </motion.a>

      {/* Pulse Ring */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          -z-10
          h-16
          w-16
          rounded-full
          bg-[#d4af37]/20
          blur-xl
          animate-pulse
          lg:h-20
          lg:w-20
        "
      />
    </div>
  );
}