"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  Code2, 
  Server, 
  Database,
  Sparkles,
  Download,
  Mail,
  ChevronDown,
  Github,
  Linkedin
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const techStack = [
  { icon: <Code2 className='h-4 w-4' />, name: "Frontend", delay: 0 },
  { icon: <Server className='h-4 w-4' />, name: "Backend", delay: 0.3 },
  { icon: <Database className='h-4 w-4' />, name: "Database", delay: 0.6 },
];

const floatingParticles = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 2,
}));

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  const springConfig = { damping: 25, stiffness: 700 };
  const mouseX = useSpring(mousePosition.x, springConfig);
  const mouseY = useSpring(mousePosition.y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 60;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
        <section
      ref={containerRef}
     className="sm:mt-18 mt-24"
      id='home'
       
    >
      <div className='sm:my-20 my-4 mx-auto px-4 relative z-10 max-w-7xl'>
        <div className='grid lg:grid-cols-12 gap-8 items-center'>
          {/* Content Section */}
          <motion.div
            className='lg:col-span-7 space-y-6 -mt-8'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='inline-block'
            >
              <div className='group relative'>
                <div className='absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300' />
                <div className='relative px-4 py-2 rounded-full bg-black/60 backdrop-blur-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300'>
                  <div className='flex items-center gap-2'>
                    <motion.div
                      className='w-2 h-2 bg-green-400 rounded-full'
                      animate={{ 
                        boxShadow: [
                          "0 0 0 0 rgba(74, 222, 128, 0.7)",
                          "0 0 0 8px rgba(74, 222, 128, 0)",
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className='text-sm font-medium text-blue-300'>
                      Available for opportunities
                    </span>
                    <Sparkles className='w-4 h-4 text-cyan-400' />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div className='space-y-4'>
              <motion.h1
                className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.span 
                  className='block text-white mb-2'
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Hi, I'm{" "}
                  <motion.span
                    className='relative inline-block'
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Gradient Name with Better Fallback */}
                    <span 
                      className='font-extrabold relative'
                      style={{
                        // Fallback color for older devices
                        color: '#60a5fa',
                        // Modern gradient overlay
                        background: 'linear-gradient(45deg, #60a5fa, #22d3ee, #3b82f6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        // Fallback using text-shadow for extra visibility
                        textShadow: '0 0 30px rgba(96, 165, 250, 0.5)',
                      }}
                    >
                      Nimesha
                    </span>
                    
                    {/* Alternative approach using multiple layers */}
                    <span 
                      className='absolute inset-0 font-extrabold opacity-0 hover:opacity-100 transition-opacity duration-300'
                      style={{
                        background: 'linear-gradient(45deg, #22d3ee, #60a5fa, #06b6d4)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      Nimesha
                    </span>
                    
                    <motion.div
                      className='absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full'
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    />
                  </motion.span>
                </motion.span>
                
                <motion.span
                  className='block text-white'
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  style={{
                    // Fallback for older devices
                    color: '#ffffff',
                    // Modern gradient for supported devices
                    background: 'linear-gradient(45deg, #ffffff, #e5e7eb, #ffffff)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                  }}
                >
                  Full Stack Developer
                </motion.span>
              </motion.h1>

              <motion.p
                className='text-lg text-gray-300 max-w-2xl leading-relaxed'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Passionate about creating innovative digital solutions with modern technologies. 
                Specializing in seamless user experiences and robust backend systems.
              </motion.p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className='flex flex-wrap gap-4 pt-4'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size='lg'
                  className='group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 px-6 py-3 font-semibold shadow-2xl'
                  onClick={() => scrollToSection("contact")}
                >
                  <motion.div
                    className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0'
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className='relative z-10 flex items-center gap-2'>
                    <Mail className='w-4 h-4' />
                    Let's Connect
                    <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' />
                  </span>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size='lg'
                  variant='outline'
                  className='border-2 border-blue-500/40 hover:border-blue-400/60 bg-black/20 hover:bg-blue-500/10 text-blue-300 hover:text-blue-200 px-6 py-3 font-semibold backdrop-blur-sm'
                  onClick={() => scrollToSection("projects")}
                >
                  <span className='flex items-center gap-2'>
                    <Download className='w-4 h-4' />
                    View Portfolio
                  </span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className='flex items-center gap-4 pt-4'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <span className='text-sm text-gray-400'>Follow me:</span>
              {[
                { icon: <Github className='w-4 h-4' />, href: "https://github.com/tharushinimesha99", label: "GitHub" },
                { icon: <Linkedin className='w-4 h-4' />, href: "https://www.linkedin.com/in/tharushi-nimesha/", label: "LinkedIn" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className='p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 hover:text-blue-300 transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40'
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section - FIXED for all screen sizes */}
          <motion.div
            className='lg:col-span-5 relative '
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className='relative w-full max-w-md mx-auto'>
              {/* Mobile and Tablet - Rectangular with proper height */}
              <motion.div
                className='lg:hidden relative w-full h-[350px] sm:h-[400px] md:h-[450px] rounded-2xl overflow-hidden border-4 border-transparent bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-1 shadow-2xl backdrop-blur-xl'
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className='relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-black'>
                  <Image
                    src='/banner5.jpg'
                    alt='Tharushi Nimesha'
                    fill
                    className='object-cover object-top'
                    sizes='(max-width: 768px) 90vw, (max-width: 1024px) 60vw, 50vw'
                    priority
                    quality={90}
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />
                  
                  <motion.div
                    className='absolute inset-0 rounded-xl border-2 border-gradient-to-r from-blue-400/50 to-cyan-400/50'
                    animate={{
                      borderColor: [
                        "rgba(59,130,246,0.5)",
                        "rgba(34,211,238,0.5)",
                        "rgba(59,130,246,0.5)"
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
              </motion.div>

              {/* Desktop - Circular */}
              <motion.div
                className='hidden lg:block relative w-full max-w-lg mx-auto'
                whileHover={{ scale: 1.05, rotateY: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className='absolute inset-0 rounded-full border-2 border-gradient-to-r from-blue-500/30 to-cyan-500/30'
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ scale: 1.1 }}
                />
                
                <div className='relative aspect-square rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-1 shadow-2xl backdrop-blur-xl'>
                  <div className='relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-900 to-black'>
                    <Image
                      src='/banner5.jpg'
                      alt='Tharushi Nimesha'
                      fill
                      className='object-cover object-center'
                      sizes='(min-width: 1024px) 40vw, 50vw'
                      priority
                      quality={90}
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent' />
                    
                    <motion.div
                      className='absolute inset-0 rounded-full border-2 border-gradient-to-r from-blue-400/50 to-cyan-400/50'
                      animate={{
                        borderColor: [
                          "rgba(59,130,246,0.5)",
                          "rgba(34,211,238,0.5)",
                          "rgba(59,130,246,0.5)"
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </div>
                </div>

                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className='absolute w-3 h-3 rounded-full bg-gradient-to-r from-blue-400/60 to-cyan-400/60 backdrop-blur-sm'
                    style={{
                      top: `${20 + Math.cos((i * Math.PI * 2) / 6) * 40}%`,
                      left: `${50 + Math.sin((i * Math.PI * 2) / 6) * 40}%`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 0.8, 0.4],
                      y: [-10, 10, -10],
                    }}
                    transition={{
                      duration: 2 + i * 0.3,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </motion.div>

              <motion.div
                className='absolute inset-0 rounded-2xl lg:rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-2xl -z-10'
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

 
    </section>
  );
}