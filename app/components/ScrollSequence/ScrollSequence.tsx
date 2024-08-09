import React, { useRef, useEffect, useState } from "react";

import "./style.scss";

interface ScrollSequenceProps {
  frameCount: number;
  imagePath: string;
  canvasWidth: number;
  canvasHeight: number;
  parentRef: React.RefObject<HTMLDivElement>;
  className?: string;
}

const ScrollSequence: React.FC<ScrollSequenceProps> = ({
  frameCount,
  imagePath,
  canvasWidth,
  canvasHeight,
  parentRef,
  className,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frames = useRef<HTMLImageElement[]>(new Array(frameCount));

  // Function to format image paths
  const currentFrame = (index: number) =>
    `${imagePath}${index.toString().padStart(4, "0")}.png`;

  // Preload images
  useEffect(() => {
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      // img.width = 1920;
      // img.height = 1080;
      console.log("img-scr-current", currentFrame(i));

      img.onload = () => {
        frames.current[i] = img;
        if (i === 1 && canvasRef.current) {
          const context = canvasRef.current.getContext("2d");
          if (context) {
            context.drawImage(img, 0, 0);
          }
        }
      };
    }
  }, [frameCount, imagePath]);

  // Update canvas based on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!parentRef.current) return;

      const scrollTop = document.documentElement.scrollTop;
      const maxScrollTop = parentRef.current.scrollHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );

      if (canvasRef.current) {
        const context = canvasRef.current.getContext("2d");
        if (context && frames.current[frameIndex + 1]) {
          context.clearRect(0, 0, canvasWidth, canvasHeight);
          context.drawImage(frames.current[frameIndex + 1], 0, 0);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [frameCount, canvasWidth, canvasHeight]);

  return (
    // <div className="png__sequence" ref={parentRef}>
    <canvas
      ref={canvasRef}
      width={canvasWidth}
      height={canvasHeight}
      //   className="png__sequence__canvas"
      className={`${className}`}
    />
    // </div>
  );
};

export default ScrollSequence;
