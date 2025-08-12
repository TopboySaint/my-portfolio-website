import { motion as Motion } from "framer-motion"
import pfp from "@/assets/RZADE8558.jpg"
import { Typewriter } from "react-simple-typewriter"

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 md:pt-32 overflow-hidden bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] text-cyan-100 font-[Poppins]"
    >

      <div className="pointer-events-none absolute -top-32 -left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-120px] right-[-120px] w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-radial from-cyan-500/10 via-transparent to-transparent rounded-full blur-2xl" />

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

          <Motion.div
            className="order-2 lg:order-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-tight tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-200 drop-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
              <span className="block mb-2 text-sm md:text-base font-medium tracking-widest text-cyan-300/80 uppercase">Welcome !</span>
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-300">Adeniyi Bukola</span>

              <div className="mt-3 md:mt-4 text-cyan-200/80 text-sm sm:text-base md:text-lg h-6 sm:h-7 md:h-8 flex items-center justify-center lg:justify-start">
                <Typewriter
                  words={[
                    "Software Engineer",
                    "Full-stack Web Developer",
                    "Native Application Developer",
                    "Problems Lover and Solver",
                    "Building fast, scalable, and user‑centric apps.",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={65}
                  deleteSpeed={45}
                  delaySpeed={1700}
                />
              </div>
            </Motion.h1>

            <Motion.p
              className="text-sm sm:text-base md:text-lg text-cyan-200/80 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              I build with a modern MERN + Next.js + TypeScript stack and craft interfaces with Vanilla CSS, TailwindCSS & Bootstrap. For state and data flow I use Redux Toolkit plus React Hook Form / Formik with Yup for robust form handling. My auth & security toolkit includes JWT, bcrypt, and hardened API practices; persistence is powered by MongoDB (Mongoose) alongside Firebase services when I need realtime, auth, or storage. I deploy to Vercel, Netlify, and Render, rely on ESLint + Prettier, Vite / Webpack, Postman for API debugging, and GitHub-driven workflows to keep code clean and shipping fast. I focus on clear architecture, performance, accessibility, and turning complex requirements into maintainable products that scale.
            </Motion.p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start mb-12">
              <Motion.button
                onClick={scrollToProjects}
                className="group relative inline-flex items-center justify-center px-6 md:px-8 py-3 rounded-lg font-semibold text-gray-900 bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300 shadow-lg shadow-cyan-900/30 hover:shadow-cyan-400/30 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                whileHover={{ y: -2 }}
              >
                View Projects
              </Motion.button>
              <Motion.a
                href="/Ogunladeadebayopeter.pdf"
                download="Ogunladeadebayopeter.pdf"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 rounded-lg font-semibold border border-cyan-400/40 text-cyan-200 hover:text-cyan-100 hover:bg-cyan-400/10 backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                whileHover={{ y: -2 }}
              >
                My Resume
              </Motion.a>
            </div>
          </Motion.div>


          <Motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-300 opacity-40 blur-xl group-hover:opacity-60 transition" />
              <div className="relative w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full p-[3px] bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-300 shadow-xl shadow-black/40">
                <div className="w-full h-full rounded-full bg-[#0f1c21] p-2 backdrop-blur-sm">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#0d171b] flex items-center justify-center">
                    <img
                      src={pfp}
                      alt="SAINT Develops – Full Stack Developer portrait"
                      className="w-full h-full object-cover scale-105 select-none"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>


              <Motion.span
                className="absolute -top-4 -right-4 w-6 h-6 sm:w-8 sm:h-8 border border-cyan-300/60 rounded-md rotate-12"
                animate={{ rotate: [12, 24, 12], scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <Motion.span
                className="absolute -bottom-5 -left-5 w-4 h-4 sm:w-6 sm:h-6 border border-teal-300/60 rounded-md -rotate-12"
                animate={{ rotate: [-12, -24, -12], scale: [1, 1.15, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  )
}
