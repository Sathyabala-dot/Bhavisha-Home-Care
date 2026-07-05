"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MessageCircle } from "lucide-react";

const services = [
  "AC Repair & Service",
  "Washing Machine Repair",
  "RO Purifier Repair",
  "Water Heater Repair",
];

export default function Submit() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="rounded-3xl border border-white/10 bg-[#111111]/90 backdrop-blur-xl p-8 shadow-[0_0_60px_rgba(212,175,55,0.08)]"
    >
      <h2 className="text-3xl font-bold text-white">
        Submit Your Enquiry
      </h2>

      <p className="mt-2 mb-10 text-gray-400">
        Expert technicians are just a few clicks away.
      </p>

      <form className="space-y-6">
        {/* Name & Phone */}
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="text-xs uppercase tracking-[2px] text-gray-500">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter Your Name"
              className="mt-2 w-full rounded-xl border border-white/10 bg-[#1a1a1a] px-4 py-3 text-white outline-none focus:border-[#d4af37]"
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-[2px] text-gray-500">
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="Your Phone Number"
              className="mt-2 w-full rounded-xl border border-white/10 bg-[#1a1a1a] px-4 py-3 text-white outline-none focus:border-[#d4af37]"
            />
          </div>
        </div>

        {/* Service */}
        <div>
          <label className="text-xs uppercase tracking-[2px] text-gray-500">
            Choose Your Service
          </label>

          <select className="mt-2 w-full rounded-xl border border-white/10 bg-[#1a1a1a] px-4 py-3 text-white outline-none focus:border-[#d4af37]">
            <option value="">Select Service...</option>

            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        {/* Date & Time */}
        <div className="grid gap-5 md:grid-cols-2">
          <div className="relative">
            <label className="text-xs uppercase tracking-[2px] text-gray-500">
              Date
            </label>

            <input
              type="date"
              className="mt-2 w-full rounded-xl border border-white/10 bg-[#1a1a1a] px-4 py-3 text-white outline-none focus:border-[#d4af37]"
            />

            <Calendar
              size={18}
              className="pointer-events-none absolute right-4 top-[44px] text-gray-500"
            />
          </div>

          <div className="relative">
            <label className="text-xs uppercase tracking-[2px] text-gray-500">
              Time
            </label>

            <input
              type="time"
              className="mt-2 w-full rounded-xl border border-white/10 bg-[#1a1a1a] px-4 py-3 text-white outline-none focus:border-[#d4af37]"
            />

            <Clock
              size={18}
              className="pointer-events-none absolute right-4 top-[44px] text-gray-500"
            />
          </div>
        </div>

        {/* Address */}
        <div>
          <label className="text-xs uppercase tracking-[2px] text-gray-500">
            Full Address
          </label>

          <textarea
            rows={4}
            placeholder="Enter your complete address..."
            className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-[#1a1a1a] px-4 py-4 text-white outline-none focus:border-[#d4af37]"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#d4af37] py-4 font-semibold text-black transition-all duration-300 hover:scale-[1.02]"
        >
          <MessageCircle
            size={20}
            className="transition-transform duration-300 group-hover:rotate-12"
          />
          BOOK VIA WHATSAPP
        </button>
      </form>
    </motion.div>
  );
}