"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ProductShowcase() {
  return (
    <section
      id="showcase"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/bg3.png" // Replace with your background image
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Gold Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 w-full">
        <div className="max-w-xl">

          {/* Small Heading */}

          <p className="uppercase tracking-[6px] text-gray-300 text-sm font-semibold">
            Minimalist. Modern. Premium.
          </p>

          {/* Main Heading */}

          <h2 className="mt-6 text-5xl md:text-5xl font-bold leading-tight text-white">
            Designed To
            <br />
            Elevate Your Space
          </h2>

          {/* Description */}

          <p className="mt-8 text-lg md:text-xl leading-9 text-gray-300">
            A perfect blend of minimal design and premium materials that
            complements modern interiors beautifully.
          </p>

          {/* Button */}

          <button
            className="
            mt-12
            inline-flex
            items-center
            gap-3
            bg-[#d7b07a]
            hover:bg-[#e4bf8d]
            text-black
            font-semibold
            text-lg
            px-8
            py-5
            rounded-lg
            transition-all
            duration-300
            hover:scale-105
            shadow-xl
          "
          >
            Explore Design

            <ArrowRight
              size={22}
              strokeWidth={2.5}
            />
          </button>
        </div>
      </div>
    </section>
  );
}