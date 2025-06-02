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
    <section id="services" className="-mb-80 px-4 pb-80 bg-slate-950">
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

      <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[20rem]">
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
    </section>
  );
};

const SkeletonOne = () => {
  return (
    <div className="w-full h-40 bg-gradient-to-tr from-zinc-800/50 to-zinc-900/80 rounded-lg pt-4 group-hover/bento:from-zinc-800 group-hover/bento:to-zinc-900">
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
    <div className="w-full h-40 bg-gradient-to-tr from-zinc-800/50 to-zinc-900/80 rounded-lg pt-4 group-hover/bento:from-zinc-800 group-hover/bento:to-zinc-900">
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
    <div className="w-full h-40 bg-gradient-to-tr from-zinc-800/50 to-zinc-900/80 rounded-lg pt-4 group-hover/bento:from-zinc-800 group-hover/bento:to-zinc-900">
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
    <div className="w-full h-40 bg-gradient-to-tr from-zinc-800/50 to-zinc-900/80 rounded-lg pt-4 group-hover/bento:from-zinc-800 group-hover/bento:to-zinc-900">
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
      <span className="text-sm">
        إعداد محتوى معرفي في اي مجال مختصر أو مطول
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-2",
    icon: <CgFileDocument className="size-4 text-neutral-500" />,
    image: "/services/service-1.svg",
    button: "التفاصيل",
    content: "motion graphics",
  },

  {
    title: "كتابة سيناريو",
    description: <span className="text-sm">سيناريست لإخراج المحتوى</span>,
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <GrDocumentVideo className="size-4 text-neutral-500" />,
    image: "/services/service-2.svg",
  },
  {
    title: "إخراج احترافي",
    description: (
      <div className="space-x-2 text-sm">
        <span>إخراج المحتوى</span>
        <ContainerTextFlip
          words={["ثابت ", "فيديو"]}
          className="pt-1 pb-2 font-light"
        />
      </div>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <MdOutlineVideoLibrary className="size-4 text-neutral-500" />,
    image: "/services/service-3.svg",
  },
  {
    title: "تعليق صوتي",
    description: <span className="text-sm">تعليق صوتي للمحتوى المعرفي</span>,
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <PiMicrophoneBold className="size-4 text-neutral-500" />,
    image: "/services/service-4.svg",
    button: "التفاصيل",
    content: "voice over",
  },
];

export default Services;
