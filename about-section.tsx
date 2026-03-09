import { Shield, Target, Search, FileText, Bug, Network } from "lucide-react"

const focusAreas = [
  { icon: Target, title: "Threat Detection", description: "Real-time monitoring and identification of security threats" },
  { icon: Search, title: "SIEM Monitoring", description: "Expert in Splunk, Wazuh, QRadar, and Sentinel" },
  { icon: Shield, title: "Incident Investigation", description: "Systematic approach to analyze and respond to incidents" },
  { icon: FileText, title: "Log Analysis", description: "Deep analysis of security logs and event correlation" },
  { icon: Bug, title: "Vulnerability Assessment", description: "Identifying and prioritizing security weaknesses" },
  { icon: Network, title: "MITRE ATT&CK", description: "Mapping threats to adversary tactics and techniques" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-medium mb-2 tracking-wider">ABOUT ME</p>
          <h2 className="text-4xl font-bold text-white mb-6">Professional Summary</h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Motivated <span className="text-cyan-400 font-semibold">Cybersecurity Professional</span> with B.Tech in Computer Science (Data Science) 
            and hands-on SOC experience through <span className="text-cyan-400">TryHackMe</span>, <span className="text-cyan-400">LetsDefend</span>, 
            <span className="text-cyan-400"> Hack The Box</span> labs and real-world SIEM monitoring simulations. 
            Passionate about protecting organizations from cyber threats through proactive threat hunting and incident response.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area) => {
            const Icon = area.icon
            return (
              <div
                key={area.title}
                className="group bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 group-hover:bg-cyan-500/20 transition-colors">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{area.title}</h3>
                </div>
                <p className="text-slate-400 text-sm">{area.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
