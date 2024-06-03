"use client";

import { useEffect, useMemo, useState } from "react";

export default function Spacer({
  size,
  sizeMedium,
  style = {},
  ...delegated
}: Readonly<{
  size: number;
  sizeMedium?: number;
  style?: object;
}>) {
  const [spacerSize, setSpacerSize] = useState(size);
  const md = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    const newSize = md ? sizeMedium ?? size : size;
    setSpacerSize(newSize);
  }, [md, size, sizeMedium]);

  return (
    <span
      style={{
        display: "block",
        width: spacerSize,
        minWidth: spacerSize,
        height: spacerSize,
        minHeight: spacerSize,
        ...style,
      }}
      {...delegated}
    />
  );
}

function useMediaQuery(query: string) {
  const isClient = typeof window === "object";

  const mediaQuery = useMemo(() => {
    if (isClient) {
      return window.matchMedia(query);
    }
    return null;
  }, [isClient, query]);

  const [match, setMatch] = useState(
    isClient && mediaQuery ? mediaQuery.matches : false
  );

  useEffect(() => {
    if (!isClient || !mediaQuery) {
      return;
    }

    const onChange = () => setMatch(mediaQuery.matches);
    mediaQuery.addEventListener("change", onChange);

    return () => mediaQuery.removeEventListener("change", onChange);
  }, [isClient, mediaQuery]);

  return match;
}
