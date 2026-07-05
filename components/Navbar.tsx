"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Technology", href: "#technology" },
  { name: "Services", href: "#services" },
  { name: "Features", href: "#features" },
  { name: "Solutions", href: "#solutions" },
  
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setMobileOpen(false);
    }
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleResize);

  document.body.style.overflow = mobileOpen ? "hidden" : "auto";

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleResize);
    document.body.style.overflow = "auto";
  };
}, [mobileOpen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <header
        className={`
          fixed
          top-0
          left-0
          w-full
          z-50
          transition-all
          duration-300
          ${
            scrolled
  ? "bg-black/70 backdrop-blur-2xl border-b border-white/10 shadow-lg"
  : "bg-transparent"
          }
        `}
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-14">

          <nav className="flex h-20 lg:h-24 xl:h-28 items-center justify-between">

            {/* Logo */}

            <a
              href="#home"
              className="flex items-center shrink-0"
            >
              <Image
                src="/images/logo.webp"
                alt="Bhavisha Home Care"
                width={185}
                height={70}
                priority
                className="
                h-auto
w-[120px]
sm:w-[145px]
md:w-[165px]
lg:w-[185px]
xl:w-[205px]
transition-all
duration-300
"
              />
            </a>

            {/* Desktop Navigation */}

            <ul
              className="
                hidden
                lg:flex
                items-center
                gap-7 xl:gap-10
              "
            >
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="
  text-white
  text-[14px] xl:text-[15px]
  tracking-wide
  font-medium
  transition-all
  duration-300
  hover:text-[#d4af37]
  relative
  after:absolute
  after:left-0
  after:-bottom-2
  after:h-[2px]
  after:w-0
  after:bg-[#d4af37]
  after:transition-all
  after:duration-300
  hover:after:w-full
"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}

            <div className="hidden lg:flex items-center gap-4">

              <a
                href="#contact"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#d4af37]
                  px-7
                  py-3.5
                  text-[15px]
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_0_25px_rgba(212,175,55,.45)]
                "
              >
                <Phone size={18} />
                Contact Us
              </a>

            </div>

            {/* Mobile Menu Button */}

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="
                lg:hidden
                flex
                items-center
                justify-center
                w-12
                h-12
                rounded-2xl
                border
                border-[#333]
                bg-[#111]
                text-white
              "
            >
              {mobileOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>

          </nav>

        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={`
          fixed
          inset-0
          z-40
          lg:hidden
          transition-all
          duration-500
          ${
            mobileOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      >
        <div
          className="
            absolute
            inset-0
            bg-black/80
            backdrop-blur-lg
          "
        />

        <div
          className="
            relative
            h-full
            flex
            flex-col
            justify-center
            items-center
            gap-10
          "
        >
                    {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="
                text-white
                text-[28px]
                font-semibold
                tracking-wide
                transition-all
                duration-300
                hover:text-[#d4af37]
              "
              style={{
                animationDelay: `${index * 0.08}s`,
              }}
            >
              {item.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="
              mt-8
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#d4af37]
              px-8
              py-4
              text-black
              font-semibold
              transition-all
              duration-300
              hover:scale-105
            "
          >
            <Phone size={20} />
            Contact Us
          </a>

        </div>
      </div>
    </>
  );
}