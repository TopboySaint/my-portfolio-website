import { Github, Linkedin } from "lucide-react";
import { motion as Motion } from "framer-motion";
import { BsTwitterX, BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/TopboySaint", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: BsTwitterX, href: "https://x.com/sgt_nash?s=21", label: "Twitter" },
    {
      icon: BsWhatsapp,
      href: "https://wa.me/+2347063371898",
      label: "Whatsapp",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#0f2027] py-16 px-4 sm:px-6 lg:px-8 text-cyan-100 font-[Poppins]">
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[540px] h-[540px] bg-cyan-400/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-200px] right-[-160px] w-[520px] h-[520px] bg-teal-400/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-0 w-[420px] h-[420px] -translate-y-1/2 bg-cyan-500/10 rounded-full blur-2xl" />

      <div className="relative max-w-7xl mx-auto">
        <Motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="mb-2 md:mb-0 text-center md:text-left max-w-lg">
            <h3 className="text-xl sm:text-2xl font-extrabold mb-3 tracking-tight">
              <span className="text-cyan-300 drop-shadow">
                Adeniyi 'SAINT Develops' Bukola
              </span>
            </h3>
            <p className="text-cyan-200/80 text-sm sm:text-base leading-relaxed">
              Software Engineer focused on full stack web & native app
              development.
            </p>
          </div>

          <Motion.div
            className="flex space-x-4 sm:space-x-5"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <Motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#0f1c21]/70 ring-1 ring-cyan-400/20 backdrop-blur-sm hover:bg-cyan-400/20 hover:shadow-md hover:shadow-cyan-500/20 transition-all duration-300"
                  whileHover={{ y: -2, opacity: 0.9 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.03,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <IconComponent className="w-5 h-5 text-cyan-300 group-hover:text-cyan-100 transition-colors" />
                </Motion.a>
              );
            })}
          </Motion.div>
        </Motion.div>

        <Motion.div
          className="border-t border-cyan-400/20 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <p className="text-cyan-300/70 text-xs sm:text-sm md:text-base tracking-wide">
            © {new Date().getFullYear()} SAINT Develops — All rights reserved.
          </p>
        </Motion.div>
      </div>
    </footer>
  );
}
