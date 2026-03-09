"use client"

import { ExternalLink, Trophy, Star, Target, Award } from "lucide-react"
import { useState, useRef, useCallback } from "react"

const platforms = [
  {
    name: "TryHackMe",
    logo: "THM",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-500",
    borderColor: "border-red-500/50",
    hoverBorder: "hover:border-red-400",
    shadow: "shadow-red-500/50",
    hoverShadow: "hover:shadow-[0_0_40px_rgba(239,68,68,0.5)]",
    textColor: "text-red-400",
    stats: [
      { label: "Rank", value: "Top 25%", color: "text-red-400" },
      { label: "Rooms", value: "138", color: "text-white" },
      { label: "Badges", value: "15", color: "text-white" },
    ],
    url: "https://tryhackme.com/p/riyazshaikplvd",
    badge: "[0x6][VOYAGER]",
    badgeColor: "bg-red-500/20 text-red-400 border-red-500/50",
  },
  {
    name: "LetsDefend",
    logo: "LD",
    color: "from-cyan-500 to-cyan-600",
    bgColor: "bg-cyan-500",
    borderColor: "border-cyan-500/50",
    hoverBorder: "hover:border-cyan-400",
    shadow: "shadow-cyan-500/50",
    hoverShadow: "hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]",
    textColor: "text-cyan-400",
    stats: [
      { label: "Score", value: "913", color: "text-cyan-400" },
      { label: "Success", value: "100%", color: "text-emerald-400" },
      { label: "Rank", value: "Top 15%", color: "text-white" },
    ],
    url: "https://app.letsdefend.io/user/riyazshaikplvd",
    badge: "Open To Work",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/50",
  },
  {
    name: "Hack The Box",
    logo: "HTB",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-500",
    borderColor: "border-green-500/50",
    hoverBorder: "hover:border-green-400",
    shadow: "shadow-green-500/50",
    hoverShadow: "hover:shadow-[0_0_40px_rgba(34,197,94,0.5)]",
    textColor: "text-green-400",
    stats: [
      { label: "Title", value: "SOC Analyst", color: "text-green-400" },
      { label: "Status", value: "Active", color: "text-emerald-400" },
      { label: "Location", value: "India", color: "text-white" },
    ],
    url: "https://app.hackthebox.com/profile/riyazshaikplvd",
    badge: "Active",
    badgeColor: "bg-green-500/20 text-green-400 border-green-500/50",
  },
]

const achievements = [
  { name: "TryHackMe Top 25%", platform: "TryHackMe", icon: Trophy, color: "text-yellow-400", bgColor: "bg-yellow-500/10 border-yellow-500/30" },
  { name: "Pre Security Learning Path", platform: "TryHackMe", icon: Award, color: "text-red-400", bgColor: "bg-red-500/10 border-red-500/30" },
  { name: "Splunk Engineer Badge", platform: "LetsDefend", icon: Star, color: "text-cyan-400", bgColor: "bg-cyan-500/10 border-cyan-500/30" },
  { name: "VirusTotal SOC Badge", platform: "LetsDefend", icon: Target, color: "text-green-400", bgColor: "bg-green-500/10 border-green-500/30" },
  { name: "Network Analyzer", platform: "LetsDefend", icon: Award, color: "text-blue-400", bgColor: "bg-blue-500/10 border-blue-500/30" },
  { name: "Threat Analyst", platform: "LetsDefend", icon: Star, color: "text-orange-400", bgColor: "bg-orange-500/10 border-orange-500/30" },
  { name: "Web Attack Investigator", platform: "LetsDefend", icon: Trophy, color: "text-purple-400", bgColor: "bg-purple-500/10 border-purple-500/30" },
  { name: "Incident Management", platform: "LetsDefend", icon: Award, color: "text-pink-400", bgColor: "bg-pink-500/10 border-pink-500/30" },
]

export function CyberLabsSection() {
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
    <section id="cyber-labs" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-cyan-400 font-bold mb-2 tracking-wider text-sm">// HANDS-ON EXPERIENCE</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Cyber <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Labs</span> & Platforms
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg font-medium">
            Active participation in <span className="text-cyan-400 font-bold">industry-leading</span> cybersecurity training platforms with <span className="text-emerald-400 font-bold">verified achievements</span>
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {platforms.map((platform) => (
            <div 
              key={platform.name} 
              className={`relative overflow-hidden bg-gradient-to-br from-slate-900/90 to-slate-800/50 border-2 ${platform.borderColor} rounded-2xl p-6 ${platform.hoverBorder} ${platform.hoverShadow} transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${platform.color} rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg ${platform.shadow}`}>
                    {platform.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">{platform.name}</h3>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full border ${platform.badgeColor}`}>
                      {platform.badge}
                    </span>
                  </div>
                </div>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => createClickEffect(e, platform.textColor)}
                  className={`p-2 rounded-lg ${platform.textColor} hover:bg-white/10 transition-all`}
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {platform.stats.map((stat) => (
                  <div key={stat.label} className="text-center bg-slate-800/50 rounded-xl p-3">
                    <p className={`text-2xl font-black ${stat.color}`}>{stat.value}</p>
                    <p className="text-xs text-slate-400 font-semibold">{stat.label}</p>
                  </div>
                ))}
              </div>

              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => createClickEffect(e, platform.textColor)}
                className={`relative overflow-hidden w-full flex items-center justify-center gap-2 border-2 ${platform.borderColor} ${platform.hoverBorder} bg-slate-800/50 hover:bg-slate-700/50 text-white font-bold py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-95`}
              >
                {clickEffects.map(effect => (
                  <span key={effect.id} className="absolute rounded-full pointer-events-none animate-[rippleExpand_0.8s_ease-out_forwards]"
                    style={{ left: effect.x, top: effect.y, transform: 'translate(-50%, -50%)', background: `radial-gradient(circle, currentColor 0%, transparent 70%)`, opacity: 0.4 }}
                  />
                ))}
                <ExternalLink className="h-4 w-4" />
                View Full Profile
              </a>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border-2 border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300">
          <h3 className="text-2xl font-black text-white mb-6 text-center">
            Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Badges</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {achievements.map((achievement) => {
              const Icon = achievement.icon
              return (
                <div
                  key={achievement.name}
                  className={`flex items-center gap-2 ${achievement.bgColor} border rounded-full px-4 py-2.5 hover:scale-105 transition-all duration-300 cursor-default`}
                >
                  <Icon className={`h-4 w-4 ${achievement.color}`} />
                  <span className="text-sm text-white font-bold">{achievement.name}</span>
                  <span className="text-xs text-slate-400 font-semibold">| {achievement.platform}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
