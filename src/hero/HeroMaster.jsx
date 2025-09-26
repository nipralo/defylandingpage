import Hero from "@/hero/Hero";
import Marquee from "@/hero/Marquee";
import Navbar from "@/hero/Navbar";

export default function HeroMaster() {
  return (
    <section className="min-h-[100dvh] hide-cta">
      <Navbar />
      <Marquee />
      <Hero />
    </section>
  );
}
