"use client";
import type { ReactNode } from "react";
import "../globals.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}
