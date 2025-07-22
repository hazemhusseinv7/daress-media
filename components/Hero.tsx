"use client";

import Link from "next/link";
import Image from "next/image";

import { useEffect } from "react";

import { animate, motion } from "motion/react";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

import { cn } from "@/lib/utils";

import { GoChevronLeft } from "react-icons/go";

const words =
  "نحن صُنّاع المحتوى، حين يُصبح الحرف نبضاً، والمعرفة لوحةً تنبض بالحياة.";

const Hero = () => {
  return (
    <section className="h-[90vh] lg:h-screen w-full flex flex-col items-center justify-center">
      <BackgroundBeamsWithCollision>
        <div className="flex flex-col justify-center max-w-5xl lg:max-w-5xl mx-auto p-4 mt-40">
          <TextGenerateEffect words={words} as="h1" className="mb-14" />

          <Link
            href="/#services"
            className="group mx-auto bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm font-semibold leading-6 text-white inline-block"
          >
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex justify-center items-center space-x-2 z-10 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 px-10 py-2 ring-1 ring-white/10 ">
              <span>خدماتنا</span>
              <GoChevronLeft className="group-hover:-translate-x-2 transition-transform duration-500" />
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-main-color-2/90 to-main-color-2/0 transition-opacity duration-500 group-hover:opacity-40" />
          </Link>

          <CardSkeletonContainer>
            <Skeleton />
          </CardSkeletonContainer>
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
};

export default Hero;

const Skeleton = () => {
  useEffect(() => {
    const scale = [1, 1.1, 1];
    const transform = [
      "translateY(0px)",
      "translateY(-4px)",
      "translateY(0px)",
    ];
    const sequence = [
      [
        ".circle-1",
        {
          scale,
          transform,
        },
        { duration: 0.8 },
      ],
      [
        ".circle-2",
        {
          scale,
          transform,
        },
        { duration: 0.8 },
      ],
      [
        ".circle-3",
        {
          scale,
          transform,
        },
        { duration: 0.8 },
      ],
      [
        ".circle-4",
        {
          scale,
          transform,
        },
        { duration: 0.8 },
      ],
      [
        ".circle-5",
        {
          scale,
          transform,
        },
        { duration: 0.8 },
      ],
    ];

    animate(sequence, {
      // @ts-expect-error Skip
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);

  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row shrink-0 justify-center items-center gap-2">
        <Container className="size-8 circle-1">
          <Image
            src="/about-us/animate.svg"
            width={16}
            height={16}
            alt="Animate"
            className="size-4"
          />
        </Container>
        <Container className="size-12 circle-2">
          <Image
            src="/about-us/premiere-pro.svg"
            width={32}
            height={32}
            alt="Premiere Pro"
            className="size-6"
          />
        </Container>
        <Container className="circle-3">
          <Image
            src="/about-us/photoshop.svg"
            width={24}
            height={24}
            alt="Photoshop"
            className="size-8"
          />
        </Container>
        <Container className="size-12 circle-4">
          <Image
            src="/about-us/after-effects.svg"
            width={32}
            height={32}
            alt="After Effects"
            className="size-6"
          />
        </Container>
        <Container className="size-8 circle-5">
          <Image
            src="/about-us/audition.svg"
            width={16}
            height={16}
            alt="Audition"
            className="size-4"
          />
        </Container>
      </div>

      <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};
const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        ></motion.span>
      ))}
    </div>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[15rem] md:h-[20rem] rounded-xl z-40",
        className,
        showGradient &&
          "bg-neutral-300 dark:bg-indigo-900/20 [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `size-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};
