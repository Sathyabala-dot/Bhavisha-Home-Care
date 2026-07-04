"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">

      {/* Animated Background Glow */}
      <div className="gold-glow"></div>
      <div className="gold-glow-2"></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />

      {/* Hero Image */}
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: [1, 1.03, 1],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/hero.webp.png"
          alt="Hero"
          fill
          priority
          className="object-cover object-right hero-image"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-8">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="uppercase tracking-[8px] text-[#C8A96A] mb-5"
        >
          Premium Home Care
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-6xl font-bold leading-tight max-w-xl"
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
          transition={{ delay: .4 }}
          className="text-gray-300 mt-8 text-xl max-w-xl leading-9"
        >
          Premium repair solutions for Air Conditioners,
          Washing Machines, Water Heaters and RO Purifiers
          with certified experts.
        </motion.p>

        <motion.div
          className="mt-10 flex gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .7 }}
        >

          <button className="btn-gold">
            Book Service
          </button>

          <button className="btn-glass">
            Explore Services
          </button>

        </motion.div>

      </div>

    </section>
  );
}