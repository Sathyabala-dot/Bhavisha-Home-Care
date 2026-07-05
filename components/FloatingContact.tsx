"use client";

import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingContact() {
  return (
    <div
      className="
        fixed
        bottom-5
        right-5
        z-[999]
        flex
        flex-col
        gap-3
        lg:bottom-8
        lg:right-8
      "
    >
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
          relative
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          shadow-[0_10px_35px_rgba(37,211,102,.45)]
          transition-all
          duration-300
          lg:h-16
          lg:w-16
        "
      >
        <MessageCircle
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
          relative
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-[#d4af37]
          to-[#f3cf63]
          shadow-[0_10px_35px_rgba(212,175,55,.45)]
          transition-all
          duration-300
          lg:h-16
          lg:w-16
        "
      >
        <Phone
          size={24}
          className="text-black"
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