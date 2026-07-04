"use client";

const brands = [
  "LG",
  "DAIKIN",
  "VOLTAS",
  "BLUE STAR",
  "CARRIER",
  "WHIRLPOOL",
  "PANASONIC",
  "GODREJ",
  "ONIDA",
  "BOSCH",
  "IFB",
  "KENT",
  "AQUAGUARD",
  "PUREIT",
  "LIVPURE",
  "AO SMITH",
  "EUREKA FORBES",
];

export default function SupportedBrands() {
  return (
    <section className="relative bg-black py-28 overflow-hidden">

      {/* Heading */}

      <div className="text-center mb-24">

        <p className="text-[#d4af37] uppercase tracking-[4px] text-sm font-medium">
          Trusted By Leading Brands
        </p>

        <h2 className="mt-4 text-3xl font-bold text-white">
          Supported <span className="text-[#d4af37]">Brands</span>
        </h2>

      </div>

      {/* Left Fade */}

      <div className="absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-black to-transparent"></div>

      {/* Right Fade */}

      <div className="absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-black to-transparent"></div>

      {/* Row 1 */}

      <div className="marquee">

        <div className="marquee-content">

          {[...brands, ...brands].map((brand, index) => (
            <span key={index} className="brand">
              {brand}
            </span>
          ))}

        </div>

      </div>

      {/* Row 2 */}

      <div className="marquee mt-16 reverse">

        <div className="marquee-content">

          {[...brands.reverse(), ...brands.reverse()].map((brand, index) => (
            <span key={index} className="brand">
              {brand}
            </span>
          ))}

        </div>

      </div>

    </section>
  );
}