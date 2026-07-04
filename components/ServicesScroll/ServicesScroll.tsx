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
          end: () => `+=${totalMove + 1000}`,
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#080808] overflow-hidden"
    >
      {/* Heading */}

      <div className="max-w-[1600px] mx-auto px-20 pt-24">

        <div className="flex items-end justify-between">

          <div>

            <p
              className="
              uppercase
              tracking-[6px]
              text-[#d4af37]
              text-sm
              font-semibold
            "
            >
              Professional Services We Offer
            </p>

            <h2
              className="
              mt-6
              text-[50px]
              leading-none
              font-bold
              text-white
            "
            >
              Our Appliance Services
            </h2>

          </div>

          <div
            className="
            hidden
            lg:flex
            items-center
            gap-6
            mb-8
          "
          >
            <div className="w-24 h-px bg-[#444]" />

            <span
              className="
              uppercase
              tracking-[5px]
              text-gray-500
              text-sm
            "
            >
              Scroll To Explore
            </span>

          </div>

        </div>

      </div>

      {/* Horizontal Slider */}

      <div
        ref={sliderRef}
        className="
        flex
        gap-16
        mt-16
        px-20
        pb-32
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

    </section>
  );
}