"use client"

import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Youtube,
  Instagram
} from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-cyan-400 font-bold mb-3 tracking-widest text-sm">
            // GET IN TOUCH
          </p>

          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
            Let&apos;s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Connect
            </span>
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            I&apos;m actively seeking{" "}
            <span className="text-cyan-400 font-bold">SOC Analyst</span> and{" "}
            <span className="text-blue-400 font-bold">Cybersecurity</span> opportunities.{" "}
            Let&apos;s discuss how I can contribute to your security team.
          </p>
        </div>

        {/* CONTACT CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto mb-16">

          {/* EMAIL */}
          <a
            href="mailto:riyazshaikplvd@gmail.com"
            className="group bg-cyan-500/10 border border-cyan-400/40 rounded-xl p-5 text-center hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:border-cyan-300 transition-all duration-300 hover:scale-105"
          >
            <Mail className="mx-auto mb-3 h-7 w-7 text-cyan-400 group-hover:drop-shadow-[0_0_12px_#22d3ee] group-hover:scale-110 transition-all" />
            <p className="text-cyan-400 text-xs font-bold">Email</p>
            <p className="text-white text-sm font-bold truncate">
              riyazshaikplvd@...
            </p>
          </a>

          {/* PHONE */}
          <a
            href="tel:+916281446962"
            className="group bg-green-500/10 border border-green-400/40 rounded-xl p-5 text-center hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] hover:border-green-300 transition-all duration-300 hover:scale-105"
          >
            <Phone className="mx-auto mb-3 h-7 w-7 text-green-400 group-hover:drop-shadow-[0_0_12px_#22c55e] group-hover:scale-110 transition-all" />
            <p className="text-green-400 text-xs font-bold">Phone</p>
            <p className="text-white text-sm font-bold">+91 6281446962</p>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://linkedin.com/in/riyazshaikplvd"
            target="_blank"
            className="group bg-[#0A66C2]/10 border border-[#0A66C2]/50 rounded-xl p-5 text-center hover:shadow-[0_0_30px_rgba(10,102,194,0.6)] hover:border-[#0A66C2] transition-all duration-300 hover:scale-105"
          >
            <Linkedin className="mx-auto mb-3 h-7 w-7 text-[#0A66C2] group-hover:drop-shadow-[0_0_12px_#0A66C2] group-hover:scale-110 transition-all" />
            <p className="text-[#0A66C2] text-xs font-bold">LinkedIn</p>
            <p className="text-white text-sm font-bold">riyazshaikplvd</p>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/riyazshaikplvd"
            target="_blank"
            className="group bg-slate-700/10 border border-slate-400/40 rounded-xl p-5 text-center hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:border-white transition-all duration-300 hover:scale-105"
          >
            <Github className="mx-auto mb-3 h-7 w-7 text-white group-hover:drop-shadow-[0_0_12px_white] group-hover:scale-110 transition-all" />
            <p className="text-slate-300 text-xs font-bold">GitHub</p>
            <p className="text-white text-sm font-bold">riyazshaikplvd</p>
          </a>

          {/* YOUTUBE */}
          <a
            href="https://youtube.com/@RebelstarRiyaz"
            target="_blank"
            className="group bg-red-500/10 border border-red-500/50 rounded-xl p-5 text-center hover:shadow-[0_0_30px_rgba(255,0,0,0.6)] hover:border-red-400 transition-all duration-300 hover:scale-105"
          >
            <Youtube className="mx-auto mb-3 h-7 w-7 text-red-400 group-hover:drop-shadow-[0_0_12px_red] group-hover:scale-110 transition-all" />
            <p className="text-red-400 text-xs font-bold">YouTube</p>
            <p className="text-white text-sm font-bold">@RebelstarRiyaz</p>
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://instagram.com/riyaz_shaik_plvd"
            target="_blank"
            className="group bg-pink-500/10 border border-pink-500/50 rounded-xl p-5 text-center hover:shadow-[0_0_30px_rgba(225,48,108,0.6)] hover:border-pink-400 transition-all duration-300 hover:scale-105"
          >
            <Instagram className="mx-auto mb-3 h-7 w-7 text-pink-400 group-hover:drop-shadow-[0_0_12px_#E1306C] group-hover:scale-110 transition-all" />
            <p className="text-pink-400 text-xs font-bold">Instagram</p>
            <p className="text-white text-sm font-bold">@riyaz_shaik_plvd</p>
          </a>
        </div>

        {/* CAREER INTERESTS */}
        <div className="text-center">
          <p className="text-cyan-400 text-lg font-bold mb-6 tracking-wider">
            Career Interests
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "SOC Analyst",
              "Incident Responder",
              "Threat Hunter",
              "Cybersecurity Analyst",
              "Digital Forensics"
            ].map((role) => (
              <span
                key={role}
                className="text-base bg-slate-800/70 border border-cyan-400/40 text-white font-semibold px-6 py-2.5 rounded-full hover:border-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all duration-300 hover:scale-105"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
