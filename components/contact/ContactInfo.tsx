"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    title: "CALL US",
    value: "09840974868",
    sub: "We are available 24/7",
  },
  {
    icon: Mail,
    title: "E-MAIL",
    value: "help@bhavishahomecare.com",
    sub: "We reply within 30 minutes",
  },
  {
    icon: Clock,
    title: "WORKING HOURS",
    value: "7 AM to 10 PM",
    sub: "Monday to Sunday (7 Days)",
  },
];

export default function ContactInfo() {
  return (
    <div className="w-full">

      {/* Heading */}

      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-3xl font-bold text-white sm:mb-10 sm:text-4xl"
      >
        Reach Us
      </motion.h2>

      {/* Contact Items */}

      <div className="space-y-6 sm:space-y-8">

        {contactItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="group flex items-start gap-4 sm:gap-5"
            >
              {/* Icon */}

              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#d4af37]/40
                  bg-[#111]
                  transition-all
                  duration-300

                  sm:h-16
                  sm:w-16

                  group-hover:bg-[#d4af37]
                "
              >
                <Icon className="h-5 w-5 text-[#d4af37] transition-all group-hover:text-black sm:h-7 sm:w-7" />
              </div>

              {/* Text */}

              <div className="min-w-0 flex-1">

                <p className="mb-1 text-[11px] uppercase tracking-[3px] text-gray-500 sm:text-xs">
                  {item.title}
                </p>

                <h3 className="break-words text-lg font-semibold text-white sm:text-xl">
                  {item.value}
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-400 sm:text-base">
                  {item.sub}
                </p>

              </div>

            </motion.div>
          );
        })}

      </div>

      {/* Address Card */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-10 sm:mt-14"
      >
        <div
          className="
            rounded-2xl
            border
            border-white/10
            bg-[#111]
            p-5
            transition-all
            duration-300

            hover:border-[#d4af37]/40

            sm:p-7
          "
        >
          <div className="flex flex-col gap-4 sm:flex-row">

            {/* Icon */}

            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#d4af37]/15

                sm:h-14
                sm:w-14
              "
            >
              <MapPin
                className="text-[#d4af37]"
                size={24}
              />
            </div>

            {/* Address */}

            <div>

              <h3 className="text-lg font-semibold text-white sm:text-xl">
                Office Address
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                10, Vanagaram Main Road
                <br />
                Vanagaram
                <br />
                Chennai - 600116
              </p>

            </div>

          </div>

        </div>

      </motion.div>

    </div>
  );
}