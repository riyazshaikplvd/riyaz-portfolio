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
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,211,238,0.15),transparent)]" />

      <div className="mx-auto max-w-5xl w-full relative z-10 flex flex-col items-center justify-center text-center">

        {/* Profile */}
        <div className="relative mb-8 flex items-center gap-4">
          <div className="relative group">
            <div className="absolute -inset-3 rounded-full border-2 border-dashed border-cyan-400/50 animate-[spin_12s_linear_infinite]" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 blur-xl opacity-60 group-hover:opacity-80 transition-all duration-500 animate-pulse" />

            <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.6)]">
              <Image
                src="/riyaz-profile.jpg"
                alt="Riyaz Shaik"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* Badge */}
          <div className="absolute top-1/2 -translate-y-1/2 left-full ml-10">
            <div className="bg-gradient-to-r from-emerald-500 to-green-400 text-white text-xs font-black px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-pulse whitespace-nowrap">
              ● OPEN TO WORK
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4">
          <span className="text-white">SHAIK </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            RIYAZ
          </span>
        </h1>

        {/* Typing */}
        <div className="h-12 mb-4 flex items-center justify-center">
          <span className="text-cyan-400 text-xl mr-2">{"<"}</span>
          <span className={`text-2xl sm:text-3xl font-bold ${typingTexts[currentTextIndex].color}`}>
            {displayedText}
            <span className="animate-pulse ml-1">|</span>
          </span>
          <span className="text-cyan-400 text-xl ml-2">{"/>"}</span>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-lg max-w-2xl mb-5">
          Passionate about defending digital assets with expertise in SIEM monitoring, incident response,
          threat detection, and security operations.
        </p>

        {/* Location */}
        <div className="flex items-center gap-2 text-slate-300 mb-6">
          <MapPin className="h-5 w-5 text-cyan-400" />
          <span>India (Open to Relocation)</span>
        </div>

        {/* Icons */}
        <div className="flex gap-4">
          <a href="mailto:riyazshaikplvd@gmail.com">
            <Mail className="w-6 h-6 text-cyan-400" />
          </a>
          <a href="tel:+916281446962">
            <Phone className="w-6 h-6 text-green-400" />
          </a>
        </div>

      </div>

      {/* Scroll */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-5 h-5 text-cyan-400" />
      </div>
    </section>
  )
}
