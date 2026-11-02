import { Hero } from "@/components/sections/Hero";
import { Servicios } from "@/components/sections/Servicios";
import { Stats } from "@/components/sections/Stats";
import { Testimonios } from "@/components/sections/Testimonios";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Servicios />
      <Stats />
      <Testimonios />
      <BlogPreview />
      <CTA />
    </>
  );
}
