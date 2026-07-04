"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Vikram S.",
    location: "Velachery, Chennai",
    review:
      "The best home appliance repair in Chennai. Quick response and clean work. Fixed my RO purifier the same day. Very satisfied with the service.",
  },
  {
    name: "Priya R.",
    location: "Anna Nagar, Chennai",
    review:
      "Professional technicians and affordable pricing. My washing machine was repaired within an hour. Highly recommended.",
  },
  {
    name: "Arun K.",
    location: "Tambaram, Chennai",
    review:
      "Booked through WhatsApp and received instant confirmation. Excellent AC service and polite staff. Will definitely use again.",
  },
  {
    name: "Meena P.",
    location: "Adyar, Chennai",
    review:
      "Fantastic customer support and genuine spare parts. Refrigerator cooling issue was fixed perfectly. Great experience.",
  },
  {
    name: "Suresh K.",
    location: "OMR, Chennai",
    review:
      "Excellent refrigerator repair service. Technician arrived on time and explained everything clearly. Very happy with the work.",
  },
];

export default function Testimonials() {
  const [[page, direction], setPage] = useState([0, 1]);

  const paginate = (dir: number) => {
    setPage(([prev]) => [
      (prev + dir + testimonials.length) % testimonials.length,
      dir,
    ]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 4500);

    return () => clearInterval(timer);
  }, [page]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 350 : -350,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -350 : 350,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section className="relative overflow-hidden bg-black py-28">

      {/* Glow */}

      <div className="absolute inset-0 flex justify-center">
        <div className="h-[700px] w-[700px] rounded-full bg-[#d4af37]/5 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">

        <p className="text-center text-sm font-semibold tracking-[7px] text-[#d4af37]">
          WHAT OUR CUSTOMERS SAY
        </p>

        <h2 className="mt-4 text-center text-3xl font-bold text-white md:text-6xl">
          Customer Reviews
        </h2>

        <div className="relative mt-20 h-[320px] overflow-hidden">

          <AnimatePresence
            custom={direction}
            initial={false}
            mode="popLayout"
          >
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: {
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                },
                opacity: {
                  duration: 0.4,
                },
                scale: {
                  duration: 0.4,
                },
              }}
              className="absolute left-0 top-0 w-full text-center"
            >
              <div className="mb-8 flex justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={22}
                    className="fill-[#d4af37] text-[#d4af37]"
                  />
                ))}
              </div>

              <p className="mx-auto max-w-4xl text-xl italic leading-relaxed text-gray-200 md:text-2xl">
                "{testimonials[page].review}"
              </p>

              <div className="mt-12">
                <h3 className="text-xl font-bold text-white">
                  {testimonials[page].name}
                </h3>

                <p className="mt-2 text-lg text-gray-500">
                  — {testimonials[page].location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Dots */}

        <div className="mt-8 flex justify-center gap-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() =>
                setPage([
                  index,
                  index > page ? 1 : -1,
                ])
              }
              className={`h-1 rounded-full transition-all duration-500 ${
                page === index
                  ? "w-12 bg-[#d4af37]"
                  : "w-7 bg-gray-700 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}