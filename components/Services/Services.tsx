import SectionHeading from "../common/SectionHeading";
import ServiceCard from "./ServiceCard";
import { services } from "./servicesData";

export default function Services() {
  return (
    <section className="relative py-28 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.08),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.06),transparent_35%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="Our Services"
          title="Premium Repair Services"
          description="Reliable home appliance repair delivered by certified professionals using genuine spare parts and premium service standards."
        />

        <div className="grid lg:grid-cols-2 gap-10">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}