"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words =
  "نحن صُنّاع المحتوى، حين يُصبح الحرف نبضًا، والمعرفة لوحةً تنبض بالحياة.";

const Hero = () => {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-5xl mx-auto p-4">
        <TextGenerateEffect words={words} as="h1" />

        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10"></p>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Hero;
