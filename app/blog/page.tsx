import Image from "next/image";
import Link from "next/link";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import { fetchCMS } from "@/lib/cms";

import { BlogType } from "@/types/cms";

import { GoChevronLeft } from "react-icons/go";

export default async function page() {
  const response = await fetchCMS<{ data: BlogType[] }>(
    `/blogs?populate=Category&populate=Image`
  );

  const posts = response.data || [];

  const words = "المدونة";

  return (
    <main className="relative overflow-hidden bg-gradient-to-t from-blue-700/10 to-blue-900/10 pb-80">
      {/* Gradients */}
      <div
        aria-hidden="true"
        className="flex absolute -top-96 start-1/2 transform -translate-x-1/2 rtl:translate-x-1/2"
      >
        <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-100 h-175 rotate-[-60deg] transform -translate-x-40 dark:from-violet-900/50 dark:to-purple-900" />
        <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[1440px] h-200 rounded-fulls origin-top-left -rotate-12 -translate-x-60 dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70" />
      </div>
      {/* End Gradients */}

      {/* Hero */}
      <div className="relative z-10 min-h-72 lg:min-h-[30rem]">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="max-w-2xl text-center mx-auto">
            {/* Title */}
            <div className="mt-32 max-w-2xl">
              <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
                <TextGenerateEffect words={words} as="h1" />
              </h1>
            </div>
            {/* End Title */}
          </div>
        </div>
      </div>
      {/* End Hero */}

      {/* Card Blog */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="grid group/grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            // Card
            <Link
              key={i}
              className="group/card hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 rounded-xl p-5 transition dark:bg-white/10 dark:hover:bg-white/15 dark:focus:bg-white/10 group-hover/grid:opacity-50 hover:!opacity-100"
              href={`/blog/${post.Slug}`}
            >
              <div className="w-full aspect-16/10">
                <Image
                  className="size-full object-cover rounded-xl"
                  src={`${process.env.NEXT_PUBLIC_CMS_BASE_URL}${post.Image.url}`}
                  width={400}
                  height={300}
                  alt={post.Image.alternativeText || "Blog Image"}
                />
              </div>
              <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white transition-all duration-300 group-hover/card:dark:text-main-color-1">
                {post.Title}
              </h3>
              <span className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200 transition-all duration-300 group-hover/card:dark:text-main-color-1 group-hover/card:animate-pulse">
                اقرأ المزيد
                <GoChevronLeft className="shrink-0 size-4 transition ease-in-out group-hover/card:-translate-x-1 group-focus/card:-translate-x-1" />
              </span>
            </Link>
            // End Card
          ))}
        </div>
        {/* End Grid */}
      </div>
      {/* End Card Blog */}
    </main>
  );
}
