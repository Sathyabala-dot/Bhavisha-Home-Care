"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section 
     id="home"
    className="relative h-screen flex items-center overflow-hidden">

      {/* Animated Background Glow */}
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

      {/* Hero Image */}
    <div className="absolute inset-0">
  <Image
    src="/images/hero.new.png"
    alt="Hero"
    fill
    priority
    className="object-cover object-right"
  />
</div>

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
          className="text-5xl font-bold leading-tight max-w-xl"
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