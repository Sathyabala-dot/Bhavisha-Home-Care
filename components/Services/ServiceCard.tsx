"use client";

import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  image: string;
  features: string[];
}

export default function ServiceCard({
  title,
  description,
  image,
  features,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 hover:border-[#d4af37]/60 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] transition-all duration-500"
    >
      <div className="relative mb-8 rounded-2xl border border-white/10 bg-gradient-to-br from-[#181818] via-[#111111] to-black p-8 overflow-hidden">

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18),transparent_70%)]"/>

    <div className="relative flex justify-center items-center h-72">

        <Image
            src={image}
            alt={title}
            width={360}
            height={260}
            className="object-contain transition-all duration-700 group-hover:scale-110"
        />

    </div>

</div>

      <h3 className="text-2xl font-semibold text-white mb-4">
        {title}
      </h3>

      <p className="text-gray-400 mb-6 leading-7">
        {description}
      </p>

      <div className="space-y-3 mb-8">
        {features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-3 text-gray-300"
          >
            <Check className="text-[#d4af37]" size={18} />
            {feature}
          </div>
        ))}
      </div>

      <button className="flex items-center gap-2 text-[#d4af37] font-medium group/button">
        Book Service
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover/button:translate-x-2"
        />
      </button>
    </motion.div>
  );
}