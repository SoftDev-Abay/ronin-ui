import React, { useRef, useEffect, useState, MutableRefObject } from "react";

interface VideoAnimationProps {
  frames: MutableRefObject<HTMLImageElement[]>;
  canvasWidth: number;
  canvasHeight: number;
}

const VideoAnimation: React.FC<VideoAnimationProps> = ({
  frames,
  canvasWidth,
  canvasHeight,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prevFrame) => {
        const newFrame = prevFrame + 1;
        if (newFrame >= frames.current.length) {
          clearInterval(interval);
          return prevFrame; // Stop at the last frame
        }
        return newFrame;
      });
    }, 50); // Control frame rate here

    return () => clearInterval(interval);
  }, [frames.current.length]);

  useEffect(() => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context && frames.current[currentFrame]) { // Check if the frame is loaded
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        context.drawImage(
          frames.current[currentFrame],
          0,
          0,
          canvasWidth,
          canvasHeight
        );
      }
    }
  }, [currentFrame, frames, canvasWidth, canvasHeight]);
  ;

  return <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />;
};

export default VideoAnimation;
