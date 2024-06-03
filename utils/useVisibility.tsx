import React, { useEffect, useState } from "react";

const useVisibility = (ref: React.RefObject<never>, options = {}) => {
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
      const currentRef = ref.current;
      observer.observe(currentRef);
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
