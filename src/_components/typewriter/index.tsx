"use client";

import React, { useState, useEffect, ElementType } from "react";
// import styles from "./Typewriter.module.scss";
import useBoundStore from "@/app/store";

interface TypewriterProps {
  text: string; // The text to display
  speed?: number; // Typing speed in milliseconds
  as?: ElementType; // The HTML element or React component to render
  className?: string; // Optional CSS class for styling
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 50,
  as: Component = "div", // Default to a div if no element is specified
  className = "",
}) => {
  const [displayedText, setDisplayedText] = useState(""); // State to track the text being displayed
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current index of the text
  const setTypingPlayed = useBoundStore((state) => state.setTypingPlayed);
  const typingPlayed = useBoundStore((state) => state.typingPlayed);

  useEffect(() => {
    if (typingPlayed) {
      // Skip the animation if it has already been played
      setDisplayedText(text);
      return;
    }
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => {
        if (text.length === currentIndex + 1) {
          setTypingPlayed(true);
        }
        clearTimeout(timeout);
      };
    }
  }, [currentIndex, text, speed]);

  return <Component className={` ${className}`}>{displayedText}</Component>;
};

export default Typewriter;
