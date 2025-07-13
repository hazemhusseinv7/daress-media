"use client";

import { FormEvent, ReactNode, useEffect, useState } from "react";

import Link from "next/link";

import { AnimatePresence, motion } from "motion/react";

import { addToast } from "@heroui/react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import { ContactUsType, FormDataType } from "@/types/cms";

import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";
import { CircleArrowRight } from "lucide-react";
import { AiOutlineLoading } from "react-icons/ai";

const messages = {
  success: {
    title: "تم الإرسال!",
    description: "تم إرسال رسالتك بنجاح.",
  },
  error: {
    title: "خطأ!",
    description: "فشل إرسال رسالتك. يرجى المحاولة مرة أخرى.",
  },
  validation: {
    title: "خطأ!",
    description: "يرجى ملء جميع الحقول المطلوبة",
    email: "يرجى إدخال بريد إلكتروني صحيح",
  },
};

export default function Page() {
  const [data, setData] = useState<ContactUsType | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hovered, setHover] = useState<string>("");

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormDataType>>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/contact-us");
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

  if (error) console.log(error);

  const socialMedia = [
    {
      name: "Twitter",
      icon: FaXTwitter,
      link: data?.Social_Media?.Twitter,
    },
    {
      name: "Facebook",
      icon: FaFacebook,
      link: data?.Social_Media?.Facebook,
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      link: data?.Social_Media?.Instagram,
    },
    {
      name: "Whatsapp",
      icon: FaWhatsapp,
      link: data?.Social_Media?.Whatsapp,
    },
  ].filter((item) => item.link);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    if (errors[id as keyof FormDataType]) {
      setErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  const validateForm = (): { isValid: boolean; errorMessage?: string } => {
    const newErrors: Partial<FormDataType> = {};
    let hasErrors = false;
    let errorMessage = "";

    if (!formData.name.trim()) {
      newErrors.name = messages.validation.title;
      hasErrors = true;
    }
    if (!formData.email.trim()) {
      newErrors.email = messages.validation.title;
      hasErrors = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = messages.validation.email;
      hasErrors = true;
      errorMessage = messages.validation.email;
    }
    if (!formData.message.trim()) {
      newErrors.message = messages.validation.title;
      hasErrors = true;
    }

    setErrors(newErrors);

    if (hasErrors && !errorMessage) {
      errorMessage = messages.validation.description;
    }

    return { isValid: !hasErrors, errorMessage };
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validation = validateForm();
    if (!validation.isValid) {
      addToast({
        title: messages.validation.title,
        description: validation.errorMessage,
        color: "warning",
        variant: "solid",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`/api/contact-messages`, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.error || messages.error.description);
      }

      addToast({
        title: messages.success.title,
        description: messages.success.description,
        color: "success",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      addToast({
        title: messages.error.title,
        description:
          error instanceof Error ? error.message : messages.error.description,
        color: "danger",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative overflow-hidden bg-gradient-to-bl from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent pb-80">
      <div className="mt-32">
        {/* Hero */}
        <div>
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* Grid */}
            <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
              {!data ? (
                <div
                  id="services"
                  className="relative mx-4 my-32 flex justify-center items-center min-h-[200px]"
                >
                  <AiOutlineLoading className="size-7 text-main-color-2 animate-spin" />
                </div>
              ) : (
                <div>
                  {data?.Highlight && (
                    <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                      {data.Highlight}
                    </p>
                  )}

                  {/* Title */}
                  <div className="mt-4 md:mb-12 max-w-2xl">
                    <h1 className="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl dark:text-neutral-200">
                      {data?.Title}
                    </h1>

                    {data?.Description && (
                      <p className="text-gray-600 dark:text-neutral-400">
                        {data.Description}
                      </p>
                    )}
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
              )}

              {/* End Col */}

              <div className="mx-auto w-full max-w-lg rounded-none p-4 md:rounded-2xl md:p-8 bg-gradient-to-tr from-zinc-950/0 to-zinc-950 border border-zinc-900 shadow-2xl shadow-zinc-900/70">
                <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                  تواصل معنا
                </h2>

                <form className="mt-8" onSubmit={handleSubmit} noValidate>
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="firstname">الإسم</Label>
                    <Input
                      id="name"
                      placeholder="الإسم"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </LabelInputContainer>

                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">البريد الإلكترونى</Label>
                    <Input
                      id="email"
                      placeholder="Email@email.com"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </LabelInputContainer>

                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="phone">الرقم</Label>
                    <Input
                      id="phone"
                      placeholder="123456789"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </LabelInputContainer>

                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="message">الرسالة</Label>
                    <Input
                      id="message"
                      placeholder="الرسالة"
                      type="text"
                      as="textarea"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </LabelInputContainer>
                  <button
                    className={cn(
                      "group/btn relative block h-10 w-full rounded-md bg-zinc-900 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] transition-colors duration-200 cursor-pointer",
                      loading
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-zinc-800"
                    )}
                    disabled={loading}
                    type="submit"
                  >
                    {loading ? (
                      <AiOutlineLoading className="mx-auto animate-spin" />
                    ) : (
                      "إرسال"
                    )}

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
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
