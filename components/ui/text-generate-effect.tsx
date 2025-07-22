"use client";

import { useEffect } from "react";

import { motion, stagger, useAnimate } from "motion/react";

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
      <motion.span
        ref={scope}
        className={
          as === "p" ? "max-md:flex justify-start gap-1 flex-wrap" : undefined
        }
      >
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={
                as === "h1"
                  ? "relative z-10 py-2 text-2xl md:text-5xl lg:text-6xl leading-[1.2] lg:leading-[1.5] bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 text-center font-bold opacity-0"
                  : as === "h2"
                  ? "relative z-10 py-2 text-2xl md:text-4xl lg:text-5xl leading-[1.2] lg:leading-[1.3] bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 text-center font-bold opacity-0"
                  : "relative z-10 font-medium md:font-bold md:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 text-center opacity-0"
              }
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.span>
    );
  };

  return (
    <div className={className}>
      <div className="mt-4 text-center">
        {as === "h1" ? (
          <h1>{renderWords()}</h1>
        ) : as === "h2" ? (
          <h2>{renderWords()}</h2>
        ) : (
          <p>{renderWords()}</p>
        )}
      </div>
    </div>
  );
};
