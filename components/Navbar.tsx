"use client";

import Image from "next/image";
import { Phone } from "lucide-react";

const navItems = [
  "Home",
  "Technology",
  "Services",
  "Features",
  "Solutions",
  "Contact",
];

export default function Navbar() {
  return (
    <header className="fixed top-4 left-0 w-full z-50 px-6">
  <div
    className="
      mx-auto
      max-w-7xl
      rounded-full
      bg-black/40
      backdrop-blur-2xl
      border border-white/10
      px-8
      h-20

      grid
      grid-cols-[220px_1fr_180px]
      items-center
    "
  >
    {/* Logo */}
    <div>
      <Image
        src="/images/Bhavisha-home-care-newlogo.png"
        alt="Bhavisha"
        width={170}
        height={60}
      />
    </div>

    {/* Navigation */}
    <nav className="flex justify-center items-center gap-8">
      {navItems.map((item) => (
        <a key={item} href="#" className="nav-link">
          {item}
        </a>
      ))}
    </nav>

    {/* CTA */}
    <div className="flex justify-end">
      <button className="contact-btn">
        <Phone size={18} />
        Contact Us
      </button>
    </div>
  </div>
</header>
  );
}