import { useState, useEffect } from "react";

const useScreenWidth = () => {
  // Initialize state with undefined or 0 since we can't access window on the server
  const [width, setWidth] = useState(
    // typeof window !== "undefined" ? window.innerWidth : 0  // THIS CAUSES A HYDRATION MISMATCH ERROR
    1024 
  );

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Set up the event listener
    window.addEventListener("resize", handleResize);

    // Call the handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return width;
};

export default useScreenWidth;
