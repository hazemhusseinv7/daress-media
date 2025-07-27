export const dynamic = "force-dynamic";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

import { fetchCMS } from "@/lib/cms";

import { AboutUsType } from "@/types/cms";

const AboutUs = async () => {
  const response = await fetchCMS<{ data: AboutUsType }>(
    "/about-us?populate[List][populate]=Text_Flip&populate=Image"
  );

  const data = response.data;

  const words = "من نحن";

  return (
    <section id="about-us" className="py-20 bg-slate-700/10">
      <div className="flex flex-col gap-10 px-10   mb-20">
        <TextGenerateEffect words={words} as="h2" />

        {data.Description && (
          <TextGenerateEffect
            words={data.Description}
            className="max-w-100 md:max-w-2xl mx-auto"
            as="p"
          />
        )}

        <ul className="w-full max-w-100 md:max-w-xl mx-auto space-y-3 md:space-y-5">
          {data.List?.map((item, i) => {
            if (item.Text_Flip && item.Text_Flip.length > 0) {
              const flipWords = item.Text_Flip?.map((item) => item.Title) || [];

              return (
                <li
                  key={i}
                  className="w-full flex lg:items-center max-lg:flex-col gap-2 lg:gap-4 mb-4"
                >
                  <span>{item.Title}</span>
                  <ContainerTextFlip
                    words={flipWords}
                    className="bg-slate-900/90 border-slate-800 shadow-slate-700"
                  />
                </li>
              );
            } else
              return (
                <li key={i} className="md:inline-block space-x-2 md:me-5">
                  <strong className="text-xl">{item.Title}</strong>{" "}
                  <span className="text-zinc-300 font-light">
                    {item.Description}
                  </span>
                </li>
              );
          })}
        </ul>
      </div>

      <MacbookScroll
        src={`${process.env.NEXT_PUBLIC_CMS_BASE_URL}${data.Image?.url}`}
        alt={data.Image?.alternativeText}
        showGradient={false}
      />
    </section>
  );
};

export default AboutUs;
