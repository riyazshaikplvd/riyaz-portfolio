"use client"

import { Mail, Phone, Download, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useRef, useCallback } from "react"

const careerInterests = [
  "SOC Analyst L1",
  "SOC Analyst L2",
  "Incident Responder",
  "Threat Hunter",
  "Security Analyst",
  "Cybersecurity Analyst",
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
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Connect</span></h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg font-medium">
            I&apos;m actively seeking <span className="text-cyan-400 font-bold">SOC Analyst</span> and <span className="text-blue-400 font-bold">Cybersecurity</span> opportunities. 
            Let&apos;s discuss how I can contribute to your security team.
          </p>
        </div>

        {/* Location */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 px-8 py-4 rounded-full shadow-lg shadow-cyan-500/10">
            <MapPin className="h-5 w-5 text-cyan-400" />
            <span className="text-white font-bold text-lg">Bengaluru, Karnataka, India</span>
          </div>
        </div>

        {/* Contact Links with BRIGHT BRAND COLORS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-12">
          {/* Email - Cyan */}
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

          {/* Phone - Emerald */}
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

          {/* LinkedIn - Bright Blue */}
          <a
            href="https://linkedin.com/in/riyazshaikplvd"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => createClickEffect(e, '#0A66C2')}
            className="group relative overflow-hidden bg-gradient-to-br from-[#0A66C2]/30 to-blue-700/20 border-2 border-[#0A66C2]/60 rounded-xl p-5 text-center hover:border-[#0A66C2] hover:shadow-[0_0_30px_rgba(10,102,194,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <div className="flex justify-center mb-3">
              <div className="p-3 rounded-xl bg-[#0A66C2] shadow-lg shadow-blue-500/50">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
            </div>
            <p className="text-xs text-[#0A66C2] font-bold mb-1">LinkedIn</p>
            <p className="text-sm text-white font-bold">riyazshaikplvd</p>
          </a>

          {/* GitHub - Gray/White */}
          <a
            href="https://github.com/riyazshaikplvd"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => createClickEffect(e, '#ffffff')}
            className="group relative overflow-hidden bg-gradient-to-br from-slate-600/30 to-slate-800/30 border-2 border-slate-500/50 rounded-xl p-5 text-center hover:border-slate-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <div className="flex justify-center mb-3">
              <div className="p-3 rounded-xl bg-[#24292e] shadow-lg shadow-slate-900/50">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
            </div>
            <p className="text-xs text-slate-300 font-bold mb-1">GitHub</p>
            <p className="text-sm text-white font-bold">riyazshaikplvd</p>
          </a>

          {/* YouTube - Bright Red */}
          <a
            href="https://youtube.com/@RebelstarRiyaz"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => createClickEffect(e, '#FF0000')}
            className="group relative overflow-hidden bg-gradient-to-br from-red-500/30 to-red-700/20 border-2 border-red-500/60 rounded-xl p-5 text-center hover:border-red-400 hover:shadow-[0_0_30px_rgba(255,0,0,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <div className="flex justify-center mb-3">
              <div className="p-3 rounded-xl bg-[#FF0000] shadow-lg shadow-red-500/50">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
            </div>
            <p className="text-xs text-red-400 font-bold mb-1">YouTube</p>
            <p className="text-sm text-white font-bold">@RebelstarRiyaz</p>
          </a>

          {/* Instagram - Gradient */}
          <a
            href="https://instagram.com/riyaz_shaik_plvd"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => createClickEffect(e, '#E1306C')}
            className="group relative overflow-hidden bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-orange-500/20 border-2 border-pink-500/60 rounded-xl p-5 text-center hover:border-pink-400 hover:shadow-[0_0_30px_rgba(225,48,108,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <div className="flex justify-center mb-3">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] shadow-lg shadow-pink-500/50">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </div>
            <p className="text-xs text-pink-400 font-bold mb-1">Instagram</p>
            <p className="text-sm text-white font-bold">@riyaz_shaik_plvd</p>
          </a>
        </div>

        {/* Cybersecurity Platforms Links */}
        <div className="text-center mb-10">
          <p className="text-slate-400 text-sm font-bold mb-4 tracking-wider">// CYBERSECURITY PLATFORMS</p>
          <div className="flex flex-wrap justify-center gap-4">
            {/* TryHackMe */}
            <a
              href="https://tryhackme.com/p/riyazshaikplvd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-red-500/20 to-red-600/10 border-2 border-red-500/50 rounded-xl px-6 py-3 hover:border-red-400 hover:shadow-[0_0_25px_rgba(239,68,68,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center shadow-lg shadow-red-500/50">
                <span className="text-white font-black text-sm">THM</span>
              </div>
              <div className="text-left">
                <p className="text-white font-bold">TryHackMe</p>
                <p className="text-red-400 text-xs font-semibold">Top 25% Global</p>
              </div>
            </a>

            {/* LetsDefend */}
            <a
              href="https://app.letsdefend.io/user/riyazshaikplvd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-cyan-500/20 to-cyan-600/10 border-2 border-cyan-500/50 rounded-xl px-6 py-3 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/50">
                <span className="text-white font-black text-sm">LD</span>
              </div>
              <div className="text-left">
                <p className="text-white font-bold">LetsDefend</p>
                <p className="text-cyan-400 text-xs font-semibold">913 Points | 100% Success</p>
              </div>
            </a>

            {/* HackTheBox */}
            <a
              href="https://app.hackthebox.com/profile/riyazshaikplvd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-green-600/10 border-2 border-green-500/50 rounded-xl px-6 py-3 hover:border-green-400 hover:shadow-[0_0_25px_rgba(34,197,94,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/50">
                <span className="text-white font-black text-sm">HTB</span>
              </div>
              <div className="text-left">
                <p className="text-white font-bold">HackTheBox</p>
                <p className="text-green-400 text-xs font-semibold">Active Profile</p>
              </div>
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="relative overflow-hidden bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 hover:from-cyan-400 hover:via-cyan-300 hover:to-blue-400 text-slate-950 font-black shadow-lg shadow-cyan-500/40 text-lg px-8 transition-all duration-300 hover:scale-105 active:scale-95"
              asChild
            >
              <a href="/RIYAZ-SOC-L1.pdf" download>
                <Download className="h-5 w-5 mr-2" />
                Download Resume
              </a>
            </Button>
            <Button
              size="lg"
              className="border-2 border-cyan-400 bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 hover:border-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] font-bold text-lg px-8 transition-all duration-300 hover:scale-105 active:scale-95"
              asChild
            >
              <a href="mailto:riyazshaikplvd@gmail.com">
                <Send className="h-5 w-5 mr-2" />
                Send Email
              </a>
            </Button>
          </div>
        </div>

        {/* Career Interests */}
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
