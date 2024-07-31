import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface ScaleRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

const ScaleReveal = ({
  children,
  delay = 0.25,
  duration = 0.5,
}: ScaleRevealProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
    }
  }, [inView]);
  return (
    <div ref={ref} style={{ position: "relative", zIndex: 100 }}>
      <motion.div
        variants={{
          hidded: { opacity: 0, scale: 0 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial="hidded"
        animate={mainControls}
        transition={{ delay, duration }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScaleReveal;
