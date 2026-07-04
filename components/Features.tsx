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
    title: "Turbo Cooling",
    desc: "Experience rapid cooling with powerful airflow technology.",
  },
  {
    icon: Clock3,
    title: "Same Day Service",
    desc: "Quick response and same-day repair availability across Chennai.",
  },
  {
    icon: Mic,
    title: "Ultra Quiet",
    desc: "Whisper-quiet performance for a comfortable environment.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Experts",
    desc: "Fully trained, certified technicians with genuine spare parts.",
  },
];

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A]">
    <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative z-10">
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/5 blur-[180px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/5 blur-[180px]" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[7px] text-[#caa65b] text-sm font-semibold">
            Smart Features & Benefits
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">
            Intelligent Features
          </h2>

          <p className="mt-4 text-gray-400 text-xl">
            For a Better Experience
          </p>

          <div className="w-20 h-[2px] bg-[#caa65b] mx-auto mt-3"></div>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-24">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center"
            >
              {/* Icon */}

              <div
                className="
                mx-auto
                flex
                items-center
                justify-center
                w-24
                h-24
                rounded-full
                border
                border-[#7a6431]
                bg-[#111]
                transition-all
                duration-500
                group-hover:border-[#d9b45c]
                group-hover:shadow-[0_0_35px_rgba(212,175,55,.25)]
                group-hover:scale-110
              "
              >
                <feature.icon
                  size={36}
                  className="text-[#d4af37]"
                />
              </div>

              {/* Title */}

              <h3 className="mt-8 text-xl font-semibold text-white">
                {feature.title}
              </h3>

              {/* Description */}

              <p className="mt-4 text-gray-400 leading-8 text-lg">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}