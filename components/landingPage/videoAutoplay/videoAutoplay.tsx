import { useEffect, useRef } from "react";

interface VideoAutoplayProps {
  videoScr: string;
}

export default function VideoAutoplay({ videoScr }: VideoAutoplayProps) {
  const videoParentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (videoParentRef.current) {
      const player = videoParentRef.current.querySelector("video");

      if (player) {
        player.autoplay = true;
        player.muted = true;
        player.setAttribute("muted", "");
        player.playsInline = true;
        player.controls = false;

        setTimeout(() => {
          const promise = player.play();
          if (promise instanceof Promise) {
            promise.then(() => {}).catch(() => {});
          }
        }, 0);
      }
    }
  }, []);

  return (
    <div
      ref={videoParentRef}
      dangerouslySetInnerHTML={{
        __html: `
        <video
          autoplay
          muted
          loop
          playsinline
          preload="metadata"
        >
        <source src="${videoScr}" type="video/mp4" />
        </video>`,
      }}
    />
  );
}
