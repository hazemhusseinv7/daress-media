"use client";

import { ReactNode } from "react";

import { HeroUIProvider, ToastProvider } from "@heroui/react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <HeroUIProvider>
      <ToastProvider />
      {children}
    </HeroUIProvider>
  );
}
