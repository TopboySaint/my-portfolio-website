"use client"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion as Motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ]

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  const linkVariants = {
    closed: {
      opacity: 0,
      y: 20,
    },
    open: {
      opacity: 1,
      y: 0,
    },
  }

  const containerVariants = {
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <>
      <Motion.nav
        className="fixed top-0 left-0 right-0 w-full z-50 bg-[#0f2027]/90 backdrop-blur-md backdrop-saturate-150 border-b border-white/10 shadow-lg ring-1 ring-white/5 supports-[padding:max(0px)]:pt-[env(safe-area-inset-top)]"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.17)' }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-5 md:px-6 lg:px-8 py-1">
          <div className="flex flex-nowrap justify-between items-center h-16 sm:h-14 lg:h-14 min-h-[56px] gap-x-2">
            <Motion.div
              className="flex items-center min-w-0"
              whileHover={{ opacity: 0.9, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <span className="block text-2xl xs:text-[26px] sm:hidden font-extrabold text-cyan-400 bg-clip-text text-transparent drop-shadow-lg tracking-wide font-[Poppins] leading-tight">SAINT Devs</span>
              <span className="hidden sm:block text-2xl sm:text-[26px] md:text-[30px] lg:text-[32px] font-extrabold text-cyan-400 bg-clip-text text-transparent drop-shadow-lg tracking-wide font-[Poppins] leading-tight truncate max-w-[68vw]">SAINT Develops</span>
            </Motion.div>

  <div className="hidden md:flex flex-wrap space-x-2 lg:space-x-4 xl:space-x-6">
              {navItems.map((item) => (
                <Motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
  className="relative px-3 py-[7px] sm:px-4 md:px-4 lg:px-4 text-sm sm:text-[15px] md:text-base font-medium text-cyan-200 hover:text-cyan-100 transition-colors cursor-pointer bg-white/5/80 hover:bg-white/10 rounded-lg shadow-sm hover:shadow-cyan-400/10 focus:outline-none focus:ring-2 focus:ring-cyan-300 font-[Poppins] min-w-[60px] backdrop-blur-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  whileHover={{ scale: 1.07, opacity: 0.92 }}
                >
                  {item.name}
                </Motion.button>
              ))}
            </div>

            <div className="md:hidden flex items-center shrink-0">
              <Motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="text-cyan-300 hover:text-cyan-100 p-2 bg-white/10 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
                whileHover={{ opacity: 0.85, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </Motion.button>
            </div>
          </div>
        </div>
      </Motion.nav>
  {/* Spacer div so content doesn't hide behind fixed navbar */}
  <div aria-hidden="true" className="h-16 sm:h-14 lg:h-14"></div>

      <AnimatePresence>
        {isOpen && (
          <Motion.div
            className="fixed inset-0 z-40 md:hidden bg-[#0f2027]/95 backdrop-blur-xl border-l border-white/10 shadow-2xl px-2 pt-2 pb-8 flex flex-col overflow-hidden"
            style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.27)' }}
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="absolute top-4 right-4 z-50">
              <Motion.button
                onClick={() => setIsOpen(false)}
                className="text-cyan-300 hover:text-cyan-100 p-2 bg-white/10 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
                whileHover={{ opacity: 0.85, rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Close menu"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <X size={32} />
              </Motion.button>
            </div>

            <Motion.div
              className="flex flex-col items-center justify-center h-full space-y-6 sm:space-y-8 w-full overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-600/30 scrollbar-track-transparent py-24 px-2"
              variants={containerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {navItems.map((item) => (
                <Motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full max-w-xs text-2xl xs:text-3xl sm:text-4xl font-semibold text-cyan-400 bg-clip-text text-transparent drop-shadow-lg px-4 py-3 rounded-xl hover:bg-cyan-400/10 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all font-[Poppins] text-center select-none"
                  variants={linkVariants}
                  whileHover={{ scale: 1.07, opacity: 0.95 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                </Motion.button>
              ))}

            </Motion.div>

            <div className="absolute inset-0 bg-cyan-400/10 -z-10 rounded-xl" />

            <Motion.div
              className="absolute top-20 left-8 w-3 h-3 bg-cyan-300 rounded-full opacity-60 shadow-lg"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <Motion.div
              className="absolute bottom-32 right-12 w-4 h-4 border-2 border-cyan-300 rotate-45 opacity-40 shadow-md"
              animate={{
                rotate: [45, 90, 45],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
