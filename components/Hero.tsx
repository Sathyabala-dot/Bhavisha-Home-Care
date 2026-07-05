"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        flex
        items-center
        overflow-hidden
        min-h-screen
        lg:min-h-[90vh]
        xl:min-h-screen
        pt-28
        pb-16
        sm:pt-32
        lg:pt-0
      "
    >
      {/* Background Glow */}
      <div className="gold-glow"></div>
      <div className="gold-glow-2"></div>

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,.82) 0%, rgba(0,0,0,.55) 35%, rgba(0,0,0,.18) 60%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.new.png"
          alt="Hero"
          fill
          priority
          className="object-cover object-[72%] lg:object-right"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            uppercase
            text-[#C8A96A]
            tracking-[4px]
            sm:tracking-[7px]
            lg:tracking-[10px]
            text-xs
            sm:text-sm
            lg:text-base
            mb-5
          "
        >
          Premium Home Care
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
         className="
    font-bold
    leading-[1.05]
    text-[48px]
    sm:text-6xl
    md:text-7xl
    lg:text-6xl
    max-w-[340px]
    sm:max-w-xl
  "
        >
          Reliable Repairs.
          <br />
          Luxury Experience.
          <br />
          Every Visit.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="
            mt-7
            text-gray-300
            text-base
            lg:text-lg
            leading-8
            max-w-[520 px]
          "
        >
          Premium repair solutions for Air Conditioners,
          Washing Machines, Water Heaters and RO Purifiers
          with certified experts.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="
            mt-10
            flex
            flex-col
            sm:flex-row
            gap-5
            w-full
            sm:w-auto
          "
        >
          <button className="btn-gold w-full sm:w-auto">
            Book Service
          </button>

          <button className="btn-glass w-full sm:w-auto">
            Explore Services
          </button>
        </motion.div>

      </div>
    </section>
  );
}