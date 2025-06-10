"use client";

import Image from "next/image";

import { motion } from "motion/react";

import { LampContainer } from "@/components/ui/lamp";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";

import { CgFileDocument } from "react-icons/cg";
import { PiMicrophoneBold } from "react-icons/pi";
import { GrDocumentVideo } from "react-icons/gr";
import { MdOutlineVideoLibrary } from "react-icons/md";

import { cn } from "@/lib/utils";

const Services = () => {
  return (
    <section
      id="services"
      className="pb-80 bg-slate-950 relative overflow-hidden"
    >
      <LampContainer>
        <motion.h2
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center font-medium text-5xl md:text-7xl tracking-tight text-transparent"
        >
          <div className="flex justify-center gap-1 text-white text-2xl md:text-5xl font-bold tracking-tight">
            خدمات
            <PointerHighlight>
              <span>صناعة المحتوى</span>
            </PointerHighlight>
          </div>
        </motion.h2>
      </LampContainer>

      <div className="relative">
        <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[20rem] px-4 relative z-10">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={cn("[&>p:text-lg]", item.className)}
              icon={item.icon}
              image={item.image}
              button={item.button}
              content={item.content}
            />
          ))}
        </BentoGrid>

        {/* Gradients */}
        <div
          aria-hidden="true"
          className="flex absolute top-20 bottom-0 start-1/2 transform -translate-x-1/2 rtl:translate-x-1/2"
        >
          <div className="bg-linear-to-r from-violet-300/50 to-purple-100 blur-3xl w-120 h-120 rotate-[-60deg] transform translate-x-20 dark:from-violet-900/50 dark:to-purple-900" />
          <div className="bg-linear-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-120 h-120 rounded-fulls origin-top-left -rotate-12 -translate-x-40 dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70" />
        </div>
        {/* End Gradients */}
      </div>
    </section>
  );
};

const SkeletonOne = () => {
  return (
    <div className="w-full h-40 bg-gradient-to-tr from-indigo-700/10 to-violet-700/10 rounded-lg pt-4 group-hover/bento:from-indigo-700/20 group-hover/bento:to-violet-700/20">
      <Image
        className="size-full object-contain"
        src="/services/service-1.svg"
        width={300}
        height={300}
        alt="Service Image"
      />
    </div>
  );
};
const SkeletonTwo = () => {
  return (
    <div className="w-full h-40 bg-gradient-to-tr from-indigo-700/10 to-violet-700/10 rounded-lg pt-4 group-hover/bento:from-indigo-700/20 group-hover/bento:to-violet-700/20">
      <Image
        className="size-full object-contain"
        src="/services/service-2.svg"
        width={300}
        height={300}
        alt="Service Image"
      />
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div className="w-full h-40 bg-gradient-to-tr from-indigo-700/10 to-violet-700/10 rounded-lg pt-4 group-hover/bento:from-indigo-700/20 group-hover/bento:to-violet-700/20">
      <Image
        className="size-full object-contain"
        src="/services/service-3.svg"
        width={300}
        height={300}
        alt="Service Image"
      />
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div className="w-full h-40 bg-gradient-to-tr from-indigo-700/10 to-violet-700/10 rounded-lg pt-4 group-hover/bento:from-indigo-700/20 group-hover/bento:to-violet-700/20">
      <Image
        className="size-full object-contain"
        src="/services/service-4.svg"
        width={300}
        height={300}
        alt="Service Image"
      />
    </div>
  );
};

const items = [
  {
    title: "إعداد المحتوى",
    description: (
      <span className="text-sm group-hover/bento:text-main-color-2 transition-colors duration-200">
        إعداد محتوى معرفي في اي مجال مختصر أو مطول
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-2",
    icon: (
      <CgFileDocument className="size-4 text-neutral-500 group-hover/bento:text-main-color-2 transition-colors duration-200" />
    ),
    image: "/services/service-1.svg",
    button: "التفاصيل",
    content: "motion graphics",
  },

  {
    title: "كتابة سيناريو",
    description: (
      <span className="text-sm group-hover/bento:text-main-color-2 transition-colors duration-200">
        سيناريست لإخراج المحتوى
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: (
      <GrDocumentVideo className="size-4 text-neutral-500 group-hover/bento:text-main-color-2 transition-colors duration-200" />
    ),
    image: "/services/service-2.svg",
  },
  {
    title: "إخراج احترافي",
    description: (
      <div className="space-x-2 text-sm group-hover/bento:text-main-color-2 transition-colors duration-200">
        <span>إخراج المحتوى</span>
        <ContainerTextFlip
          words={["ثابت ", "فيديو"]}
          className="pt-1 pb-2 font-light group-hover/bento:dark:text-main-color-2 transition-colors duration-200"
        />
      </div>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: (
      <MdOutlineVideoLibrary className="size-4 text-neutral-500 group-hover/bento:text-main-color-2 transition-colors duration-200" />
    ),
    image: "/services/service-3.svg",
  },
  {
    title: "تعليق صوتي",
    description: (
      <span className="text-sm group-hover/bento:text-main-color-2 transition-colors duration-200">
        تعليق صوتي للمحتوى المعرفي
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: (
      <PiMicrophoneBold className="size-4 text-neutral-500 group-hover/bento:text-main-color-2 transition-colors duration-200" />
    ),
    image: "/services/service-4.svg",
    button: "التفاصيل",
    content: "voice over",
  },
];

export default Services;
