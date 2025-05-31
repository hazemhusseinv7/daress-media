import Link from "next/link";
import Image from "next/image";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import { GoChevronLeft } from "react-icons/go";

export default function page() {
  const words = "المدونة";

  const blogPosts = [
    {
      title: "عنوان المقال",
      image: "/logo/logo.svg",
      link: "/blog/blog-1",
    },
    {
      title: "عنوان المقال",
      image: "/logo/logo.svg",
      link: "/blog/blog-2",
    },
    {
      title: "عنوان المقال",
      image: "/logo/logo.svg",
      link: "/blog/blog-2",
    },
  ];

  return (
    <main className="relative overflow-hidden">
      {/* Gradients */}
      <div
        aria-hidden="true"
        className="flex absolute -top-96 start-1/2 transform -translate-x-1/2 rtl:translate-x-1/2"
      >
        <div className="bg-linear-to-r from-violet-300/50 to-purple-100 blur-3xl w-100 h-175 rotate-[-60deg] transform -translate-x-40 dark:from-violet-900/50 dark:to-purple-900"></div>
        <div className="bg-linear-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[1440px] h-200 rounded-fulls origin-top-left -rotate-12 -translate-x-60 dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            // Card
            <Link
              key={i}
              className="group hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 rounded-xl p-5 transition dark:hover:bg-white/10 dark:focus:bg-white/10"
              href={post.link || "#"}
            >
              <div className="w-full aspect-16/10">
                <Image
                  className="size-full object-cover rounded-xl"
                  src={post.image}
                  width={400}
                  height={300}
                  alt="Blog Image"
                />
              </div>
              <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                {post.title}
              </h3>
              <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
                اقرأ المزيد
                <GoChevronLeft className="shrink-0 size-4 transition ease-in-out group-hover:-translate-x-1 group-focus:-translate-x-1" />
              </p>
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
