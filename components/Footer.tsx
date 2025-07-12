"use client";

import Image from "next/image";
import Link from "next/link";

import { SparklesCore } from "@/components/ui/sparkles";

import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaCopyright,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  const footerLists = [
    {
      title: "الشركة",
      items: [
        { name: "خدماتنا", link: "/#services" },
        { name: "من نحن", link: "/#about-us" },
        { name: "المدونة", link: "/blog" },
        { name: "تواصل معنا", link: "/contact-us" },
      ],
    },
    {
      title: "القوانين",
      items: [
        { name: "الشروط والأحكام", link: "/terms-and-conditions" },
        { name: "سياسة الخصوصية", link: "/privacy-policy" },
        { name: "الأسئلة الشائعة", link: "/frequently-asked-questions" },
      ],
    },
  ];

  const socialMedia = [
    {
      name: "Twitter",
      icon: FaXTwitter,
      link: process.env.NEXT_PUBLIC_TWITTER,
    },
    {
      name: "Facebook",
      icon: FaFacebook,
      link: process.env.NEXT_PUBLIC_FACEBOOK,
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      link: process.env.NEXT_PUBLIC_INSTAGRAM,
    },
    {
      name: "Whatsapp",
      icon: FaWhatsapp,
      link: process.env.NEXT_PUBLIC_WHATSAPP,
    },
    {
      name: "Youtube",
      icon: FaYoutube,
      link: process.env.NEXT_PUBLIC_YOUTUBE,
    },
  ];

  return (
    <footer className="relative w-full bg-linear-to-t from-violet-700/20 via-black to-black">
      <div className="absolute -top-[37px] md:-top-[72px] lg:-top-[128px] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
        <span className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
          صناع المحتوى
        </span>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
        </div>
      </div>

      <div className="relative mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div className="col-span-full lg:col-span-1">
            <Link
              className="flex-none text-xl font-semibold text-white focus:outline-hidden focus:opacity-80"
              href="/"
              aria-label="Logo"
            >
              <Image src="/logo/logo.svg" alt="Logo" width={50} height={50} />
              <span className="font-medium text-black dark:text-white">
                صناع المحتوى
              </span>
            </Link>
          </div>
          {/* End Col */}
          {footerLists.map((list, i) => (
            <div key={i} className="col-span-1">
              <span className="font-semibold text-gray-100">{list.title}</span>

              <div className="mt-3 grid space-y-3">
                {list.items.map((item, i) => (
                  <span key={i}>
                    <Link
                      className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-hidden focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                      href={item.link || "#"}
                    >
                      {item.name}
                    </Link>
                  </span>
                ))}
              </div>
            </div>
            // End Col
          ))}
        </div>
        {/* End Grid */}

        <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
          <div className="flex flex-wrap justify-between items-center gap-2">
            <span className="flex items-center gap-1 text-sm text-gray-400 dark:text-neutral-400">
              <FaCopyright />
              {new Date().getFullYear()}
              <span>
                <Link
                  href="/"
                  className="hover:text-neutral-200 transition-colors duration-300"
                >
                  صناع المحتوى
                </Link>
                .
              </span>
              جميع الحقوق محفوظة.
            </span>
          </div>
          {/* End Col */}

          {/* Social Brands */}
          <div>
            {socialMedia.map((item, i) => (
              <Link
                key={i}
                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-hidden focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                href={item.link || "#"}
                aria-label={item.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <item.icon className="shrink-0 size-4" />
              </Link>
            ))}
          </div>
          {/* End Social Brands */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
