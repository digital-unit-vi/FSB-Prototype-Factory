"use client";

import { ReactNode } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { GridProvider } from "../providers/GridProvider";

export function Providers({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <GridProvider>
      <ParallaxProvider>{children}</ParallaxProvider>;
    </GridProvider>
  );
}
