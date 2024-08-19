import React, { useRef, useEffect } from "react";

interface ScrollSequenceProps {
  frameCount: number;
  canvasWidth: number;
  canvasHeight: number;
  parentRef: React.RefObject<HTMLDivElement>;
  className?: string;
  frames: React.MutableRefObject<HTMLImageElement[]>;
}

const ScrollAnimation: React.FC<ScrollSequenceProps> = ({
  frameCount,
  canvasWidth,
  canvasHeight,
  parentRef,
  className,
  frames,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const initialDrawn = useRef(false);  // To track if the initial frame has been drawn

  useEffect(() => {
    const handleScroll = () => {
      if (!parentRef.current || !canvasRef.current) return;

      const scrollTop = document.documentElement.scrollTop || parentRef.current.scrollTop;
      const maxScrollTop = parentRef.current.scrollHeight - window.innerHeight;
      const scrollFraction = Math.min(1, scrollTop / maxScrollTop);
      const frameIndex = Math.min(
        frameCount - 1,
        Math.round(scrollFraction * (frameCount - 1))
      );

      const context = canvasRef.current.getContext("2d");
      if (context && frames.current[frameIndex]) {
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        context.drawImage(frames.current[frameIndex], 0, 0, canvasWidth, canvasHeight);
      }
    };

    const drawInitialFrame = () => {
      const canvas = canvasRef.current;
      const firstImage = frames.current[0];
      if (canvas && firstImage && !initialDrawn.current) {
        const context = canvas.getContext("2d");
        if (context) {
          context.clearRect(0, 0, canvasWidth, canvasHeight);
          context.drawImage(firstImage, 0, 0, canvasWidth, canvasHeight);
          initialDrawn.current = true;  // Mark as drawn to prevent future redraws
        }
      }
    };

    // Attempt to draw the first frame immediately and then on an interval until success
    drawInitialFrame();
    const attemptDrawInterval = setInterval(drawInitialFrame, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(attemptDrawInterval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [frameCount, canvasWidth, canvasHeight, frames, parentRef]);

  return (
    <canvas
      ref={canvasRef}
      width={canvasWidth}
      height={canvasHeight}
      className={className}
    />
  );
};

export default ScrollAnimation;
