"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Book Service",
    description:
      "Schedule your appliance service online or call our support team. Choose your preferred date and time with instant confirmation.",
  },
  {
    number: "02",
    title: "Technician Assigned",
    description:
      "A certified technician is assigned immediately and reaches your location on time with all required tools.",
  },
  {
    number: "03",
    title: "Diagnosis",
    description:
      "Our expert performs a complete inspection to identify the exact problem and explains the repair process clearly.",
  },
  {
    number: "04",
    title: "Repair & Testing",
    description:
      "Repairs are completed using genuine spare parts followed by detailed performance testing before delivery.",
  },
  {
    number: "05",
    title: "Warranty & Support",
    description:
      "Enjoy service warranty, post-service support, and complete peace of mind with every repair.",
  },
];

export default function WorkProcess() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
  });

  return (
    <section
      ref={sectionRef}
      className="relative bg-black py-28 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center mb-24"
        >
          <p className="uppercase tracking-[5px] text-[#d4af37] text-xs font-semibold">
            HOW IT WORKS
          </p>

          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-white">
            Our <span className="text-[#d4af37]">Work Process</span>
          </h2>
        </motion.div>

        <div className="relative">

          {/* Background Line */}

          <div className="absolute left-1/2 top-0 h-full w-px bg-[#2d2d2d] -translate-x-1/2" />

          {/* Animated Gold Line */}

          <motion.div
            style={{ scaleY }}
            className="
              absolute
              left-1/2
              top-0
              h-full
              w-[2px]
              bg-gradient-to-b
              from-[#d4af37]
              via-[#e7c35a]
              to-[#d4af37]
              origin-top
              -translate-x-1/2
            "
          />

          {steps.map((step, index) => {
            const left = index % 2 === 0;

            return (
              <div
                key={index}
                className="relative grid grid-cols-2 items-center mb-20"
              >

                {/* LEFT SIDE */}

                <div className={`flex ${left ? "justify-end pr-16" : ""}`}>

                  {left && (

                    <motion.div
                      initial={{
                        opacity: 0,
                        x: -80,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: .7 }}
                      whileHover={{
                        y: -8,
                        scale: 1.02,
                        borderColor: "#d4af37",
                        boxShadow:
                          "0 20px 45px rgba(212,175,55,.12)",
                      }}
                      className="
                        w-[340px]
                        rounded-[24px]
                        border
                        border-[#272727]
                        bg-[#131313]
                        p-7
                        transition-all
                        duration-300
                      "
                    >

                      <h3 className="text-xl font-bold text-white mb-4">
                        {step.title}
                      </h3>

                      <p className="text-[15px] leading-7 text-gray-400">
                        {step.description}
                      </p>

                    </motion.div>

                  )}

                </div>

                                {/* RIGHT SIDE */}

                <div className={`flex ${!left ? "justify-start pl-16" : ""}`}>

                  {!left && (

                    <motion.div
                      initial={{
                        opacity: 0,
                        x: 80,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: .7 }}
                      whileHover={{
                        y: -8,
                        scale: 1.02,
                        borderColor: "#d4af37",
                        boxShadow:
                          "0 20px 45px rgba(212,175,55,.12)",
                      }}
                      className="
                        w-[340px]
                        rounded-[24px]
                        border
                        border-[#272727]
                        bg-[#131313]
                        p-7
                        transition-all
                        duration-300
                      "
                    >

                      <h3 className="text-xl font-bold text-white mb-4">
                        {step.title}
                      </h3>

                      <p className="text-[15px] leading-7 text-gray-400">
                        {step.description}
                      </p>

                    </motion.div>

                  )}

                </div>

                {/* NUMBER */}

                <motion.div
                  initial={{
                    scale: 0,
                    rotate: -180,
                  }}
                  whileInView={{
                    scale: 1,
                    rotate: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 12,
                  }}
                  whileHover={{
                    scale: 1.12,
                    boxShadow:
                      "0 0 25px rgba(212,175,55,.45)",
                  }}
                  className="
                    absolute
                    left-1/2
                    -translate-x-1/2
                    w-14
                    h-14
                    rounded-full
                    border
                    border-[#6f592c]
                    bg-[#0f0f0f]
                    flex
                    items-center
                    justify-center
                    text-[#d4af37]
                    text-sm
                    font-bold
                    z-20
                  "
                >
                  {step.number}
                </motion.div>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}