"use client"

import { AlertTriangle, Shield, Activity, CheckCircle, TrendingUp, Zap } from "lucide-react"

const threatStats = [
  { label: "Malware", value: 28, color: "bg-red-500" },
  { label: "Phishing", value: 35, color: "bg-orange-500" },
  { label: "Brute Force", value: 18, color: "bg-yellow-500" },
  { label: "Web Attacks", value: 12, color: "bg-cyan-500" },
  { label: "Ransomware", value: 7, color: "bg-purple-500" },
]

const platformStats = [
  { platform: "TryHackMe", rank: "Top 25%", score: "34 Rooms", icon: "THM", color: "bg-red-500" },
  { platform: "LetsDefend", rank: "Top 15%", score: "913 Points", icon: "LD", color: "bg-cyan-500" },
  { platform: "Hack The Box", rank: "Active", score: "SOC Analyst", icon: "HTB", color: "bg-green-500" },
]

const recentAlerts = [
  { type: "Brute Force Detected", severity: "High", time: "2 min ago", status: "Investigating" },
  { type: "Suspicious Login", severity: "Medium", time: "5 min ago", status: "Resolved" },
  { type: "Port Scan Activity", severity: "Low", time: "12 min ago", status: "Resolved" },
  { type: "Malware Signature", severity: "Critical", time: "18 min ago", status: "Resolved" },
]

export function SOCDashboardSection() {
  return (
    <section id="soc-dashboard" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-cyan-400 font-medium mb-2 tracking-wider">SECURITY OPERATIONS CENTER</p>
          <h2 className="text-4xl font-bold text-white mb-4">SOC Dashboard</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Real-time security monitoring metrics showcasing threat detection and incident response capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Stats Cards */}
          <div className="space-y-6">
            {/* Overall Stats */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6">
              <h3 className="text-sm font-medium text-slate-400 mb-4 flex items-center gap-2">
                <Activity className="h-4 w-4 text-cyan-400" />
                Performance Metrics
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                  <p className="text-3xl font-black text-cyan-400">100%</p>
                  <p className="text-xs text-slate-400">Success Rate</p>
                </div>
                <div className="text-center p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-3xl font-black text-green-400">913</p>
                  <p className="text-xs text-slate-400">Total Points</p>
                </div>
                <div className="text-center p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <p className="text-3xl font-black text-blue-400">34+</p>
                  <p className="text-xs text-slate-400">Labs Completed</p>
                </div>
                <div className="text-center p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                  <p className="text-3xl font-black text-orange-400">5+</p>
                  <p className="text-xs text-slate-400">Badges Earned</p>
                </div>
              </div>
            </div>

            {/* Platform Stats */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6">
              <h3 className="text-sm font-medium text-slate-400 mb-4 flex items-center gap-2">
                <Shield className="h-4 w-4 text-cyan-400" />
                Platform Rankings
              </h3>
              <div className="space-y-3">
                {platformStats.map((stat) => (
                  <div key={stat.platform} className="flex items-center gap-4 p-3 bg-slate-800/50 rounded-lg">
                    <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center text-white font-bold text-xs`}>
                      {stat.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium text-sm">{stat.platform}</p>
                      <p className="text-slate-400 text-xs">{stat.score}</p>
                    </div>
                    <span className="text-cyan-400 font-bold text-sm">{stat.rank}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Column - Threat Distribution */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6">
            <h3 className="text-sm font-medium text-slate-400 mb-4 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-orange-400" />
              Investigated Alert Types
            </h3>
            
            <div className="relative h-64 flex items-center justify-center mb-6">
              {/* Donut Chart */}
              <svg className="w-48 h-48 transform -rotate-90">
                {threatStats.map((stat, index) => {
                  const total = threatStats.reduce((acc, s) => acc + s.value, 0)
                  const percentage = (stat.value / total) * 100
                  const offset = threatStats.slice(0, index).reduce((acc, s) => acc + (s.value / total) * 100, 0)
                  const circumference = 2 * Math.PI * 70
                  const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`
                  const strokeDashoffset = -(offset / 100) * circumference
                  
                  return (
                    <circle
                      key={stat.label}
                      cx="96"
                      cy="96"
                      r="70"
                      fill="none"
                      stroke={stat.color.replace("bg-", "").replace("-500", "")}
                      strokeWidth="20"
                      strokeDasharray={strokeDasharray}
                      strokeDashoffset={strokeDashoffset}
                      className={stat.color.replace("bg-", "stroke-")}
                    />
                  )
                })}
              </svg>
              <div className="absolute text-center">
                <p className="text-3xl font-black text-white">100</p>
                <p className="text-xs text-slate-400">Total Alerts</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {threatStats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${stat.color}`} />
                  <span className="text-xs text-slate-400">{stat.label}</span>
                  <span className="text-xs text-white font-medium ml-auto">{stat.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Recent Alerts */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6">
            <h3 className="text-sm font-medium text-slate-400 mb-4 flex items-center gap-2">
              <Zap className="h-4 w-4 text-yellow-400" />
              Recent Alert Activity
            </h3>
            
            <div className="space-y-3">
              {recentAlerts.map((alert, index) => (
                <div key={index} className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-white font-medium text-sm">{alert.type}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      alert.severity === "Critical" ? "bg-red-500/20 text-red-400" :
                      alert.severity === "High" ? "bg-orange-500/20 text-orange-400" :
                      alert.severity === "Medium" ? "bg-yellow-500/20 text-yellow-400" :
                      "bg-green-500/20 text-green-400"
                    }`}>
                      {alert.severity}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">{alert.time}</span>
                    <span className={`text-xs flex items-center gap-1 ${
                      alert.status === "Resolved" ? "text-green-400" : "text-yellow-400"
                    }`}>
                      {alert.status === "Resolved" ? (
                        <CheckCircle className="h-3 w-3" />
                      ) : (
                        <TrendingUp className="h-3 w-3" />
                      )}
                      {alert.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills Radar Text Representation */}
            <div className="mt-6 p-4 bg-slate-800/30 rounded-lg">
              <h4 className="text-xs text-slate-400 mb-3">Skill Coverage</h4>
              <div className="space-y-2">
                {[
                  { skill: "SIEM", level: 90 },
                  { skill: "Log Analysis", level: 85 },
                  { skill: "Incident Response", level: 80 },
                  { skill: "Threat Intel", level: 75 },
                ].map((s) => (
                  <div key={s.skill}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">{s.skill}</span>
                      <span className="text-cyan-400">{s.level}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" style={{ width: `${s.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
