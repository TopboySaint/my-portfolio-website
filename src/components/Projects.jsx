"use client"
import { ExternalLink, Github } from "lucide-react"
import { motion as Motion } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      title: "FaceAPI",
      description: "A face verification app using React, Node.js, and MongoDB.",
      tech: ["React", "Nodejs", "MongoDB", "Tailwind CSS"],
      codeUrl: "https://github.com/Adebayozz1994/face-verification-app",
      liveUrl: "https://face-verification-app-neon.vercel.app/",
      image: "/images/projects/FaceApi.PNG",
    },
    {
      title: "Annotation App",
      description: "A tool for annotating data with a modern UI.",
      tech: ["React", "Vite", "Taiwind"],
      codeUrl: "https://github.com/Adebayozz1994/Annotation",
      liveUrl: "https://annotation-pi.vercel.app/",
      image: "/images/projects/Annotation.PNG",
    },
    {
      title: "E-commerse",
      description: "A responsive e-commerce platform with Next.js and Tailwind CSS.",
      tech: ["Nextjs", "vite", "Tailwind CSS"],
      codeUrl: "https://github.com/Adebayozz1994/E-commerce-Hub",
      liveUrl: "https://e-commerce-hub-eight.vercel.app/",
      image: "/images/projects/E-commerce.PNG",
    },
    {
      title: "FoodDelivery APP",
      description: "A food delivery app with a sleek design and MongoDB backend.",
      tech: ["Nextjs", "Tailwind CSS", "MongoDB", "Node.js", "TypeScript"],
      codeUrl: "https://github.com/Adebayozz1994/food_nextjs",
      liveUrl: "https://food-nextjs-pearl.vercel.app/food/products",
      image: "/images/projects/Food.PNG",
    },
    {
      title: "Blog Site",
      description: "A blog platform with Vue.js and PHP for dynamic content.",
      tech: ["PHP", "Framer Motion", "Tailwind CSS","Veujs"],
      codeUrl: "https://github.com/Adebayozz1994/Blog-Site-Frontend",
      liveUrl: "https://blog-site-psi-two.vercel.app/",
      image: "/images/projects/Blog.PNG",
    },
    {
      title: "Van Life",
      description: "A van rental platform with authentication and payment integration.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      codeUrl: "https://github.com/Adebayozz1994/Vanlife-Frontend",
      liveUrl: "https://vanlife-frontend.vercel.app/",
      image: "/images/projects/Vanlife.PNG",
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
    <section id="projects" className="py-20 px-4 bg-[#00008B] text-[#FF8C00]">
      <div className="max-w-7xl mx-auto">
        <Motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-[#FF8C00]">Projects</span>
          </h2>
          <p className="text-[#FF8C00] max-w-2xl mx-auto text-sm sm:text-base">
            A few projects I've built, ranging from responsive frontends to full-stack platforms. Each one helped me sharpen my craft.
          </p>
        </Motion.div>

        <Motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <Motion.div
              key={index}
              className="bg-[#00008B] rounded-lg p-4 sm:p-6 hover:transform hover:scale-105 transition-all duration-300 border border-[#FF8C00]"
              variants={itemVariants}
              whileHover={{ y: -4, opacity: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {/* IMAGE SECTION */}
              <div className="mb-4 overflow-hidden rounded-md">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-48 object-cover"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-3 text-[#FF8C00]">{project.title}</h3>
              <p className="text-[#FF8C00] mb-4 text-sm leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 sm:px-3 py-1 bg-[#00008B] text-[#FF8C00] text-xs rounded-full border border-[#FF8C00]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Motion.a
                  href={project.codeUrl}
                  target="_blank"
                  className="flex items-center justify-center gap-2 px-4 py-2 border border-[#FF8C00] text-[#FF8C00] rounded-lg hover:bg-[#FF8C00] hover:text-white transition-colors text-sm"
                  whileHover={{ opacity: 0.9 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Github size={16} />
                  View Code
                </Motion.a>
                <Motion.a
                  href={project.liveUrl}
                  target="_blank"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-[#FF8C00] text-white rounded-lg hover:bg-[#FF8C00]/90 transition-colors text-sm"
                  whileHover={{ opacity: 0.9 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <ExternalLink size={16} />
                  Live Demo
                </Motion.a>
              </div>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  )
}
