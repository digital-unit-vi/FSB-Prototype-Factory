import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface ScrollTriggerWatcherProps {
  children: React.ReactNode; // External component as a child
}

const ScrollTriggerWatcher = ({ children }: ScrollTriggerWatcherProps) => {
  const ref = useRef<HTMLDivElement>(null); // Ref to the wrapper div

  useEffect(() => {
    if (ref.current) {
      const scrollTriggerInstance = ScrollTrigger.create({
        trigger: ref.current,
        onEnter: () => {
          ScrollTrigger.refresh(); // Refresh all ScrollTriggers when this component enters the view
        },
        start: "top center",
      });

      return () => {
        scrollTriggerInstance.kill(); // Clean up when component unmounts
      };
    }
  }, []);

  return (
    <div ref={ref}>
      {children} {/* Render the external component passed as a child */}
    </div>
  );
};

export default ScrollTriggerWatcher;
