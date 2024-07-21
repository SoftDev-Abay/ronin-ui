import React, { useEffect, useRef } from "react";

interface DynamicScrollAnimationProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  maxTranslateX?: number;
}

const DynamicScrollAnimation: React.FC<DynamicScrollAnimationProps> = ({
  children,
  direction = "right",
  maxTranslateX = 1000,
}) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    if (!elementRef.current) return;

    const elementRect = elementRef.current.getBoundingClientRect();
    const elementTop = elementRect.top + scrollPosition;
    const elementMiddle = elementTop + elementRect.height / 2;
    const rangeModifier = Math.max(windowHeight / 4, 300);
    const activationStart = elementMiddle - (windowHeight + rangeModifier);
    const activationEnd = elementMiddle - rangeModifier;

    if (scrollPosition > activationStart && scrollPosition < activationEnd) {
      const progress =
        (scrollPosition - activationStart) / (activationEnd - activationStart);
      const opacity = progress;
      const translateValue = maxTranslateX - maxTranslateX * progress;

      elementRef.current.style.opacity = opacity.toString();
      elementRef.current.style.transform = `translateX(${
        direction === "left" ? -translateValue : translateValue
      }px)`;
    } else if (scrollPosition >= activationEnd) {
      elementRef.current.style.opacity = "1";
      elementRef.current.style.transform = "translateX(0px)";
    } else {
      elementRef.current.style.opacity = "0";
      elementRef.current.style.transform = `translateX(${
        direction === "left" ? -maxTranslateX : maxTranslateX
      }px)`;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Clean up function
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [maxTranslateX, direction]);

  return <div ref={elementRef}>{children}</div>;
};

export default DynamicScrollAnimation;
