"use client";

import {
  Zap,
  Clock3,
  Mic,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "High Efficiency",
    desc: "Powerful technology crafted to deliver consistent and reliable results.",
  },
  {
    icon: Clock3,
    title: "Same Day Service",
    desc: "Quick response and same-day repair across Chennai.",
  },
  {
    icon: Mic,
    title: "Ultra Quiet",
    desc: "Whisper-quiet operation for maximum comfort.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Experts",
    desc: "Experienced technicians using genuine spare parts.",
  },
];

export default function Features() {
  return (
    <section 
    id="features"
    className="relative overflow-hidden bg-[#0A0A0A] py-20 lg:py-28">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#d4af37]/5 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#d4af37]/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Heading */}

        <div className="text-center">

          <p
            className="
              uppercase
              tracking-[4px]
              sm:tracking-[6px]
              text-[#d4af37]
              text-xs
              sm:text-sm
              font-semibold
            "
          >
            Smart Features & Benefits
          </p>

          <h2
            className="
              mt-4
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              text-white
            "
          >
            Intelligent Features
          </h2>

          <p
            className="
              mt-4
              text-gray-400
              text-base
              sm:text-lg
            "
          >
            Built for Performance. Designed for Comfort.
          </p>

          <div className="mx-auto mt-6 h-[2px] w-20 bg-[#d4af37]" />

        </div>

        {/* Cards */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
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
                  group
                  rounded-3xl
                  border
                  border-[#222]
                  bg-[#111]
                  p-7
                  transition-all
                  duration-500
                  hover:border-[#d4af37]
                  hover:-translate-y-2
                  hover:shadow-[0_20px_60px_rgba(212,175,55,.12)]
                "
              >
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#3c3c3c]
                    bg-[#171717]
                    transition-all
                    duration-500
                    group-hover:border-[#d4af37]
                    group-hover:bg-[#d4af37]
                  "
                >
                  <Icon
                    size={30}
                    className="
                      text-[#d4af37]
                      transition-all
                      duration-500
                      group-hover:text-black
                    "
                  />
                </div>

                <h3
                  className="
                    mt-8
                    text-xl
                    font-bold
                    text-white
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-sm
                    sm:text-base
                    leading-7
                    text-gray-400
                  "
                >
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}