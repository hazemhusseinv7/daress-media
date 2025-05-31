"use client";

import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";

import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <>
      <Hero />

      <TracingBeam className="relative overflow-hidden">
        <AboutUs />
      </TracingBeam>
      <Services />
    </>
  );
}
