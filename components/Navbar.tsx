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
    <header className="fixed top-0 left-0 w-full z-50">
  <div className="max-w-7xl mx-auto px-8">
    <nav className="h-24 flex items-center justify-between">

      {/* Logo */}
      <div className="flex items-center gap-4">
        <Image
          src="/images/logo.webp"
          alt="Bhavisha Home Care"
          width={190}
          height={70}
        />
      </div>

      {/* Navigation */}
      <ul className="hidden lg:flex items-center gap-12 text-white">
        <li><a href="#home" className="nav-link">Home</a></li>
        <li><a href="#technology" className="nav-link">Technology</a></li>
        <li><a href="#services" className="nav-link">Services</a></li>
        <li><a href="#features" className="nav-link">Features</a></li>
        <li><a href="#solutions" className="nav-link">Solutions</a></li>
        <li><a href="#contact" className="nav-link">Contact</a></li>
      </ul>

      {/* CTA */}
      <button className="contact-btn">
        Contact Us
      </button>

    </nav>
  </div>
</header>
  );
}