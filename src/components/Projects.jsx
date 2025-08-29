"use client"
import { ExternalLink, Github } from "lucide-react"
import { motion as Motion } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      title: "TaskMint",
      description: "A Task Management app I built using React + TailwindCSS, Express.js + Node.js, and MongoDB.",
      tech: ["React", "Nodejs", "MongoDB", "Tailwind CSS", 'Expressjs'],
      codeUrl: "https://github.com/TopboySaint/Task-Manager",
      liveUrl: "https://task-manager-ten-red.vercel.app/",
      image: "/images/projects/TaskMint.png",
    },
    {
      title: "WebVault",
      description: "A Web banking tool for managing finances with a modern UI.",
      tech: ["React", "TaiwindCSS", "Nodejs", "MongoDB", "Expressjs" ],
      codeUrl: "https://github.com/TopboySaint/WebVault",
      liveUrl: "https://web-vault-alpha.vercel.app/",
      image: "/images/projects/WebVault.png",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        ease: "easeOut",
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  }

  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] text-cyan-100 font-[Poppins] overflow-hidden"
    >
      {/* Decorative shapes (consistent with other sections) */}
      <div className="pointer-events-none absolute -top-32 -right-24 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-160px] left-[-140px] w-[420px] h-[420px] bg-teal-400/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-gradient-radial from-cyan-500/10 via-transparent to-transparent rounded-full blur-2xl" />

      <div className="relative max-w-7xl mx-auto">
        <Motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-200 drop-shadow">Featured Projects</span>
          </h2>
          <p className="text-cyan-200/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            I selected a few from the projects i've built, spanning front-end interfaces, full-stack apps, and experimental builds to sharpen my architecture, performance, and DX.
          </p>
        </Motion.div>

        <Motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <Motion.div
              key={index}
              className="relative group rounded-3xl p-0 bg-gradient-to-br from-[#0f2027]/80 via-[#2c5364]/80 to-[#232526]/80 ring-1 ring-cyan-400/20 shadow-xl shadow-black/40 transition-all duration-300 hover:shadow-cyan-500/30 hover:ring-cyan-300/40 overflow-hidden flex flex-col md:flex-row md:items-stretch"
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02, opacity: 1 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* IMAGE */}
              <div className="md:w-2/5 flex-shrink-0 overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none bg-[#0d171b]/80 ring-1 ring-cyan-400/10 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-48 md:h-60 object-cover transform transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              {/* CONTENT */}
              <div className="flex-1 flex flex-col justify-between p-6 md:p-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2 tracking-tight text-cyan-100 drop-shadow-md">
                    {project.title}
                  </h3>
                  <p className="text-cyan-200/90 mb-4 text-base leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-[#0d171b]/70 ring-1 ring-cyan-400/30 text-cyan-200 group-hover:ring-cyan-300/40 group-hover:text-cyan-100 transition-colors shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 mt-2">
                  <Motion.a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-2 rounded-lg ring-1 ring-cyan-400/30 bg-[#0d171b]/70 backdrop-blur-sm text-cyan-200 text-base font-semibold hover:text-cyan-100 hover:ring-cyan-300/50 hover:bg-gradient-to-r hover:from-cyan-400/10 hover:via-blue-400/10 hover:to-teal-300/10 transition-all shadow-md"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <Github size={18} />
                    Code
                  </Motion.a>
                  <Motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-400 text-[#0b1214] font-bold text-base shadow-lg shadow-cyan-900/30 hover:from-cyan-400 hover:via-blue-400 hover:to-teal-300 transition-all ring-1 ring-cyan-400/50"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <ExternalLink size={18} />
                    Live
                  </Motion.a>
                </div>
              </div>
            </Motion.div>
          ))}
        </Motion.div>
        <div className="flex justify-center mt-10">
          <a
            href="https://github.com/Adebayozz1994?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-400 text-[#0b1214] font-semibold text-base shadow-md shadow-cyan-900/30 hover:from-cyan-400 hover:via-blue-400 hover:to-teal-300 transition-all ring-1 ring-cyan-400/40"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  )
}
