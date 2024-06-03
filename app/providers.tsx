"use client";

import { ReactNode } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

export function Providers({ children }: Readonly<{ children: ReactNode }>) {
  return <ParallaxProvider>{children}</ParallaxProvider>;
}
