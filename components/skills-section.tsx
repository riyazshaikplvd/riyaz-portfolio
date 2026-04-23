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
  Database,
  Lock,
} from "lucide-react"
import { LucideIcon } from "lucide-react"
 
// ✅ FIX: Proper TypeScript interface instead of `any`
interface SkillCategory {
  title: string
  icon: LucideIcon
  skills: string[]
}
 
export default function SkillsSection() {
  // ✅ FIX: Typed state — SkillCategory | null instead of any
  const [selected, setSelected] = useState<SkillCategory | null>(null)
 
  const skillCategories: SkillCategory[] = [
    {
      title: "SIEM Tools",
      icon: Server,
      skills: ["Splunk", "Wazuh", "IBM QRadar", "Microsoft Sentinel", "ELK Stack"],
    },
    {
      title: "Security Frameworks",
      icon: Shield,
      skills: ["MITRE ATT&CK", "OWASP Top 10", "ISO 27001", "NIST", "CIS Controls"],
    },
   {
      title: "Endpoint & Email Security",
      icon: Monitor,
      skills: ["SentinelOne", " CrowdStrike,", "Microsoft Defender for Endpoint", "LimaCharlie", "Windows Process Monitoring","Sysmon"],
    },
    {
      title: "Vulnerability Management",
      icon: Bug,
      skills: ["Zenmap", "Nmap", "Burp Suite", "Metasploit", "Nessus"],
    },
    {
      title: "Network Security",
      icon: Network,
      skills: ["TCP/IP", "IDS/IPS", "Firewalls", "VPN", "DNS Security", "Wireshark"],
    },
    {
      title: "Cloud & Endpoint",
      icon: Cloud,
      skills: ["AWS", "Microsoft 365", "Defender", "CrowdStrike", "SentinelOne"],
    },
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "SQL", "Bash", "PowerShell"],
    },
    {
      title: "Operating Systems",
      icon: Monitor,
      skills: ["Windows", "Linux", "VMware", "Ubuntu"],
    },
    {
      title: "Threat Intelligence",
      icon: Database,
      skills: ["Threat Hunting", "YARA", "Sigma Rules", "MISP"],
    },
    {
      title: "Digital Forensics",
      icon: Lock,
      skills: ["FTK imager", "Windows Forensics", "Log Investigation"],
    },
  ]
 
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Skills & Technologies
        </h2>
        <p className="text-slate-400 mb-12">
          Hands-on cybersecurity skills built through labs and real-world practice
        </p>
 
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => {
            const Icon = category.icon
            return (
              <div
                key={i}
                onClick={() => setSelected(category)}
                className="cursor-pointer p-6 rounded-xl border border-slate-700 bg-slate-900 hover:scale-105 transition-all duration-300 hover:shadow-cyan-500/30"
              >
                <div className="flex items-center gap-3 mb-4 justify-center">
                  <Icon className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <p className="text-slate-400 text-sm">Click to view skills</p>
              </div>
            )
          })}
        </div>
      </div>
 
      {/* POPUP MODAL */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)} // ✅ click outside to close
        >
          <div
            className="bg-slate-900 p-8 rounded-xl max-w-lg w-full shadow-2xl border border-cyan-500/30"
            onClick={(e) => e.stopPropagation()} // ✅ prevent close on inner click
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
              {selected.title}
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {selected.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm hover:scale-110 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
            <button
              onClick={() => setSelected(null)}
              className="mt-6 w-full py-2 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
