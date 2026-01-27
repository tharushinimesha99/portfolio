"use client";

import { motion, useInView } from "framer-motion";
import {
  Building,
  CalendarDays,
  CheckCircle2,
  Medal,
  Sparkles,
  TrendingUp,
  Code2,
  Database,
  Server,
  Users,
  Zap,
  Globe,
  ChevronDown,
  ChevronUp,
  Brain
} from "lucide-react";
import { useRef, useState } from "react";

const experiences = [
  {
    title: "MIS Developer (Intern → Junior Full-Stack Web Developer)",
    company: "Smallholder Agribusiness and Resilience Project (SARP) – Ministry of Agriculture, Sri Lanka",
    period: "April 2024 – October 2025 (6 months Internship + 8 months Junior Role)",
    type: "Project-based / Government Project",
    description:
      "Contributed to the end-to-end design, development, and deployment of a modular Management Information System (MIS) to support structured monitoring, reporting, and data-driven decision-making across multiple project components.",
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "Blade",
      "JavaScript",
      "HTML/CSS",
      "Bootstrap",
      "Tailwind CSS",
      "Git & GitHub",
      "Postman",
      "Power BI",
      "Jupyter Notebook"
    ],
    highlights: [
      "Worked closely with module specialists and project stakeholders to gather requirements, define KPIs, and translate monitoring needs into system features and data structures",
      "Designed and developed multiple interconnected MIS modules, including Beneficiary Management, Infrastructure, Training, EOI, Livestock, and Tank Rehabilitation",
      "Implemented full CRUD functionality, dynamic dashboards, and structured reporting with CSV and PDF export/import capabilities",
      "Developed bulk data upload workflows with validation, preprocessing, data cleaning, and duplicate detection to ensure data quality and consistency",
      "Implemented role-based access control (RBAC) and module-level permissions using custom middleware for secure and controlled system access",
      "Designed relational database schemas using one-to-many and many-to-many relationships to manage complex datasets efficiently",
      "Integrated advanced search, filtering, sorting, and pagination features to support large-scale data retrieval and usability",
      "Supported deployment, configuration, and maintenance of the MIS using Hostinger (cPanel), SSH, DNS configuration, SSL certificates, and Git-based version control",
      "Performed debugging, testing, and basic performance optimization to ensure system reliability, security, and stability"
    ],
    achievements: [
      { label: "MIS Modules Delivered", value: "6+" },
      { label: "Data Records Processed", value: "10,000+" },
      { label: "Project Engagement", value: "1.5 Years" }
    ],
    
    icon: <Sparkles className='h-4 w-4' />,
    color: "blue",
    projects: [
  {
    name: "SARP MIS – Centralized Dashboard & Reporting",
    description:
      "Built a centralized MIS dashboard layer to monitor project progress across modules with interactive charts, summary indicators, and module-wise reporting.",
    tech: ["Laravel", "MySQL", "Blade", "JavaScript", "Chart.js", "Bootstrap"],
    details:
      "Implemented module summaries, KPI cards, and visual analytics (e.g., participant distributions, province coverage, crop distribution) to support management reporting and decision-making.",
    icon: <Sparkles className="h-4 w-4" />
  },
  {
    name: "Livestock Module (Filtered Beneficiary Sub-System)",
    description:
      "Designed and developed a Livestock sub-module under Beneficiary Management to identify livestock beneficiaries, maintain livestock-related profiles, and track activities through a dedicated workflow.",
    tech: ["Laravel", "MySQL", "Blade", "RBAC", "Search/Filter"],
    details:
      "Implemented filtering to segment livestock beneficiaries, created a separate module view, and developed full CRUD with validation, permissions, and export-ready structured records.",
    icon: <Users className="h-4 w-4" />
  },
  {
    name: "Tank Rehabilitation Module (GIS + Contract Tracking)",
    description:
      "Developed the Tank Rehabilitation module to track rehabilitation progress, contract information, payment status, and geographic distribution of tanks.",
    tech: ["Laravel", "MySQL", "Leaflet.js", "OpenStreetMap", "CSV Import", "PDF/CSV Export"],
    details:
      "Implemented tank location mapping, contract details pages (contractor, amount, dates, progress, IPC), progress cards, construction image tracking, and report generation for monitoring.",
    icon: <Database className="h-4 w-4" />
  }
]

  },
  {
  title: "Intern Full Stack Web Developer",
  company: "Smallholder Agribusiness and Resilience Project (SARP) – Ministry of Agriculture, Sri Lanka",
  period: "Apr 2024 – Sep 2024",
  type: "Internship",
  description:
    "Contributed to the initial design and development of a government-scale Management Information System (MIS) by supporting UI/UX design, core module development, and structured data management workflows.",
  technologies: [
    "Laravel",
    "MySQL",
    "Blade",
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript",
    "Git"
  ],
  highlights: [
    "Designed and implemented UI/UX layouts for core MIS modules following stakeholder requirements",
    "Developed full CRUD operations for Beneficiary Management with form validation and relational data handling",
    "Built the Community Development Forum (CDF) module including CDF registration, member management, and detailed views",
    "Implemented search, filtering, pagination, and CSV upload features for structured data entry",
    "Collaborated with module specialists to translate monitoring requirements into functional system components",
    "Supported data cleaning and duplicate identification during bulk beneficiary data uploads"
  ],
  achievements: [
    { label: "Core Modules Built", value: "3+" },
    { label: "CRUD Screens Developed", value: "15+" },
    { label: "Datasets Structured", value: "1,000+" }
  ],
  icon: <Sparkles className="h-4 w-4" />,
  color: "blue",
  projects: [
    {
      name: "Beneficiary Management Module",
      description:
        "Core MIS module developed to register, manage, and monitor beneficiary profiles with household, demographic, and production-related information.",
      tech: ["Laravel", "MySQL", "Blade", "Bootstrap"],
      details:
        "Implemented beneficiary CRUD operations, household member tracking, NIC-based duplicate detection, bulk CSV uploads, and location mapping support.",
      icon: <Users className="h-4 w-4" />
    },
    {
      name: "Community Development Forum (CDF) Module",
      description:
        "Module developed to manage Community Development Forums and their registered members across administrative divisions.",
      tech: ["Laravel", "MySQL", "Blade", "JavaScript"],
      details:
        "Built CDF registration, member management, administrative hierarchy mapping (Province, District, DS, GN), and member-level reporting views.",
      icon: <Database className="h-4 w-4" />
    },
    {
      name: "UI/UX & Data Entry Interfaces",
      description:
        "Designed clean, user-friendly interfaces to support data entry, validation, and navigation across MIS modules.",
      tech: ["HTML", "CSS", "Bootstrap", "Blade"],
      details:
        "Focused on form usability, consistency, and accessibility to improve data accuracy and user adoption by project staff.",
      icon: <Sparkles className="h-4 w-4" />
    }
  ]

  },
  {
  title: "Data Science Intern",
  company: "CodeAlpha (Virtual Internship)",
  period: "Feb 2024 – Mar 2024",
  type: "Internship",
  description:
    "Completed a one-month Data Science internship focused on applying statistical analysis and machine learning techniques to real-world datasets through hands-on predictive modeling projects.",
  technologies: [
    "Python",
    "Jupyter Notebook",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Scikit-learn"
  ],
  highlights: [
    "Performed data preprocessing, cleaning, and feature engineering on structured datasets",
    "Built and evaluated machine learning models using regression and classification techniques",
    "Applied data visualization techniques to analyze trends and communicate insights effectively",
    "Worked with real-world datasets to develop end-to-end predictive analytics workflows"
  ],
  achievements: [
    { label: "ML Projects Completed", value: "3" },
    { label: "Models Implemented", value: "5+" },
    { label: "Datasets Analyzed", value: "Multiple" }
  ],
  icon: <Brain className="h-4 w-4" />,
  color: "cyan",
  projects: [
    {
      name: "Titanic Survival Prediction System",
      description:
        "Developed a machine learning model to predict passenger survival using the Titanic dataset.",
      tech: ["Python", "Jupyter Notebook", "Scikit-learn"],
      details:
        "Implemented logistic regression and decision tree models with data preprocessing, feature engineering, and performance evaluation using accuracy and confusion matrix.",
      icon: <Users className="h-4 w-4" />
    },
    {
      name: "Stock Price Prediction System",
      description:
        "Built a time-series forecasting model to analyze and predict stock price trends.",
      tech: ["Python", "Pandas", "Matplotlib"],
      details:
        "Applied linear regression and moving averages to historical stock data and visualized trends for analytical interpretation.",
      icon: <TrendingUp className="h-4 w-4" />
    },
    {
      name: "Predictive Modeling with Linear Regression",
      description:
        "Implemented regression-based predictive models on structured datasets to estimate numerical outcomes.",
      tech: ["Python", "Scikit-learn", "Jupyter Notebook"],
      details:
        "Focused on model training, evaluation using performance metrics (MSE, R²), and result visualization for interpretability.",
      icon: <Database className="h-4 w-4" />
    }
  ]
}

];

function ProjectAccordion({ projects, color, expIndex }: { projects: any[], color: string, expIndex: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='mb-6'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-4 rounded-lg border transition-all duration-300 ${
          color === "blue"
            ? "bg-blue-500/5 border-blue-500/20 hover:bg-blue-500/10 hover:border-blue-500/30"
            : "bg-cyan-400/5 border-cyan-400/20 hover:bg-cyan-400/10 hover:border-cyan-400/30"
        }`}
      >
        <div className='flex items-center gap-3'>
          <Code2 className={`h-4 w-4 ${color === "blue" ? "text-blue-400" : "text-cyan-400"}`} />
          <span className='text-sm font-semibold text-white'>Company Projects</span>
          <span className={`text-xs px-2 py-1 rounded-full ${
            color === "blue" 
              ? "bg-blue-500/10 text-blue-400" 
              : "bg-cyan-400/10 text-cyan-400"
          }`}>
            {projects.length} projects
          </span>
        </div>
        {isOpen ? (
          <ChevronUp className={`h-4 w-4 ${color === "blue" ? "text-blue-400" : "text-cyan-400"}`} />
        ) : (
          <ChevronDown className={`h-4 w-4 ${color === "blue" ? "text-blue-400" : "text-cyan-400"}`} />
        )}
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className='overflow-hidden'
      >
        <div className='pt-4 space-y-4'>
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              className={`p-5 rounded-lg border transition-all duration-300 ${
                color === "blue"
                  ? "bg-blue-500/5 border-blue-500/20 hover:bg-blue-500/10 hover:border-blue-500/30"
                  : "bg-cyan-400/5 border-cyan-400/20 hover:bg-cyan-400/10 hover:border-cyan-400/30"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className='flex items-start gap-4'>
                <div className={`p-2.5 rounded-lg ${
                  color === "blue" 
                    ? "bg-blue-500/10 text-blue-400" 
                    : "bg-cyan-400/10 text-cyan-400"
                }`}>
                  {project.icon}
                </div>
                <div className='flex-1'>
                  <h5 className='font-semibold text-white mb-2 text-lg'>{project.name}</h5>
                  <p className='text-sm text-gray-300 mb-3 leading-relaxed'>{project.description}</p>
                  <div className='flex flex-wrap gap-2 mb-3'>
                    {project.tech.map((tech: string) => (
                      <span 
                        key={tech} 
                        className={`px-2 py-1 text-xs rounded font-medium ${
                          color === "blue"
                            ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                            : "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className='text-sm text-gray-400 italic'>{project.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      id='experience'
      className='py-16 md:py-24 relative overflow-hidden'
    >
      <div className='container mx-auto px-4 sm:px-6 relative max-w-7xl'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <motion.div
            className='inline-block mb-4'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className='px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold border border-blue-500/30'>
              Professional Journey
            </span>
          </motion.div>

          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white'>
            Professional <span className='text-blue-400'>Experience</span>
          </h2>

          <p className='text-base sm:text-lg text-gray-400 max-w-2xl mx-auto'>
            Building enterprise solutions and contributing to high-impact projects across multiple domains
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className='max-w-6xl mx-auto'>
          <div className='relative'>
            {/* Static Timeline Line */}
            <div className='absolute left-4 md:left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500/50 via-cyan-400/50 to-blue-500/50' />

            <motion.div
              ref={ref}
              className='space-y-16'
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ staggerChildren: 0.2 }}
            >
              {experiences.map((exp, expIndex) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: expIndex * 0.2 }}
                  className='relative'
                >
                  {/* Timeline Node */}
                  <motion.div
                    className={`absolute left-4 md:left-8 -translate-x-1/2 w-8 h-8 rounded-full bg-black border-2 ${
                      exp.color === "blue"
                        ? "border-blue-500"
                        : "border-cyan-400"
                    } flex items-center justify-center shadow-lg z-20`}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: expIndex * 0.2 + 0.3, duration: 0.4 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div
                      className={`p-1.5 rounded-full ${
                        exp.color === "blue"
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-cyan-400/20 text-cyan-400"
                      }`}
                    >
                      {exp.icon}
                    </div>
                  </motion.div>

                  {/* Experience Card */}
                  <div className='ml-12 md:ml-20'>
                    <div className='group relative'>
                      {/* Glow effect on hover - similar to hero section */}
           
                      <motion.div
                        className={`relative rounded-xl border p-6 md:p-8 bg-gradient-to-br backdrop-blur-sm transition-all duration-300 overflow-hidden ${
                          exp.color === "blue"
                            ? "from-blue-500/5 to-blue-500/10 border-blue-500/20 group-hover:border-blue-500/20 group-hover:from-blue-500/10 group-hover:to-blue-500/10"
                            : "from-cyan-400/5 to-cyan-400/10 border-cyan-400/20 group-hover:border-cyan-400/20 group-hover:from-cyan-400/10 group-hover:to-cyan-400/10"
                        }`}
                      >
                        {/* Shimmer effect overlay - similar to hero section button */}
                        <motion.div
                          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                            exp.color === "blue" 
                              ? "bg-gradient-to-r from-white/0 via-blue-300/10 to-white/0"
                              : "bg-gradient-to-r from-white/0 via-cyan-300/10 to-white/0"
                          }`}
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.8 }}
                        />

                        {/* Header */}
                        <div className='relative z-10 flex flex-wrap items-start justify-between gap-4 mb-6'>
                          <div>
                            <h3 className='text-xl md:text-2xl font-bold mb-2 text-white group-hover:text-blue-100 transition-colors duration-300'>
                              {exp.title}
                            </h3>
                            <div className='flex flex-wrap items-center gap-4 text-gray-400 text-sm'>
                              <div className='flex items-center gap-2'>
                                <Building className='h-4 w-4' />
                                <span className='font-medium'>{exp.company}</span>
                              </div>
                              <div className='flex items-center gap-2'>
                                <CalendarDays className='h-4 w-4' />
                                <span>{exp.period}</span>
                              </div>
                            </div>
                          </div>

                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                              exp.type === "Full-time"
                                ? "bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:bg-blue-500/20 group-hover:border-blue-500/40"
                                : "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 group-hover:bg-cyan-400/20 group-hover:border-cyan-400/40"
                            }`}
                          >
                            {exp.type}
                          </span>
                        </div>

                        {/* Description */}
                        <p className='relative z-10 text-gray-300 mb-6 text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300'>{exp.description}</p>

                        {/* Technologies */}
                        <div className='relative z-10 flex flex-wrap gap-2 mb-6'>
                          {exp.technologies.map((tech) => (
                            <motion.span
                              key={tech}
                              className={`px-3 py-1.5 text-sm rounded-lg font-medium transition-all duration-300 ${
                                exp.color === "blue"
                                  ? "bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:bg-blue-500/20 group-hover:border-blue-500/30"
                                  : "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 group-hover:bg-cyan-400/20 group-hover:border-cyan-400/30"
                              }`}
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>

                        {/* Key Highlights */}
                        <div className='relative z-10 mb-8'>
                          <h4 className='text-lg font-semibold text-white mb-4 flex items-center gap-2 group-hover:text-blue-100 transition-colors duration-300'>
                            <Zap className={`h-4 w-4 ${exp.color === "blue" ? "text-blue-400" : "text-cyan-400"}`} />
                            Key Achievements
                          </h4>
                          <div className='grid sm:grid-cols-2 gap-3'>
                            {exp.highlights.map((highlight, i) => (
                              <motion.div 
                                key={i} 
                                className='flex items-start gap-3'
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: expIndex * 0.2 + i * 0.1 }}
                              >
                                <CheckCircle2
                                  className={`h-4 w-4 mt-0.5 flex-shrink-0 transition-colors duration-300 ${
                                    exp.color === "blue"
                                      ? "text-blue-400 group-hover:text-blue-300"
                                      : "text-cyan-400 group-hover:text-cyan-300"
                                  }`}
                                />
                                <span className='text-sm text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300'>
                                  {highlight}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Collapsible Company Projects */}
                        <div className='relative z-10'>
                          <ProjectAccordion 
                            projects={exp.projects} 
                            color={exp.color} 
                            expIndex={expIndex}
                          />
                        </div>

                        {/* Achievement Metrics - Simplified */}
                        <div className='relative z-10 grid grid-cols-3 gap-3'>
                          {exp.achievements.map((achievement) => (
                            <motion.div
                              key={achievement.label}
                              className={`text-center p-4 rounded-lg transition-all duration-300 ${
                                exp.color === "blue"
                                  ? "bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/15 group-hover:border-blue-500/30"
                                  : "bg-cyan-400/10 border border-cyan-400/20 group-hover:bg-cyan-400/15 group-hover:border-cyan-400/30"
                              }`}
                              whileHover={{ scale: 1.02 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div
                                className={`text-xl font-bold transition-colors duration-300 ${
                                  exp.color === "blue"
                                    ? "text-blue-400 group-hover:text-blue-300"
                                    : "text-cyan-400 group-hover:text-cyan-300"
                                }`}
                              >
                                {achievement.value}
                              </div>
                              <div className='text-xs text-gray-400 font-medium group-hover:text-gray-300 transition-colors duration-300'>
                                {achievement.label}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className='mt-16 text-center'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.div
            className='inline-block mb-3'
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <TrendingUp className='h-6 w-6 text-blue-400/60' />
          </motion.div>
          <p className='text-gray-400 text-lg'>
            Continuously evolving through challenging projects and collaborative growth
          </p>
        </motion.div>
      </div>
    </section>
  );
}