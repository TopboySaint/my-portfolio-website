"use client"
import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import LoadingScreen from "./components/LoadingScreen"
import { Toaster } from "react-hot-toast"



function App() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) 

    document.body.style.overflow = "hidden"

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = "unset"
    }
  }, [])

  return (
    <>
      <main className="min-h-screen bg-slate-900 text-white">
        <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>
        {!isLoading && (
          <>
            <Toaster/>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
          </>
        )}
      </main>
    </>
  )
}

export default App
