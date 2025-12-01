import {
  IconHtml, IconBrandPython, IconBrandFigma, IconBolt, IconBulb, IconUsers,
  IconCertificate, IconCode, IconBrandReact, IconBrandTailwind, IconBrandVite,
  IconBrandJavascript, IconBrandCss3, IconBrandFlutter, IconCoffee, IconLeaf,
  IconSql, IconBrandMongodb, IconBrandNodejs, IconGitFork, IconBrandNextjs,
  IconDeviceDesktopAnalytics, IconMessageChatbot, IconBrain, IconRocket,
  IconBrandTypescript, IconWifi, IconChartCandle, IconRobot, IconPalette
} from "@tabler/icons-react";

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "E-Commerce Microservices",
    descEn: "Scalable e-commerce backend built with Spring Boot microservices, Kafka for event-streaming, and PostgreSQL.",
    descEs: "Backend de comercio electrónico escalable construido con microservicios Spring Boot, Kafka para streaming de eventos y PostgreSQL.",
    image: "https://picsum.photos/id/1/600/400",
    tech: [
      { icon: IconLeaf, color: "bg-green-500/80" },
      { icon: IconCoffee, color: "bg-red-500/80" },
      { icon: IconSql, color: "bg-blue-500/80" },
      { icon: IconGitFork, color: "bg-orange-500/80" },
    ]
  },
  {
    id: 2,
    title: "AI Analytics Dashboard",
    descEn: "Real-time data visualization dashboard using React, Python for data processing, and machine learning models.",
    descEs: "Panel de visualización de datos en tiempo real usando React, Python para procesamiento de datos y modelos de aprendizaje.",
    image: "https://picsum.photos/id/20/600/400",
    tech: [
      { icon: IconBrandReact, color: "bg-cyan-500/80" },
      { icon: IconBrandPython, color: "bg-yellow-500/80" },
      { icon: IconBrandTailwind, color: "bg-blue-400/80" },
      { icon: IconDeviceDesktopAnalytics, color: "bg-purple-500/80" },
    ]
  },
  {
    id: 3,
    title: "Fitness Cross-Platform App",
    descEn: "Mobile application for workout tracking developed with Flutter, Firebase, and integrated with wearable APIs.",
    descEs: "Aplicación móvil para seguimiento de entrenamiento desarrollada con Flutter, Firebase e integrada con wearables.",
    image: "https://picsum.photos/id/96/600/400",
    tech: [
      { icon: IconBrandFlutter, color: "bg-blue-500/80" },
      { icon: IconBrandMongodb, color: "bg-green-500/80" }, 
    ]
  },
  {
    id: 4,
    title: "Next.js Corporate Portal",
    descEn: "High-performance corporate website with server-side rendering, CMS integration, and advanced SEO.",
    descEs: "Sitio web corporativo de alto rendimiento con renderizado del lado del servidor, integración con CMS y SEO avanzado.",
    image: "https://picsum.photos/id/180/600/400",
    tech: [
      { icon: IconBrandNextjs, color: "bg-black/80" },
      { icon: IconBrandReact, color: "bg-cyan-500/80" },
      { icon: IconBrandTailwind, color: "bg-blue-400/80" },
      { icon: IconBrandTypescript, color: "bg-blue-600/80" },
    ]
  },
  {
    id: 5,
    title: "IoT Device Manager",
    descEn: "Full-stack application to monitor and control IoT devices using Node.js, MQTT, and a React frontend.",
    descEs: "Aplicación full-stack para monitorear y controlar dispositivos IoT usando Node.js, MQTT y un frontend en React.",
    image: "https://picsum.photos/id/250/600/400",
    tech: [
      { icon: IconBrandNodejs, color: "bg-green-600/80" },
      { icon: IconBrandReact, color: "bg-cyan-500/80" },
      { icon: IconWifi, color: "bg-blue-500/80" }, 
    ]
  },
  {
    id: 6,
    title: "Python Trading Bot",
    descEn: "Automated trading bot that analyzes market trends and executes trades using Python and financial APIs.",
    descEs: "Bot de trading automatizado que analiza tendencias del mercado y ejecuta operaciones usando Python y APIs financieras.",
    image: "https://picsum.photos/id/367/600/400",
    tech: [
      { icon: IconBrandPython, color: "bg-yellow-500/80" },
      { icon: IconChartCandle, color: "bg-green-500/80" }, 
      { icon: IconRobot, color: "bg-purple-500/80" }, 
    ]
  },
  {
    id: 7,
    title: "Vite Design System & UI Kit",
    descEn: "A complete component library built with Vanilla JavaScript and Vite, designed in Figma. Lightweight and reusable.",
    descEs: "Una librería de componentes completa construida con JavaScript Vanilla y Vite, diseñada en Figma. Ligera y reutilizable.",
    image: "https://picsum.photos/id/400/600/400",
    tech: [
      { icon: IconBrandVite, color: "bg-purple-500/80" },
      { icon: IconBrandJavascript, color: "bg-yellow-500/80" },
      { icon: IconBrandFigma, color: "bg-pink-500/80" },
      { icon: IconPalette, color: "bg-orange-500/80" }, 
    ]
  }
];

export const CERTIFICATES_DATA = [
  { id: 1, title: "Meta Front-End Developer", issuer: "Coursera", date: "2024", image: "https://picsum.photos/id/10/800/600" },
  { id: 2, title: "Oracle Certified Professional: Java SE 17 Developer", issuer: "Oracle", date: "2023", image: "https://picsum.photos/id/20/800/600" },
  { id: 3, title: "Google Data Analytics Professional Certificate", issuer: "Coursera", date: "2023", image: "https://picsum.photos/id/30/800/600" },
  { id: 4, title: "Flutter Certified Application Developer", issuer: "Google", date: "2024", image: "https://picsum.photos/id/40/800/600" },
];

export const TECH_STACK_DATA = [
  { icon: IconHtml, name: "HTML5", color: "bg-orange-500/20" },
  { icon: IconBrandCss3, name: "CSS3", color: "bg-blue-500/20" },
  { icon: IconBrandJavascript, name: "JavaScript", color: "bg-yellow-500/20" },
  { icon: IconBrandTypescript, name: "TypeScript", color: "bg-blue-600/20" },
  { icon: IconBrandReact, name: "React", color: "bg-cyan-500/20" },
  { icon: IconBrandNextjs, name: "Next.js", color: "bg-black/20" },
  { icon: IconBrandTailwind, name: "Tailwind", color: "bg-blue-400/20" },
  { icon: IconBrandVite, name: "Vite", color: "bg-purple-500/20" },
  { icon: IconBrandFlutter, name: "Flutter", color: "bg-blue-500/20" },
  { icon: IconBrandPython, name: "Python", color: "bg-yellow-500/20" },
  { icon: IconCoffee, name: "Java", color: "bg-red-500/20" }, 
  { icon: IconLeaf, name: "Spring Boot", color: "bg-green-500/20" }, 
  { icon: IconBrandNodejs, name: "Node.js", color: "bg-green-600/20" },
  { icon: IconSql, name: "SQL", color: "bg-blue-500/20" },
  { icon: IconBrandMongodb, name: "MongoDB", color: "bg-green-500/20" },
  { icon: IconGitFork, name: "Git", color: "bg-orange-500/20" },
  { icon: IconBrandFigma, name: "Figma", color: "bg-pink-500/20" },
];

export const SOFT_SKILLS_DATA = [
  { nameEn: "Problem Solving", nameEs: "Resolución de Problemas", icon: IconBulb, color: "bg-yellow-500/20" },
  { nameEn: "Teamwork", nameEs: "Trabajo en Equipo", icon: IconUsers, color: "bg-blue-500/20" },
  { nameEn: "Adaptability", nameEs: "Adaptabilidad", icon: IconBolt, color: "bg-purple-500/20" },
  { nameEn: "Communication", nameEs: "Comunicación", icon: IconMessageChatbot, color: "bg-green-500/20" },
  { nameEn: "Critical Thinking", nameEs: "Pensamiento Crítico", icon: IconBrain, color: "bg-red-500/20" },
  { nameEn: "Proactivity", nameEs: "Proactividad", icon: IconRocket, color: "bg-orange-500/20" },
];