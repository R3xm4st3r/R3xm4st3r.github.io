"use client";
import { AnimatePresence, motion, type MotionProps } from "framer-motion";
import { cn } from "../lib/utils";

interface WordRotateProps {
  children: string;
  className?: string;
  motionProps?: MotionProps;
}

export function WordRotate({
  children,
  motionProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  className,
}: WordRotateProps) {
  return (
    <div className={cn("overflow-hidden flex flex-col", className)}>
      <AnimatePresence mode="wait">
        <motion.h1
          key={children}
          className={cn(className)}
          {...motionProps}
        >
          {children}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}