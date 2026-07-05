"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Glow */}
      <div className="gold-glow" />
      <div className="gold-glow-2" />

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.new.png"
          alt="Hero"
          fill
          priority
          className="object-cover object-[70%] md:object-right"
        />
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,.92) 0%, rgba(0,0,0,.75) 40%, rgba(0,0,0,.25) 70%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 py-28">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[3px] sm:tracking-[6px] text-[#C8A96A] text-xs sm:text-sm md:text-base mb-4"
        >
          Premium Home Care
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-bold leading-tight max-w-xl
                     text-4xl
                     sm:text-5xl
                     lg:text-6xl"
        >
          Reliable Repairs.
          <br />
          Luxury Experience.
          <br />
          Every Visit.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 max-w-lg text-gray-300
                     text-base
                     sm:text-lg
                     lg:text-xl
                     leading-7
                     sm:leading-8"
        >
          Premium repair solutions for Air Conditioners,
          Washing Machines, Water Heaters and RO Purifiers
          with certified experts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
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