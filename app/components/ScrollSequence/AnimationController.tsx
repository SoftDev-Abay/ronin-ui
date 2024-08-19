import React, { useState, useEffect, useRef } from "react";

import VideoAnimation from "./VideoAnimation";
import ScrollAnimation from "./ScrollSequence";

interface AnimationControllerProps {
  imagePath: string;
  frameCount: number;
  canvasWidth: number;
  canvasHeight: number;
  className?: string;
  parentRef: React.RefObject<HTMLDivElement>; // Include the parentRef in the interface
}

const AnimationController: React.FC<AnimationControllerProps> = ({
  imagePath,
  frameCount,
  canvasWidth,
  canvasHeight,
  className,
  parentRef, // Destructure the parentRef from props
}) => {
  const frames = useRef<HTMLImageElement[]>(new Array(frameCount));

  // Function to format image paths
  const currentFrame = (index: number) =>
    `${imagePath}${index.toString().padStart(4, "0")}.png`;

  // Preload images
  useEffect(() => {
    for (let i = 0; i < frameCount; i++) {
      // Start from 0
      const img = new Image();
      img.src = currentFrame(i + 1); // Use i+1 to maintain your filename structure

      img.onload = () => {
        frames.current[i] = img; // Ensure images are placed starting from index 0
      };
    }
  }, [frameCount, imagePath]);

  if (frames.current.length < frameCount) {
    return <div>Loading images...</div>; // Loading indicator
  }

  const animationProps = { frames, canvasWidth, canvasHeight, parentRef };

  return (
    <>
      {window.innerHeight > 1500 ? (
        <VideoAnimation {...animationProps} />
      ) : (
        <ScrollAnimation
          className={className}
          frameCount={frameCount}
          canvasWidth={canvasWidth}
          canvasHeight={canvasHeight}
          parentRef={parentRef}
          frames={frames}
        />
      )}
    </>
  );
};

export default AnimationController;
