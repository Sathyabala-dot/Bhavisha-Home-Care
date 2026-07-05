"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ServiceCard from "./ServiceCard";
import { services } from "./services";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (window.innerWidth < 1024) return;

    const section = sectionRef.current;
    const slider = sliderRef.current;

    if (!section || !slider) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.refresh();

      const totalMove = slider.scrollWidth - window.innerWidth;

      gsap.to(slider, {
        x: -totalMove,
        ease: "none",

        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalMove + 800}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#080808] py-20 lg:py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-[#d4af37]/5 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#d4af37]/5 blur-[140px]" />

      <div className="relative z-10">

        {/* Heading */}

        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:items-end lg:px-12">

          <div>

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
              Professional Services
            </p>

            <h2
              className="
                mt-4
                text-4xl
                sm:text-3xl
                lg:text-5xl
                font-bold
                text-white
              "
            >
              Our Appliance Services
            </h2>

            <p
              className="
                mt-5
                max-w-xl
                text-gray-400
                text-base
                sm:text-lg
              "
            >
              Premium repair and installation services for all major
              home appliances with certified technicians and genuine
              spare parts.
            </p>

          </div>

          <div className="hidden lg:flex items-center gap-4">

            <div className="h-px w-20 bg-[#555]" />

            <span className="text-xs uppercase tracking-[4px] text-gray-500">
              Scroll To Explore
            </span>

          </div>

        </div>

        {/* Desktop Horizontal Scroll */}

      <div
  ref={sliderRef}
  className="
    mt-14
    hidden
    lg:flex
    gap-6
    px-8
    pr-24
    pb-16
    will-change-transform
  "
>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>

        {/* Mobile / Tablet Grid */}

        <div
          className="
            mt-12
            grid
           grid-cols-1
gap-8

px-4
sm:px-8

md:grid-cols-2

max-w-7xl
mx-auto

lg:hidden
          "
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>

      </div>
    </section>
  );
}