"use client"

import { Building2, Calendar, CheckCircle, MapPin, Briefcase } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-cyan-400 font-semibold mb-2 tracking-wider text-sm">
            PROFESSIONAL EXPERIENCE
          </p>
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Work Experience
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base">
            Hands-on experience in cybersecurity operations, incident response, and SOC monitoring
          </p>
        </div>

        <div className="max-w-4xl mx-auto">

          <div className="relative">

            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500" />

            <div className="relative pl-16">

              {/* Timeline Dot */}
              <div className="absolute left-4 top-0 w-5 h-5 rounded-full bg-cyan-500 border-4 border-slate-950 shadow-lg shadow-cyan-500/40" />

              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-8 hover:border-cyan-500/40 transition">

                {/* TOP */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="h-5 w-5 text-cyan-400" />
                      <h3 className="text-2xl font-bold text-white">
                        Cyber Security Intern
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
                        <Building2 className="h-4 w-4" />
                        SkillsUprise (Training Program)
                      </span>

                      <span className="flex items-center gap-1.5 text-slate-300">
                        <MapPin className="h-4 w-4" />
                        Vizag, India
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-slate-200 text-sm bg-slate-800 px-4 py-2 rounded-full border border-slate-700">
                    <Calendar className="h-4 w-4 text-cyan-400" />
                    <span>Oct 2025 - Dec 2025</span>
                  </div>
                </div>

                {/* POINTS (UPGRADED + STRONG) */}
                <div className="grid gap-4 mb-6">

                  {[
                    "Monitored and analyzed 50+ daily SIEM alerts using Splunk and Wazuh to identify and investigate potential security incidents",
                    "Performed log analysis on Windows Event Logs and Linux syslogs to detect suspicious activity and security threats",
                    "Executed alert triage by distinguishing false positives from true positives and escalated critical incidents",
                    "Collaborated with SOC team members to investigate alerts and maintain efficient incident response workflows",
                    "Configured and integrated log sources into SIEM platforms for real-time monitoring and visibility",
                    "Developed and fine-tuned SIEM correlation rules to reduce false positives and improve detection accuracy",
                    "Assisted in risk assessments, internal audits, and supported compliance-related activities",
                    "Evaluated vendor security posture, identified risks, and recommended mitigation strategies",
                    "Followed complete Incident Response lifecycle: Detection → Investigation → Response → Containment → Closure",
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0 group-hover:scale-110 transition" />
                      <p className="text-slate-200 text-base leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}

                </div>

                {/* SKILLS TAGS */}
                <div className="flex flex-wrap gap-2">
                  {[
                    "SIEM Monitoring",
                    "Incident Response",
                    "Log Analysis",
                    "Threat Detection",
                    "Alert Triage",
                    "Splunk",
                    "Wazuh",
                    "Risk Assessment",
                    "Compliance",
                    "Vendor Assessment"
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 px-3 py-1.5 rounded-full font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
