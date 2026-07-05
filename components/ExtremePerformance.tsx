"use client";

import { Thermometer, Clock3, ShieldCheck } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Thermometer,
    value: "52°C",
    title: "High Ambient",
    subtitle: "Cooling",
  },
  {
    icon: Clock3,
    value: "100%",
    title: "Copper",
    subtitle: "Condenser",
  },
  {
    icon: ShieldCheck,
    value: "5 Year",
    title: "Compressor",
    subtitle: "Warranty",
  },
];

export default function ExtremePerformance() {
  return (
    <section className="relative overflow-hidden">

      {/* Background */}

      <Image
        src="/images/bg2.png"
        alt="Extreme Performance"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40 lg:to-transparent" />

      {/* Mobile Overlay */}

      <div className="absolute inset-0 bg-black/40 lg:hidden" />

      {/* Content */}

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          px-5
          sm:px-8
          lg:px-12
          py-24
        "
      >
        <div className="max-w-3xl">

          {/* Small Heading */}

          <p
            className="
              uppercase
              tracking-[4px]
              sm:tracking-[5px]
              text-[#d4af37]
              text-xs
              sm:text-sm
              font-semibold
            "
          >
            Powerful Performance
          </p>

          {/* Heading */}

          <h2
            className="
              mt-5
              text-3xl
              sm:text-4xl
              lg:text-6xl
              font-bold
              leading-tight
              text-white
            "
          >
            Built for Extreme
            <br />
            Conditions
          </h2>

          {/* Description */}

          <p
            className="
              mt-6
              max-w-2xl
              text-gray-300
              text-base
              sm:text-lg
              lg:text-xl
              leading-7
              lg:leading-9
            "
          >
            Advanced cooling technology engineered to deliver
            consistent performance even in harsh climates,
            ensuring maximum comfort, durability and energy
            efficiency throughout the year.
          </p>

          {/* Features */}

          <div
            className="
              mt-12
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6
              lg:gap-8
            "
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-md
                    p-6
                    transition-all
                    duration-300
                    hover:border-[#d4af37]
                    hover:bg-white/10
                    hover:-translate-y-1
                  "
                >
                  <Icon
                    className="text-[#d4af37]"
                    size={34}
                  />

                  <h3
                    className="
                      mt-5
                      text-3xl
                      lg:text-4xl
                      font-bold
                      text-[#d4af37]
                    "
                  >
                    {feature.value}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-white
                      text-lg
                      font-medium
                    "
                  >
                    {feature.title}
                  </p>

                  <p className="mt-1 text-gray-400">
                    {feature.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#080808] to-transparent" />

    </section>
  );
}