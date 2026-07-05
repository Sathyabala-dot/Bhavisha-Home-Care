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
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      className="
        group
        relative
        w-full
        lg:w-[720px]
        rounded-3xl
        overflow-hidden
        bg-[#111]
        border
        border-[#2b2b2b]
        hover:border-[#d4af37]
        transition-all
        duration-500
        flex
        flex-col
        lg:flex-row
        shrink-0
      "
    >
      {/* LEFT CONTENT */}
      <div
        className="
          w-full
          lg:w-[42%]
          p-6
          sm:p-8
          lg:p-10
          flex
          flex-col
        "
      >
        {/* Header */}
        <div className="flex items-center gap-3">

          <div
            className="
              w-11
              h-11
              rounded-full
              border
              border-[#d4af37]
              flex
              items-center
              justify-center
              text-xl
            "
          >
            {service.icon}
          </div>

          <div className="flex-1 h-px bg-[#444]" />

          <span
            className="
              text-[#d4af37]
              tracking-[3px]
              text-xs
              font-semibold
            "
          >
            {service.number}
          </span>
        </div>

        {/* Title */}
        <h2
          className="
            mt-6
            text-xl
            lg:text-2xl
            font-bold
            text-white
            leading-snug
          "
        >
          {service.title}
        </h2>

        {/* Description */}
        <p
          className="
            mt-4
            text-sm
            lg:text-[15px]
            leading-7
            text-gray-400
          "
        >
          {service.description}
        </p>

        {/* Brands */}
        <div className="mt-8">

          <p
            className="
              uppercase
              tracking-[3px]
              text-[11px]
              text-gray-500
              mb-3
            "
          >
            Supported Brands
          </p>

          <div className="flex flex-wrap gap-2">

            {service.brands.map((brand) => (
              <span
                key={brand}
                className="
                  px-3
                  py-1
                  rounded-full
                  border
                  border-[#343434]
                  text-xs
                  text-gray-300
                  hover:border-[#d4af37]
                  hover:text-[#d4af37]
                  transition
                "
              >
                {brand}
              </span>
            ))}

          </div>

        </div>

        {/* Button */}
        <button
          className="
            mt-8
            inline-flex
            items-center
            gap-2
            text-[#d4af37]
            font-semibold
            group/button
          "
        >
          Book This Service

          <ArrowRight
            size={18}
            className="
              transition-transform
              duration-300
              group-hover/button:translate-x-1
            "
          />
        </button>
      </div>

      {/* IMAGE */}
      <div
        className="
          relative
          w-full
          lg:flex-1
          h-[260px]
          sm:h-[320px]
          lg:h-auto
          overflow-hidden
        "
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          sizes="(max-width:1024px) 100vw,50vw"
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            lg:bg-gradient-to-l
            from-black/20
            via-transparent
            to-transparent
          "
        />
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
}