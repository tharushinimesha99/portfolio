"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { 
  Sparkles, 
  Zap, 
  Layout, 
  Server, 
  Database, 
  Smartphone, 
  Cloud, 
  Brain,
  Code,
  Layers
} from "lucide-react";

const technologies = [
  { name: "React", src: "/icons/react.svg" },
  { name: "Next.js", src: "/icons/nextjs-icon.svg" },
  { name: "TypeScript", src: "/icons/typescript-icon.svg" },
  { name: "Node.js", src: "/icons/nodejs-icon.svg" },
  { name: "Python", src: "/icons/python.svg" },
  { name: "Java", src: "/icons/java.svg" },
  { name: "Kotlin", src: "/icons/kotlin-icon.svg" },
  { name: "MongoDB", src: "/icons/mongodb.svg" },
  { name: "PostgreSQL", src: "/icons/postgresql.svg" },
  { name: "MySQL", src: "/icons/mysql.svg" },
  { name: "Firebase", src: "/icons/firebase.svg" },
  { name: "Supabase", src: "/icons/supabase-icon.svg" },
  { name: "AWS", src: "/icons/aws.svg" },
  { name: "Docker", src: "/icons/docker-icon.svg" },
  { name: "Git", src: "/icons/git-icon.svg" },
  { name: "TailwindCSS", src: "/icons/tailwindcss-icon.svg" },
  { name: "Framer Motion", src: "/icons/framer.svg" },
  { name: "Express", src: "/icons/express1.png" },
  { name: "Expo", src: "/icons/expo.svg" },
  { name: "TensorFlow", src: "/icons/tensorflow.svg" },
  { name: "VS Code", src: "/icons/visual-studio-code.svg" },
  { name: "Vite", src: "/icons/vitejs.svg" },
  { name: "Postman", src: "/icons/postman-icon.svg" },
];

const skillAreas = [
  {
    title: "Frontend Development",
    icon: <Layout className="h-4 w-4 sm:h-5 md:h-6 sm:w-5 md:w-6" />,
    skills: ["React", "Next.js", "JavaScript / TypeScript", "Tailwind CSS", "Framer Motion"],
    gradient: "from-blue-500 to-cyan-500",
    description: "Creating beautiful, responsive user interfaces"
  },
  {
    title: "Backend Development", 
    icon: <Server className="h-4 w-4 sm:h-5 md:h-6 sm:w-5 md:w-6" />,
    skills: ["Node.js", "Python", "PHP", "Laravel", "REST APIs"],
    gradient: "from-cyan-500 to-blue-500",
    description: "Building robust server-side applications"
  },
  {
    title: "Database Management",
    icon: <Database className="h-4 w-4 sm:h-5 md:h-6 sm:w-5 md:w-6" />,
    skills: ["MongoDB", "PostgreSQL", "Firebase", "MySQL"],
    gradient: "from-blue-600 to-cyan-600",
    description: "Designing efficient data storage solutions"
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="h-4 w-4 sm:h-5 md:h-6 sm:w-5 md:w-6" />,
    skills: ["React Native", "Flutter", "Kotlin", "Expo"],
    gradient: "from-cyan-600 to-blue-600",
    description: "Cross-platform mobile applications"
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="h-4 w-4 sm:h-5 md:h-6 sm:w-5 md:w-6" />,
    skills: ["AWS", "Docker", "Git", "CI/CD"],
    gradient: "from-blue-500 to-cyan-500",
    description: "Deployment and scaling solutions"
  },
  {
    title: "AI & Machine Learning",
    icon: <Brain className="h-4 w-4 sm:h-5 md:h-6 sm:w-5 md:w-6" />,
    skills: ["TensorFlow", "Python", "Data Analysis", "Neural Networks"],
    gradient: "from-cyan-500 to-blue-500",
    description: "Intelligent systems and automation"
  }
];

// Compact Tech Icon Component with Mobile Responsiveness
const TechIcon = ({ tech, index }: { tech: { name: string; src: string }, index: number }) => (
  <motion.div
    className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 p-2 sm:p-2.5 md:p-3 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 group cursor-pointer"
    whileHover={{ scale: 1.1, y: -4 }}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.02 }}
  >
    <div className="relative w-full h-full">
      <Image
        src={tech.src}
        alt={tech.name}
        fill
        className="object-contain filter group-hover:drop-shadow-lg transition-all duration-300"
      />
    </div>
  </motion.div>
);

// Infinite Scroll Marquee
const ScrollMarquee = ({ children, direction = "left", speed = 20 }: {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
}) => {
  return (
    <div className="overflow-hidden relative">
      <div className="absolute left-0 top-0 w-10 sm:w-16 md:w-20 h-full bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 w-10 sm:w-16 md:w-20 h-full bg-gradient-to-l from-black to-transparent z-10" />
      <motion.div
        className="flex gap-2 sm:gap-3 md:gap-4"
        animate={{
          x: direction === "left" ? [0, -1536] : [-1536, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
};

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const firstRow = technologies.slice(0, 12);
  const secondRow = technologies.slice(12);

  return (
    <section id='skills' className='w-full py-8 sm:py-10 md:py-12 relative overflow-x-hidden overflow-y-visible bg-gradient-to-b from-transparent via-blue-950/20 to-transparent'>
      {/* Header */}
      <div className='container mx-auto px-3 sm:px-4 max-w-7xl mb-6 sm:mb-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center'
        >
          <motion.div
            className='inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs sm:text-sm font-medium border border-blue-500/30 mb-3 sm:mb-4'
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
            Tech Stack
          </motion.div>

          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white'>
            Skills & <span className='text-blue-400'>Technologies</span>
          </h2>

          <p className='text-sm sm:text-base text-gray-400 max-w-2xl mx-auto'>
            Technologies I use to bring ideas to life 
          </p>
        </motion.div>
      </div>

      {/* Full Width Technology Marquee */}
      <div className="mb-8 sm:mb-10 md:mb-12 space-y-3 sm:space-y-4">
        <ScrollMarquee direction="left" speed={25}>
          {firstRow.map((tech, index) => (
            <TechIcon key={`${tech.name}-1`} tech={tech} index={index} />
          ))}
        </ScrollMarquee>

        <ScrollMarquee direction="right" speed={30}>
          {secondRow.map((tech, index) => (
            <TechIcon key={`${tech.name}-2`} tech={tech} index={index} />
          ))}
        </ScrollMarquee>
      </div>

      {/* Advanced Skills Showcase */}
      <div className='container mx-auto px-3 sm:px-4 max-w-7xl'>
        <motion.div
          ref={ref}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6'
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ staggerChildren: 0.1 }}
        >
          {skillAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='group relative overflow-hidden'
            > 
              <div className='relative p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-blue-500/20 bg-gradient-to-br from-black/40 via-black/20 to-transparent backdrop-blur-sm hover:border-blue-500/40 transition-all duration-500 h-full'>
                {/* Animated Background Pattern */}
                <div className='absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500' />
                
                {/* Header */}
                <div className='flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 relative z-10'>
                  <motion.div 
                    className={`p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${area.gradient} bg-opacity-20 text-white group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    {area.icon}
                  </motion.div>
                  <div>
                    <h3 className='text-sm sm:text-base md:text-lg font-bold text-white mb-0.5 sm:mb-1'>
                      {area.title}
                    </h3>
                    <p className='text-xs text-gray-400 hidden sm:block'>
                      {area.description}
                    </p>
                  </div>
                </div>

                {/* Skills Tags */}
                <div className='flex flex-wrap gap-1.5 sm:gap-2 relative z-10'>
                  {area.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className='px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:border-blue-400/50 hover:bg-blue-500/20 hover:text-white transition-all duration-300'
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        delay: skillIndex * 0.05 + index * 0.1 + 0.3,
                        duration: 0.3,
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Bottom Accent Line */}
                <div className='absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className='text-center mt-8 sm:mt-10 md:mt-12'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.button
            className='inline-flex items-center gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-xs sm:text-sm text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const experienceElement = document.getElementById("experience");
              if (experienceElement) {
                experienceElement.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <Zap className="h-3 w-3 sm:h-4 sm:w-4" />
            View My Experience
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}