"use client";

import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingContact() {
  return (
    <div className="fixed right-6 bottom-8 z-[999] flex flex-col gap-4 animate-float">

      {/* WhatsApp */}
      <a
        href="https://wa.me/8062178399"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="group flex h-16 w-16 items-center justify-center rounded-full
        bg-[#25D366] text-white shadow-2xl transition-all duration-300
        hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,.6)]"
      >
        <FaWhatsapp size={34} />
      </a>

      {/* Call */}
      <a
        href="tel:8062178399"
        aria-label="Call"
        className="group flex h-16 w-16 items-center justify-center rounded-full
        bg-gradient-to-r from-[#d4af37] to-[#f7d77b]
        text-black shadow-2xl transition-all duration-300
        hover:scale-110 hover:shadow-[0_0_30px_rgba(212,175,55,.6)]"
      >
        <FaPhoneAlt size={24} />
      </a>

    </div>
  );
}