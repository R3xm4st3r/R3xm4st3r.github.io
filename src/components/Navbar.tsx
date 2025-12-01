import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconBrandGithub, IconBrandLinkedin, IconMenu2, IconX } from "@tabler/icons-react";

export const Navbar = ({ links, language, toggleLanguage, activeSection }: { links: any[], language: string, toggleLanguage: () => void, activeSection: string }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }} 
        animate={{ y: 0 }} 
        transition={{ duration: 0.5 }} 
        className="fixed top-0 left-0 right-0 z-50 h-20 px-6 flex items-center justify-between border-b border-white/10 bg-black/20 backdrop-blur-lg"
      >
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-gradient-to-tr from-purple-500 to-cyan-400 rounded-lg flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]">R</div>
           <span className="text-white font-cyber font-bold tracking-wider hidden sm:block">Manuel</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.filter(l => l.href.startsWith("#")).map((link) => {
             const isActive = activeSection === link.href.substring(1); 
             return (
               <a 
                 key={link.title} 
                 href={link.href}
                 onClick={(e) => handleNavClick(e, link.href)}

                 className={`text-sm font-medium transition-all duration-300 relative group ${isActive ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" : "text-white/60 hover:text-white"}`}
               >
                  {link.title}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
               </a>
             );
          })}
        </div>

        <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-3 pr-4 border-r border-white/10">
                <a href="https://github.com/R3xm4st3r" target="_blank" className="text-white/60 hover:text-white transition-colors"><IconBrandGithub size={20}/></a>
                <a href="https://www.linkedin.com/in/manuel-aguilar-acevedo-a0a78b2b4/" target="_blank" className="text-white/60 hover:text-white transition-colors"><IconBrandLinkedin size={20}/></a>
            </div>
            <button onClick={toggleLanguage} className="px-3 py-1 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs font-bold transition-all font-cyber min-w-[60px]">{language.toUpperCase()}</button>
            
            <button className="md:hidden text-white/80 hover:text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <IconX /> : <IconMenu2 />}
            </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="fixed top-20 left-0 w-full z-40 bg-black/90 backdrop-blur-xl border-b border-white/10 md:hidden overflow-hidden">
            <div className="flex flex-col p-6 gap-4">
              {links.filter(l => l.href.startsWith("#")).map((link) => (
                 <a 
                    key={link.title} 
                    href={link.href} 
                    onClick={(e) => handleNavClick(e, link.href)} // TAMBIÉN AQUI EN MOVIL
                    className={`text-lg font-medium py-2 border-b border-white/5 ${activeSection === link.href.substring(1) ? "text-cyan-400" : "text-white/80"}`}
                 >
                    {link.title}
                 </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};