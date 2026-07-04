"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
} from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    title: "CALL US",
    value: "08062178399",
    sub: "9840974868",
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
    <div>

      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .6 }}
        className="text-4xl font-bold mb-10"
      >
        Reach Us
      </motion.h2>

      <div className="space-y-8">

        {contactItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .5,
                delay: index * .15,
              }}
              className="flex gap-5 items-start group"
            >

              <div className="w-16 h-16 rounded-full border border-[#d4af37]/40 bg-[#111] flex items-center justify-center transition-all duration-300 group-hover:bg-[#d4af37] group-hover:text-black">

                <Icon className="w-7 h-7 text-[#d4af37] group-hover:text-black transition-all" />

              </div>

              <div>

                <p className="uppercase tracking-[2px] text-xs text-gray-500 mb-1">
                  {item.title}
                </p>

                <h3 className="text-xl font-semibold">
                  {item.value}
                </h3>

                <p className="text-gray-400 mt-1">
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
        transition={{ duration: .7 }}
        className="mt-14"
      >

        <div className="rounded-2xl border border-white/10 bg-[#111] p-7 hover:border-[#d4af37]/40 transition-all duration-300">

          <div className="flex gap-4">

            <div className="w-14 h-14 rounded-full bg-[#d4af37]/15 flex items-center justify-center">

              <MapPin className="text-[#d4af37]" size={26} />

            </div>

            <div>

              <h3 className="text-xl font-semibold">
                Office Address
              </h3>

              <p className="text-gray-400 mt-3 leading-8">

                10, Vanagaram Main Road <br />

                Vanagaram <br />

                Chennai - 600116

              </p>

            </div>

          </div>

        </div>

      </motion.div>

    </div>
  );
}