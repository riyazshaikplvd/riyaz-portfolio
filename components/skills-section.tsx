"use client"

import { useState } from "react"
import {
  Shield,
  Server,
  Bug,
  Network,
  Cloud,
  Code,
  Monitor,
  Terminal,
  Database,
  Lock
} from "lucide-react"

const skillCategories = [
  {
    title: "SIEM & Log Management",
    icon: Server,
    color: "cyan",
    skills: ["Splunk", "Microsoft Sentinel", "Wazuh", "ELK Stack", "Log Analysis"]
  },
  {
    title: "Security Frameworks",
    icon: Shield,
    color: "blue",
    skills: ["MITRE ATT&CK", "OWASP Top 10", "ISO 27001", "Cyber Kill Chain", "SOAR"]
  },
  {
    title: "Security Tools",
    icon: Bug,
    color: "red",
    skills: ["Wireshark", "Nmap", "Burp Suite", "Metasploit", "Nessus"]
  },
  {
    title: "Network Security",
    icon: Network,
    color: "green",
    skills: ["TCP/IP", "IDS/IPS", "Firewalls", "VPN", "DNS Security"]
  },
  {
    title: "Cloud & Endpoint",
    icon: Cloud,
    color: "orange",
    skills: ["AWS", "Microsoft 365", "Defender", "CrowdStrike", "SentinelOne"]
  },
  {
    title: "Programming",
    icon: Code,
    color: "yellow",
    skills: ["Python", "SQL", "Bash", "PowerShell"]
  },
  {
    title: "Operating Systems",
    icon: Monitor,
    color: "purple",
    skills: ["Windows", "Linux", "Kali Linux", "Ubuntu"]
  },
  {
    title: "Threat Intelligence",
    icon: Database,
    color: "pink",
    skills: ["Threat Hunting", "YARA", "Sigma Rules", "MISP"]
  },
  {
    title: "Identity & Access",
    icon: Lock,
    color: "teal",
    skills: ["Active Directory", "Windows Domain"]
  },
  {
    title: "Forensics",
    icon: Terminal,
    color: "rose",
    skills: ["FTK Imager", "Registry Analysis", "Log Investigation"]
  }
]

export function SkillsSection() {
  const [selected, setSelected] = useState<any>(null)

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-white mb-10">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {skillCategories.map((cat, i) => {
            const Icon = cat.icon

            return (
              <div
                key={i}
                onClick={() => setSelected(cat)}
                className={`cursor-pointer p-6 rounded-xl border border-${cat.color}-500/30 
                bg-${cat.color}-500/5 hover:scale-105 transition-all duration-300
                hover:shadow-[0_0_25px_rgba(0,255,255,0.4)]`}
              >

                <div className="flex flex-col items-center gap-3">

                  <Icon className={`w-8 h-8 text-${cat.color}-400`} />

                  <h3 className={`text-${cat.color}-400 font-semibold`}>
                    {cat.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 justify-center mt-2">
                    {cat.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`text-xs px-2 py-1 rounded-full 
                        bg-${cat.color}-500/20 text-${cat.color}-400`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            )
          })}
        </div>

        {/* 🔥 POPUP MODAL */}
        {selected && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">

            <div className="p-8 rounded-xl bg-slate-900 text-center 
            shadow-[0_0_40px_rgba(0,255,255,0.8)] animate-pulse">

              <h3 className="text-2xl text-cyan-400 font-bold mb-4">
                {selected.title}
              </h3>

              <div className="flex flex-wrap gap-2 justify-center">
                {selected.skills.map((skill: string, i: number) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelected(null)}
                className="mt-6 px-4 py-2 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400"
              >
                Close
              </button>

            </div>
          </div>
        )}

      </div>
    </section>
  )
}
