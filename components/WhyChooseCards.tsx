"use client";

import {
  ShieldCheck,
  Clock3,
  Cog,
  BadgeDollarSign,
} from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    number: "01",
    title: "Certified Technicians",
    description:
      "Background-verified professionals trained to repair all major home appliances with industry standards.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Same-Day Service",
    description:
      "Quick doorstep service across Chennai with fast response times and dependable customer support.",
    icon: Clock3,
  },
  {
    number: "03",
    title: "Genuine Spare Parts",
    description:
      "Only manufacturer-approved original spare parts are used for reliable performance and longer appliance life.",
    icon: Cog,
  },
  {
    number: "04",
    title: "Affordable Pricing",
    description:
      "Transparent pricing with no hidden charges. Get complete quotations before any repair begins.",
    icon: BadgeDollarSign,
  },
];

export default function WhyChooseCards() {
  return (
    <section 
     id="technology"
    className="bg-[#080808] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-[#2a2a2a]
                  bg-[#111111]
                  p-6
                  lg:p-8
                  transition-all
                  duration-500
                  hover:border-[#d4af37]
                  hover:shadow-[0_20px_60px_rgba(212,175,55,.12)]
                "
              >

                {/* Number */}

                <div className="absolute right-6 top-6">

                  <span
                    className="
                      rounded-full
                      border
                      border-[#d4af37]
                      px-3
                      py-1
                      text-[11px]
                      font-semibold
                      tracking-[2px]
                      text-[#d4af37]
                    "
                  >
                    {card.number}
                  </span>

                </div>

                {/* Icon */}

                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#1d1d1d]
                    border
                    border-[#2f2f2f]
                    transition-all
                    duration-500
                    group-hover:bg-[#d4af37]
                    group-hover:border-[#d4af37]
                    group-hover:rotate-6
                  "
                >
                  <Icon
                    size={30}
                    className="
                      text-white
                      transition-all
                      duration-500
                      group-hover:text-black
                    "
                  />
                </div>

                {/* Title */}

                <h3
                  className="
                    mt-7
                    text-2xl
                    lg:text-[28px]
                    font-bold
                    leading-tight
                    text-white
                    transition-colors
                    duration-500
                    group-hover:text-[#d4af37]
                  "
                >
                  {card.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-5
                    text-sm
                    lg:text-base
                    leading-7
                    text-gray-400
                  "
                >
                  {card.description}
                </p>

                {/* Bottom Gold Line */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[3px]
                    w-0
                    bg-[#d4af37]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}