import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export const Skills = () => {
  const controls = useAnimation();
  const videoRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
        setInView(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="w-full flex flex-col sm:flex-row items-center gap-x-4 sm:gap-x-40 justify-evenly min-h-screen">
      <div className="text-center sm:text-left">
        <motion.h1
          className="text-3xl sm:text-5xl font-bold bg-yellow-300 rotate-180 mb-4 sm:mb-8"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          01 Content Creation
        </motion.h1>
        <p className="w-full sm:w-96 flex justify-center sm:justify-end">
          I effectively boosted online visibility and engagement. Real-time
          event coverage amplified the Kist hackfest reach, enhancing its
          digital presence and overall success.
        </p>
      </div>
      <motion.div
        ref={videoRef}
        className="w-full max-w-xs sm:max-w-md mt-4 sm:mt-0"
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <video className="w-full" controls autoPlay={inView}>
          <source src="/broll.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </div>
  );
};
