"use client"
import { Shield, Bug, Brain, Search, Skull, Cloud } from "lucide-react"

const projects = [
  {
    title: "Virtual SOC with Real-Time Threat Detection",
    type: "Cyber Guide",
    description:
      "Built a virtual SOC using ELK Stack/Wazuh for real-time monitoring and SIEM dashboards across Windows & Linux systems.",
    technologies: ["ELK Stack", "Wazuh", "Splunk", "MITRE ATT&CK"],
    icon: Shield,
    color: "blue",
    highlights: [
      "15+ detection rules created",
      "MITRE ATT&CK mapping",
      "SOC workflow simulation",
    ],
  },
  {
    title: "OWASP Top 10 Lab Series",
    type: "Security Research",
    description:
      "Exploited major OWASP vulnerabilities using Burp Suite and DVWA with proper documentation.",
    technologies: ["Burp Suite", "DVWA", "SQL Injection", "XSS"],
    icon: Bug,
    color: "red",
    highlights: [
      "8 OWASP vulnerabilities tested",
      "All difficulty levels covered",
      "Secure fixes documented",
    ],
  },
  {
    title: "Deep Fake Source Identifier",
    type: "B.Tech Final Year",
    description:
      "Built NLP-based system to detect AI-generated deepfake and bot content.",
    technologies: ["Python", "NLP", "Deep Learning", "MySQL"],
    icon: Brain,
    color: "purple",
    highlights: [
      "Deepfake detection model",
      "Bot analysis system",
      "AI-based filtering",
    ],
  },
  {
    title: "Threat Detection & Incident Response Lab",
    type: "TryHackMe SOC Path",
    description:
      "Analyzed 30+ attacks using SIEM dashboards and performed SOC Level 1 operations.",
    technologies: ["Splunk", "SIEM", "Windows Logs", "Log Analysis"],
    icon: Search,
    color: "cyan",
    highlights: [
      "30+ attacks analyzed",
      "Alert triage performed",
      "Incident escalation",
    ],
  },
  {
    title: "Malware Simulation Lab",
    type: "SkillsUprise Hackathon",
    description:
      "Simulated malware attacks and analyzed attacker techniques and SOC detection.",
    technologies: ["Malware Analysis", "C2", "Logging", "IR"],
    icon: Skull,
    color: "orange",
    highlights: [
      "C2 workflow analysis",
      "Attack simulation",
      "Detection logic built",
    ],
  },
  {
    title: "Cloud Security Mini Project",
    type: "Cloud Security",
    description:
      "Used Microsoft Defender to monitor endpoints and improve cloud security posture.",
    technologies: ["Defender", "Azure", "EDR", "Cloud Security"],
    icon: Cloud,
    color: "green",
    highlights: [
      "Cloud monitoring setup",
      "Security policies configured",
      "Threat alerts handled",
    ],
  },
]

const colorClasses = {
  blue:   { bg: "bg-blue-500/10",   border: "border-blue-500/30",   text: "text-blue-400",   badge: "bg-blue-500/20 text-blue-300 border-blue-500/30",   dot: "text-blue-400" },
  red:    { bg: "bg-red-500/10",    border: "border-red-500/30",    text: "text-red-400",    badge: "bg-red-500/20 text-red-300 border-red-500/30",     dot: "text-red-400" },
  purple: { bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-400", badge: "bg-purple-500/20 text-purple-300 border-purple-500/30", dot: "text-purple-400" },
  cyan:   { bg: "bg-cyan-500/10",   border: "border-cyan-500/30",   text: "text-cyan-400",   badge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",   dot: "text-cyan-400" },
  orange: { bg: "bg-orange-500/10", border: "border-orange-500/30", text: "text-orange-400", badge: "bg-orange-500/20 text-orange-300 border-orange-500/30", dot: "text-orange-400" },
  green:  { bg: "bg-green-500/10",  border: "border-green-500/30",  text: "text-green-400",  badge: "bg-green-500/20 text-green-300 border-green-500/30", dot: "text-green-400" },
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
             My Projects
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const colors = colorClasses[project.color]
            const Icon = project.icon

            return (
              <div
                key={project.title}
                className={`group ${colors.bg} ${colors.border} border rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 flex flex-col gap-4`}
              >

                {/* Top */}
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-lg ${colors.bg} ${colors.border} border`}>
                    <Icon className={`h-6 w-6 ${colors.text}`} />
                  </div>

                  <span className={`text-xs px-3 py-1 rounded-full border ${colors.badge}`}>
                    {project.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm">
                  {project.description}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-slate-800 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="space-y-1 text-xs">
                  {project.highlights.map((item) => (
                    <li key={item} className={`${colors.dot}`}>
                      • {item}
                    </li>
                  ))}
                </ul>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
