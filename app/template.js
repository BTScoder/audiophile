"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }) {
  const pathname = usePathname(); // route key for animation

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname} // re-run animation on route change
        initial={{ opacity: 0, y: 20 }} // Start fade + slide
        animate={{ opacity: 1, y: 0 }} // Enter
        exit={{ opacity: 0, y: -20 }} // Leave
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
