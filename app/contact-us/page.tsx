"use client";

import { FormEvent, useState } from "react";

import Link from "next/link";

import { AnimatePresence, motion } from "motion/react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";
import { CircleArrowRight } from "lucide-react";

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
];

export default function Page() {
  const [hovered, setHover] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <main className="relative overflow-hidden bg-linear-to-bl from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent pb-80">
      <div className="mt-32">
        {/* Hero */}
        <div>
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* Grid */}
            <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <p className="inline-block text-sm font-medium bg-clip-text bg-linear-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                  لديك استفسار؟
                </p>

                {/* Title */}
                <div className="mt-4 md:mb-12 max-w-2xl">
                  <h1 className="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl dark:text-neutral-200">
                    تواصل معنا الآن
                  </h1>
                  <p className="text-gray-600 dark:text-neutral-400">
                    هل لديك فكرة إبداعية تريد تحويلها إلى واقع؟ فريقنا المتخصص
                    في الرسوم المتحركة وإنشاء المحتوى جاهز لمساعدتك. تواصل معنا
                    اليوم لمناقشة مشروعك، وسنعمل معك لتحقيق رؤيتك بأعلى معايير
                    الجودة والإبداع. نقدم حلولًا مخصصة تناسب احتياجاتك بدءًا من
                    الفيديوهات الترويجية ووصولاً إلى المحتوى التفاعلي. املأ
                    النموذج وسنرد عليك في أسرع وقت ممكن.
                  </p>
                </div>
                {/* End Title */}

                <div className="flex flex-wrap justify-start gap-4 mt-10">
                  {socialMedia.map((item, i) => (
                    <Link
                      key={i}
                      href={item.link || "#"}
                      aria-label={item.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-w-[140px] flex bg-gradient-to-br from-gray-500 hover:from-gray-400 to-50% to-neutral-900 p-px rounded-md overflow-hidden"
                      onMouseEnter={() => setHover(item.name)}
                      onMouseLeave={() => setHover("")}
                    >
                      <div className="w-full flex justify-center items-center text-white bg-gradient-to-br from-neutral-900/60 from-35% to-white/5 py-1.5 px-2 md:py-2 md:px-3 rounded-[11px]">
                        <AnimatePresence initial={false}>
                          {hovered !== item.name && (
                            <motion.div
                              key={item.name}
                              initial={{ x: 80, width: 0 }}
                              animate={{ x: 0, width: 20 }}
                              exit={{ x: 80, width: 0 }}
                              transition={{ duration: 0.4 }}
                              className="h-5 flex items-center"
                            >
                              <item.icon />
                            </motion.div>
                          )}
                        </AnimatePresence>
                        <p className="text-xs font-medium capitalize px-2">
                          {item.name}
                        </p>
                        <AnimatePresence>
                          {hovered === item.name && (
                            <motion.div
                              key="circle-arrow"
                              initial={{ x: -80, width: 0 }}
                              animate={{ x: 0, width: 20 }}
                              exit={{ x: -80, width: 0 }}
                              transition={{ duration: 0.4 }}
                              className="h-4 flex items-center"
                            >
                              <CircleArrowRight className="size-4" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              {/* End Col */}

              <div className="mx-auto w-full max-w-lg rounded-none p-4 md:rounded-2xl md:p-8 bg-gradient-to-tr from-zinc-950/0 to-zinc-950 border border-zinc-900 shadow-2xl shadow-zinc-900/70">
                <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                  تواصل معنا
                </h2>

                <form className="mt-8" onSubmit={handleSubmit}>
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="firstname">الإسم</Label>
                    <Input id="name" placeholder="الإسم" type="text" required />
                  </LabelInputContainer>

                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">البريد الإلكترونى</Label>
                    <Input
                      id="email"
                      placeholder="Email@email.com"
                      type="email"
                      required
                    />
                  </LabelInputContainer>

                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="phone">الرقم</Label>
                    <Input id="phone" placeholder="123456789" type="tel" />
                  </LabelInputContainer>

                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="message">الرسالة</Label>
                    <Input
                      id="message"
                      placeholder="الرسالة"
                      type="text"
                      as="textarea"
                      required
                    />
                  </LabelInputContainer>
                  <button
                    className="group/btn relative block h-10 w-full rounded-md bg-zinc-900 hover:bg-zinc-800 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] transition-colors duration-200 cursor-pointer"
                    type="submit"
                  >
                    إرسال
                    <BottomGradient />
                  </button>

                  <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
                </form>
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
          </div>
        </div>
        {/* End Hero */}
      </div>
    </main>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
