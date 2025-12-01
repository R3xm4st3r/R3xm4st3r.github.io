"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import { BackgroundGradientAnimation } from "./background-gradient-animation";

export const Preloader = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [exitLogo, setExitLogo] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const exitTimer = setTimeout(() => {
      setExitLogo(true);
    }, 2500);

    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
      window.scrollTo(0, 0);
    }, 3500);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(loaderTimer);
      document.body.style.overflow = "auto";
    };
  }, []);

  const logoVariants = {
    initial: { 
      opacity: 0, 
      scale: 0.5,           
      filter: "blur(20px)", 
      rotate: -10           
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      filter: "blur(0px)",  
      rotate: 0,
      transition: { 
        duration: 1.5,      
        ease: [0.22, 1, 0.36, 1] as const
      } 
    },
    exit: { 
      opacity: 0, 
      scale: 1.5,           
      filter: "blur(30px)", 
      transition: { 
        duration: 0.8, 
        ease: "easeInOut" 
      } 
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[9999] overflow-hidden bg-black"
          >
            <BackgroundGradientAnimation containerClassName="h-screen w-screen">
              <div className="absolute inset-0 flex flex-col items-center justify-center z-50 pointer-events-none">
                
                <motion.img 
                  src="/logo.png" 
                  alt="Logo R3xm4st3r"
                  className="w-40 md:w-64 object-contain drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]"
                  
                  variants={logoVariants as any}
                  initial="initial"
                  animate={exitLogo ? "exit" : "visible"}
                />

                <motion.div
                   initial={{ width: 0, opacity: 0 }}
                   animate={{ width: 200, opacity: exitLogo ? 0 : 1 }}
                   transition={{ duration: 2 }}
                   className="h-1 bg-gradient-to-r from-transparent via-white to-transparent mt-8 rounded-full"
                />

              </div>
            </BackgroundGradientAnimation>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </>
  );
};