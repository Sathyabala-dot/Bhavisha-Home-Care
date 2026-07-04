import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <main className="bg-[#050505] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
    </main>
  );
}