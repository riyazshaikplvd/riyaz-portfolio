"use client"

import { Award, Clock, CheckCircle } from "lucide-react"

const certifications = [
  { name: "CompTIA Security+", issuer: "CompTIA", status: "pursuing" },
  { name: "EC-Council Certified SOC Analyst (CSA)", issuer: "EC-Council", status: "pursuing" },
  { name: "Certified SOC Analyst", issuer: "Cyber Guide, Bangalore", status: "completed" },
  { name: "Ethical Hacking & Cybersecurity", issuer: "SkillsUprise, Vizag", status: "completed", date: "Dec 2025" },
  { name: "Cybersecurity & Ethical Hacking", issuer: "Infosys Springboard", status: "completed" },
  { name: "Python Full Stack Development", issuer: "Infosys Springboard", status: "completed" },
]

const badges = [
  { name: "Network Analyzer", issuer: "LetsDefend", color: "from-cyan-500 to-blue-500", textColor: "text-cyan-300" },
  { name: "Web Attack Investigated", issuer: "LetsDefend", color: "from-purple-500 to-pink-500", textColor: "text-purple-300" },
  { name: "Threat Analyst", issuer: "LetsDefend", color: "from-red-500 to-orange-500", textColor: "text-red-300" },
  { name: "Brute Force", issuer: "LetsDefend", color: "from-amber-500 to-yellow-500", textColor: "text-amber-300" },
  { name: "Incident Management", issuer: "LetsDefend", color: "from-emerald-500 to-green-500", textColor: "text-emerald-300" },
  { name: "SQL Injection Attacks", issuer: "EC-Council", color: "from-rose-500 to-red-500", textColor: "text-rose-300" },
  { name: "SIEM Alert Investigation", issuer: "LetsDefend", color: "from-blue-500 to-indigo-500", textColor: "text-blue-300" },
  { name: "Splunk Engineer", issuer: "LetsDefend", color: "from-green-500 to-teal-500", textColor: "text-green-300" },
  { name: "VirusTotal for SOC Analyst", issuer: "LetsDefend", color: "from-indigo-500 to-purple-500", textColor: "text-indigo-300" },
  { name: "Pre Security Learning Path", issuer: "TryHackMe", color: "from-orange-500 to-red-500", textColor: "text-orange-300" },
]

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30"
    >
      <div className="mx-auto max-w-7xl w-full">

        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-cyan-400 font-black mb-2 tracking-wider text-lg">
            // CREDENTIALS
          </p>

          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Training &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Certifications
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* CERTIFICATIONS */}
        <div className="mb-12">
          <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">
              <Award className="h-6 w-6 text-white" />
            </div>
            Professional Certifications
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className={`bg-slate-900/80 border-2 rounded-xl p-5 flex items-start gap-4 hover:scale-[1.02] transition-all duration-300 ${
                  cert.status === "pursuing"
                    ? "border-orange-500/50 hover:border-orange-400 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]"
                    : "border-emerald-500/50 hover:border-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                }`}
              >
                <div
                  className={`p-3 rounded-lg flex-shrink-0 ${
                    cert.status === "pursuing"
                      ? "bg-gradient-to-r from-orange-500 to-amber-500"
                      : "bg-gradient-to-r from-emerald-500 to-green-500"
                  }`}
                >
                  {cert.status === "pursuing" ? (
                    <Clock className="h-5 w-5 text-white" />
                  ) : (
                    <CheckCircle className="h-5 w-5 text-white" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-black text-white text-base mb-1">
                    {cert.name}
                  </h4>

                  <p className="text-sm text-slate-300 font-semibold mb-2">
                    {cert.issuer}
                  </p>

                  {cert.status === "pursuing" ? (
                    <span className="inline-flex items-center gap-1 text-sm bg-gradient-to-r from-orange-500 to-amber-500 text-white px-3 py-1 rounded-full font-bold">
                      <Clock className="h-3 w-3" /> Pursuing
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-sm bg-gradient-to-r from-emerald-500 to-green-500 text-white px-3 py-1 rounded-full font-bold">
                      <CheckCircle className="h-3 w-3" /> Completed
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BADGES */}
        <div className="bg-slate-900/60 border-2 border-slate-700 rounded-2xl p-8">
          <h3 className="text-2xl font-black text-white mb-8 text-center">
            Skill{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Badges
            </span>
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {badges.map((badge) => (
              <div
                key={badge.name}
                className={`bg-gradient-to-r ${badge.color} p-[2px] rounded-full hover:scale-105 transition-all duration-300 hover:shadow-lg`}
              >
                <div className="bg-slate-900 rounded-full px-4 py-2 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${badge.color}`} />
                  <span className={`text-sm font-black ${badge.textColor}`}>
                    {badge.name}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">
                    | {badge.issuer}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
