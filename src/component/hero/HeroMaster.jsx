import Hero from "@/component/hero/Hero";
import Marquee from "@/component/hero/Marquee";
import Navbar from "@/component/hero/Navbar";

export default function HeroMaster() {
  return (
    <section className="min-h-[100dvh] hide-cta flex flex-col">
      <Navbar />
      <Marquee />
      <Hero />
    </section>
  );
}
