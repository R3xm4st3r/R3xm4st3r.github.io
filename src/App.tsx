import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Spline from '@splinetool/react-spline'; 
import { 
  IconCode, 
  IconCertificate, 
  IconWorld, 
  IconUsers, 
  IconChevronDown, 
  IconChevronUp,
  IconSend,
  IconMessage,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandGithub,
  IconUpload,
  IconMenu2, 
  IconX
} from "@tabler/icons-react";

import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { WordRotate } from "./ui/word-rotate";
import "./App.css";
import { 
  GlassCard, 
  TechIcon, 
  LangAnim, 
  NeonLine, 
  CyberButton, 
  TechGridCard, 
  StatCard, 
  ImageModal, 
  TabButton 
} from "./components/CyberKit";

import { 
  PROJECTS_DATA, 
  CERTIFICATES_DATA, 
  TECH_STACK_DATA, 
  SOFT_SKILLS_DATA 
} from "./data";

// NAVBAR 
const Navbar = ({ links, language, toggleLanguage, activeSection }: { links: any[], language: string, toggleLanguage: () => void, activeSection: string }) => {
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
        <div 
            className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
            onClick={() => window.location.reload()} 
            title="Reload Page"
        >
           <img 
             src="/logo.png" 
             alt="Logo" 
             className="h-12 w-auto object-contain drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" 
           />
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
            <button className="md:hidden text-white/80 hover:text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>{isMobileMenuOpen ? <IconX /> : <IconMenu2 />}</button>
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
                    onClick={(e) => handleNavClick(e, link.href)}
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


// CONTACT SECTION

const ContactSection = ({ language }: { language: string }) => {
  const [comments, setComments] = useState([
    { id: 1, name: "UliGaMi", text: "Great portfolio! The 3D animations are sick. Keep it up!", time: "1h ago", avatar: null },
    { id: 2, name: "Vitoxxvtm", text: "I love the colors!", time: "2h ago", avatar: null }
  ]);
  
  const [newComment, setNewComment] = useState({ name: "", text: "" });

  const handlePostComment = () => {
    if (!newComment.name || !newComment.text) return;
    
    const comment = {
      id: Date.now(),
      name: newComment.name,
      text: newComment.text,
      time: language === "en" ? "Just now" : "Ahora mismo",
      avatar: null 
    };

    setComments([comment, ...comments]);
    setNewComment({ name: "", text: "" }); 
  };

  return (
    <section id="contact" className="w-full max-w-6xl mx-auto px-6 py-20 scroll-mt-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white font-cyber tracking-wide mb-2">
          <LangAnim langKey={language}>{language === "en" ? "Contact Me" : "Contáctame"}</LangAnim>
        </h2>
        <p className="text-white/50 text-sm">
          <LangAnim langKey={language}>
            {language === "en" ? "Got a question? Send me a message!" : "¿Tienes una pregunta? ¡Envíame un mensaje!"}
          </LangAnim>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8">
        
        <div className="flex flex-col gap-6">
          <GlassCard className="flex flex-col gap-4">
            <div className="mb-2">
              <h3 className="text-2xl font-bold text-purple-400 font-cyber">
                <LangAnim langKey={language}>{language === "en" ? "Get in Touch" : "Escríbeme"}</LangAnim>
              </h3>
              <p className="text-white/50 text-xs">
                <LangAnim langKey={language}>
                    {language === "en" ? "Have something to discuss? Send me a message and let's talk." : "¿Algo que discutir? Envíame un mensaje y hablemos."}
                </LangAnim>
              </p>
            </div>

            <div className="space-y-4">
              <div className="relative group">
                <input type="text" placeholder={language === "en" ? "Your Name" : "Tu Nombre"} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors placeholder:text-white/30 text-sm" />
              </div>
              <div className="relative group">
                <input type="email" placeholder={language === "en" ? "Your Email" : "Tu Correo"} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors placeholder:text-white/30 text-sm" />
              </div>
              <div className="relative group">
                <textarea rows={4} placeholder={language === "en" ? "Your Message" : "Tu Mensaje"} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors placeholder:text-white/30 resize-none text-sm"></textarea>
              </div>
            </div>

            <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-bold shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all flex justify-center items-center gap-2 mt-2">
              <IconSend size={18} />
              <LangAnim langKey={language}>{language === "en" ? "Send Message" : "Enviar Mensaje"}</LangAnim>
            </button>
          </GlassCard>

          <GlassCard className="flex flex-col gap-4">
             <div className="flex items-center gap-2 mb-2">
               <div className="h-1 w-8 bg-purple-500 rounded-full"></div>
               <h3 className="text-lg font-bold text-white">
                   <LangAnim langKey={language}>{language === "en" ? "Connect With Me" : "Conecta Conmigo"}</LangAnim>
               </h3>
             </div>

             <div className="grid grid-cols-2 gap-3">
                <a href="https://www.linkedin.com/in/manuel-aguilar-acevedo-a0a78b2b4/" target="_blank" className="col-span-2 p-4 rounded-xl bg-[#0077b5]/20 border border-[#0077b5]/30 hover:bg-[#0077b5]/40 transition-all flex items-center gap-3 group">
                   <div className="p-2 bg-[#0077b5] rounded-lg text-white">
                      <IconBrandLinkedin size={24} />
                   </div>
                   <div>
                      <h4 className="text-white font-bold text-sm">Let's Connect</h4>
                      <p className="text-white/50 text-xs group-hover:text-white/80 transition-colors">on LinkedIn</p>
                   </div>
                </a>

                <a href="https://www.instagram.com/manueklm/" target="_blank" className="p-4 rounded-xl bg-pink-600/10 border border-pink-500/20 hover:bg-pink-600/20 transition-all flex flex-col gap-2 group">
                   <div className="p-2 bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 rounded-lg text-white w-fit">
                      <IconBrandInstagram size={20} />
                   </div>
                   <div>
                      <h4 className="text-white font-bold text-sm">Instagram</h4>
                      <p className="text-white/50 text-xs">@manueklm</p>
                   </div>
                </a>

                <a href="https://github.com/R3xm4st3r" target="_blank" className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex flex-col gap-2 group">
                   <div className="p-2 bg-white/20 rounded-lg text-white w-fit">
                      <IconBrandGithub size={20} />
                   </div>
                   <div>
                      <h4 className="text-white font-bold text-sm">Github</h4>
                      <p className="text-white/50 text-xs">@R3xm4st3r</p>
                   </div>
                </a>
             </div>
          </GlassCard>
        </div>

        <div className="flex flex-col h-full">
          <GlassCard className="h-full flex flex-col">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
              <IconMessage className="text-purple-400" />
              <h3 className="text-xl font-bold text-white">
                  <LangAnim langKey={language}>{language === "en" ? "Comments" : "Comentarios"}</LangAnim> ({comments.length})
              </h3>
            </div>

            <div className="space-y-4 mb-8">
               <div className="grid grid-cols-1 gap-4">
                  <input 
                    type="text" 
                    placeholder={language === "en" ? "Name *" : "Nombre *"} 
                    value={newComment.name}
                    onChange={(e) => setNewComment({...newComment, name: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors text-sm"
                  />
               </div>
               <textarea 
                  rows={3} 
                  placeholder={language === "en" ? "Write your message here..." : "Escribe tu mensaje aquí..."}
                  value={newComment.text}
                  onChange={(e) => setNewComment({...newComment, text: e.target.value})}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors text-sm resize-none"
               ></textarea>
               
               <div className="border border-dashed border-white/20 rounded-xl p-4 flex flex-col items-center justify-center text-white/40 hover:bg-white/5 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-2 mb-1">
                     <IconUpload size={18} className="group-hover:text-cyan-400 transition-colors" />
                     <span className="text-sm font-bold group-hover:text-white transition-colors">
                        <LangAnim langKey={language}>{language === "en" ? "Choose Profile Photo" : "Elegir Foto de Perfil"}</LangAnim>
                     </span>
                  </div>
                  <span className="text-[10px]">Max file size: 5MB (Optional)</span>
               </div>

               <button 
                  onClick={handlePostComment}
                  className="w-full py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl text-white font-bold shadow-lg hover:shadow-cyan-500/20 transition-all flex justify-center items-center gap-2"
               >
                  <IconSend size={18} /> 
                  <LangAnim langKey={language}>{language === "en" ? "Post Comment" : "Publicar Comentario"}</LangAnim>
               </button>
            </div>

            <div className="flex-grow overflow-y-auto max-h-[400px] pr-2 space-y-4 custom-scrollbar">
                <AnimatePresence>
                  {comments.map((comment) => (
                    <motion.div 
                      key={comment.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white/5 border border-white/5 rounded-xl p-4 flex gap-4"
                    >
                       <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                             {comment.name.charAt(0).toUpperCase()}
                          </div>
                       </div>
                       <div className="flex-grow">
                          <div className="flex justify-between items-start mb-1">
                             <h4 className="text-white font-bold text-sm">{comment.name}</h4>
                             <span className="text-white/30 text-xs">{comment.time}</span>
                          </div>
                          <p className="text-white/70 text-sm leading-relaxed">{comment.text}</p>
                       </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
            </div>

          </GlassCard>
        </div>

      </div>
    </section>
  );
};

function App() {
  const [language, setLanguage] = useState<"es" | "en">("en");
  const [rotatingWord, setRotatingWord] = useState("Frontend");
  const [activeTab, setActiveTab] = useState<"projects" | "certificates" | "skills">("projects");
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null); 
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  const [activeSection, setActiveSection] = useState("home");
  const scrollRef = useRef<HTMLDivElement>(null);

  const qualifiers = ["Frontend", "Software"];
  const visibleProjects = showAllProjects ? PROJECTS_DATA : PROJECTS_DATA.slice(0, 6);
  
  useEffect(() => {
      const interval = setInterval(() => {
        setRotatingWord(prev => {
              const currentIndex = qualifiers.indexOf(prev);
              const validIndex = currentIndex === -1 ? 0 : currentIndex; 
              const nextIndex = (validIndex + 1) % qualifiers.length;
              return qualifiers[nextIndex];
          });
      }, 9000); 
      return () => clearInterval(interval);
  }, [language]); 

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const scrollPosition = scrollRef.current.scrollTop + 300; 
      const sections = ['home', 'about', 'portfolio', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const toggleLanguage = () => setLanguage((prev) => (prev === "en" ? "es" : "en"));

  const navLinks = [
    { title: language === "en" ? "Home" : "Inicio", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Portfolio", href: "#portfolio" }, 
    { title: language === "en" ? "Contact" : "Contacto", href: "#contact" }, 
  ];

  return (
    <BackgroundGradientAnimation containerClassName="fixed inset-0">
      
      <Navbar links={navLinks} language={language} toggleLanguage={toggleLanguage} activeSection={activeSection} />

      <div 
        ref={scrollRef} 
        className="absolute inset-0 z-10 w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth pt-20"
      >
        
        <section id="home" className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center relative">
            <div className="w-full max-w-6xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }} 
                  className="text-center md:text-left flex flex-col items-center md:items-start justify-center z-20"
                >
                  <div className="mb-2">
                    <span className="text-white/50 font-mono tracking-widest text-sm uppercase">
                      <LangAnim langKey={language}>
                        {language === "en" ? "Hi, I'm a" : "Hola, soy un"}
                      </LangAnim>
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-x-3 justify-center md:justify-start items-baseline">
                    <LangAnim langKey={language}>
                      <WordRotate className="font-cyber text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 py-4 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                        {rotatingWord}
                      </WordRotate>
                    </LangAnim>
                    <span className="font-cyber text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 py-4 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)] -mt-2">
                        Developer
                    </span>
                  </div>
                  <div className="mt-4 text-xl md:text-2xl text-white/80 max-w-lg mx-auto md:mx-0 font-light">
                    <LangAnim langKey={language}>
                        {language === "en" ? "Converting ideas into digital realities." : "Convirtiendo ideas a realidades digitales."}
                    </LangAnim>
                  </div>
                  <div className="flex gap-4 mt-8">
                     <CyberButton href="#portfolio" primary>
                        <LangAnim langKey={language}>{language === "en" ? "View Projects" : "Ver Proyectos"}</LangAnim>
                     </CyberButton>
                     <CyberButton href="#about">
                        <LangAnim langKey={language}>{language === "en" ? "About Me" : "Sobre Mí"}</LangAnim>
                     </CyberButton>
                  </div>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.8, ease: "easeOut" }} 
                    className="hidden md:flex relative w-[140%] -ml-24 h-[700px] items-center justify-center z-10"
                >
                    <Spline scene="https://prod.spline.design/yFCWbKJmFug3nAIg/scene.splinecode" style={{ width: '100%', height: '100%', background: 'transparent' }} />
                </motion.div>
              </div>
            </div>
        </section>

        <NeonLine />

        <section id="about" className="w-full max-w-6xl mx-auto px-6 py-20 scroll-mt-20">
          <div className="text-center mb-12">
               <h2 className="text-4xl font-bold text-white font-cyber tracking-wide mb-2">
                <LangAnim langKey={language}>
                    {language === "en" ? "About Me" : "Sobre Mí"}
                </LangAnim>
              </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 items-center mb-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="text-3xl font-bold text-white mb-2">
                <LangAnim langKey={language}>{language === "en" ? "Hello, I'm" : "Hola, soy"}</LangAnim>
              </h3>
              <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-cyber block mb-6">Manuel</span>
              <div className="text-white/70 leading-relaxed text-lg mb-6 space-y-4 text-justify">
                  <LangAnim langKey={language} className="block w-full">
                    {language === "en" 
                      ? <>I am a Frontend Web Developer passionate about creating high-quality interfaces and seamless user experiences. I specialize in the <span className="text-cyan-400 font-bold">React</span> ecosystem and cross-platform development with <span className="text-cyan-400 font-bold">Flutter Web</span>. Beyond frontend, I bring a comprehensive software vision thanks to my backend experience with <span className="text-purple-400 font-bold">Java (Spring Boot)</span> and data automation/analysis with <span className="text-purple-400 font-bold">Python</span>. I define myself by my ability to solve complex problems and my agility in mastering new technologies and adapting to changing environments.</>
                      : <>Soy un Desarrollador Web Frontend apasionado por crear interfaces de alta calidad y experiencias de usuario fluidas. Mi especialidad es el ecosistema <span className="text-cyan-400 font-bold">React</span> y el desarrollo multiplataforma con <span className="text-cyan-400 font-bold">Flutter Web</span>. Más allá del frontend, aporto una visión integral del software gracias a mi experiencia en backend con <span className="text-purple-400 font-bold">Java (Spring Boot)</span> y automatización/análisis de datos con <span className="text-purple-400 font-bold">Python</span>. Me defino por mi capacidad para resolver problemas complejos y mi agilidad para dominar nuevas tecnologías y adaptarme a entornos cambiantes.</>}
                  </LangAnim>
              </div>
              <div className="flex flex-wrap gap-4">
                 <CyberButton href="#portfolio" primary>
                    <IconCode size={20} />
                    <LangAnim langKey={language}>{language === "en" ? "View Projects" : "Ver Proyectos"}</LangAnim>
                 </CyberButton>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: 0.2 }} 
              className="flex justify-center md:mt-12"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_60px_rgba(139,92,246,0.4)]">
                <img 
                  src="aboutme.jpg" 
                  alt="Manuel Profile" 
                  className="w-full h-full rounded-full object-cover object-top border-4 border-black/50 relative z-10" 
                />
                <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-pulse z-20"></div>
              </div>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard icon={IconCode} number="5+" title={language === "en" ? "TOTAL PROJECTS" : "PROYECTOS TOTALES"} subtitle={language === "en" ? "Innovative web solutions crafted" : "Soluciones web innovadoras creadas"} />
              <StatCard icon={IconCertificate} number="5" title={language === "en" ? "CERTIFICATES" : "CERTIFICADOS"} subtitle={language === "en" ? "Professional skills validated" : "Habilidades profesionales validadas"} />
              <StatCard icon={IconWorld} number={language === "en" ? "3+ Months" : "3+ Meses"} title={language === "en" ? "EXPERIENCE" : "EXPERIENCIA"} subtitle={language === "en" ? "Continuous learning journey" : "Viaje de aprendizaje continuo"} />
          </div>
        </section>

        <NeonLine />

        <section id="portfolio" className="w-full max-w-6xl mx-auto px-6 py-20 scroll-mt-20 mb-20">
           <h2 className="text-4xl font-bold text-white mb-8 text-center font-cyber">
              <LangAnim langKey={language}>{language === "en" ? "My Work & Skills" : "Mi Trabajo y Habilidades"}</LangAnim>
           </h2>

           <div className="flex flex-wrap justify-center gap-4 mb-12">
              <TabButton active={activeTab === "projects"} onClick={() => setActiveTab("projects")}>
                 <LangAnim langKey={language}>{language === "en" ? "Projects" : "Proyectos"}</LangAnim>
              </TabButton>
              <TabButton active={activeTab === "certificates"} onClick={() => setActiveTab("certificates")}>
                 <LangAnim langKey={language}>{language === "en" ? "Certificates" : "Certificados"}</LangAnim>
              </TabButton>
              <TabButton active={activeTab === "skills"} onClick={() => setActiveTab("skills")}>
                 <LangAnim langKey={language}>{language === "en" ? "Tech & Soft Skills" : "Skills Técnicas y Blandas"}</LangAnim>
              </TabButton>
           </div>

           <div className="min-h-[400px]">
              
              <div className={`${activeTab === "projects" ? "block" : "hidden"} animate-in fade-in duration-500`}>
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                      {visibleProjects.map((project) => (
                        <motion.div key={project.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }}>
                          <GlassCard className="group cursor-default border-white/5 hover:border-purple-500/40 flex flex-col h-full">
                            <div className="h-48 rounded-xl mb-6 overflow-hidden border border-white/5 relative">
                              <img src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 font-cyber group-hover:text-purple-300 transition-colors line-clamp-1">{project.title}</h3>
                            <div className="text-white/60 mb-6 text-sm line-clamp-3 flex-grow">
                              <LangAnim langKey={language} className="block w-full">{language === "en" ? project.descEn : project.descEs}</LangAnim>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-auto">
                              {project.tech.map((item, index) => (
                                <TechIcon key={index} icon={item.icon} colorClass={item.color} />
                              ))}
                            </div>
                          </GlassCard>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                </motion.div>

                {PROJECTS_DATA.length > 6 && (
                  <div className="flex justify-center mt-12">
                    <button onClick={() => setShowAllProjects(!showAllProjects)} className="group flex items-center gap-2 px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white/80 hover:text-white transition-all hover:scale-105 active:scale-95">
                      <span>
                        <LangAnim langKey={language}>
                            {showAllProjects 
                            ? (language === "en" ? "Show Less" : "Ver Menos") 
                            : (language === "en" ? "Show More Projects" : "Ver Más Proyectos")}
                        </LangAnim>
                      </span>
                      {showAllProjects ? <IconChevronUp size={18} /> : <IconChevronDown size={18} />}
                    </button>
                  </div>
                )}
              </div>

              <div className={`${activeTab === "certificates" ? "block" : "hidden"} animate-in fade-in duration-500`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {CERTIFICATES_DATA.map((cert) => (
                      <GlassCard key={cert.id} onClick={() => setSelectedImage({ src: cert.image, alt: cert.title })} className="flex items-center gap-4 hover:border-cyan-400/50 transition-colors cursor-zoom-in group">
                        <div className="w-24 h-24 rounded-lg overflow-hidden border border-white/10 flex-shrink-0 relative">
                             <img src={cert.image} alt={cert.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                             <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors"></div>
                        </div>
                        <div>
                           <h4 className="text-white font-bold text-lg line-clamp-1 group-hover:text-cyan-300 transition-colors">{cert.title}</h4>
                           <p className="text-white/60 text-sm">{cert.issuer} - {cert.date}</p>
                        </div>
                     </GlassCard>
                   ))}
                </div>
              </div>

              <div className={`${activeTab === "skills" ? "block" : "hidden"} animate-in fade-in duration-500`}>
                <div className="flex flex-col gap-12">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-8 text-center font-cyber flex items-center justify-center gap-2">
                      <IconCode className="text-purple-400" /> <LangAnim langKey={language}>{language === "en" ? "Technical Stack" : "Stack Técnico"}</LangAnim>
                    </h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                      {TECH_STACK_DATA.map((tech, index) => (
                        <TechGridCard key={index} icon={tech.icon} name={tech.name} colorClass={tech.color} />
                      ))}
                    </div>
                  </div>
                  <NeonLine />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-8 text-center font-cyber flex items-center justify-center gap-2">
                      <IconUsers className="text-cyan-400" /> <LangAnim langKey={language}>{language === "en" ? "Soft Skills" : "Habilidades Blandas"}</LangAnim>
                    </h3>
                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                      {SOFT_SKILLS_DATA.map((skill, index) => (
                        <TechGridCard key={index} icon={skill.icon} name={language === "en" ? skill.nameEn : skill.nameEs} colorClass={skill.color} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
           </div>
        </section>

        <NeonLine />

        <ContactSection language={language} />

        <div className="h-24"></div>
      </div>
      
      <AnimatePresence>
        {selectedImage && (
          <ImageModal src={selectedImage.src} alt={selectedImage.alt} onClose={() => setSelectedImage(null)} />
        )}
      </AnimatePresence>

    </BackgroundGradientAnimation>
  );
}

export default App;
