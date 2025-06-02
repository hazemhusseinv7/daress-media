import Image from "next/image";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

import Video from "next-video";
import aboutUs from "@/videos/about-us.mp4";
import service1 from "@/videos/service-1.mp4";
import service2 from "@/videos/service-2.mp4";
import service3 from "@/videos/service-3.mp4";
import service4 from "@/videos/service-4.mp4";

const voiceOver1 = "/voice-over/voice-over-1.mp3";
const voiceOver2 = "/voice-over/voice-over-2.mp3";
const voiceOver3 = "/voice-over/voice-over-3.mp3";

import { GlowingEffect } from "@/components/ui/glowing-effect";

import { cn } from "@/lib/utils";

import { GoChevronLeft } from "react-icons/go";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  image,
  button,
  content,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  image: string;
  button?: string;
  content?: string;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div
      className={cn(
        "group/bento relative shadow-input row-span-1 flex flex-col justify-between rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-zinc-900/80 dark:shadow-none",
        className
      )}
    >
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <div className="border-0.75 relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl p-4 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
        {header}
        <div className="flex justify-between items-end">
          <div className="transition duration-200 group-hover/bento:-translate-x-2">
            {icon}
            <div className="mt-2 mb-2 font-bold text-neutral-600 dark:text-neutral-200">
              {title}
            </div>
            <div className="text-xs font-normal text-neutral-600 dark:text-neutral-300">
              {description}
            </div>
          </div>

          {button && (
            <>
              <Button
                color="primary"
                variant="shadow"
                onPress={onOpen}
                className="group/button hover:bg-main-color-2 hover:text-white  "
              >
                {button}{" "}
                <GoChevronLeft className="group-hover/button:-translate-x-2 transition-transform duration-300" />
              </Button>
              <Modal
                backdrop="blur"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                scrollBehavior="inside"
                size="5xl"
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">
                        <Image
                          className="size-20 mx-auto object-contain"
                          src={image}
                          width={300}
                          height={300}
                          alt="Service Image"
                        />
                        <strong>{title}</strong>
                        <span className="font-light">{description}</span>
                      </ModalHeader>
                      <ModalBody>
                        {content === "motion graphics" ? (
                          <div dir="ltr">
                            <Video
                              src={aboutUs}
                              className="max-w-9/10 md:max-w-2/3 mx-auto mt-20"
                              style={{
                                "--media-primary-color": "var(--main-color-2)",
                                "--media-secondary-color":
                                  "var(--main-color-3)",
                                "--media-accent-color": "var(--main-color-1)",
                              }}
                            />

                            <Video
                              src={service1}
                              className="max-w-9/10 md:max-w-2/3 mx-auto mt-20"
                              style={{
                                "--media-primary-color": "var(--main-color-2)",
                                "--media-secondary-color":
                                  "var(--main-color-3)",
                                "--media-accent-color": "var(--main-color-1)",
                              }}
                            />

                            <Video
                              src={service2}
                              className="max-w-9/10 md:max-w-2/3 mx-auto mt-20"
                              style={{
                                "--media-primary-color": "var(--main-color-2)",
                                "--media-secondary-color":
                                  "var(--main-color-3)",
                                "--media-accent-color": "var(--main-color-1)",
                              }}
                            />

                            <Video
                              src={service3}
                              className="max-w-9/10 md:max-w-2/3 mx-auto mt-20"
                              style={{
                                "--media-primary-color": "var(--main-color-2)",
                                "--media-secondary-color":
                                  "var(--main-color-3)",
                                "--media-accent-color": "var(--main-color-1)",
                              }}
                            />

                            <Video
                              src={service4}
                              className="max-w-9/10 md:max-w-2/3 mx-auto mt-20"
                              style={{
                                "--media-primary-color": "var(--main-color-2)",
                                "--media-secondary-color":
                                  "var(--main-color-3)",
                                "--media-accent-color": "var(--main-color-1)",
                              }}
                            />
                          </div>
                        ) : content === "voice over" ? (
                          <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
                            <audio controls className="w-full">
                              <source src={voiceOver1} type="audio/mpeg" />
                            </audio>
                            <audio controls className="w-full">
                              <source src={voiceOver2} type="audio/mpeg" />
                            </audio>
                            <audio controls className="w-full">
                              <source src={voiceOver3} type="audio/mpeg" />
                            </audio>
                          </div>
                        ) : (
                          ""
                        )}
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          color="danger"
                          variant="light"
                          onPress={onClose}
                        >
                          إغلاق
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
