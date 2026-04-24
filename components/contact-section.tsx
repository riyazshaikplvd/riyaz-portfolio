"use client"

import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Youtube,
  Instagram,
} from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-cyan-400 font-bold mb-2 tracking-wider text-sm">
            // GET IN TOUCH
          </p>

          <h2 className="text-5xl font-black text-white mb-4">
            Let&apos;s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Connect
            </span>
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-lg font-medium">
            I&apos;m actively seeking{" "}
            <span className="text-cyan-400 font-bold">SOC Analyst</span> and{" "}
            <span className="text-blue-400 font-bold">Cybersecurity</span> opportunities.
            Let's discuss how i can contribute to your Security Team.
          </p>
        </div>

        {/* CONTACT GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">

          {/* EMAIL */}
          <a href="mailto:riyazshaikplvd@gmail.com" target="_blank">
            <div className="p-6 rounded-2xl border border-cyan-400/30 bg-cyan-500/10 text-center 
              hover:scale-105 transition-all duration-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.7)]">

              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-cyan-500 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.9)]">
                <Mail className="w-9 h-9 text-white stroke-[2.5]" />
              </div>

              <p className="text-cyan-300 font-semibold">Email</p>
              <p className="text-white text-sm mt-1">riyazshaikplvd</p>
            </div>
          </a>

          {/* PHONE */}
          <a href="tel:+916281446962">
            <div className="p-6 rounded-2xl border border-green-400/30 bg-green-500/10 text-center 
              hover:scale-105 transition-all duration-300 hover:shadow-[0_0_35px_rgba(34,197,94,0.7)]">

              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-green-500 flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.9)]">
                <Phone className="w-9 h-9 text-white stroke-[2.5]" />
              </div>

              <p className="text-green-300 font-semibold">Phone</p>
              <p className="text-white text-sm mt-1">+91 6281446962</p>
            </div>
          </a>

          {/* LINKEDIN */}
          <a href="https://linkedin.com/in/riyazshaikplvd" target="_blank">
            <div className="p-6 rounded-2xl border border-blue-400/30 bg-blue-500/10 text-center 
              hover:scale-105 transition-all duration-300 hover:shadow-[0_0_35px_rgba(59,130,246,0.7)]">

              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.9)]">
                <Linkedin className="w-9 h-9 text-white stroke-[2.5]" />
              </div>

              <p className="text-blue-300 font-semibold">LinkedIn</p>
              <p className="text-white text-sm mt-1">riyazshaikplvd</p>
            </div>
          </a>

          {/* GITHUB */}
          <a href="https://github.com/riyazshaikplvd" target="_blank">
            <div className="p-6 rounded-2xl border border-gray-400/30 bg-slate-700/20 text-center 
              hover:scale-105 transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,255,255,0.4)]">

              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gray-800 flex items-center justify-center shadow-[0_0_25px_rgba(255,255,255,0.6)]">
                <Github className="w-9 h-9 text-white stroke-[2.5]" />
              </div>

              <p className="text-gray-300 font-semibold">GitHub</p>
              <p className="text-white text-sm mt-1">riyazshaikplvd</p>
            </div>
          </a>

          {/* YOUTUBE */}
          <a href="https://youtube.com/@RebelstarRiyaz" target="_blank">
            <div className="p-6 rounded-2xl border border-red-400/30 bg-red-500/10 text-center 
              hover:scale-105 transition-all duration-300 hover:shadow-[0_0_35px_rgba(239,68,68,0.7)]">

              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-red-600 flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.9)]">
                <Youtube className="w-9 h-9 text-white stroke-[2.5]" />
              </div>

              <p className="text-red-300 font-semibold">YouTube</p>
              <p className="text-white text-sm mt-1">@RebelstarRiyaz</p>
            </div>
          </a>

          {/* INSTAGRAM */}
          <a href="https://instagram.com/riyaz_shaik_plvd" target="_blank">
            <div className="p-6 rounded-2xl border border-pink-400/30 bg-pink-500/10 text-center 
              hover:scale-105 transition-all duration-300 hover:shadow-[0_0_35px_rgba(236,72,153,0.7)]">

              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-400 flex items-center justify-center shadow-[0_0_30px_rgba(236,72,153,0.9)]">
                <Instagram className="w-9 h-9 text-white stroke-[2.5]" />
              </div>

              <p className="text-pink-300 font-semibold">Instagram</p>
              <p className="text-white text-sm mt-1">@riyaz_shaik_plvd</p>
            </div>
          </a>

        </div>

        {/* CAREER */}
        <div className="text-center mt-14">
          <h3 className="text-cyan-400 text-lg font-bold mb-6">
            Career Interests
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "SOC Analyst",
              "Incident Responder",
              "Threat Hunter",
              "Cybersecurity Analyst",
              "Digital Forensics",
            ].map((item) => (
              <span
                key={item}
                className="px-5 py-2 text-base rounded-full border border-cyan-500/30 text-white 
                bg-slate-800 hover:bg-cyan-500/20 transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
