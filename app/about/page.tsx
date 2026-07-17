import Hero from "@/components/about/Hero";
import Story from "@/components/about/Story";
import MissionVision from "@/components/about/MissionVision";
import WhyChoose from "@/components/about/WhyChoose";
import Stats from "@/components/about/Stats";
import Team from "@/components/about/Team";
import CTA from "@/components/about/CTA";

export default function AboutPage() {
  return (
    <main className="bg-[#F8FBFC]">
      <Hero />

      <Story />

      <MissionVision />

      <WhyChoose />

      <Stats />

      <Team />

      <CTA />
    </main>
  );
}
