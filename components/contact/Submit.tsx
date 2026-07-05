"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MessageCircle,
} from "lucide-react";

const services = [
  "AC Repair & Service",
  "Washing Machine Repair",
  "RO Purifier Repair",
  "Water Heater Repair",
];

export default function Submit() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [address, setAddress] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      address: "",
    };

    let valid = true;

    if (!name.trim()) {
      newErrors.name = "Please enter your name";
      valid = false;
    }

    if (!phone.trim()) {
      newErrors.phone = "Please enter your phone number";
      valid = false;
    } else if (!/^[6-9]\d{9}$/.test(phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
      valid = false;
    }

    if (!service) {
      newErrors.service = "Please choose a service";
      valid = false;
    }

    if (!date) {
      newErrors.date = "Please select a preferred date";
      valid = false;
    }

    if (!time) {
      newErrors.time = "Please select a preferred time";
      valid = false;
    }

    if (!address.trim()) {
      newErrors.address = "Please enter your address";
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) return;

    setLoading(true);

    const message = ` *New Service Booking*

 *Customer Name:* ${name}

 *Phone:* ${phone}

 *Service:* ${service}

 *Preferred Date:* ${date}

 *Preferred Time:* ${time}

 *Address:*
${address}

Please contact the customer to confirm the booking.

Thank you.`;

    const whatsappNumber = "919840974868";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setLoading(false);

    setName("");
    setPhone("");
    setService("");
    setDate("");
    setTime("");
    setAddress("");

    setErrors({
      name: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      address: "",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="rounded-3xl border border-white/10 bg-[#111111]/90 p-8 backdrop-blur-xl shadow-[0_0_60px_rgba(212,175,55,0.08)]"
    >
      <h2 className="text-3xl font-bold text-white">
        Submit Your Enquiry
      </h2>

      <p className="mb-10 mt-2 text-gray-400">
        Expert technicians are just a few clicks away.
      </p>

      <form onSubmit={handleWhatsApp} className="space-y-6">

        {/* Name & Phone */}

        <div className="grid gap-5 md:grid-cols-2">

          {/* Name */}

          <div>

            <label className="text-xs uppercase tracking-[2px] text-gray-500">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrors({ ...errors, name: "" });
              }}
              className={`mt-2 w-full rounded-xl border bg-[#1a1a1a] px-4 py-3 text-white outline-none transition-all ${
                errors.name
                  ? "border-red-500"
                  : "border-white/10 focus:border-[#d4af37]"
              }`}
            />

            {errors.name && (
              <p className="mt-2 text-sm text-red-500">
                {errors.name}
              </p>
            )}

          </div>

          {/* Phone */}

          <div>

            <label className="text-xs uppercase tracking-[2px] text-gray-500">
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="Your Phone Number"
              maxLength={10}
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value.replace(/\D/g, ""));
                setErrors({ ...errors, phone: "" });
              }}
              className={`mt-2 w-full rounded-xl border bg-[#1a1a1a] px-4 py-3 text-white outline-none transition-all ${
                errors.phone
                  ? "border-red-500"
                  : "border-white/10 focus:border-[#d4af37]"
              }`}
            />

            {errors.phone && (
              <p className="mt-2 text-sm text-red-500">
                {errors.phone}
              </p>
            )}

          </div>

        </div>

        {/* Service */}

        <div>

          <label className="text-xs uppercase tracking-[2px] text-gray-500">
            Choose Your Service
          </label>

          <select
            value={service}
            onChange={(e) => {
              setService(e.target.value);
              setErrors({ ...errors, service: "" });
            }}
            className={`mt-2 w-full rounded-xl border bg-[#1a1a1a] px-4 py-3 text-white outline-none transition-all ${
              errors.service
                ? "border-red-500"
                : "border-white/10 focus:border-[#d4af37]"
            }`}
          >
            <option value="">Select Service...</option>

            {services.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}

          </select>

          {errors.service && (
            <p className="mt-2 text-sm text-red-500">
              {errors.service}
            </p>
          )}
        </div>

                {/* Date & Time */}

        <div className="grid gap-5 md:grid-cols-2">

          {/* Date */}

          <div className="relative">

            <label className="text-xs uppercase tracking-[2px] text-gray-500">
              Preferred Date
            </label>

            <input
              type="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
                setErrors({ ...errors, date: "" });
              }}
              className={`mt-2 w-full rounded-xl border bg-[#1a1a1a] px-4 py-3 text-white outline-none transition-all ${
                errors.date
                  ? "border-red-500"
                  : "border-white/10 focus:border-[#d4af37]"
              }`}
            />

            <Calendar
              size={18}
              className="pointer-events-none absolute right-4 top-[44px] text-gray-500"
            />

            {errors.date && (
              <p className="mt-2 text-sm text-red-500">
                {errors.date}
              </p>
            )}

          </div>

          {/* Time */}

          <div className="relative">

            <label className="text-xs uppercase tracking-[2px] text-gray-500">
              Preferred Time
            </label>

            <input
              type="time"
              value={time}
              onChange={(e) => {
                setTime(e.target.value);
                setErrors({ ...errors, time: "" });
              }}
              className={`mt-2 w-full rounded-xl border bg-[#1a1a1a] px-4 py-3 text-white outline-none transition-all ${
                errors.time
                  ? "border-red-500"
                  : "border-white/10 focus:border-[#d4af37]"
              }`}
            />

            <Clock
              size={18}
              className="pointer-events-none absolute right-4 top-[44px] text-gray-500"
            />

            {errors.time && (
              <p className="mt-2 text-sm text-red-500">
                {errors.time}
              </p>
            )}

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
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              setErrors({ ...errors, address: "" });
            }}
            className={`mt-2 w-full resize-none rounded-xl border bg-[#1a1a1a] px-4 py-4 text-white outline-none transition-all ${
              errors.address
                ? "border-red-500"
                : "border-white/10 focus:border-[#d4af37]"
            }`}
          />

          {errors.address && (
            <p className="mt-2 text-sm text-red-500">
              {errors.address}
            </p>
          )}

        </div>

        {/* Submit Button */}

        <button
          type="submit"
          disabled={loading}
          className={`
            group
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-full
            py-4
            font-semibold
            transition-all
            duration-300

            ${
              loading
                ? "cursor-not-allowed bg-gray-500 text-white"
                : "bg-[#d4af37] text-black hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(212,175,55,0.35)]"
            }
          `}
        >

          <MessageCircle
            size={20}
            className={`transition-transform duration-300 ${
              loading ? "animate-pulse" : "group-hover:rotate-12"
            }`}
          />

          {loading ? "Opening WhatsApp..." : "BOOK VIA WHATSAPP"}

        </button>

      </form>

    </motion.div>
  );
}