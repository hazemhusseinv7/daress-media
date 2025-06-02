"use client";

import {
  Ref,
  forwardRef,
  useState,
  MouseEvent,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

import { useMotionTemplate, useMotionValue, motion } from "motion/react";

import { cn } from "@/lib/utils";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  as?: "input" | "textarea";
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, as = "input", ...props }, ref) => {
    const radius = 100; // change this to increase the rdaius of the hover effect
    const [visible, setVisible] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({
      currentTarget,
      clientX,
      clientY,
    }: MouseEvent<HTMLDivElement>) {
      const { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    const inputClasses = cn(
      `shadow-input dark:placeholder-text-neutral-600 flex w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600`,
      as === "input" ? "h-10" : "min-h-[100px]",
      className
    );

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          #3b82f6,
          transparent 80%
        )
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="group/input rounded-lg p-[2px] transition duration-300"
      >
        {as === "textarea" ? (
          <textarea
            className={inputClasses}
            ref={ref as Ref<HTMLTextAreaElement>}
            {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            type={type}
            className={inputClasses}
            ref={ref as Ref<HTMLInputElement>}
            {...props}
          />
        )}
      </motion.div>
    );
  }
);
Input.displayName = "Input";

export { Input };
