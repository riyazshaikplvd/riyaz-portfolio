"use client"

import { ExternalLink, Trophy, Star, Target, Award } from "lucide-react"

const platforms = [
  {
    name: "TryHackMe",
    logo: "THM",
    color: "from-red-500 to-red-600",
    borderColor: "border-red-500/50",
    hoverBorder: "hover:border-red-400",
    hoverShadow: "hover:shadow-[0_0_30px_rgba(239,68,68,0.4)]",
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
    hoverShadow: "hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]",
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
    hoverShadow: "hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]",
    textColor: "text-green-400",
    stats: [
      { label: "Role", value: "SOC", color: "text-green-400" },
      { label: "Status", value: "Active", color: "text-emerald-400" },
      { label: "Region", value: "India", color: "text-white" },
    ],
    url: "https://app.hackthebox.com/profile/riyazshaikplvd",
    badge: "Active",
    badgeColor: "bg-green-500/20 text-green-400 border-green-500/50",
  },
  {
    name: "Blue Team Labs",
    logo: "BTLO",
    color: "from-blue-500 to-indigo-600",
    borderColor: "border-blue-500/50",
    hoverBorder: "hover:border-blue-400",
    hoverShadow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]",
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

const achievements = [
  { name: "THM Top 25%", icon: Trophy, color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/30" },
  { name: "Pre Security Path", icon: Award, color: "text-red-400", bg: "bg-red-500/10 border-red-500/30" },
  { name: "Splunk Badge", icon: Star, color: "text-cyan-400", bg: "bg-cyan-500/10 border-cyan-500/30" },
  { name: "VirusTotal SOC", icon: Target, color: "text-green-400", bg: "bg-green-500/10 border-green-500/30" },
  { name: "Threat Analyst", icon: Star, color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/30" },
  { name: "Incident Mgmt", icon: Award, color: "text-pink-400", bg: "bg-pink-500/10 border-pink-500/30" },
]

export function CyberLabsSection() {
  return (
    <section id="cyber-labs" className="py-12 px-4 bg-slate-900/30 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">

        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-white mb-2">
            Cyber <span className="text-cyan-400">Labs</span> & Platforms
          </h2>
          <p className="text-slate-400 text-sm">
            Hands-on blue team & SOC platforms
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {platforms.map((p) => (
            <div key={p.name}
              className={`bg-slate-900/80 border ${p.borderColor} rounded-xl p-4 ${p.hoverBorder} ${p.hoverShadow} transition`}
            >

              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <div className={`w-10 h-10 bg-gradient-to-br ${p.color} rounded-lg flex items-center justify-center text-white font-bold`}>
                    {p.logo}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{p.name}</h3>
                    <span className={`text-[10px] px-2 py-0.5 border rounded ${p.badgeColor}`}>
                      {p.badge}
                    </span>
                  </div>
                </div>

                <a href={p.url} target="_blank" rel="noopener noreferrer"
                  className={p.textColor}>
                  <ExternalLink size={16} />
                </a>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center mb-3">
                {p.stats.map((s) => (
                  <div key={s.label} className="bg-slate-800/50 p-2 rounded">
                    <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
                    <p className="text-[10px] text-slate-400">{s.label}</p>
                  </div>
                ))}
              </div>

              <a href={p.url} target="_blank" rel="noopener noreferrer"
                className="block text-center text-xs bg-slate-800 hover:bg-slate-700 py-2 rounded text-white">
                View Profile
              </a>

            </div>
          ))}
        </div>

        <div className="border border-cyan-500/30 rounded-xl p-4">
          <h3 className="text-center text-white font-bold mb-3 text-lg">
            Achievements
          </h3>

          <div className="flex flex-wrap justify-center gap-2">
            {achievements.map((a) => {
              const Icon = a.icon
              return (
                <div key={a.name}
                  className={`flex items-center gap-1 ${a.bg} px-3 py-1 rounded-full`}>
                  <Icon className={`w-3 h-3 ${a.color}`} />
                  <span className="text-xs text-white">{a.name}</span>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
