"use client";
import { cn } from "../lib/utils";
import { AnimatePresence, motion, type MotionProps, type Variants } from "framer-motion";

type AnimationType = "blurIn" | "fadeIn" | "slideUp" | "scaleUp" | "slideLeft";
type SplitType = "character" | "word" | "text" | "line";

interface TextAnimateProps extends MotionProps {
  children: string;
  className?: string;
  animation?: AnimationType;
  by?: SplitType;
  delay?: number;
  duration?: number;
  as?: React.ElementType;
  startOnView?: boolean;
}

const getVariants = (type: AnimationType, duration: number): Variants => {
  const baseTransition = { duration, ease: "easeOut" as const };

  switch (type) {
    case "blurIn":
      return {
        hidden: { opacity: 0, filter: "blur(10px)" },
        visible: { opacity: 1, filter: "blur(0px)", transition: baseTransition },
        exit: { opacity: 0, filter: "blur(10px)", transition: baseTransition },
      };
    case "slideUp":
      return {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: baseTransition },
        exit: { y: -20, opacity: 0, transition: baseTransition },
      };
    case "scaleUp":
      return {
        hidden: { scale: 0.5, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: baseTransition },
        exit: { scale: 1.5, opacity: 0, transition: baseTransition },
      };
    case "slideLeft":
      return {
        hidden: { x: -20, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: baseTransition },
        exit: { x: 20, opacity: 0, transition: baseTransition },
      };
    default:
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: baseTransition },
        exit: { opacity: 0, transition: baseTransition },
      };
  }
};

export function TextAnimate({
  children,
  className,
  animation = "blurIn",
  by = "word",
  delay = 0,
  duration = 0.3,
  as: Component = "div",
  startOnView = true,
  ...props
}: TextAnimateProps) {
  const variants = getVariants(animation, duration);

  let segments: string[] = [children];
  if (by === "character") segments = children.split("");
  else if (by === "word") segments = children.split(" ");
  
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay / 1000,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <Component className={cn("inline-block", className)}>
        <motion.div
          initial="hidden"
          animate={props.animate || (startOnView ? "visible" : "hidden")}
          whileInView={!startOnView && !props.animate ? "visible" : undefined}
          exit="exit"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-wrap gap-[0.2em]"
        >
          {segments.map((segment, i) => (
            <motion.span
              key={`${segment}-${i}`}
              variants={variants}
              className="inline-block whitespace-pre"
            >
              {segment}
            </motion.span>
          ))}
        </motion.div>
      </Component>
    </AnimatePresence>
  );
}