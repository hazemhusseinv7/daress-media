"use client";

import { useEffect, useState } from "react";

import { Accordion, AccordionItem } from "@heroui/react";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import { PageType } from "@/types/cms";

import { AiOutlineLoading } from "react-icons/ai";

export default function Page() {
  const [data, setData] = useState<PageType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/frequently-asked-questions");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setData(data.data);
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

  const words = data?.Title;

  if (error) console.log(error);

  return (
    <main className="min-h-screen relative overflow-hidden bg-linear-to-t from-blue-700/10 to-blue-900/10 pb-80">
      {/* Gradients */}
      <div
        aria-hidden="true"
        className="flex absolute -top-96 start-1/2 transform -translate-x-1/2 rtl:translate-x-1/2"
      >
        <div className="bg-linear-to-r from-violet-300/50 to-purple-100 blur-3xl w-100 h-175 rotate-[-60deg] transform -translate-x-40 dark:from-violet-900/50 dark:to-purple-900" />
        <div className="bg-linear-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[1440px] h-200 rounded-fulls origin-top-left -rotate-12 -translate-x-60 dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70" />
      </div>
      {/* End Gradients */}

      {loading ? (
        <div
          id="services"
          className="relative mx-4 my-32 flex justify-center items-center min-h-[200px]"
        >
          <AiOutlineLoading className="size-7 text-main-color-2 animate-spin" />
        </div>
      ) : (
        <div className="mt-32">
          {/* Hero */}
          <div className="relative z-10 min-h-72 lg:min-h-[30rem]">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
              <div className="max-w-2xl text-center mx-auto">
                {/* Title */}
                <div className="mt-5 max-w-2xl">
                  <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
                    <TextGenerateEffect
                      words={words || "الأسئلة الشائعة"}
                      as="h1"
                    />
                  </h1>
                </div>
                {/* End Title */}
              </div>
            </div>
          </div>
          {/* End Hero */}

          <div className="relative">
            <Accordion
              className="text-start max-w-[70rem] mx-auto px-4 relative z-10"
              defaultExpandedKeys={["1"]}
              variant="splitted"
            >
              {data &&
                data.List.map((item, i) => (
                  <AccordionItem
                    className="bg-linear-to-r from-blue-800/10 to-blue-900/10"
                    key={i + 1}
                    aria-label={item.Title}
                    subtitle={item.Subtitle}
                    title={item.Title}
                  >
                    {item.Description}
                  </AccordionItem>
                ))}
            </Accordion>

            {/* Gradients */}
            <div
              aria-hidden="true"
              className="flex absolute top-40 bottom-0 start-1/2 transform -translate-x-1/2 rtl:translate-x-1/2"
            >
              <div className="bg-linear-to-r from-violet-300/50 to-purple-100 blur-3xl w-200 h-200 rotate-[-60deg] transform -translate-x-40 dark:from-violet-900/50 dark:to-purple-900" />
              <div className="bg-linear-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-200 h-200 rounded-fulls origin-top-left -rotate-12 -translate-x-60 dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70" />
            </div>
            {/* End Gradients */}
          </div>
        </div>
      )}
    </main>
  );
}
