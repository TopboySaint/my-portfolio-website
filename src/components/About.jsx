"use client"
// Removed portrait image per request
import { motion as Motion } from "framer-motion"

// Icons
import {
  SiExpress,
  SiRedux,
  SiVite,
  SiWebpack,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiRender,
  SiEslint,
  SiPrettier,
  SiJsonwebtokens,
  SiFormik,
  SiReacthookform,
  SiMongoose,
  SiReact,
  SiExpo,
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoMongodb } from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap, FaNpm, FaReact, FaLock, FaCheckCircle } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FaGitAlt, FaGithub, FaPhp } from "react-icons/fa6";
import { DiNodejs, DiVisualstudio } from "react-icons/di";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, ease: "easeOut" },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  }

  const techStack = {
    frontend: [
      { name: "React", icon: FaReact },
      { name: "React Native", icon: SiReact },
      { name: "Next.js", icon: RiNextjsFill },
      { name: "Tailwind", icon: RiTailwindCssFill },
      { name: "Bootstrap", icon: FaBootstrap },
      { name: "Vite", icon: SiVite },
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "React Hook Form", icon: SiReacthookform },
      { name: "Formik", icon: SiFormik },
	  { name: "Yup", icon: FaCheckCircle },
    ],
    backend: [
      { name: "Node.js", icon: DiNodejs },
      { name: "Express", icon: SiExpress },
      { name: "PHP", icon: FaPhp },
      { name: "MongoDB", icon: BiLogoMongodb },
      { name: "Mongoose", icon: SiMongoose },
      { name: "MySQL", icon: GrMysql },
  // { name: "PostgreSQL", icon: SiPostgresql },
  // { name: "GraphQL", icon: GrGraphQl },
      { name: "Firebase", icon: IoLogoFirebase },
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "bcrypt", icon: FaLock },
    ],
    tools: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: DiVisualstudio },
      { name: "Expo", icon: SiExpo },
      { name: "NPM", icon: FaNpm },
      { name: "Webpack", icon: SiWebpack },
      { name: "Postman", icon: SiPostman },
  // { name: "Docker", icon: SiDocker },
      { name: "Vercel", icon: SiVercel },
      { name: "Netlify", icon: SiNetlify },
      { name: "Render", icon: SiRender },
      { name: "ESLint", icon: SiEslint },
      { name: "Prettier", icon: SiPrettier },
  // { name: "Jest", icon: SiJest },
  // { name: "Jira", icon: SiJira },
  // { name: "Slack", icon: SiSlack },
    ],
  }
  const categories = [
    { label: "Frontend", items: techStack.frontend },
    { label: "Backend & Databases", items: techStack.backend },
    { label: "Tools & Workflow", items: techStack.tools },
  ]

  return (
    <section
      id="about"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] text-cyan-100 font-[Poppins] overflow-hidden"
    >
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute -top-32 -left-24 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-140px] right-[-140px] w-[420px] h-[420px] bg-teal-400/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[760px] bg-gradient-radial from-cyan-500/10 via-transparent to-transparent rounded-full blur-2xl" />

      <div className="relative max-w-5xl mx-auto">
        <Motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-200 drop-shadow">Meet SAINT Develops</span>
          </h2>
        </Motion.div>

        <Motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <p className="text-cyan-200/85 text-base sm:text-lg leading-relaxed mb-4">
            Hello! I'm <span className="text-cyan-100 font-semibold">Adeniyi Bukola</span>, a Software Engineer specializing in full stack web and native application development. I’m from Oyo state, Nigeria. I hold a National Diploma certificate in Computer Science, a Professional Diploma certificate in Software Engineering from SQI College of ICT, where I completed my industrial training and internship.
          </p>
          <p className="text-cyan-200/80 text-base sm:text-lg leading-relaxed mb-4">
            I build full stack web & native products with <strong className="text-cyan-100">React</strong>, <strong className="text-cyan-100">React Native</strong>, <strong className="text-cyan-100">Next.js</strong>, and TypeScript, backed by <strong className="text-cyan-100">Node.js</strong>/<strong className="text-cyan-100">Express</strong> APIs. I choose the right persistence model across <strong className="text-cyan-100">MongoDB (Mongoose)</strong>, <strong className="text-cyan-100">MySQL</strong>, <strong className="text-cyan-100">PostgreSQL</strong>, <strong className="text-cyan-100">Firebase</strong>, and <strong className="text-cyan-100">GraphQL</strong> based on access patterns and scalability. The goal is creating clean boundaries, predictable state, secure data flow, and responsive UI/UX.
          </p>
          <p className="text-cyan-200/70 text-base sm:text-lg leading-relaxed">
            Tooling and quality workflow includes <strong className="text-cyan-100">Redux Toolkit</strong>, <strong className="text-cyan-100">React Hook Form</strong>, <strong className="text-cyan-100">Formik</strong> + <strong className="text-cyan-100">Yup</strong>, auth with <strong className="text-cyan-100">JWT</strong> & <strong className="text-cyan-100">bcrypt</strong>, UI systems using <strong className="text-cyan-100">Tailwind</strong> & <strong className="text-cyan-100">Bootstrap</strong>, fast builds via <strong className="text-cyan-100">Vite</strong> / <strong className="text-cyan-100">Webpack</strong> / <strong className="text-cyan-100">Expo</strong>, consistency enforced by <strong className="text-cyan-100">ESLint</strong> & <strong className="text-cyan-100">Prettier</strong>, API inspection in <strong className="text-cyan-100">Postman</strong>, and deployments to <strong className="text-cyan-100">Vercel</strong>, <strong className="text-cyan-100">Netlify</strong>, <strong className="text-cyan-100">Render</strong> and others. I focus on performance, accessibility, and maintainable architecture.
          </p>
        </Motion.div>

        <div className="space-y-16">
          {categories.map((cat, i) => (
            <div key={cat.label}>
              <Motion.div
                className="mb-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight mb-2">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-200">{cat.label}</span>
                </h3>
              </Motion.div>
              <Motion.div
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {cat.items.map((tech) => {
                  const IconComponent = tech.icon
                  return (
                    <Motion.div
                      key={tech.name}
                      className="flex flex-col items-center group relative"
                      variants={itemVariants}
                      whileHover={{ y: -3, opacity: 0.9 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-2 bg-[#0f1c21]/70 ring-1 ring-cyan-400/20 backdrop-blur-sm group-hover:bg-gradient-to-r group-hover:from-cyan-400/20 group-hover:via-blue-400/20 group-hover:to-teal-300/20 group-hover:shadow-md group-hover:shadow-cyan-500/20 transition-all duration-300">
                        <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-300 group-hover:text-cyan-100 transition-colors" />
                      </div>
                      <span className="text-xs sm:text-sm text-cyan-300 text-center group-hover:text-cyan-200 transition-colors">
                        {tech.name}
                      </span>
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#0d171b]/90 backdrop-blur-sm text-cyan-100 text-xs px-2 py-1 rounded-md ring-1 ring-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:block whitespace-nowrap shadow-lg shadow-black/30">
                        {tech.name}
                      </div>
                    </Motion.div>
                  )
                })}
              </Motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
