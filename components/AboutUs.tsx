import Image from "next/image";

import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import Link from "next/link";

const AboutUs = () => {
  const programs = [
    {
      name: "Photoshop",
      icon: "/about-us/photoshop.svg",
    },
    {
      name: "Illustrator",
      icon: "/about-us/illustrator.svg",
    },
    {
      name: "Indesign",
      icon: "/about-us/indesign.svg",
    },
    {
      name: "After Effects",
      icon: "/about-us/after-effects.svg",
    },
    {
      name: "Premiere-pro",
      icon: "/about-us/premiere-pro.svg",
    },
    {
      name: "Animate",
      icon: "/about-us/animate.svg",
    },
    {
      name: "Audition",
      icon: "/about-us/audition.svg",
    },
    {
      name: "Figma",
      icon: "/about-us/figma.svg",
    },
  ];

  return (
    <section id="about-us" className="py-32">
      <div className="lg:flex max-w-7xl mx-auto">
        <div className="ps-4 pe-8">
          <h2 className="text-white text-2xl md:text-5xl font-bold tracking-tight mb-4 md:mb-8">
            من نحن
          </h2>

          <div className="max-w-[23rem] mb-10 md:mb-14">
            <div>
              <span className="me-4">نكتب في فضاءات:</span>
              <ContainerTextFlip
                words={[
                  "المعرفة العميقة",
                  "الأدب الراقي",
                  "التاريخ المتوهّج بأسراره",
                ]}
              />
            </div>
            <ul className="space-y-2">
              <li>
                <strong className="text-xl">نخطّ </strong>
                <span className="text-zinc-300 font-light">بأقلامٍ محترفة</span>
              </li>
              <li>
                <strong className="text-xl">وننثر </strong>
                <span className="text-zinc-300 font-light">الحرف بأسلوب شاعري</span>
              </li>
              <li>
                <strong className="text-xl">ونُخرج </strong>
                <span className="text-zinc-300 font-light">
                  الفكرة في أبهى حُللها الفنية
                </span>
              </li>
              <li>
                <strong className="text-xl">معنا </strong>
                <span className="text-zinc-300 font-light">
                  تتحول المعرفة إلى فنٍ يُدهشك، وتغدو الفكرة مشهدًا ساحرًا
                </span>
              </li>
              <li>
                <strong className="text-xl">كن جميلاً </strong>
                <span className="text-zinc-300 font-light">
                  في فكرتك، في أسلوبك، في رسالتك…
                </span>
              </li>
              <li>
                <strong className="text-xl">ترى الوجود جميلاً </strong>
                <span className="text-zinc-300 font-light">من حولك</span>
              </li>
            </ul>

            <Link
              href="/"
              className="flex lg:justify-end items-center gap-2 mt-4 lg:mt-[85px] lg:me-16"
            >
              <Image src="logo/logo.svg" width={50} height={50} alt="Logo" />
              <span className="font-medium text-black dark:text-white">
                صناع المحتوى
              </span>
            </Link>
          </div>
        </div>

        <div className="xl:w-[38rem] mt-4">
          <p className="ps-4 pe-8 font-light md:text-2xl mb-4 text-zinc-400 md:mb-16 lg:mb-32 lg:w-[27rem] lg:mx-auto">
            نحن صُنّاع المحتوى، حين يُصبح الحرف نبضًا، والمعرفة لوحةً تنبض
            بالحياة.
          </p>
          <div dir="ltr">
            <div className="relative left-1/2 flex w-[22rem] aspect-square border border-zinc-800/80 rounded-full -translate-x-1/2 scale-75 md:scale-100">
              <div className="flex w-60 aspect-square m-auto border border-zinc-800/80 rounded-full">
                <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-gradient-to-tr from-main-color-1 to-alt-color-1 rounded-full">
                  <div className="flex justify-center items-center size-full bg-gradient-to-tr from-zinc-900 to-zinc-800 rounded-full">
                    <Image
                      src="logo/logo.svg"
                      width={50}
                      height={50}
                      alt="Logo"
                    />
                  </div>
                </div>
              </div>

              <ul>
                {programs.map((program, i) => (
                  <li
                    key={i}
                    className="absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom"
                    style={{ transform: `rotate(${(i + 1) * 45}deg)` }}
                  >
                    <div
                      className="relative -top-[1.6rem] flex size-[3.2rem] bg-zinc-950 border border-zinc-800/80 rounded-xl"
                      style={{ transform: `rotate(-${(i + 1) * 45}deg)` }}
                    >
                      <Image
                        className="size-8 m-auto"
                        src={program.icon}
                        width={32}
                        height={32}
                        alt={program.name}
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
    </section>
  );
};

export default AboutUs;
