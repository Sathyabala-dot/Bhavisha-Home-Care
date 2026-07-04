"use client";

export default function WhyChooseUs() {
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

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/trust-bg.png')", // Your background image
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Content */}
      <div className="relative z-10">

        {/* Top Stats */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">

            {stats.map((item, index) => (
              <div
                key={index}
                className="py-14 text-center"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  {item.value}
                </h2>

                <p className="mt-5 uppercase tracking-[4px] text-[#d4af37] text-sm font-semibold">
                  {item.label}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* Bottom Section */}

        <div className="max-w-3xl mx-auto text-center py-28 px-6">

          <div className="flex justify-center items-center gap-5">

            <div className="w-12 h-[2px] bg-[#d4af37]" />

            <p className="uppercase tracking-[5px] text-[#d4af37] text-sm font-semibold">
              Why Trust Us
            </p>

            <div className="w-12 h-[2px] bg-[#d4af37]" />

          </div>

          <h2 className="mt-8 text-4xl md:text-5xl font-bold leading-tight text-white">
            The Standard of{" "}
            <span className="text-[#d4af37]">
              Excellence.
            </span>
          </h2>

          <p className="mt-10 text-xl leading-10 text-gray-300 max-w-4xl mx-auto">
            We don't just fix appliances; we restore your home's harmony.
            Here is why thousands of households across Chennai trust us
            with their most valuable electronics.
          </p>

        </div>

      </div>
    </section>
  );
}