"use client";

import { Thermometer, Clock3, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function ExtremePerformance() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background */}
      <Image
        src="/images/bg2.png" // Your uploaded background
        alt="Extreme Performance"
        fill
        priority
        className="object-cover"
      />

      {/* Left Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto h-screen flex items-center px-8 lg:px-12">

        {/* Left */}
        <div className="max-w-xl">

          <p className="uppercase tracking-[5px] text-gray-400 text-sm font-semibold">
            Powerful Performance
          </p>

          <h2 className="mt-6 text-5xl md:text-5xl font-bold text-white leading-tight">
            Built for Extreme
            <br />
            Conditions
          </h2>

          <p className="mt-8 text-xl text-gray-300 leading-9">
            Advanced cooling technology that performs exceptionally
            even in extreme temperatures.
          </p>

          {/* Features */}

          <div className="flex gap-16 mt-20">

            <div>
              <Thermometer
                className="text-[#d4af37]"
                size={42}
              />

              <h3 className="mt-5 text-5xl font-bold text-[#d4af37]">
                52°C
              </h3>

              <p className="mt-3 text-white text-xl">
                High Ambient
              </p>

              <p className="text-gray-400">
                Cooling
              </p>
            </div>

            <div>
              <Clock3
                className="text-[#d4af37]"
                size={42}
              />

              <h3 className="mt-5 text-5xl font-bold text-[#d4af37]">
                100%
              </h3>

              <p className="mt-3 text-white text-xl">
                Copper
              </p>

              <p className="text-gray-400">
                Condenser
              </p>
            </div>

            <div>
              <ShieldCheck
                className="text-[#d4af37]"
                size={42}
              />

              <h3 className="mt-5 text-5xl font-bold text-[#d4af37]">
                5 Year
              </h3>

              <p className="mt-3 text-white text-xl">
                Compressor
              </p>

              <p className="text-gray-400">
                Warranty
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}