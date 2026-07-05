"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const issues = [
  {
    title: "Air Conditioner",
    problems: [
      "Poor or No Cooling",
      "Water Leakage",
      "Gas Refilling",
      "PCB & Sensor Repair",
      "Installation",
      "Uninstallation",
    ],
  },
  {
    title: "Washing Machine",
    problems: [
      "Not Spinning",
      "Water Leakage",
      "Door Lock Issue",
      "Drum Noise",
      "Drain Problems",
      "Installation",
    ],
  },
  {
    title: "Water Heater",
    problems: [
      "No Heating",
      "Thermostat Repair",
      "Heating Element",
      "Water Leakage",
      "Power Issues",
      "Installation",
    ],
  },
  {
    title: "RO Purifier",
    problems: [
      "Filter Replacement",
      "Low Water Flow",
      "Bad Taste",
      "Motor Repair",
      "AMC Service",
      "Installation",
    ],
  },
];

export default function IssuesSection() {
  return (
    <section
      id="issues"
      className="relative overflow-hidden bg-[#080808] py-20 lg:py-28"
    >
      {/* Glow */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#d4af37]/5 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#d4af37]/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[5px] text-[#d4af37] text-xs sm:text-sm font-semibold">
            Common Problems
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Issues We Fix
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400 text-base sm:text-lg">
            Our certified technicians diagnose and repair all major
            home appliance problems using genuine spare parts.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {issues.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * .1,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                rounded-3xl
                border
                border-[#272727]
                bg-[#111111]
                p-7
                transition-all
                duration-500
                hover:border-[#d4af37]
                hover:shadow-[0_20px_60px_rgba(212,175,55,.12)]
              "
            >

              <h3 className="text-2xl font-bold text-white group-hover:text-[#d4af37] transition-colors">
                {item.title}
              </h3>

              <div className="mt-8 space-y-4">

                {item.problems.map((problem) => (

                  <div
                    key={problem}
                    className="flex items-start gap-3"
                  >

                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-[#d4af37]"
                    />

                    <span className="text-gray-300 leading-7">
                      {problem}
                    </span>

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}