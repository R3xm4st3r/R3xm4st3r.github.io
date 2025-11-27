import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconBriefcase,
  IconCode,
  IconHome,
  IconPhoneFilled,
  IconUser,
} from "@tabler/icons-react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { FloatingDock } from "./ui/floating-dock";
import { WordRotate } from "./ui/word-rotate";
import "./App.css";

const GlassCard = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`
      bg-black/30 backdrop-blur-xl 
      border border-white/10 
      p-6 rounded-2xl shadow-xl 
      hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] 
      transition-all duration-300
      ${className}
    `}
  >
    {children}
  </motion.div>
);

function App() {
  const [language, setLanguage] = useState<"es" | "en">("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  const links = [
    {
      title: language === "en" ? "Home" : "Inicio",
      icon: <IconHome className="h-full w-full text-neutral-300 hover:text-white transition-colors" />,
      href: "#home",
    },
    {
      title: "About",
      icon: <IconUser className="h-full w-full text-neutral-300 hover:text-white transition-colors" />,
      href: "#about",
    },
    {
      title: "Projects",
      icon: <IconBriefcase className="h-full w-full text-neutral-300 hover:text-white transition-colors" />,
      href: "#projects",
    },
    {
      title: "Github",
      icon: <IconBrandGithubFilled className="h-full w-full text-neutral-300 hover:text-white transition-colors" />,
      href: "https://github.com",
      target: "_blank",
    },
    {
      title: "Linkedin",
      icon: <IconBrandLinkedinFilled className="h-full w-full text-neutral-300 hover:text-white transition-colors" />,
      href: "https://linkedin.com",
      target: "_blank",
    },
    {
      title: language === "en" ? "ES / EN" : "ES / EN",
      icon: (
        <div 
            onClick={toggleLanguage} 
            className="h-full w-full flex items-center justify-center font-bold text-neutral-200 hover:text-white cursor-pointer font-cyber"
            style={{ fontSize: '0.7rem' }}
        >
             {language.toUpperCase()}
        </div>
      ),
      href: "#", 
    },
  ];

  return (
    <BackgroundGradientAnimation containerClassName="fixed inset-0">
      
      <div className="absolute inset-0 z-10 w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth">
        
        <section id="home" className="min-h-screen flex flex-col items-center justify-center relative">
            <div className="w-full max-w-6xl mx-auto px-6 text-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 3.8, ease: "easeOut" }} 
              >
                <div className="mb-2">
                  <span className="text-white/50 font-mono tracking-widest text-sm uppercase">
                    {language === "en" ? "Welcome to my universe" : "Bienvenido a mi universo"}
                  </span>
                </div>

                <WordRotate 
                  className="font-cyber text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 py-4 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                >
                  {language === "en" ? "I'm a Developer" : "Soy Desarrollador"}
                </WordRotate>
                
                <p className="mt-4 text-xl md:text-2xl text-white/80 max-w-lg mx-auto font-light">
                  {language === "en" 
                  ? "Building digital experiences with clean code and modern design." 
                  : "Creando experiencias digitales con código limpio y diseño moderno."}
                </p>
              </motion.div>
            </div>
        </section>

        <section id="about" className="w-full max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <GlassCard className="md:col-span-2 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-all group-hover:bg-purple-500/20"></div>

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl border border-white/10">
                  <IconUser className="text-white" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-white font-cyber tracking-wide">
                  {language === "en" ? "About Me" : "Sobre Mí"}
                </h2>
              </div>
              <p className="text-white/70 leading-relaxed text-lg relative z-10">
                {language === "en" 
                  ? "I am passionate about creating intuitive and dynamic user interfaces. I specialize in the React ecosystem and love learning new technologies to solve complex problems."
                  : "Me apasiona crear interfaces de usuario intuitivas y dinámicas. Me especializo en el ecosistema de React y me encanta aprender nuevas tecnologías para resolver problemas complejos."}
              </p>
            </GlassCard>

            <GlassCard className="md:col-span-1 flex flex-col justify-center relative overflow-hidden group">
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -ml-10 -mb-10 transition-all group-hover:bg-blue-500/20"></div>
              
              <h3 className="text-xl font-bold text-white mb-6 text-center font-cyber">Tech Stack</h3>
              <div className="flex flex-wrap gap-2 justify-center relative z-10">
                {["React", "TypeScript", "Tailwind", "Vite", "Node.js", "Git", "Framer"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white/5 hover:bg-white/10 hover:border-cyan-500/30 transition-all rounded-lg text-white/90 text-sm border border-white/10 cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>
        </section>

        <section id="projects" className="w-full max-w-6xl mx-auto px-6 pb-40">
           <h2 className="text-4xl font-bold text-white mb-12 text-center font-cyber drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
              {language === "en" ? "Featured Projects" : "Proyectos Destacados"}
           </h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <GlassCard className="group cursor-pointer border-white/5 hover:border-purple-500/40">
                <div className="h-48 bg-gradient-to-br from-[#2a1b3d] to-[#1a1f3d] rounded-xl mb-6 flex items-center justify-center border border-white/5 group-hover:border-white/10 transition-all relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                   <IconCode size={48} className="text-white/30 group-hover:text-white/80 group-hover:scale-110 transition-all duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-cyber group-hover:text-purple-300 transition-colors">Portfolio V1</h3>
                <p className="text-white/60 mb-4">
                  {language === "en" ? "A modern portfolio built with React." : "Un portafolio moderno hecho con React."}
                </p>
                <div className="flex gap-2">
                   <span className="text-xs text-purple-200 bg-purple-500/10 border border-purple-500/20 px-2 py-1 rounded">React</span>
                   <span className="text-xs text-blue-200 bg-blue-500/10 border border-blue-500/20 px-2 py-1 rounded">Tailwind</span>
                </div>
              </GlassCard>

              <GlassCard className="group cursor-pointer border-white/5 hover:border-cyan-500/40">
                <div className="h-48 bg-gradient-to-br from-[#1a2c3d] to-[#1a3d3d] rounded-xl mb-6 flex items-center justify-center border border-white/5 group-hover:border-white/10 transition-all relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                   <IconPhoneFilled size={48} className="text-white/30 group-hover:text-white/80 group-hover:scale-110 transition-all duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-cyber group-hover:text-cyan-300 transition-colors">Mobile App</h3>
                <p className="text-white/60 mb-4">
                  {language === "en" ? "Concept design for a finance app." : "Diseño conceptual para app de finanzas."}
                </p>
                 <div className="flex gap-2">
                   <span className="text-xs text-cyan-200 bg-cyan-500/10 border border-cyan-500/20 px-2 py-1 rounded">UI/UX</span>
                   <span className="text-xs text-teal-200 bg-teal-500/10 border border-teal-500/20 px-2 py-1 rounded">Figma</span>
                </div>
              </GlassCard>
           </div>
        </section>

        <div className="h-24"></div>

      </div>
      
      <div className="absolute bottom-6 left-0 w-full flex justify-center z-50 pointer-events-auto">
        <FloatingDock items={links} />
      </div>

    </BackgroundGradientAnimation>
  );
}

export default App;