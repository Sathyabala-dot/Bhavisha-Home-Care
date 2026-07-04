"use client";

import { motion } from "framer-motion";
import { MapPinned, Navigation } from "lucide-react";

export default function GoogleMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-10"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-11 h-11 rounded-full bg-[#d4af37]/15 flex items-center justify-center">
          <MapPinned className="text-[#d4af37]" size={22} />
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white">
            Find Us
          </h3>

          <p className="text-gray-400 text-sm">
            Visit our office anytime.
          </p>
        </div>
      </div>

      {/* Map Card */}
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111]">

        <iframe
          title="Bhavisha Home Care"
          src="https://www.google.com/maps?q=10+Vanagaram+Main+Road,+Chennai&output=embed"
          loading="lazy"
          className="w-full h-[420px]"
        />

        {/* Bottom Info */}
        <div className="border-t border-white/10 p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

          <div>

            <h4 className="text-lg font-semibold text-white">
              Bhavisha Home Care
            </h4>

            <p className="text-gray-400 mt-2 leading-7">
              10, Vanagaram Main Road
              <br />
              Vanagaram
              <br />
              Chennai – 600116
            </p>

          </div>

          <a
            href="https://maps.google.com/?q=10+Vanagaram+Main+Road,+Chennai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d4af37] px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
          >
            <Navigation size={18} />

            Get Directions
          </a>

        </div>

      </div>
    </motion.div>
  );
}