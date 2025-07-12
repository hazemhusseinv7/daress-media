import Image from "next/image";

import { ReactNode } from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

import { GlowingEffect } from "@/components/ui/glowing-effect";

import { cn } from "@/lib/utils";

import { GoChevronLeft } from "react-icons/go";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
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
  title?: string | ReactNode;
  description?: string | ReactNode;
  header?: ReactNode;
  icon?: ReactNode;
  image: string;
  button?: string;
  content?: ReactNode;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div
      className={cn(
        "group/bento relative shadow-input row-span-1 flex flex-col justify-between rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-zinc-800/80 dark:bg-zinc-900/70 dark:shadow-none",
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
      <div className="border-0.75 relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl p-4 dark:shadow-[0px_0px_27px_0px_#2D2D2D]/20">
        {header}
        <div className="flex justify-between items-end">
          <div className="transition duration-200 group-hover/bento:-translate-x-2">
            {icon}
            <div className="mt-2 mb-2 font-bold text-neutral-600 dark:text-neutral-200 group-hover/bento:dark:text-main-color-2 transition-colors duration-200">
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
                className="group/button hover:bg-main-color-2 hover:text-white hover:shadow-main-color-2/50"
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
                      <ModalBody>{content}</ModalBody>
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
