import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconX } from "@tabler/icons-react";

export const GlassCard = ({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) => (
  <motion.div
    className={`
      bg-black/30 backdrop-blur-xl 
      border border-white/10 
      p-6 rounded-2xl shadow-xl 
      hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] 
      transition-all duration-300
      ${className}
    `}
    onClick={onClick}
  >
    {children}
  </motion.div>
);

export const TechIcon = ({ icon: Icon, colorClass }: { icon: React.ElementType, colorClass: string }) => (
    <div className={`p-2 rounded-full ${colorClass} shadow-md`}>
        <Icon size={20} className="text-white" />
    </div>
);

export const LangAnim = ({ children, langKey, className = "inline-block" }: { children: React.ReactNode, langKey: string, className?: string }) => (
  <div className={`overflow-hidden align-top ${className}`}>
    <AnimatePresence mode="wait">
      <motion.div
        key={langKey}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  </div>
);

export const NeonLine = () => (
  <div className="w-full flex justify-center items-center py-24">
    <motion.div 
      initial={{ scaleX: 0, opacity: 0 }} 
      whileInView={{ scaleX: 1, opacity: 1 }} 
      viewport={{ once: true, margin: "-100px" }} 
      transition={{ duration: 1.2, ease: "anticipate" }} 
      className="h-[2px] w-3/4 md:w-2/3 bg-gradient-to-r from-transparent via-purple-500 to-transparent shadow-[0_0_25px_rgba(168,85,247,1)]" 
    />
  </div>
);

export const CyberButton = ({ children, href, primary = false, download = false }: { children: React.ReactNode; href: string; primary?: boolean; download?: boolean }) => {
  return (
    <a 
      href={href}
      download={download}
      className={`
        relative px-6 py-3 rounded-xl font-bold font-cyber tracking-wide overflow-hidden group transition-all duration-300 flex items-center gap-2
        ${primary 
          ? "bg-purple-600/20 text-white shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] border border-purple-500/50" 
          : "bg-transparent text-white border border-white/20 hover:bg-white/5 hover:border-cyan-400/50 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
        }
      `}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
    </a>
  );
};

export const CyberTag = ({ text }: { text: string }) => (
  <div className="
    px-4 py-1.5 rounded-full text-xs font-bold tracking-wider 
    bg-white/5 border border-white/10 backdrop-blur-md text-white/70
    hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-cyan-400/10 
    transition-all duration-300 cursor-default shadow-sm
  ">
    {text}
  </div>
);

export const TechGridCard = ({ icon: Icon, name, colorClass }: { icon: React.ElementType, name: string, colorClass: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className={`
      flex flex-col items-center justify-center p-4 rounded-2xl 
      bg-black/40 backdrop-blur-md border border-white/10 
      hover:border-${colorClass.split('-')[1]}-500/50 hover:shadow-[0_0_15px_rgba(var(--${colorClass.split('-')[1]}-rgb),0.3)] 
      transition-all duration-300 aspect-square cursor-default group
    `}
  >
    <div className={`p-3 rounded-xl ${colorClass} mb-3 group-hover:scale-110 transition-transform`}>
      <Icon size={32} className="text-white" />
    </div>
    <span className="text-white font-bold text-sm text-center">{name}</span>
  </motion.div>
);

export const StatCard = ({ icon: Icon, number, title, subtitle }: { icon: React.ElementType, number: string, title: string, subtitle: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white/5 border border-white/10 p-4 rounded-xl flex flex-col gap-2 hover:border-cyan-400/30 transition-colors"
  >
    <Icon size={24} className="text-cyan-400 mb-2" />
    <span className="text-3xl font-bold text-white font-cyber">{number}</span>
    <span className="text-sm font-bold text-white/90">{title}</span>
    <span className="text-xs text-white/50">{subtitle}</span>
  </motion.div>
);

export const ImageModal = ({ src, alt, onClose }: { src: string, alt: string, onClose: () => void }) => (
  <motion.div 
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
    onClick={onClose}
  >
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
      className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl border-2 border-white/20 shadow-[0_0_30px_rgba(168,85,247,0.5)]"
      onClick={(e) => e.stopPropagation()} 
    >
       <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-white/20 transition-colors z-10">
         <IconX size={24} className="text-white" />
       </button>
      <img src={src} alt={alt} className="w-full h-full object-contain" />
    </motion.div>
  </motion.div>
);

export const TabButton = ({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) => (
  <button
    onClick={onClick}
    className={`
      px-6 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 relative overflow-hidden
      ${active 
        ? "text-white shadow-[0_0_20px_rgba(139,92,246,0.5)] border border-purple-500/50 bg-purple-500/10" 
        : "text-white/50 hover:text-white border border-white/5 hover:bg-white/5"
      }
    `}
  >
    <span className="relative z-10">{children}</span>
    {active && (
      <motion.div 
        layoutId="activeTab"
        className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-400/20"
      />
    )}
  </button>
);