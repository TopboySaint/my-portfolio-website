import { Github, Linkedin } from "lucide-react"
import { motion as Motion } from "framer-motion"
import { BsTwitterX, BsWhatsapp } from "react-icons/bs"

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/TopboySaint", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: BsTwitterX, href: "https://x.com/sgt_nash?s=21", label: "Twitter" },
    { icon: BsWhatsapp, href: "https://wa.me/+2347063371898", label: "Whatsapp" },
  ]

  return (
    <footer className="bg-[#00008B] py-12 px-4 text-[#FF8C00]">
      <div className="max-w-7xl mx-auto">
        <Motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-[#FF8C00] mb-2">Adeniyi 'SAINT Develops' Bukola</h3>
            <p className="text-[#FF8C00] text-sm sm:text-base">Software Engineer, Full Stack Web Developer, Native App Developer.</p>
          </div>

          <Motion.div
            className="flex space-x-4 sm:space-x-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon
              return (
                <Motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-[#00008B] border border-[#FF8C00] rounded-lg flex items-center justify-center hover:bg-[#FF8C00] transition-colors"
                  whileHover={{ y: -2, opacity: 0.9 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.03, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <IconComponent className="w-5 h-5 text-[#FF8C00] hover:text-white" />
                </Motion.a>
              )
            })}
          </Motion.div>
        </Motion.div>

        <Motion.div
          className="border-t border-[#FF8C00] mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <p className="text-[#FF8C00] text-sm sm:text-base">
            © {new Date().getFullYear()} SAINT Develops. All rights reserved.
          </p>
        </Motion.div>
      </div>
    </footer>
  )
}
