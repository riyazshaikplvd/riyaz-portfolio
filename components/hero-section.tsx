"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { MapPin, Mail, Phone, ChevronDown } from "lucide-react"
import Image from "next/image"

const typingTexts = [
  { text: "SOC Analyst", color: "text-[#00FFFF] drop-shadow-[0_0_14px_#00FFFF]" },
  { text: "Incident Responder", color: "text-[#FF8C00] drop-shadow-[0_0_14px_#FF8C00]" },
  { text: "Threat Detection Expert", color: "text-[#FF0033] drop-shadow-[0_0_14px_#FF0033]" },
  { text: "Cybersecurity Analyst", color: "text-[#C026FF] drop-shadow-[0_0_14px_#C026FF]" },
  { text: "Digital Forensics Expert", color: "text-[#00FF7F] drop-shadow-[0_0_14px_#00FF7F]" },
]

export function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentFullText = typingTexts[currentTextIndex].text

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

  return (
    <section
      id="hero"
      className="h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-slate-950 relative"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,211,238,0.15),transparent)]" />

      <div className="mx-auto max-w-5xl w-full relative z-10 text-center">

        {/* Profile + Badge */}
        <div className="relative mb-6 flex justify-center">
          
          <div className="relative group">
            <div className="absolute -inset-3 rounded-full border-2 border-dashed border-cyan-400/50 animate-[spin_12s_linear_infinite]" />

            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 blur-xl opacity-60 animate-pulse" />

            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.6)]">
              <Image
                src="/riyaz-profile.jpg"
                alt="Riyaz Shaik"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* Open to Work */}
          <div className="absolute left-full ml-6 top-1/2 -translate-y-1/2 hidden lg:block">
            <div className="bg-gradient-to-r from-emerald-500 to-green-400 text-white text-xs font-bold px-3 py-1 rounded-lg animate-pulse">
              ● OPEN TO WORK
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-3">
          <span className="text-white">SHAIK </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300">
            RIYAZ
          </span>
        </h1>

        {/* Typing */}
        <div className="h-10 mb-3 flex justify-center">
          <span className={`text-xl sm:text-2xl font-bold ${typingTexts[currentTextIndex].color}`}>
            {displayedText}
            <span className="animate-pulse ml-1">|</span>
          </span>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-base sm:text-lg mb-4 max-w-2xl mx-auto">
          Passionate about <span className="text-cyan-400 font-bold">defending digital assets</span> with expertise in
          <span className="text-blue-400 font-bold"> SIEM monitoring</span>,
          <span className="text-emerald-400 font-bold"> incident response</span>,
          <span className="text-purple-400 font-bold"> threat detection</span>, and
          <span className="text-orange-400 font-bold"> security operations</span>.
        </p>

        {/* Location */}
        <div className="flex justify-center items-center gap-2 text-slate-300 mb-5">
          <MapPin className="h-5 w-5 text-cyan-400" />
          <span>India (Open to Relocation)</span>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-6">
          <a href="https://linkedin.com/in/riyazshaikplvd" className="w-12 h-12 bg-[#0A66C2] rounded-full"></a>
          <a href="https://github.com/riyazshaikplvd" className="w-12 h-12 bg-white rounded-full"></a>
          <a href="https://instagram.com/riyaz_shaik_plvd" className="w-12 h-12 bg-pink-500 rounded-full"></a>
          <a href="https://youtube.com/@RebelstarRiyaz" className="w-12 h-12 bg-red-500 rounded-full"></a>
          <a href="mailto:riyazshaikplvd@gmail.com" className="w-12 h-12 bg-cyan-500 rounded-full"></a>
          <a href="tel:+916281446962" className="w-12 h-12 bg-green-500 rounded-full"></a>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-5 h-5 text-cyan-400" />
      </div>
    </section>
  )
}
