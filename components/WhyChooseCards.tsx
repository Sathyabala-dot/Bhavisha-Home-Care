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
    <section className="bg-[#080808] py-24">
      <div className="max-w-[1500px] mx-auto px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  group
                  relative
                  h-[390px]
                  rounded-[28px]
                  bg-[#111111]
                  border
                  border-[#2a2a2a]
                  hover:border-[#d4af37]
                  transition-all
                  duration-500
                  hover:shadow-[0_20px_60px_rgba(212,175,55,0.12)]
                  overflow-hidden
                  p-8
                "
              >
                {/* Card Content */}
                <div className="flex flex-col h-full">

                  {/* Number */}
                  <div className="absolute top-7 right-7">
                    <span className="px-3 py-1 rounded-full border border-[#d4af37] text-[#d4af37] text-xs font-semibold tracking-wider">
                      {card.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className="
                      w-16
                      h-16
                      rounded-2xl
                      bg-[#1d1d1d]
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-500
                      group-hover:bg-[#d4af37]
                    "
                  >
                    <Icon
                      size={30}
                      className="text-white transition-all duration-500 group-hover:text-black"
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      mt-7
                      text-[30px]
                      font-bold
                      leading-[1.2]
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
                      mt-4
                      flex-1
                      text-[16px]
                      leading-7
                      text-gray-400
                    "
                  >
                    {card.description}
                  </p>

                  {/* Learn More */}
                  <div
                    className="
                      mt-6
                      text-[#d4af37]
                      font-medium
                      opacity-0
                      translate-y-2
                      transition-all
                      duration-500
                      group-hover:opacity-100
                      group-hover:translate-y-0
                    "
                  >
                    
                  </div>

                </div>

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