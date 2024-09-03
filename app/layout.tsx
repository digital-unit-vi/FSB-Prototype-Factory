import "@components/build-assets/style.css";
import localFont from "next/font/local";
import { ReactNode } from "react";
import "./globals.css";
import { Providers } from "./providers";

// export const runtime = "edge";

const vorwerkFont = localFont({
  preload: true,
  fallback: ["Vorwerk", "system-ui", "arial"],
  adjustFontFallback: "Arial",
  display: "swap",
  src: [
    {
      path: "../public/fonts/Vorwerk-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Vorwerk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Vorwerk-Medium.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Vorwerk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={vorwerkFont.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
