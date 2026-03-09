import { Shield, Bug, Brain, Skull, Cloud, Terminal } from "lucide-react"

const projects = [
  {
    title: "Threat Detection & Incident Response Lab",
    type: "TryHackMe SOC Path",
    description: "Completed comprehensive SOC Level 1 Analyst Path covering real-world alert triage, SIEM dashboards, log analysis, and incident escalation procedures.",
    technologies: ["Splunk", "Log Analysis", "Alert Triage", "SIEM", "Incident Response"],
    icon: Shield,
    color: "blue",
    highlights: ["30+ simulated attacks detected", "Splunk Dashboard analysis", "Real-world escalation workflows"],
  },
  {
    title: "OWASP Top 10 Lab Series",
    type: "Security Research",
    description: "Simulated and mitigated OWASP vulnerabilities including XSS, SQL Injection, and Broken Authentication using professional penetration testing tools.",
    technologies: ["Burp Suite", "DVWA", "SQL Injection", "XSS", "OWASP"],
    icon: Bug,
    color: "red",
    highlights: ["XSS vulnerability exploitation", "SQL Injection testing", "Authentication bypass"],
  },
  {
    title: "Deep Fake Source Identifier",
    type: "AI/ML Security Project",
    description: "Built an NLP-based deep learning system to detect AI-generated (deepfake) and bot-driven content on social media, supporting misinformation detection.",
    technologies: ["Python", "NLP", "Deep Learning", "PHP", "MySQL"],
    icon: Brain,
    color: "purple",
    highlights: ["NLP content analysis", "Bot detection algorithms", "Misinformation identification"],
  },
  {
    title: "Malware Simulation Lab",
    type: "SkillsUprise Hackathon",
    description: "Designed ethical malware simulations to understand attacker techniques including clickjacking, remote command execution, and data exfiltration patterns.",
    technologies: ["Malware Analysis", "C2 Workflows", "Incident Response", "Logging"],
    icon: Skull,
    color: "orange",
    highlights: ["Ethical malware simulation", "C2 workflow analysis", "SOC-ready detection insights"],
  },
  {
    title: "Cloud Security Monitoring",
    type: "Cloud Security Project",
    description: "Implemented Microsoft Defender for Cloud to monitor and enhance endpoint protection across cloud infrastructure with real-time threat detection.",
    technologies: ["Microsoft Defender", "Cloud Security", "Endpoint Protection", "Azure"],
    icon: Cloud,
    color: "green",
    highlights: ["Defender implementation", "Endpoint monitoring", "Security posture enhancement"],
  },
  {
    title: "SOC Automation Scripts",
    type: "Python Automation",
    description: "Developed Python scripts for log parsing, alert correlation, and automated incident ticket generation to streamline SOC operations workflow.",
    technologies: ["Python", "Automation", "Log Parsing", "SIEM Integration"],
    icon: Terminal,
    color: "cyan",
    highlights: ["Automated log parsing", "Alert correlation scripts", "Incident ticket automation"],
  },
]

const colorClasses: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-400", badge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
  blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400", badge: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
  red: { bg: "bg-red-500/10", border: "border-red-500/30", text: "text-red-400", badge: "bg-red-500/20 text-red-300 border-red-500/30" },
  purple: { bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-400", badge: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
  orange: { bg: "bg-orange-500/10", border: "border-orange-500/30", text: "text-orange-400", badge: "bg-orange-500/20 text-orange-300 border-orange-500/30" },
  green: { bg: "bg-green-500/10", border: "border-green-500/30", text: "text-green-400", badge: "bg-green-500/20 text-green-300 border-green-500/30" },
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-cyan-400 font-medium mb-2 tracking-wider">PORTFOLIO</p>
          <h2 className="text-4xl font-bold text-white mb-4">Projects & Labs</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Hands-on security projects demonstrating practical threat detection, incident response, and vulnerability assessment capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const colors = colorClasses[project.color]
            const Icon = project.icon
            return (
              <div
                key={project.title}
                className={`group ${colors.bg} ${colors.border} border rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 flex flex-col`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${colors.bg} ${colors.border} border group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-6 w-6 ${colors.text}`} />
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full border ${colors.badge}`}>
                    {project.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 flex-1 leading-relaxed">{project.description}</p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-xs bg-slate-800/80 text-slate-300 px-2 py-1 rounded border border-slate-700/50">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs bg-slate-800/80 text-slate-400 px-2 py-1 rounded border border-slate-700/50">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <ul className="space-y-1.5">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="text-xs text-slate-500 flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${colors.text} bg-current flex-shrink-0`} />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
