"use client";

import { motion } from "framer-motion";

const issues = [
  {
    title: "AC Issues",
    problems: [
      "Poor or no cooling issues",
      "AC not turning on",
      "Unusual sounds or vibrations",
      "Foul odors from the unit",
      "Leaking water from indoor unit",
      "Remote or control board issues",
      "Gas refill and regular servicing",
      "Installation & uninstallation",
    ],
  },
  {
    title: "Washing Machine Issues",
    problems: [
      "Not spinning or draining",
      "Drum not rotating properly",
      "Water leakage or overflow",
      "Power supply issues",
      "Noisy operation or vibration",
      "Door not closing or locking",
      "Control panel/display errors",
      "Foul smell from the drum",
    ],
  },
  {
    title: "Water Heater Issues",
    problems: [
      "Water not heating properly",
      "Geyser not turning on",
      "Tripping power or fuse issues",
      "Water leakage from tank or pipe",
      "Overheating or thermostat failure",
      "Noisy operation",
      "Rust or foul smell in water",
      "Installation & Uninstallation",
    ],
  },
  {
    title: "RO Purifier Issues",
    problems: [
      "Low or no water output",
      "Bad taste or odor in water",
      "RO unit not turning on",
      "Water leakage from filters",
      "Unusual noise from purifier",
      "Filter / Membrane replacement",
      "Annual Maintenance (AMC)",
      "Installation and relocation",
    ],
  },
];

export default function IssuesSection() {
  return (
    <section className="bg-black py-24">

      <div className="max-w-[1450px] mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-[#c8a96b] text-xs font-semibold">
            COMPREHENSIVE SOLUTIONS
          </p>

          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-white">
            Issues <span className="text-[#d4af37]">We Fix</span>
          </h2>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          {issues.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: .3 }}
              className="
                rounded-[24px]
                border
                border-[#2c2c2c]
                hover:border-[#b58d40]
                bg-gradient-to-br
                from-[#141414]
                to-[#191714]
                p-8
                transition-all
                duration-300
              "
            >

              {/* Header */}

              <div className="flex items-start gap-4 mb-8">

                <div className="w-12 h-12 rounded-full border border-[#5d4a28] flex items-center justify-center shrink-0">

                  <div className="w-4 h-4 rounded-full bg-[#d4af37]" />

                </div>

                <h3 className="text-[18px] font-bold text-white leading-8">
                  {item.title}
                </h3>

              </div>

              {/* Problems */}

              <div className="space-y-4">

                {item.problems.map((problem, i) => (

                  <div
                    key={i}
                    className="group flex items-start gap-4"
                  >

                    <div className="w-8 h-px mt-3 bg-[#353535] group-hover:bg-[#d4af37] transition-all"></div>

                    <p className="text-[15px] leading-8 text-gray-400 group-hover:text-white transition-colors">
                      {problem}
                    </p>

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