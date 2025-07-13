import Image from "next/image";

import TransitionLink from "@/components/TransitionLink";

import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { BackgroundBeams } from "@/components/ui/background-beams";

import { fetchCMS } from "@/lib/cms";

import { AboutUsType } from "@/types/cms";

const AboutUs = async () => {
  const response = await fetchCMS<{ data: AboutUsType }>(
    "/about-us?populate[List][populate]=Text_Flip&populate=Apps"
  );

  const data = response.data;

  return (
    <section id="about-us" className="py-32 bg-slate-700/10">
      <div className="lg:flex max-w-7xl mx-auto relative z-10">
        <div className="ps-4 pe-8">
          <h2 className="text-white text-2xl md:text-5xl font-bold tracking-tight mb-4 md:mb-8">
            من نحن
          </h2>

          <div className="max-w-[23rem] mb-10 md:mb-14">
            <ul className="space-y-2">
              {data.List?.map((item, i) => {
                if (item.Text_Flip && item.Text_Flip.length > 0) {
                  const flipWords =
                    item.Text_Flip?.map((item) => item.Title) || [];

                  return (
                    <li
                      key={i}
                      className="flex lg:items-center max-lg:flex-col gap-2 lg:gap-4 mb-4"
                    >
                      <span>{item.Title}</span>
                      <ContainerTextFlip words={flipWords} />
                    </li>
                  );
                } else
                  return (
                    <li key={i} className="space-x-2">
                      <strong className="text-xl">{item.Title}</strong>{" "}
                      <span className="text-zinc-300 font-light">
                        {item.Description}
                      </span>
                    </li>
                  );
              })}
            </ul>

            <TransitionLink
              href="/"
              className="flex lg:justify-end items-center gap-2 mt-4 lg:mt-12 lg:me-16"
            >
              <Image src="logo/logo.svg" width={50} height={50} alt="Logo" />
              <span className="font-medium text-black dark:text-white">
                صناع المحتوى
              </span>
            </TransitionLink>
          </div>
        </div>

        <div className="xl:w-[38rem] mt-4">
          <p className="ps-4 pe-8 font-light md:text-2xl mb-4 text-zinc-400 md:mb-16 lg:mb-32 lg:w-[37rem] lg:mx-auto">
            {data.Description}
          </p>

          <div dir="ltr">
            <div className="relative left-1/2 flex w-[22rem] aspect-square border border-zinc-800/80 rounded-full -translate-x-1/2 scale-75 md:scale-100">
              <div className="flex w-60 aspect-square m-auto border border-zinc-800/80 rounded-full">
                <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-gradient-to-tr from-main-color-1 to-alt-color-1 rounded-full">
                  <TransitionLink
                    href="/"
                    className="flex justify-center items-center size-full bg-gradient-to-tr from-zinc-900 to-zinc-800 hover:from-zinc-800 hover:to-zinc-700 rounded-full relative z-10"
                  >
                    <Image
                      src="logo/logo.svg"
                      width={50}
                      height={50}
                      alt="Logo"
                    />
                  </TransitionLink>
                </div>
              </div>

              <ul>
                {data.Apps.map((app, i) => (
                  <li
                    key={i}
                    className="absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom"
                    style={{ transform: `rotate(${(i + 1) * 45}deg)` }}
                  >
                    <div
                      className="group/icon relative -top-[1.6rem] flex size-[3.2rem] bg-zinc-950 hover:bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700/80 rounded-xl overflow-hidden transition-colors duration-300"
                      style={{ transform: `rotate(-${(i + 1) * 45}deg)` }}
                    >
                      <Image
                        className="size-8 m-auto group-hover/icon:scale-[190%] group-hover/icon:rotate-12 transition-transform duration-300"
                        src={`${process.env.NEXT_PUBLIC_CMS_BASE_URL}${app.url}`}
                        width={32}
                        height={32}
                        alt={app.alternativeText || "App"}
                      />
                    </div>
                  </li>
                ))}
              </ul>

              <div className="hidden absolute top-1/2 left-full w-[10.125rem] -mt-1 ml-10 pointer-events-none xl:block">
                <Image
                  src="/curve-2.svg"
                  width={162}
                  height={76}
                  alt="Curve 2"
                />
              </div>

              <div className="hidden absolute top-1/2 right-full w-[24.6rem] -mt-1 mr-10 pointer-events-none xl:block">
                <Image
                  src="/curve-1.svg"
                  width={522}
                  height={182}
                  alt="Curve 1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </section>
  );
};

export default AboutUs;
