"use client"

import { Shield, Server, Bug, Network, Cloud, Code, Monitor, Terminal } from "lucide-react"

const skillCategories = [
  {
    title: "SIEM Tools",
    icon: Server,
    skills: ["Splunk", "Wazuh", "IBM QRadar", "Microsoft Sentinel", "ELK Stack"],
    color: "cyan",
  },
  {
    title: "Security Frameworks",
    icon: Shield,
    skills: ["MITRE ATT&CK", "OWASP Top 10", "ISO 27001", "NIST", "CIS Controls"],
    color: "blue",
  },
  {
    title: "Security Tools",
    icon: Bug,
    skills: ["Wireshark", "Nmap", "Burp Suite", "Metasploit", "Nessus"],
    color: "red",
  },
  {
    title: "Network Security",
    icon: Network,
    skills: ["TCP/IP", "Firewalls", "IDS/IPS", "VPN", "DNS Security"],
    color: "green",
  },
  {
    title: "Cloud & Endpoint",
    icon: Cloud,
    skills: ["AWS", "Microsoft 365", "Microsoft Defender", "SentinelOne", "CrowdStrike"],
    color: "orange",
  },
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "SQL", "Bash", "HTML/CSS", "JavaScript"],
    color: "yellow",
  },
  {
    title: "Operating Systems",
    icon: Monitor,
    skills: ["Windows Server", "Linux", "Kali Linux", "Ubuntu", "macOS"],
    color: "purple",
  },
  {
    title: "Lab Platforms",
    icon: Terminal,
    skills: ["TryHackMe", "LetsDefend", "Hack The Box", "DVWA", "CyberDefenders"],
    color: "pink",
  },
]

const colorClasses: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-400", glow: "group-hover:shadow-cyan-500/20" },
  blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400", glow: "group-hover:shadow-blue-500/20" },
  red: { bg: "bg-red-500/10", border: "border-red-500/30", text: "text-red-400", glow: "group-hover:shadow-red-500/20" },
  green: { bg: "bg-green-500/10", border: "border-green-500/30", text: "text-green-400", glow: "group-hover:shadow-green-500/20" },
  orange: { bg: "bg-orange-500/10", border: "border-orange-500/30", text: "text-orange-400", glow: "group-hover:shadow-orange-500/20" },
  yellow: { bg: "bg-yellow-500/10", border: "border-yellow-500/30", text: "text-yellow-400", glow: "group-hover:shadow-yellow-500/20" },
  purple: { bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-400", glow: "group-hover:shadow-purple-500/20" },
  pink: { bg: "bg-pink-500/10", border: "border-pink-500/30", text: "text-pink-400", glow: "group-hover:shadow-pink-500/20" },
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-cyan-400 font-medium mb-2 tracking-wider">TECHNICAL EXPERTISE</p>
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Comprehensive cybersecurity toolkit built through hands-on labs, internships, and continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => {
            const colors = colorClasses[category.color]
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className={`group ${colors.bg} ${colors.border} border rounded-xl p-5 hover:scale-105 transition-all duration-300 hover:shadow-lg ${colors.glow}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${colors.bg} ${colors.border} border`}>
                    <Icon className={`h-5 w-5 ${colors.text}`} />
                  </div>
                  <h3 className="font-bold text-white text-sm">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-slate-800/80 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700/50 hover:border-slate-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
