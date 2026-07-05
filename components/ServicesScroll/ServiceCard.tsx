"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Service {
  id: number;
  number: string;
  icon: string;
  title: string;
  description: string;
  brands: string[];
  image: string;
}

interface Props {
  service: Service;
}

export default function ServiceCard({ service }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="
        group
        relative

        w-full
        lg:w-[560px]
        lg:min-w-[560px]

        overflow-hidden
        rounded-3xl

        border border-[#2a2a2a]
        bg-[#121212]

        hover:border-[#d4af37]
        transition-all duration-300

        flex
        flex-col
        lg:flex-row

        min-h-[420px]
        lg:h-[150px]
      "
    >
      {/* LEFT SIDE */}

      <div
        className="
          lg:w-[42%]
          p-6

          flex
          flex-col
          justify-between
        "
      >
        <div>
          <div className="flex items-center gap-3">
            <div
              className="
                w-10
                h-10
                rounded-full
                border
                border-[#d4af37]

                flex
                items-center
                justify-center

                text-[#d4af37]
              "
            >
              {service.icon}
            </div>

            <div className="flex-1 h-px bg-[#444]" />

            <span className="text-[11px] tracking-[3px] text-[#d4af37]">
              {service.number}
            </span>
          </div>

          <h2 className="mt-5 text-[24px] font-bold leading-tight text-white">
            {service.title}
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-400">
            {service.description}
          </p>
        </div>

        <div className="mt-8">
          <p className="mb-3 text-[11px] uppercase tracking-[4px] text-gray-500">
            Supported Brands
          </p>

          <div className="flex flex-wrap gap-x-3 gap-y-2">
            {service.brands.map((brand) => (
              <span
                key={brand}
                className="
                  text-xs
                  text-gray-300
                  border-b
                  border-[#444]
                  hover:text-[#d4af37]
                  transition-colors
                "
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* IMAGE */}

      <div
        className="
          relative
          h-[220px]
          sm:h-[260px]
          lg:h-full
          lg:flex-1
        "
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          sizes="(max-width:1024px)100vw,55vw"
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#121212]/10" />
      </div>

      {/* Bottom Gold Line */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-0
          bg-[#d4af37]
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </motion.div>
  );
}