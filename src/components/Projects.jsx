"use client";
import { ExternalLink, Github } from "lucide-react";
import { motion as Motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "TaskMint",
      description:
        "A Task Management app I built using React + TailwindCSS, Express.js + Node.js, and MongoDB.",
      tech: ["React", "Nodejs", "MongoDB", "Tailwind CSS", "Expressjs"],
      codeUrl: "https://github.com/TopboySaint/Task-Manager",
      liveUrl: "https://task-manager-ten-red.vercel.app/",
      image: "/images/projects/TaskMint.png",
    },
    {
      title: "Weather Checker",
      description:
        "This is a simple, responsive weather-checking platform with HTML, Vanilla Javascript and Bootstrap.",
      tech: ["HTML", "CSS", "BootstrapCSS", "Javascript"],
      codeUrl: "https://github.com/TopboySaint/Weather-App",
      liveUrl: "https://topboysaint.github.io/Weather-App/",
      image: "/images/projects/weather.png",
    },
    {
      title: "WebVault",
      description: "A Web banking tool for managing finances with a modern UI.",
      tech: ["React", "TaiwindCSS", "Nodejs", "MongoDB", "Expressjs"],
      codeUrl: "https://github.com/TopboySaint/WebVault",
      liveUrl: "https://web-vault-alpha.vercel.app/",
      image: "/images/projects/WebVault.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0f2027] text-cyan-100 font-[Poppins] overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-32 -right-24 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-160px] left-[-140px] w-[420px] h-[420px] bg-teal-400/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-cyan-500/10 rounded-full blur-2xl" />

      <div className="relative max-w-7xl mx-auto">
        <Motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
            <span className="text-cyan-300 drop-shadow">Featured Projects</span>
          </h2>
          <p className="text-cyan-200/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            I selected a few from the projects i've built, spanning front-end
            interfaces, full-stack apps, and experimental builds to sharpen my
            architecture, and performance.
          </p>
        </Motion.div>

        <Motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.slice(0, 3).map((project, index) => (
            <Motion.div
              key={index}
              className="relative group rounded-2xl p-5 sm:p-6 bg-[#0f1c21]/60 backdrop-blur-md ring-1 ring-cyan-400/15 shadow-lg shadow-black/40 transition-all duration-300 hover:shadow-cyan-500/20 hover:ring-cyan-300/30 overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -4, opacity: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-cyan-400/10 pointer-events-none" />

              <div className="mb-4 overflow-hidden rounded-lg ring-1 ring-cyan-400/10">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-semibold mb-3 tracking-tight text-cyan-100">
                {project.title}
              </h3>
              <p className="text-cyan-200/80 mb-5 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium tracking-wide bg-[#0d171b]/60 ring-1 ring-cyan-400/20 text-cyan-300/90 group-hover:ring-cyan-300/30 group-hover:text-cyan-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Motion.a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center gap-2 px-4 py-2 rounded-lg ring-1 ring-cyan-400/25 bg-[#0d171b]/60 backdrop-blur-sm text-cyan-200 text-sm font-medium hover:text-cyan-100 hover:ring-cyan-300/40 hover:bg-cyan-400/10 transition-all"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <Github size={16} />
                  Code
                </Motion.a>
                <Motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-[#0b1214] font-semibold text-sm shadow-md shadow-cyan-900/30 hover:bg-cyan-400 transition-all ring-1 ring-cyan-400/40"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <ExternalLink size={16} />
                  Live
                </Motion.a>
              </div>
            </Motion.div>
          ))}
        </Motion.div>
        <div className="flex justify-center mt-10">
          <a
            href="https://github.com/TopboySaint?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-lg bg-cyan-500 text-[#0b1214] font-semibold text-base shadow-md shadow-cyan-900/30 hover:bg-cyan-400 transition-all ring-1 ring-cyan-400/40"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
}
