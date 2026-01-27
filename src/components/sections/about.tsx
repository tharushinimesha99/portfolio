"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Code,
  Database,
  GraduationCap,
  Palette,
  Server,
  Smartphone,
  Sparkles,
  Trophy,
  Calendar,
  Award,
  BookOpen,
} from "lucide-react";
import Image from "next/image";

const stats = [
  {
    label: " Experience",
    value: "1+ Years",
    icon: <GraduationCap className='h-4 w-4' />,
  },
  { label: "Projects", value: "20+", icon: <Code className='h-4 w-4' /> },
  { label: "Tech Stacks", value: "15+", icon: <Sparkles className='h-4 w-4' /> },
  {
    label: "Certifications",
    value: "3+",
    icon: <Award className='h-4 w-4' />,
  },
];

const educationData = [
  {
    degree: "Bachelor's Degree",
    institution: "Sri Lanka Institute of Information Technology",
    period: "June 2021 - June 2025",
    description: "BSc.(Hons) Information Technology Specialization in Information Technology",
    status: "Graduated",
    icon: <GraduationCap className='h-5 w-5' />,
    color: "blue"
  },
  {
    degree: "Advanced Level",
    institution: "Viharamahadevi balika vidyalaya Kiribathgoda.",
    period: "2016 - 2019",
    description: "Physical Science Stream ",
    subjects: [
      "Combined maths - B",
      "Chemistry - S", 
      "Physics - S"
    ],
    icon: <BookOpen className='h-5 w-5' />,
    color: "cyan"
  },
  {
    degree: "Ordinary Level",
    institution: "Weboda North Vidyadeepa Maha Vidyalaya",
    period: "Completed",
    description: "Passed General Certificate Ordinary Level Exam A-8 | C-1",
    icon: <Trophy className='h-5 w-5' />,
    color: "blue"
  }
];

const accomplishments = [
  {
    title: "Data Science Internship",
    organization: "CodeAlpha (Virtual Internship)",
    description:
      "Completed a one-month Data Science internship involving data analysis, basic machine learning concepts, and hands-on practical tasks. Gained exposure to real-world datasets and analytical problem-solving.",
       certificateUrl: "https://drive.google.com/file/d/17zVp58NZcd6qm0dQemcyObaBzsxhFmN1/view?usp=drive_link", 
    icon: <Brain className="h-4 w-4" />,
  },
  {
    title: "Data Science Foundations",
    organization: "Great Learning Academy",
    description:
      "Completed foundational training in Data Science covering data exploration, basic statistics, and analytical thinking with practical exposure.",
      certificateUrl: "https://drive.google.com/file/d/1u3Erw2DhBVxWVzr1X61FG62mDlaWWYHa/view?usp=drive_link", 
    icon: <Database className="h-4 w-4" />,
  },
  {
    title: "Java Programming",
    organization: "Great Learning Academy",
    description:
      "Successfully completed Java Programming course covering OOP concepts, syntax fundamentals, and hands-on programming exercises.",
      certificateUrl: "https://drive.google.com/file/d/1Q1wWiPrBZrkQvzDmAFqWioJsLsZH9UFg/view?usp=drive_link", 
    icon: <Code className="h-4 w-4" />,
  },
  {
  title: "AWS Academy Cloud Foundations",
  organization: "AWS Academy",
  description:
    "Completed Cloud Foundations training covering AWS core services, cloud concepts, security, pricing models, and basic architectural principles.",
    certificateUrl: "https://drive.google.com/file/d/1LmYlzvE9AZyUAdgGZcONXGUNeXP6whgw/view?usp=drive_link", 
  icon: <Server className="h-4 w-4" />,
}

];


export function AboutSection() {
  return (
    <section id='about' className='relative py-16 overflow-hidden'>
      <div className='container mx-auto px-4 relative max-w-7xl'>
        {/* Header */}
        <div className='text-center mb-12'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='inline-block mb-4'
          >
            <div className='relative px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-lg'>
              <span className='text-sm font-medium text-blue-400'>
                BSC (HONS) INFORMATION TECHNOLOGY STUDENT
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white'
          >
            About <span className='text-blue-400'>Me</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-lg text-gray-400 max-w-3xl mx-auto'
          >
           Laravel-focused full-stack developer with hands-on experience in building scalable web systems, currently expanding skills in data analytics and data-driven problem solving.
          </motion.p>
        </div>

        {/* Stats */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-16'>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='text-center p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300'
            >
              <div className='flex justify-center mb-3'>
                <div className='p-2 rounded-full bg-blue-500/20 text-blue-400'>
                  {stat.icon}
                </div>
              </div>
              <div className='text-2xl font-bold text-blue-400 mb-1'>
                {stat.value}
              </div>
              <div className='text-sm text-gray-400'>{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16'>
          {/* Personal Info & Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='space-y-6'
          >
            <div className='relative w-full h-[400px] rounded-2xl overflow-hidden border-2 border-blue-500/20 shadow-2xl'>
              <Image
                src='/banner4.jpg'
                alt='Tharushi Nimesha'
                fill
                className='object-cover object-center'
                sizes='(max-width: 768px) 100vw, 50vw'
                priority
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent' />
              
              <div className='absolute bottom-4 left-4 right-4 backdrop-blur-lg bg-black/80 p-4 rounded-lg border border-blue-500/30'>
                <h3 className='font-bold text-white mb-2'>
                  Tharushi Nimesha
                </h3>
                <p className='text-sm text-blue-400 flex items-center gap-2'>
                  <GraduationCap className='h-4 w-4' />
                  Information Technology graduate student at SLIIT
                </p>
              </div>
            </div>

            <div className='space-y-4'>
              <p className='text-gray-400 leading-relaxed'>
                I am an Information Technology graduate student with practical experience in full-stack web development, specializing in Laravel, PHP, MySQL, and modern JavaScript frameworks. I have worked on developing modular systems such as Management Information Systems (MIS), implementing features including CRUD operations, dashboards, role-based access control, data validation, and secure database management. I enjoy building clean, scalable, and user-focused applications that solve real-world problems.
              </p>

              <p className='text-gray-400 leading-relaxed'>
              Alongside my web development background, I have a strong interest in Data Analytics and Data Science. I am actively developing my skills in data exploration, basic statistical analysis, and data-driven insights through internships, certifications, and hands-on learning. I am highly motivated to continuously learn and adapt to new technologies and domains, and I am open to exploring diverse areas where technology can create meaningful impact.
              </p>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='space-y-6'
          >
            <h3 className='text-2xl font-bold text-white mb-6 flex items-center gap-2'>
              <GraduationCap className='h-6 w-6 text-blue-400' />
              Education
            </h3>

            <div className='space-y-4'>
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-4 rounded-xl bg-gradient-to-br from-${edu.color}-500/10 to-cyan-500/10 border border-${edu.color}-500/20 hover:border-${edu.color}-500/40 transition-all duration-300`}
                >
                  <div className='flex items-start gap-3'>
                    <div className={`p-2 rounded-lg bg-${edu.color}-500/20 text-${edu.color}-400 flex-shrink-0`}>
                      {edu.icon}
                    </div>
                    <div className='flex-1'>
                      <h4 className='font-semibold text-white mb-1'>{edu.degree}</h4>
                      <p className='text-blue-400 text-sm mb-1'>{edu.institution}</p>
                      <p className='text-gray-400 text-sm mb-2'>{edu.period}</p>
                      <p className='text-gray-300 text-sm'>{edu.description}</p>
                      {edu.subjects && (
                        <div className='mt-2 space-y-1'>
                          {edu.subjects.map((subject) => (
                            <p key={subject} className='text-xs text-gray-400'>
                              • {subject}
                            </p>
                          ))}
                        </div>
                      )}
                      {edu.status && (
                        <span className='inline-block mt-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full'>
                          {edu.status}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Accomplishments Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='space-y-6'
        >
          <h3 className='text-2xl font-bold text-white mb-6 flex items-center gap-2'>
            <Award className='h-6 w-6 text-blue-400' />
            Certifications & Accomplishments
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {accomplishments.map((accomplishment, index) => (
              <motion.div
                key={accomplishment.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300'
              >
                <div className='flex items-start gap-3'>
                  <div className='p-2 rounded-lg bg-cyan-500/20 text-cyan-400 flex-shrink-0'>
                    {accomplishment.icon}
                  </div>
                  <div className='flex-1'>
                    <h4 className='font-semibold text-white mb-1 text-sm'>
                      {accomplishment.title}
                    </h4>
                    <p className='text-cyan-400 text-xs mb-2'>
                      {accomplishment.organization}
                    </p>
                   <p className='text-gray-400 text-xs leading-relaxed mb-2'>
                    {accomplishment.description}
                  </p>

                  {accomplishment.certificateUrl && (
                    <a
                      href={accomplishment.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                    >
                      View Certificate →
                    </a>
                  )}

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className='text-center mt-12'
        >
          <button
            className='inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm group'
            onClick={() => {
              const skillsElement = document.getElementById("skills");
              if (skillsElement) {
                skillsElement.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <span>Explore My Technical Skills</span>
            <ArrowRight className='h-4 w-4 group-hover:translate-x-1 transition-transform' />
          </button>
        </motion.div>
      </div>
    </section>
  );
}