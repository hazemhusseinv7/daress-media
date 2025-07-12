"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { motion } from "motion/react";

import { LampContainer } from "@/components/ui/lamp";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";

import { ServicesType } from "@/types/cms";

import { cn } from "@/lib/utils";

import { AiOutlineLoading } from "react-icons/ai";

const Services = () => {
  const [cards, setCards] = useState<ServicesType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/services");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCards(data.data);
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Unknown error";
        console.error("Failed to fetch data:", message);
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section
        id="services"
        className="relative mx-4 my-32 flex justify-center items-center min-h-[200px]"
      >
        <AiOutlineLoading className="size-7 text-main-color-2 animate-spin" />
      </section>
    );
  }

  if (error || !cards?.Cards.length) return null;

  function getYouTubeEmbedUrl(url: string) {
    if (url.includes("/embed/")) return url;

    if (url.includes("youtube.com/watch?v=")) {
      return url.replace("youtube.com/watch?v=", "youtube.com/embed/");
    }

    if (url.includes("youtu.be/")) {
      return url.replace("youtu.be/", "youtube.com/embed/");
    }

    return url;
  }

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
          {cards.Cards.map((card, i) => {
            const hasMedia =
              (card.Youtube_Videos && card.Youtube_Videos.length > 0) ||
              (card.Audio_Files !== null && card.Audio_Files !== undefined);

            const mediaContent = hasMedia ? (
              <div className="flex flex-col gap-20">
                {card.Youtube_Videos && card.Youtube_Videos.length > 0 && (
                  <div className="flex flex-col gap-12 w-full max-w-2xl mx-auto">
                    {card.Youtube_Videos.map((video, i) => (
                      <div key={i} className="flex flex-col gap-4">
                        <h3 className="font-medium text-xl">{video.Title}</h3>
                        <iframe
                          className="w-full aspect-video rounded-lg"
                          src={getYouTubeEmbedUrl(video.URL)}
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {card.Audio_Files !== null &&
                  card.Audio_Files !== undefined && (
                    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
                      {card.Audio_Files.map((audio, i) => (
                        <audio key={i} controls className="w-full">
                          <source
                            src={`${process.env.NEXT_PUBLIC_CMS_BASE_URL}${audio.url}`}
                            type="audio/mpeg"
                          />
                        </audio>
                      ))}
                    </div>
                  )}
              </div>
            ) : null;

            const hasTextFlip = card.Text_Flip && card.Text_Flip.length > 0;
            const flipWords = card.Text_Flip?.map((item) => item.Title) || [];

            return (
              <BentoGridItem
                key={i}
                title={card.Title}
                description={
                  hasTextFlip ? (
                    <div className="space-x-2 text-sm group-hover/bento:text-main-color-2 transition-colors duration-200">
                      <span>{card.Title}</span>
                      <ContainerTextFlip
                        words={flipWords}
                        className="pt-1 pb-2 font-light group-hover/bento:dark:text-main-color-2 transition-colors duration-200"
                      />
                    </div>
                  ) : (
                    <span className="text-sm group-hover/bento:text-main-color-2 transition-colors duration-200">
                      {card.Description}
                    </span>
                  )
                }
                header={
                  <div className="w-full h-40 bg-gradient-to-tr from-indigo-700/10 to-violet-700/10 rounded-lg pt-4 group-hover/bento:from-indigo-700/20 group-hover/bento:to-violet-700/20">
                    <Image
                      className="size-full object-contain"
                      src={`${process.env.NEXT_PUBLIC_CMS_BASE_URL}${card.Image.url}`}
                      width={300}
                      height={300}
                      alt={card.Image.alternativeText || card.Title}
                    />
                  </div>
                }
                className={cn(
                  "[&>p:text-lg]",
                  i === 0 || i === cards.Cards.length - 1
                    ? "md:col-span-2"
                    : "md:col-span-1"
                )}
                icon={
                  <Image
                    src={`${process.env.NEXT_PUBLIC_CMS_BASE_URL}${card.Icon.url}`}
                    width={16}
                    height={16}
                    alt={card.Icon.alternativeText || card.Title}
                    className="size-4 text-neutral-500 group-hover/bento:text-main-color-2 transition-colors duration-200"
                  />
                }
                image={`${process.env.NEXT_PUBLIC_CMS_BASE_URL}${card.Image.url}`}
                button={hasMedia ? "التفاصيل" : undefined}
                content={mediaContent}
              />
            );
          })}
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

export default Services;
