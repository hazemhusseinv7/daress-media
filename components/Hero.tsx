"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from "next/link";

import { GoChevronLeft } from "react-icons/go";

const words =
  "نحن صُنّاع المحتوى، حين يُصبح الحرف نبضًا، والمعرفة لوحةً تنبض بالحياة.";

const Hero = () => {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="flex flex-col justify-center gap-4 max-w-5xl mx-auto p-4">
        <TextGenerateEffect words={words} as="h1" />

        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10"></p>

        <Link
          href="/#services"
          className="mx-auto bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm font-semibold leading-6 text-white inline-block"
        >
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex justify-center items-center space-x-2 z-10 rounded-full bg-zinc-950 px-10 py-2 ring-1 ring-white/10 ">
            <span>خدماتنا</span>
            <GoChevronLeft />
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-main-color-2/90 to-main-color-2/0 transition-opacity duration-500 group-hover:opacity-40" />
        </Link>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Hero;
