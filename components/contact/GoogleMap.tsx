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
      className="mt-8 sm:mt-10"
    >
      {/* Header */}

      <div className="mb-5 flex items-center gap-3">
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-[#d4af37]/15

            sm:h-11
            sm:w-11
          "
        >
          <MapPinned
            className="text-[#d4af37]"
            size={20}
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white sm:text-2xl">
            Find Us
          </h3>

          <p className="text-sm text-gray-400">
            Visit our office anytime.
          </p>
        </div>
      </div>

      {/* Map Card */}

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111]">

        {/* Google Map */}

        <iframe
          title="Bhavisha Home Care"
          src="https://www.google.com/maps?q=10+Vanagaram+Main+Road,+Chennai&output=embed"
          loading="lazy"
          className="
            w-full

            h-[260px]
            sm:h-[320px]
            md:h-[380px]
            lg:h-[450px]
          "
        />

        {/* Bottom Section */}

        <div
          className="
            border-t
            border-white/10

            p-5
            sm:p-6

            flex
            flex-col
            md:flex-row

            md:items-center
            md:justify-between

            gap-6
          "
        >
          {/* Address */}

          <div>

            <h4 className="text-lg font-semibold text-white">
              Bhavisha Home Care
            </h4>

            <p className="mt-2 text-sm leading-7 text-gray-400 sm:text-base">
              10, Vanagaram Main Road
              <br />
              Vanagaram
              <br />
              Chennai – 600116
            </p>

          </div>

          {/* Button */}

          <a
            href="https://maps.google.com/?q=10+Vanagaram+Main+Road,+Chennai"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              w-full
              items-center
              justify-center
              gap-2

              rounded-full

              bg-[#d4af37]

              px-6
              py-3

              text-sm
              font-semibold
              text-black

              transition-all
              duration-300

              hover:scale-[1.03]
              hover:shadow-[0_0_25px_rgba(212,175,55,0.35)]

              md:w-auto
            "
          >
            <Navigation size={18} />

            Get Directions
          </a>

        </div>

      </div>
    </motion.div>
  );
}