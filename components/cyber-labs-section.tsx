"use client"

import { ExternalLink, Trophy, Star, Target, Award } from "lucide-react"
import { useState, useRef, useCallback } from "react"

const platforms = [
  {
    name: "TryHackMe",
    logo: "THM",
    color: "from-red-500 to-red-600",
    borderColor: "border-red-500/50",
    hoverBorder: "hover:border-red-400",
    hoverShadow: "hover:shadow-[0_0_25px_rgba(239,68,68,0.35)]",
    textColor: "text-red-400",
    stats: [
      { label: "Rank", value: "Top 25%", color: "text-red-400" },
      { label: "Rooms", value: "138", color: "text-white" },
      { label: "Badges", value: "15", color: "text-white" },
    ],
    url: "https://tryhackme.com/p/riyazshaikplvd",
    badge: "VOYAGER",
    badgeColor: "bg-red-500/20 text-red-400 border-red-500/50",
  },
  {
    name: "LetsDefend",
    logo: "LD",
    color: "from-cyan-500 to-cyan-600",
    borderColor: "border-cyan-500/50",
    hoverBorder: "hover:border-cyan-400",
    hoverShadow: "hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]",
    textColor: "text-cyan-400",
    stats: [
      { label: "Score", value: "913", color: "text-cyan-400" },
      { label: "Success", value: "100%", color: "text-emerald-400" },
      { label: "Rank", value: "Top 15%", color: "text-white" },
    ],
    url: "https://app.letsdefend.io/user/riyazshaikplvd",
    badge: "Active",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/50",
  },
  {
    name: "Hack The Box",
    logo: "HTB",
    color: "from-green-500 to-green-600",
    borderColor: "border-green-500/50",
    hoverBorder: "hover:border-green-400",
    hoverShadow: "hover:shadow-[0_0_25px_rgba(34,197,94,0.35)]",
    textColor: "text-green-400",
    stats: [
      { label: "Role", value: "SOC Analyst", color: "text-green-400" },
      { label: "Status", value: "Active", color: "text-emerald-400" },
      { label: "Region", value: "India", color: "text-white" },
    ],
    url: "https://app.hackthebox.com/profile/riyazshaikplvd",
    badge: "Active",
    badgeColor: "bg-green-500/20 text-green-400 border-green-500/50",
  },
  {
    name: "Blue Team Labs Online",
    logo: "BTLO",
    color: "from-blue-500 to-indigo-600",
    borderColor: "border-blue-500/50",
    hoverBorder: "hover:border-blue-400",
    hoverShadow: "hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]",
    textColor: "text-blue-400",
    stats: [
      { label: "Focus", value: "Blue Team", color: "text-blue-400" },
      { label: "Labs", value: "Real", color: "text-white" },
      { label: "Type", value: "SOC", color: "text-white" },
    ],
    url: "https://blueteamlabs.online",
    badge: "Active",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/50",
  },
]

export function CyberLabsSection() {
  const [effects, setEffects] = useState<any[]>([])
  const idRef = useRef(0)

  const clickEffect = useCallback((e: any, color: string) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const id = idRef.current++
    setEffects((p) => [
      ...p,
      { id, x: e.clientX - rect.left, y: e.clientY - rect.top, color },
    ])
    setTimeout(() => {
      setEffects((p) => p.filter((x) => x.id !== id))
    }, 600)
  }, [])

  return (
    <section
      id="cyber-labs"
      className="min-h-screen flex items-center justify-center py-10 px-4 bg-slate-900/30"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* HEADER */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-black text-white">
            Cyber <span className="text-cyan-400">Labs</span> & Platforms
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Hands-on blue team & SOC platforms
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
          {platforms.map((p) => (
            <div
              key={p.name}
              className={`bg-slate-900/80 border ${p.borderColor} rounded-xl p-3 ${p.hoverBorder} ${p.hoverShadow} transition`}
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-9 h-9 bg-gradient-to-br ${p.color} rounded-lg flex items-center justify-center text-white font-bold text-sm`}
                  >
                    {p.logo}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {p.name}
                    </h3>
                    <span
                      className={`text-[10px] px-2 py-0.5 border rounded ${p.badgeColor}`}
                    >
                      {p.badge}
                    </span>
                  </div>
                </div>

                <a
                  href={p.url}
                  target="_blank"
                  onClick={(e) => clickEffect(e, p.textColor)}
                  className={p.textColor}
                >
                  <ExternalLink size={14} />
                </a>
              </div>

              <div className="grid grid-cols-3 gap-1 text-center mb-2">
                {p.stats.map((s) => (
                  <div key={s.label} className="bg-slate-800/50 p-1.5 rounded">
                    <p className={`text-xs font-bold ${s.color}`}>
                      {s.value}
                    </p>
                    <p className="text-[9px] text-slate-400">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href={p.url}
                target="_blank"
                onClick={(e) => clickEffect(e, p.textColor)}
                className="block text-center text-[11px] bg-slate-800 hover:bg-slate-700 py-1.5 rounded text-white"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>

        {/* ACHIEVEMENTS */}
        <div className="border border-cyan-500/30 rounded-xl p-4">
          <h3 className="text-center text-white font-bold mb-3 text-lg">
            Achievements & <span className="text-yellow-400">Badges</span>
          </h3>

          <div className="flex flex-wrap justify-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10">
              <Trophy className="w-3 h-3 text-yellow-400" />
              <span className="text-xs text-white">TryHackMe Top 25%</span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10">
              <Award className="w-3 h-3 text-red-400" />
              <span className="text-xs text-white">Pre Security Learning Path</span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10">
              <Star className="w-3 h-3 text-cyan-400" />
              <span className="text-xs text-white">Splunk Engineer Badge</span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10">
              <Target className="w-3 h-3 text-green-400" />
              <span className="text-xs text-white">VirusTotal SOC Badge</span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10">
              <Star className="w-3 h-3 text-blue-400" />
              <span className="text-xs text-white">Network Analyzer</span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10">
              <Star className="w-3 h-3 text-orange-400" />
              <span className="text-xs text-white">Threat Analyst</span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10">
              <Trophy className="w-3 h-3 text-purple-400" />
              <span className="text-xs text-white">Web Attack Investigator</span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-pink-500/30 bg-pink-500/10">
              <Award className="w-3 h-3 text-pink-400" />
              <span className="text-xs text-white">Incident Management</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
