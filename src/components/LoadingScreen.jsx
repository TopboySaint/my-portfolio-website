import { motion as Motion, useReducedMotion } from "framer-motion"
import { Loader2 } from "lucide-react"

const LoadingScreen = () => {
  const prefersReducedMotion = useReducedMotion()
  return (
    <Motion.div
      className="fixed inset-0 flex flex-col items-center justify-center z-[9999] bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] backdrop-blur-md px-4 sm:px-6 py-6 gap-6 md:gap-10 min-h-svh"
      style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', border: '1px solid rgba(255,255,255,0.1)' }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Motion.div
        className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2 sm:mb-6 md:mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-300 drop-shadow-lg tracking-wide font-[Poppins] leading-tight max-w-[90vw]"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {"SAINT Develops".split('').map((char, index) => {
          const baseTransition = {
            duration: 0.6,
            delay: index * 0.06,
            ease: "easeInOut"
          }
          return (
            <Motion.span
              key={index}
              className="inline-block mx-[2px] sm:mx-1"
              initial={{ opacity: 0, y: -40 }}
              animate={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, -12, 0] }}
              transition={prefersReducedMotion ? baseTransition : { ...baseTransition, repeat: Infinity, repeatDelay: 1.4 }}
            >
              {char}
            </Motion.span>
          )
        })}
      </Motion.div>
      <Motion.div
        className="flex items-center gap-3 sm:gap-4 text-cyan-200 bg-white/10 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-lg backdrop-blur-sm w-auto max-w-[90vw]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        aria-live="polite"
      >
        <Loader2 className="h-5 w-5 xs:h-6 xs:w-6 sm:h-7 sm:w-7 animate-spin text-cyan-300 drop-shadow-md" />
        <span className="text-sm xs:text-base sm:text-lg font-medium tracking-wide font-[Poppins]">Loading Portfolio...</span>
      </Motion.div>
    </Motion.div>
  )
}

export default LoadingScreen