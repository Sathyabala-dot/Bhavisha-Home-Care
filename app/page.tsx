"use client";


import { useState } from "react";
import { motion } from "framer-motion";
import Preloader from "@/components/Preloader";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FloatingContact from "@/components/FloatingContact";
import Features from "@/components/Features";
import ExtremePerformance from "@/components/ExtremePerformance";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhyChooseCards from "@/components/WhyChooseCards";
import ServicesScroll from "@/components/ServicesScroll/ServicesScroll";
import SupportedBrands from "@/components/SupportedBrands";
import IssuesSection from "@/components/IssuesSection";
import WorkProcess from "@/components/WorkProcess";
import Testimonials from "@/components/Testimonials";
import ContactInfo from "@/components/contact/ContactInfo";
import GoogleMap from "@/components/contact/GoogleMap";
import Submit from "@/components/contact/Submit";
import Footer from "@/components/contact/Footer";

  
export default function Home() {
   const [loading, setLoading] = useState(true);

    if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />;
  }

  return (
    <motion.main
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
  }}
  className="bg-[#050505] text-white overflow-x-hidden"
>
      <Navbar />
      <section id="home">
        <Hero />
      </section>

      <FloatingContact />

      <section id="features">
        <Features />
      </section>

      <section id="technology">
        <ExtremePerformance />
      </section>

      <section id="about">
        <WhyChooseUs />
      </section>

        <section id="why-choose-us">
        <WhyChooseCards />
      </section>

       <section id="services">
        <ServicesScroll />
      </section>

      <section id="brands">
        <SupportedBrands />
      </section>

      <section id="issues">
        <IssuesSection />
      </section>

       <section id="work-process">
        <WorkProcess />
      </section>

       <section id="testimonials">
        <Testimonials />
      </section>
     



      {/* Contact Section */}
      <section
        id="contact"
        className="relative bg-black py-24 px-6 lg:px-10"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#d4af37]/10 blur-[180px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold">
              Connect With Us
            </h2>

            <div className="mt-5 flex justify-center">
              <div className="w-24 h-1 bg-[#d4af37] rounded-full"></div>
            </div>

            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Our experts are available 7 days a week.
              Schedule your service or reach us through phone,
              email or WhatsApp.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-10">
              <ContactInfo />
              <GoogleMap />
            </div>

            <Submit />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </motion.main>
  );
}

