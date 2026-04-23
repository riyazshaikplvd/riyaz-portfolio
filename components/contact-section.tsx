"use client"

import { Mail, Phone } from "lucide-react"
import { useState, useRef, useCallback } from "react"

const careerInterests = [
  "SOC Analyst",
  "Incident Responder",
  "Threat Hunter",
  "Cybersecurity Analyst",
  "Digital Forensics",
]

export function ContactSection() {
  const [clickEffects, setClickEffects] = useState<any[]>([])
  const effectIdRef = useRef(0)

  const createClickEffect = useCallback((e: React.MouseEvent, color: string) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = effectIdRef.current++

    setClickEffects(prev => [...prev, { id, x, y, color }])

    setTimeout(() => {
      setClickEffects(prev => prev.filter(effect => effect.id !== id))
    }, 800)
  }, [])

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-cyan-400 font-bold mb-2 tracking-wider text-sm">// GET IN TOUCH</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Connect</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg font-medium">
            I&apos;m actively seeking <span className="text-cyan-400 font-bold">SOC Analyst</span> and 
            <span className="text-blue-400 font-bold"> Cybersecurity</span> opportunities.
          </p>
        </div>

        {/* SOCIAL CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-12">

          {/* Email */}
          <a href="mailto:riyazshaikplvd@gmail.com"
            onClick={(e) => createClickEffect(e, '#22d3ee')}
            className="group relative overflow-hidden bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border-2 border-cyan-500/50 rounded-xl p-5 text-center hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all hover:scale-105">

            <div className="flex justify-center mb-3">
              <div className="p-3 rounded-xl bg-cyan-500">
                <Mail className="h-6 w-6 text-white" />
              </div>
            </div>
            <p className="text-xs text-cyan-400 font-bold">Email</p>
            <p className="text-sm text-white font-bold truncate">riyazshaikplvd@...</p>
          </a>

          {/* Phone */}
          <a href="tel:+916281446962"
            className="group bg-gradient-to-br from-green-500/20 to-green-600/20 border-2 border-green-500/50 rounded-xl p-5 text-center hover:scale-105">

            <div className="flex justify-center mb-3">
              <div className="p-3 rounded-xl bg-green-500">
                <Phone className="h-6 w-6 text-white" />
              </div>
            </div>
            <p className="text-xs text-green-400 font-bold">Phone</p>
            <p className="text-sm text-white font-bold">+91 6281446962</p>
          </a>

          {/* LinkedIn */}
          <a href="https://linkedin.com/in/riyazshaikplvd" target="_blank"
            className="bg-[#0A66C2]/20 border-2 border-[#0A66C2]/60 rounded-xl p-5 text-center hover:scale-105">
            <p className="text-xs text-[#0A66C2] font-bold">LinkedIn</p>
            <p className="text-white font-bold">riyazshaikplvd</p>
          </a>

          {/* GitHub */}
          <a href="https://github.com/riyazshaikplvd" target="_blank"
            className="bg-slate-700/20 border-2 border-slate-400 rounded-xl p-5 text-center hover:scale-105">
            <p className="text-xs text-slate-300 font-bold">GitHub</p>
            <p className="text-white font-bold">riyazshaikplvd</p>
          </a>

          {/* YouTube */}
          <a href="https://youtube.com/@RebelstarRiyaz" target="_blank"
            className="bg-red-500/20 border-2 border-red-500 rounded-xl p-5 text-center hover:scale-105">
            <p className="text-xs text-red-400 font-bold">YouTube</p>
            <p className="text-white font-bold">@RebelstarRiyaz</p>
          </a>

          {/* Instagram */}
          <a href="https://instagram.com/riyaz_shaik_plvd" target="_blank"
            className="bg-pink-500/20 border-2 border-pink-500 rounded-xl p-5 text-center hover:scale-105">
            <p className="text-xs text-pink-400 font-bold">Instagram</p>
            <p className="text-white font-bold">@riyaz_shaik_plvd</p>
          </a>

        </div>

        {/* CAREER INTERESTS */}
        <div className="text-center">
          <p className="text-cyan-800 text-sm font-bold mb-4 tracking-wider">Career Interests</p>
          <div className="flex flex-wrap justify-center gap-3">
            {careerInterests.map((role) => (
              <span key={role}
                className="text-sm border border-cyan-500/30 text-white px-5 py-2 rounded-full">
                {role}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
