"use client";

import { motion } from "framer-motion";

const brands = [
  "LG",
  "Samsung",
  "Daikin",
  "Voltas",
  "Blue Star",
  "Carrier",
  "Whirlpool",
  "Bosch",
  "IFB",
  "Panasonic",
  "Godrej",
  "Haier",
  "Kent",
  "Aquaguard",
  "Pureit",
  "Livpure",
  "AO Smith",
  "Racold",
];

export default function SupportedBrands() {
  return (
    <section
      id="brands"
      className="relative overflow-hidden bg-[#080808] py-20 lg:py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#d4af37]/5 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#d4af37]/5 blur-[150px]" />

      <div className="relative z-10">

        {/* Heading */}

        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-12">

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="
              uppercase
              tracking-[5px]
              text-[#d4af37]
              text-xs
              sm:text-sm
              font-semibold
            "
          >
            Trusted By Leading Brands
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="
              mt-4
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              text-white
            "
          >
            Brands We Service
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: .2 }}
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              sm:text-lg
              leading-8
              text-gray-400
            "
          >
            Our technicians are experienced in servicing all major
            home appliance brands using genuine spare parts and
            manufacturer-recommended repair procedures.
          </motion.p>

        </div>

        {/* Left Fade */}

        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-20 bg-gradient-to-r from-[#080808] to-transparent lg:w-40" />

        {/* Right Fade */}

        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-20 bg-gradient-to-l from-[#080808] to-transparent lg:w-40" />

        {/* Row 1 */}

        <div className="marquee mt-16">

          <div className="marquee-content">

            {[...brands, ...brands].map((brand, index) => (

              <motion.div
                whileHover={{
                  scale: 1.08,
                  y: -2,
                }}
                key={index}
                className="
                  mx-4
                  rounded-full
                  border
                  border-[#2a2a2a]
                  bg-[#111111]
                  px-6
                  py-4
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[2px]
                  text-gray-300
                  transition-all
                  duration-300
                  hover:border-[#d4af37]
                  hover:text-[#d4af37]
                  lg:px-8
                  lg:py-5
                  lg:text-base
                "
              >
                {brand}
              </motion.div>

            ))}

          </div>

        </div>

        {/* Row 2 */}

        <div className="marquee reverse mt-8 lg:mt-10">

          <div className="marquee-content">

            {[...brands].reverse().concat([...brands].reverse()).map((brand, index) => (

              <motion.div
                whileHover={{
                  scale: 1.08,
                  y: -2,
                }}
                key={index}
                className="
                  mx-4
                  rounded-full
                  border
                  border-[#2a2a2a]
                  bg-[#111111]
                  px-6
                  py-4
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[2px]
                  text-gray-300
                  transition-all
                  duration-300
                  hover:border-[#d4af37]
                  hover:text-[#d4af37]
                  lg:px-8
                  lg:py-5
                  lg:text-base
                "
              >
                {brand}
              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}