"use client";

import { useEffect } from "react";

import { motion, stagger, useAnimate } from "motion/react";

import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  as,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  as?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [animate, duration, filter]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={
                as === "h1"
                  ? "relative z-10 text-2xl md:text-5xl leading-[1.2] bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-bold opacity-0"
                  : "dark:text-white text-black opacity-0"
              }
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        {as === "h1" ? (
          <h1 className="relative z-10 text-2xl md:text-5xl leading-[1.5] bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-bold">
            {renderWords()}
          </h1>
        ) : (
          <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
            {renderWords()}
          </div>
        )}
      </div>
    </div>
  );
};
