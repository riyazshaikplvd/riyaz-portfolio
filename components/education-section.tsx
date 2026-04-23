"use client"

import { GraduationCap, Award, MapPin, Calendar } from "lucide-react"

const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    specialization: "Data Science",
    institution: "Sri Venkateswara College of Engineering & Technology (SVCET)",
    location: "Chittoor, A.P",
    period: "2021 - 2025",
    score: "8.66 CGPA",
    icon: GraduationCap,
    color: "cyan",
  },
  {
    degree: "Intermediate (MPC)",
    specialization: "Mathematics, Physics, Chemistry",
    institution: "Narayana Junior College",
    location: "Pulivendula",
    period: "2019 - 2021",
    score: "802/1000",
    icon: Award,
    color: "violet",
  },
  {
    degree: "SSC",
    specialization: "Secondary School Certificate",
    institution: "ZPH School",
    location: "Velidandla",
    period: "2018 - 2019",
    score: "9.8 CGPA",
    icon: Award,
    color: "emerald",
  },
]

const colorClasses: Record<string, any> = {
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-400/70",
    glow: "hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]",
    text: "text-cyan-300",
    badge: "bg-cyan-500/20 text-cyan-200 border-cyan-400/60",
  },
  violet: {
    bg: "bg-violet-500/10",
    border: "border-violet-400/70",
    glow: "hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]",
    text: "text-violet-300",
    badge: "bg-violet-500/20 text-violet-200 border-violet-400/60",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-400/70",
    glow: "hover:shadow-[0_0_25px_rgba(16,185,129,0.6)]",
    text: "text-emerald-300",
    badge: "bg-emerald-500/20 text-emerald-200 border-emerald-400/60",
  },
}

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-cyan-400 font-medium mb-2 tracking-wider">
            ACADEMIC BACKGROUND
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Education
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Strong academic foundation in Computer Science with specialization in Data Science
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {education.map((edu) => {
            const colors = colorClasses[edu.color]
            const Icon = edu.icon

            return (
              <div
                key={edu.degree}
                className={`
                  ${colors.bg} ${colors.border}
                  border-2 rounded-xl p-6
                  transition-all duration-300
                  hover:scale-[1.03]
                  hover:shadow-xl ${colors.glow}
                `}
              >
                {/* TOP */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg border ${colors.bg} ${colors.border}`}>
                    <Icon className={`h-6 w-6 ${colors.text}`} />
                  </div>

                  <span className={`text-sm font-bold px-3 py-1 rounded-full border ${colors.badge}`}>
                    {edu.score}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="font-bold text-white text-base mb-1">
                  {edu.degree}
                </h3>

                <p className="text-sm text-slate-300 mb-3">
                  {edu.specialization}
                </p>

                {/* DETAILS */}
                <div className="space-y-2 text-sm text-slate-400">
                  <p className="font-medium text-slate-200">
                    {edu.institution}
                  </p>

                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {edu.location}
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {edu.period}
                  </div>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
