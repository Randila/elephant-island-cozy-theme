"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({
  show,
  logoSrc = "/logo.png",
}: {
  show: boolean;
  logoSrc?: string;
}) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#EAE5DF]"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.95, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* optional top line */}
          <div className="pointer-events-none absolute left-0 right-0 top-16 h-px bg-white/10" />

          {/* logo */}
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            }}
            className="flex items-center justify-center"
          >
            {/* If you don’t have an svg logo yet, replace with text */}
            {/* <div className="text-white font-[var(--font-marcellus)] tracking-[0.2em] text-2xl">ELEPHANT ISLAND</div> */}
            <img src={logoSrc} alt="Logo" className="w-1/3 opacity-95" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
