import emailjs from "@emailjs/browser"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import toast from "react-hot-toast"
import { motion as Motion } from "framer-motion"
import { useRef, useState } from "react"


export default function Contact() {
  const formRef = useRef()
  const [isSending, setIsSending] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const sendEmail = (e) => {
    e.preventDefault()
    if (!validate()) return
    setIsSending(true)
   emailjs.sendForm(
  import.meta.env.VITE_YOUR_SERVICE_ID,
  import.meta.env.VITE_YOUR_TEMPLATE_ID,
  formRef.current,
  {
    publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY,
  }
)
      .then(
        (result) => {
          console.log("SUCCESS!", result)
          toast.success("Message sent successfully!")
          setShowSuccessMessage(true)
          setTimeout(() => setShowSuccessMessage(false), 5000) // Hide after 5 secs
          setFormData({ name: "", email: "", subject: "", message: "" })
          formRef.current.reset()
        },
        (error) => {
          console.log("FAILED...", error.text)
          toast.error("Failed to send message. Try again later.")
        },
      )
      .finally(() => setIsSending(false))
  }

  const contactInfo = [
    { icon: Mail, title: "Email", info: "topboysaint1@gmail" },
    { icon: Phone, title: "Phone", info: "+2347063371898" },
    { icon: MapPin, title: "Location", info: "Ogbomoso, Oyo state, Nigeria" },
  ]

  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] text-cyan-100 font-[Poppins] overflow-hidden"
    >
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute -top-32 -right-24 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-160px] left-[-140px] w-[420px] h-[420px] bg-teal-400/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] bg-gradient-radial from-cyan-500/10 via-transparent to-transparent rounded-full blur-2xl" />

      <div className="relative max-w-6xl mx-auto">
        <Motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-200 drop-shadow">Let's Connect</span>
          </h2>
          <p className="text-cyan-200/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Open to roles, collaborations, and meaningful engineering conversations. Drop a message and I’ll respond promptly.
          </p>
        </Motion.div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Contact Info Section */}
          <Motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="lg:sticky lg:top-28">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 lg:mb-8 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-200">Get in touch</span>
              </h3>
              <p className="text-cyan-200/75 mb-8 text-sm sm:text-base leading-relaxed">
                Available for full-time roles, freelance work, and open-source collaboration. Have a product idea or technical challenge? Let’s explore it.
              </p>

              <div className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon
                  return (
                    <Motion.div
                      key={index}
                      className="flex items-center gap-4 group"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-50px" }}
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#0f1c21]/70 ring-1 ring-cyan-400/20 backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-cyan-400/20 group-hover:via-blue-400/20 group-hover:to-teal-300/20 transition-all duration-300 shadow-md shadow-black/20">
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-300 group-hover:text-cyan-100 transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm sm:text-base text-cyan-100 tracking-wide">{contact.title}</h4>
                        <p className="text-cyan-300/80 text-sm sm:text-base">{contact.info}</p>
                      </div>
                    </Motion.div>
                  )
                })}
              </div>
            </div>
          </Motion.div>

          {/* Contact Form Section */}
          <Motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="relative p-6 sm:p-8 rounded-2xl bg-[#0f1c21]/60 backdrop-blur-md ring-1 ring-cyan-400/15 shadow-xl shadow-black/40">
              <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-cyan-400/5 via-blue-400/5 to-teal-300/5" />
              <form ref={formRef} onSubmit={sendEmail} disabled={isSending} className="space-y-6 relative">
                <Motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    className="w-full px-4 py-3 bg-[#0d171b]/60 border border-cyan-400/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-300/60 transition-colors text-sm sm:text-base text-cyan-100 placeholder:text-cyan-300/40"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                </Motion.div>

                <Motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    className="w-full px-4 py-3 bg-[#0d171b]/60 border border-cyan-400/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-300/60 transition-colors text-sm sm:text-base text-cyan-100 placeholder:text-cyan-300/40"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </Motion.div>

                <Motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    className="w-full px-4 py-3 bg-[#0d171b]/60 border border-cyan-400/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-300/60 transition-colors text-sm sm:text-base text-cyan-100 placeholder:text-cyan-300/40"
                    placeholder="Let's work together"
                  />
                  {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                </Motion.div>

                <Motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#0d171b]/60 border border-cyan-400/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-300/60 transition-colors resize-none text-sm sm:text-base text-cyan-100 placeholder:text-cyan-300/40"
                    placeholder="Your message..."
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </Motion.div>

                {showSuccessMessage && (
                  <Motion.div
                    className="text-green-400 text-sm sm:text-base font-medium"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    ✅ Message sent successfully. I'll get back to you soon!
                  </Motion.div>
                )}

                <Motion.button
                  type="submit"
                  disabled={isSending}
                  className={`relative w-full ${isSending ? "bg-gradient-to-r from-cyan-600/60 via-blue-600/60 to-teal-500/60 cursor-not-allowed" : "bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-400 hover:from-cyan-400 hover:via-blue-400 hover:to-teal-300 cursor-pointer"} text-[#0b1214] font-semibold px-6 py-3 rounded-lg transition-all flex items-center justify-center gap-2 text-sm sm:text-base shadow-md shadow-cyan-900/40 ring-1 ring-cyan-400/30`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ opacity: 0.9 }}
                >
                  {isSending ? (
                    <>
                      <svg className="animate-spin w-5 h-5 text-cyan-100" fill="none" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 00-8 8h4z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="text-[#0b1214]" />
                      <span>Send Message</span>
                    </>
                  )}
                </Motion.button>
              </form>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  )
}