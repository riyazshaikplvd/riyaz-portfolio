import { Building2, Calendar, CheckCircle, MapPin, Briefcase } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-cyan-400 font-medium mb-2 tracking-wider">PROFESSIONAL EXPERIENCE</p>
          <h2 className="text-4xl font-bold text-white mb-4">Work Experience</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Hands-on experience in cybersecurity operations, incident response, and SOC monitoring
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Card */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500" />
            
            <div className="relative pl-16">
              {/* Timeline Dot */}
              <div className="absolute left-4 top-0 w-5 h-5 rounded-full bg-cyan-500 border-4 border-slate-950 shadow-lg shadow-cyan-500/30" />

              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-8 hover:border-cyan-500/30 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="h-5 w-5 text-cyan-400" />
                      <h3 className="text-2xl font-bold text-white">Cyber Security Intern</h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
                        <Building2 className="h-4 w-4" />
                        SkillsUprise
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <MapPin className="h-4 w-4" />
                        Vizag, India
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm bg-slate-800 px-4 py-2 rounded-full border border-slate-700">
                    <Calendar className="h-4 w-4 text-cyan-400" />
                    <span>Oct 2025 - Dec 2025</span>
                  </div>
                </div>

                <div className="grid gap-3 mb-6">
                  {[
                    "Monitored IT environments and SIEM alerts to identify and investigate potential security incidents",
                    "Collaborated with team members to investigate and triage alerts, raising incident tickets with detailed analysis",
                    "Configured and integrated log sources into SIEM tools for real-time application monitoring",
                    "Tested and fine-tuned SIEM correlation rules to minimize false positives",
                    "Assisted in conducting risk assessments, audits, and supported external audits related to information security compliance",
                    "Assessed vendor information security posture, identified security gaps and recommended mitigation strategies",
                  ].map((responsibility, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <p className="text-slate-400 text-sm leading-relaxed">{responsibility}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {["SIEM Monitoring", "Incident Response", "Log Analysis", "Risk Assessment", "Compliance", "Threat Detection", "Vendor Assessment"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-3 py-1.5 rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
