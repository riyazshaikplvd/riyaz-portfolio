"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { MapPin, Download, Mail, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const typingTexts = [
  "SOC Analyst L1",
  "Threat Detection Expert",
  "SIEM Monitoring Specialist",
  "Incident Responder",
  "Security Operations Pro",
]

export function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [clickEffects, setClickEffects] = useState<{ id: number; x: number; y: number; color: string }[]>([])
  const effectIdRef = useRef(0)

  useEffect(() => {
    const currentFullText = typingTexts[currentTextIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentFullText.length) {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentTextIndex])

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
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,211,238,0.15),transparent)]" />

      <div className="mx-auto max-w-5xl w-full relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Profile Image with Open to Work on Right Side */}
          <div className="relative mb-8 flex items-center gap-4">
            {/* Profile Photo Container */}
            <div className="relative group">
              {/* Outer rotating ring */}
              <div className="absolute -inset-3 rounded-full border-2 border-dashed border-cyan-400/50 animate-[spin_12s_linear_infinite]" />
              
              {/* Pulsing glow */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 blur-xl opacity-60 group-hover:opacity-80 transition-all duration-500 animate-pulse" />
              
              {/* Main profile image - object-center to fix positioning */}
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.6)] group-hover:shadow-[0_0_60px_rgba(34,211,238,0.8)] transition-all duration-500 bg-slate-900">
                <Image
                  src="/riyaz-profile.jpg"
                  alt="Riyaz Shaik - SOC Analyst"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
            
            {/* Open to Work Badge - On Right Side */}
            <div className="absolute -right-4 sm:right-auto sm:relative flex flex-col items-start">
              <div className="bg-gradient-to-r from-emerald-500 to-green-400 text-white text-xs sm:text-sm font-black px-4 py-2 rounded-lg shadow-lg shadow-emerald-500/50 flex items-center gap-2 animate-pulse whitespace-nowrap">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
                OPEN TO WORK
              </div>
              <span className="text-emerald-400 text-xs font-bold mt-1 ml-1">Immediate Joiner</span>
            </div>
          </div>

          {/* Name with gradient - BOLD */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 tracking-tight">
            <span className="text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">SHAIK </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 drop-shadow-[0_0_25px_rgba(34,211,238,0.6)]">RIYAZ</span>
          </h1>
          
          {/* Typing Animation - BRIGHT */}
          <div className="h-12 mb-4 flex items-center justify-center">
            <span className="text-cyan-500 text-2xl font-mono font-bold mr-2">{"<"}</span>
            <span className="text-2xl sm:text-3xl text-cyan-300 font-mono font-black drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
              {displayedText}
              <span className="animate-pulse text-cyan-400 ml-0.5">|</span>
            </span>
            <span className="text-cyan-500 text-2xl font-mono font-bold ml-2">{"/>"}</span>
          </div>

          {/* Description - BOLD COLORFUL */}
          <p className="text-slate-200 text-lg sm:text-xl mb-5 max-w-2xl leading-relaxed font-semibold">
            Passionate about <span className="text-cyan-400 font-black">defending digital assets</span> with expertise in 
            <span className="text-blue-400 font-black"> SIEM monitoring</span>, 
            <span className="text-emerald-400 font-black"> incident response</span>, 
            <span className="text-purple-400 font-black"> threat detection</span>, and 
            <span className="text-orange-400 font-black"> security operations</span>.
          </p>

          {/* Location - BOLD */}
          <div className="flex items-center justify-center gap-2 text-slate-200 mb-6">
            <MapPin className="h-5 w-5 text-cyan-400" />
            <span className="text-base font-bold">Bengaluru, Karnataka, India</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              size="lg" 
              className="relative overflow-hidden bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 hover:from-cyan-400 hover:via-cyan-300 hover:to-blue-400 text-slate-950 font-black text-base shadow-lg shadow-cyan-500/50 transition-all duration-300 hover:shadow-cyan-400/70 hover:scale-105 active:scale-95 px-8 py-6"
              onClick={(e) => createClickEffect(e, 'white')}
              asChild
            >
              <a href="/RIYAZ-SOC-L1.pdf" download>
                {clickEffects.map(effect => (
                  <span
                    key={effect.id}
                    className="absolute rounded-full pointer-events-none animate-[rippleExpand_0.8s_ease-out_forwards]"
                    style={{
                      left: effect.x,
                      top: effect.y,
                      transform: 'translate(-50%, -50%)',
                      background: `radial-gradient(circle, ${effect.color}60 0%, transparent 70%)`,
                    }}
                  />
                ))}
                <Download className="h-5 w-5 mr-2" />
                Download Resume
              </a>
            </Button>
            <Button 
              size="lg" 
              className="relative overflow-hidden border-2 border-cyan-400 bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 hover:text-cyan-200 hover:border-cyan-300 transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] hover:scale-105 active:scale-95 font-black text-base px-8 py-6"
              onClick={(e) => createClickEffect(e, 'cyan')}
              asChild
            >
              <a href="mailto:riyazshaikplvd@gmail.com">
                {clickEffects.map(effect => (
                  <span
                    key={effect.id}
                    className="absolute rounded-full pointer-events-none animate-[rippleExpand_0.8s_ease-out_forwards]"
                    style={{
                      left: effect.x,
                      top: effect.y,
                      transform: 'translate(-50%, -50%)',
                      background: `radial-gradient(circle, ${effect.color}40 0%, transparent 70%)`,
                    }}
                  />
                ))}
                <Mail className="h-5 w-5 mr-2" />
                Hire Me
              </a>
            </Button>
          </div>

          {/* Social Links - BRIGHT BRAND COLORS */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/riyazshaikplvd"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 rounded-full bg-[#0A66C2] shadow-[0_0_25px_rgba(10,102,194,0.6)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(10,102,194,0.8)] active:scale-95"
            >
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/riyazshaikplvd"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 rounded-full bg-[#333] shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] active:scale-95"
            >
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/riyaz_shaik_plvd"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] shadow-[0_0_25px_rgba(225,48,108,0.6)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(225,48,108,0.8)] active:scale-95"
            >
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@RebelstarRiyaz"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 rounded-full bg-[#FF0000] shadow-[0_0_25px_rgba(255,0,0,0.6)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(255,0,0,0.8)] active:scale-95"
            >
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:riyazshaikplvd@gmail.com"
              className="group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(34,211,238,0.8)] active:scale-95"
            >
              <Mail className="w-7 h-7 text-white" />
            </a>

            {/* Phone */}
            <a
              href="tel:+916281446962"
              className="group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-green-400 shadow-[0_0_25px_rgba(16,185,129,0.6)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(16,185,129,0.8)] active:scale-95"
            >
              <Phone className="w-7 h-7 text-white" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-cyan-400 text-xs font-bold mb-1 uppercase tracking-widest">Scroll Down</span>
            <ChevronDown className="w-5 h-5 text-cyan-400" />
          </div>
        </div>
      </div>
    </section>
  )
}
