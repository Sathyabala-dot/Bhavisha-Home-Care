"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

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
    }, 5000);

    return () => clearInterval(timer);
  }, [page]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),

    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },

    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section className="relative overflow-hidden bg-black py-20 lg:py-28">

      {/* Glow */}

      <div className="absolute inset-0 flex justify-center">

        <div
          className="
            h-[500px]
            w-[500px]
            lg:h-[750px]
            lg:w-[750px]
            rounded-full
            bg-[#d4af37]/5
            blur-[140px]
          "
        />

      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center"
        >

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
            WHAT OUR CUSTOMERS SAY
          </p>

          <h2
            className="
              mt-4
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              text-white
            "
          >
            Customer Reviews
          </h2>

        </motion.div>

        {/* Testimonial Card */}

        <div
          className="
            relative
            mt-14
            lg:mt-20
            min-h-[430px]
            lg:min-h-[360px]
          "
        >

          <AnimatePresence
            custom={direction}
            mode="wait"
          >

            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: .8,
              }}
              className="
                absolute
                inset-0
              "
            >

              <div
                className="
                  rounded-[30px]
                  border
                  border-[#2a2a2a]
                  bg-[#111111]
                  p-8
                  sm:p-10
                  lg:p-14
                  backdrop-blur-xl
                  shadow-[0_25px_60px_rgba(0,0,0,.45)]
                "
              >

                {/* Quote */}

                <Quote
                  size={42}
                  className="text-[#d4af37] mb-8"
                />

                {/* Stars */}

                <div className="flex justify-center gap-2 mb-8">

                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-[#d4af37] text-[#d4af37]"
                    />
                  ))}

                </div>
                                {/* Review */}

                <p
                  className="
                    mx-auto
                    max-w-4xl
                    text-center
                    italic
                    text-gray-200
                    text-base
                    sm:text-lg
                    lg:text-2xl
                    leading-8
                    lg:leading-10
                  "
                >
                  "{testimonials[page].review}"
                </p>

                {/* Customer */}

                <div className="mt-12 flex flex-col items-center">

                  {/* Avatar */}

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#d4af37]
                      bg-[#1a1a1a]
                      text-xl
                      font-bold
                      text-[#d4af37]
                    "
                  >
                    {testimonials[page].name.charAt(0)}
                  </div>

                  <h3
                    className="
                      mt-5
                      text-xl
                      font-bold
                      text-white
                    "
                  >
                    {testimonials[page].name}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      sm:text-base
                      text-gray-400
                    "
                  >
                    {testimonials[page].location}
                  </p>

                </div>

              </div>

            </motion.div>

          </AnimatePresence>

        </div>

        {/* Navigation Dots */}

        <div
          className="
            mt-10
            flex
            justify-center
            gap-3
          "
        >
          {testimonials.map((_, index) => (

            <button
              key={index}
              onClick={() =>
                setPage([
                  index,
                  index > page ? 1 : -1,
                ])
              }
              aria-label={`Go to testimonial ${index + 1}`}
              className={`
                transition-all
                duration-500
                rounded-full

                ${
                  page === index
                    ? "w-12 h-3 bg-[#d4af37]"
                    : "w-3 h-3 bg-[#444] hover:bg-[#777]"
                }
              `}
            />

          ))}
        </div>

      </div>

    </section>
  );
}