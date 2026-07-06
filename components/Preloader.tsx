"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.random() * 12;

      if (value >= 100) {
        value = 100;
        setProgress(100);

        clearInterval(interval);

        setTimeout(() => {
          setHide(true);

          setTimeout(() => {
            onComplete();
          }, 800);
        }, 400);
      } else {
        setProgress(Math.floor(value));
      }
    }, 90);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!hide && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Glow */}
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.45, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute h-[450px] w-[450px] rounded-full bg-[#d4af37]/20 blur-[150px]"
          />

          <div className="relative flex flex-col items-center">

            {/* Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="relative mb-10 h-20 w-20 rounded-full border border-[#d4af37]/30"
            >
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[#d4af37] shadow-[0_0_18px_#d4af37]"
              />
            </motion.div>

            {/* Logo */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="text-center"
            >
              <span className="block text-sm tracking-[8px] text-[#d4af37]">
                BHAVISHA
              </span>

              <span className="mt-2 block text-4xl font-bold">
                Home Care
              </span>
            </motion.h1>

            {/* Subtitle */}

            <motion.p
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="mt-5 text-gray-400"
            >
              Preparing Premium Experience...
            </motion.p>

            {/* Progress */}

            <div className="mt-12 w-72">

              <div className="h-[2px] overflow-hidden rounded-full bg-white/10">

                <motion.div
                  className="h-full bg-[#d4af37]"
                  animate={{
                    width: `${progress}%`,
                  }}
                />

              </div>

              <motion.p
                key={progress}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-center text-sm text-gray-500"
              >
                {progress}%
              </motion.p>

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}