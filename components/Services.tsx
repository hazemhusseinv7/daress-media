"use client";

import React from "react";

import { motion } from "motion/react";

import { LampContainer } from "@/components/ui/lamp";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

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
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </section>
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
    className: "md:col-span-1",
    icon: <CgFileDocument className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "تعليق صوتي",
    description: <span className="text-sm">تعليق صوتي للمحتوى المعرفي</span>,
    className: "md:col-span-1",
    icon: <PiMicrophoneBold className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "كتابة سيناريو",
    description: <span className="text-sm">سيناريست لإخراج المحتوى</span>,
    className: "md:col-span-1",
    icon: <GrDocumentVideo className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "إخراج احترافي",
    description: <span className="text-sm">إخراج المحتوى (ثابت أو فيديو)</span>,
    className: "md:col-span-2",
    icon: <MdOutlineVideoLibrary className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Lorem ipsum",
    description: <span className="text-sm">Lorem ipsum</span>,
    className: "md:col-span-1",
    icon: <MdOutlineVideoLibrary className="h-4 w-4 text-neutral-500" />,
  },
];

export default Services;
