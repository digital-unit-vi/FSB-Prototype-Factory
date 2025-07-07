import React, { useEffect, useState } from "react";

const useVisibility = (ref: React.RefObject<HTMLElement | null>, options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const currentRef = ref.current;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1, ...options }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options, currentRef]);

  return isVisible;
};

export default useVisibility;
