"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
      transition={{ duration: 0.35 }}
      className="
        group
        relative
        w-[720px]
        h-[460px]
        rounded-[34px]
        overflow-hidden
        bg-[#121212]
        border
        border-[#2a2a2a]
        hover:border-[#d4af37]
        transition-all
        duration-300
        flex
        shrink-0
      "
    >
      {/* LEFT CONTENT */}
      <div className="w-[40%] flex flex-col p-10">

        {/* TOP */}
        <div className="flex items-center gap-4">

          <div
            className="
              w-12
              h-12
              rounded-full
              border
              border-[#d4af37]
              flex
              items-center
              justify-center
              text-[18px]
              text-[#d4af37]
            "
          >
            {service.icon}
          </div>

          <div className="w-12 h-px bg-[#555]" />

          <span
            className="
              text-[#d4af37]
              tracking-[4px]
              text-[12px]
              font-medium
            "
          >
            {service.number}
          </span>

        </div>

        {/* TITLE */}
        <h2
          className="
            mt-10
            text-[15px]
            leading-6
            font-bold
            text-white
          "
        >
          {service.title}
        </h2>

        {/* DESCRIPTION */}
        <p
          className="
            mt-5
            text-[13px]
            leading-6
            text-gray-400
          "
        >
          {service.description}
        </p>

        <div className="flex-1" />

        {/* BRANDS */}
        <div>

          <p
            className="
              uppercase
              tracking-[3px]
              text-[10px]
              text-gray-500
              mb-4
            "
          >
            Supported Brands
          </p>

          <div className="flex flex-wrap gap-x-3 gap-y-2">

            {service.brands.map((brand) => (
              <span
                key={brand}
                className="
                  text-[12px]
                  text-gray-300
                  border-b
                  border-[#444]
                  hover:text-[#d4af37]
                  transition-colors
                  duration-300
                  cursor-pointer
                "
              >
                {brand}
              </span>
            ))}

          </div>

        </div>

        {/* BUTTON */}
        <button
          className="
            group/button
            mt-8
            flex
            items-center
            gap-3
            text-[#d4af37]
            text-[15px]
            font-semibold
          "
        >
          Book This Service

          <ArrowRight
            size={18}
            className="
              transition-transform
              duration-300
              group-hover/button:translate-x-1.5
            "
          />

        </button>

      </div>

      {/* RIGHT IMAGE */}
      <div className="relative flex-1 overflow-hidden">

        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          sizes="50vw"
          className="
            object-cover
            object-center
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-l
            from-transparent
            via-transparent
            to-[#121212]/15
          "
        />

      </div>

      {/* GOLD BOTTOM LINE */}
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
}