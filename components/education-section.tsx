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
    color: "blue",
  },
  {
    degree: "SSC",
    specialization: "Secondary School Certificate",
    institution: "ZPH School",
    location: "Velidandla",
    period: "2018 - 2019",
    score: "9.8 CGPA",
    icon: Award,
    color: "green",
  },
]

const colorClasses: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-400", badge: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
  blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400", badge: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  green: { bg: "bg-green-500/10", border: "border-green-500/30", text: "text-green-400", badge: "bg-green-500/20 text-green-400 border-green-500/30" },
}

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-cyan-400 font-medium mb-2 tracking-wider">ACADEMIC BACKGROUND</p>
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Strong academic foundation in Computer Science with specialization in Data Science
          </p>
        </div>

        {/* Compact Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {education.map((edu) => {
            const colors = colorClasses[edu.color]
            const Icon = edu.icon
            return (
              <div
                key={edu.degree}
                className={`${colors.bg} ${colors.border} border rounded-xl p-5 hover:scale-[1.02] transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${colors.bg} ${colors.border} border`}>
                    <Icon className={`h-6 w-6 ${colors.text}`} />
                  </div>
                  <span className={`text-sm font-bold px-3 py-1 rounded-full border ${colors.badge}`}>
                    {edu.score}
                  </span>
                </div>
                
                <h3 className="font-bold text-white text-base mb-1">{edu.degree}</h3>
                <p className="text-sm text-slate-400 mb-3">{edu.specialization}</p>
                
                <div className="space-y-1.5 text-xs text-slate-500">
                  <p className="font-medium text-slate-300">{edu.institution}</p>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3 w-3" />
                    {edu.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
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
