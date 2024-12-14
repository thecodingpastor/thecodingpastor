"use client";

import React, { useEffect, useRef, ReactNode, ElementType } from "react";

interface AnimatedInViewProps {
  children: ReactNode;
  duration?: number;
  opacity?: number;
  scale?: number;
  delay?: number;
  className?: string;
  threshold?: number;
  as?: ElementType;
  x?: number; // Starting X position
  y?: number; // Starting Y position
  repeat?: boolean; // Optional feature to animate multiple times
}

const AnimatedInView: React.FC<AnimatedInViewProps> = ({
  children,
  className = "",
  duration = 0.3,
  delay = 0,
  threshold = 0.3,
  opacity = 1,
  scale = 1,
  as: Component = "div",
  x = 0,
  y = 0,
  repeat = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false); // Track if animation has occurred

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            if (!repeat && hasAnimated.current) return; // Skip if already animated and repeat is false

            // Animate to (0, 0) and full opacity/scale
            target.style.transition = `transform ${duration}s ease-in-out, opacity ${duration}s ease-in-out`;
            target.style.transitionDelay = `${delay}s`;
            target.style.transform = "translate(0, 0) scale(1)";
            target.style.opacity = "1";

            hasAnimated.current = true; // Mark as animated
          } else if (repeat) {
            // Reset to starting positions when out of view if repeat is true
            target.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
            target.style.opacity = `${opacity}`;
          }
        });
      },
      { threshold }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [duration, delay, threshold, x, y, opacity, scale, repeat]);

  return (
    <Component
      ref={ref}
      className={className}
      style={{
        // Initial styles
        transform: `translate(${x}px, ${y}px) scale(${scale})`,
        opacity: opacity,
      }}
    >
      {children}
    </Component>
  );
};

export default AnimatedInView;
