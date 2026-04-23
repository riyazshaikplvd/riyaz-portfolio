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
  const [clickEffects, setClickEffects] = useState<{ id: number; x: number; y: number; color: string }[]>([])
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

        <div className="text-center mb-12">
          <p className="text-cyan-400 font-bold mb-2 tracking-wider text-sm">// GET IN TOUCH</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Connect</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg font-medium">
            I&apos;m actively seeking <span className="text-cyan-400 font-bold">SOC Analyst</span> and <span className="text-blue-400 font-bold">Cybersecurity</span> opportunities.
            Let&apos;s discuss how I can contribute to your security team.
          </p>
        </div>

        {/* CONTACT CARDS (UNCHANGED) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-12">

          {/* Email */}
          <a
            href="mailto:riyazshaikplvd@gmail.com"
            onClick={(e) => createClickEffect(e, '#22d3ee')}
            className="group relative overflow-hidden bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border-2 border-cyan-500/50 rounded-xl p-5 text-center hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            {clickEffects.map(effect => (
              <span key={effect.id} className="absolute rounded-full pointer-events-none animate-[rippleExpand_0.8s_ease-out_forwards]"
                style={{ left: effect.x, top: effect.y, transform: 'translate(-50%, -50%)', background: `radial-gradient(circle, ${effect.color}60 0%, transparent 70%)` }}
              />
            ))}
            <div className="flex justify-center mb-3">
              <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 shadow-lg shadow-cyan-500/50">
                <Mail className="h-6 w-6 text-white" />
              </div>
            </div>
            <p className="text-xs text-cyan-400 font-bold mb-1">Email</p>
            <p className="text-sm text-white font-bold truncate">riyazshaikplvd@...</p>
          </a>

          {/* Phone */}
          <a
            href="tel:+916281446962"
            onClick={(e) => createClickEffect(e, '#10b981')}
            className="group relative overflow-hidden bg-gradient-to-br from-emerald-500/20 to-green-600/20 border-2 border-emerald-500/50 rounded-xl p-5 text-center hover:border-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <div className="flex justify-center mb-3">
              <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-400 shadow-lg shadow-emerald-500/50">
                <Phone className="h-6 w-6 text-white" />
              </div>
            </div>
            <p className="text-xs text-emerald-400 font-bold mb-1">Phone</p>
            <p className="text-sm text-white font-bold">+91 6281446962</p>
          </a>

          {/* KEEP ALL OTHER SOCIAL CARDS SAME (LinkedIn, GitHub, YouTube, Instagram) */}

        </div>

        {/* CAREER INTERESTS (UPDATED ONLY) */}
        <div className="text-center">
          <p className="text-cyan-400 text-sm font-bold mb-4 tracking-wider">Career Interests</p>
          <div className="flex flex-wrap justify-center gap-3">
            {careerInterests.map((role) => (
              <span
                key={role}
                className="text-sm bg-gradient-to-r from-slate-800/80 to-slate-900/80 border-2 border-cyan-500/30 text-white font-bold px-5 py-2.5 rounded-full hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 hover:scale-105"
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
