import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

import { fetchCMS } from "@/lib/cms";

import { AboutUsType } from "@/types/cms";

const AboutUs = async () => {
  const response = await fetchCMS<{ data: AboutUsType }>(
    "/about-us?populate=Image"
  );

  const data = response.data;

  const words = "من نحن";

  return (
    <section id="about-us" className="py-20 bg-slate-700/10">
      <div className="mb-20">
        <TextGenerateEffect words={words} as="h2" className="mb-10" />

        {data.Description && (
          <TextGenerateEffect
            words={data.Description}
            className="max-w-64 md:max-w-2xl mx-auto"
            as="p"
          />
        )}
      </div>

      <MacbookScroll
        src={
          data.Image?.url
            ? `${process.env.NEXT_PUBLIC_CMS_BASE_URL}${data.Image?.url}`
            : undefined
        }
        showGradient={false}
      />
    </section>
  );
};

export default AboutUs;
