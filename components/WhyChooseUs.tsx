"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "5000+",
    label: "Happy Customers",
  },
  {
    value: "12+",
    label: "Years Experience",
  },
  {
    value: "24/7",
    label: "Customer Support",
  },
  {
    value: "100%",
    label: "Satisfaction Rate",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{
        backgroundImage: "url('/images/trust-bg.png')",
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-black/75" /> 

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black" />

      <div className="relative z-10">

        {/* Statistics */}

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-16 lg:pt-24">

          <div
            className="
              grid
              grid-cols-2
              lg:grid-cols-4
              gap-5
            "
          >
            {stats.map((item, index) => (

              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: .6,
                  delay: index * .1,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-md
                  py-8
                  px-5
                  text-center
                  transition-all
                  duration-300
                  hover:border-[#d4af37]
                  hover:bg-white/10
                "
              >

                <h2
                  className="
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl
                    font-bold
                    text-white
                  "
                >
                  {item.value}
                </h2>

                <p
                  className="
                    mt-4
                    uppercase
                    tracking-[3px]
                    text-[11px]
                    sm:text-xs
                    font-semibold
                    text-[#d4af37]
                  "
                >
                  {item.label}
                </p>

              </motion.div>

            ))}
          </div>

        </div>

        {/* Bottom */}

        <div
          className="
            mx-auto
            max-w-4xl
            px-6
            py-20
            lg:py-28
            text-center
          "
        >

          <div
            className="
              flex
              items-center
              justify-center
              gap-4
            "
          >

            <div className="h-[2px] w-10 bg-[#d4af37]" />

            <p
              className="
                uppercase
                tracking-[5px]
                text-[#d4af37]
                text-xs
                sm:text-sm
                font-semibold
              "
            >
              WHY TRUST US
            </p>

            <div className="h-[2px] w-10 bg-[#d4af37]" />

          </div>

          <motion.h2
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: .7,
            }}
            className="
              mt-8
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              leading-tight
              text-white
            "
          >
            The Standard of{" "}
            <span className="text-[#d4af37]">
              Excellence.
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              delay: .2,
            }}
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-gray-300
              text-base
              sm:text-lg
              lg:text-xl
              leading-8
              lg:leading-10
            "
          >
            We don't just repair appliances—we restore comfort,
            convenience and peace of mind. Thousands of families
            across Chennai trust our certified technicians,
            genuine spare parts and transparent pricing for every
            service visit.
          </motion.p>

        </div>

      </div>
    </section>
  );
}