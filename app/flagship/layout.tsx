"use client";

import { ReactNode } from "react";
import "../globals.scss";
import { Footer } from "@components/flagship/footer/footer";
import { Header } from "@components/flagship/header/header";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const noHeaderPaths = ['/flagship']
  const pathname = usePathname();

  return (
    <>
      {!noHeaderPaths.includes(pathname) && <Header />}
      {children}
      <Footer />
    </>
  );
}
