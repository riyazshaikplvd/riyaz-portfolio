import { Shield, Server, AlertTriangle, FileText, Target, CheckCircle, Brain, Clock, Users, Zap } from "lucide-react"

const incidentWorkflow = [
  { step: 1, title: "Alert Identification", description: "Detect and receive security alerts from SIEM", icon: AlertTriangle },
  { step: 2, title: "Log Analysis", description: "Analyze logs to understand the event context", icon: FileText },
  { step: 3, title: "Threat Verification", description: "Verify if the alert is a true positive", icon: Target },
  { step: 4, title: "Incident Classification", description: "Classify incident severity and type", icon: Shield },
  { step: 5, title: "Impact Assessment", description: "Determine business and security impact", icon: Zap },
  { step: 6, title: "Response Action", description: "Execute containment and remediation", icon: CheckCircle },
  { step: 7, title: "Documentation", description: "Document findings and lessons learned", icon: FileText },
]

const modules = [
  "SOC Operations",
  "SIEM Deployment (ELK/Wazuh/Splunk)",
  "Threat Intelligence Analysis",
  "Linux Server Monitoring",
  "Network Security Monitoring",
  "Log Collection & Analysis",
  "Python Automation",
  "NIST Compliance Mapping",
]

const attacks = [
  "Brute Force Login Attempts",
  "Privilege Escalation",
  "Port Scanning",
  "Suspicious Process Execution",
  "Unauthorized Access Attempts",
  "Malware Signatures",
]

const professionalSkills = [
  { skill: "Problem Solving", icon: Brain },
  { skill: "Critical Thinking", icon: Target },
  { skill: "Time Management", icon: Clock },
  { skill: "Customer Focus", icon: Users },
]

export function CapstoneProjectSection() {
  return (
    <section id="capstone" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-cyan-400 font-medium mb-2 tracking-wider">CAPSTONE PROJECT</p>
          <h2 className="text-4xl font-bold text-white mb-4">Virtual SOC with Real-Time Threat Detection</h2>
          <p className="text-slate-400 max-w-3xl mx-auto">
            Final Year Cybersecurity Capstone Project demonstrating end-to-end SOC operations including SIEM deployment, 
            threat detection, attack simulation, and incident response
          </p>
        </div>

        {/* Project Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Server className="h-5 w-5 text-cyan-400" />
              Modules Implemented
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {modules.map((module) => (
                <div key={module} className="flex items-center gap-2 text-sm text-slate-300 bg-slate-800/50 px-3 py-2 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  {module}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-400" />
              Attack Scenarios Simulated
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {attacks.map((attack) => (
                <div key={attack} className="flex items-center gap-2 text-sm text-slate-300 bg-red-500/10 border border-red-500/20 px-3 py-2 rounded-lg">
                  <Shield className="h-4 w-4 text-red-400 flex-shrink-0" />
                  {attack}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Incident Response Workflow */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Incident Response Workflow</h3>
          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden lg:block">
              <div className="flex justify-between items-start relative">
                {/* Connecting Line */}
                <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500" />
                
                {incidentWorkflow.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={item.step} className="relative flex flex-col items-center w-32">
                      <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center mb-3 relative z-10">
                        <Icon className="h-6 w-6 text-cyan-400" />
                      </div>
                      <span className="text-cyan-400 font-bold text-sm mb-1">Step {item.step}</span>
                      <p className="text-white font-medium text-xs text-center">{item.title}</p>
                      <p className="text-slate-500 text-xs text-center mt-1 leading-tight">{item.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="lg:hidden space-y-4">
              {incidentWorkflow.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.step} className="flex items-start gap-4 bg-slate-900/50 border border-slate-800 rounded-lg p-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <span className="text-cyan-400 font-bold text-xs">Step {item.step}</span>
                      <p className="text-white font-medium text-sm">{item.title}</p>
                      <p className="text-slate-500 text-xs">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Business Value & Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Business Value Demonstrated</h3>
            <ul className="space-y-3">
              {[
                "Early threat detection to reduce security risks",
                "Quick investigation of suspicious activities",
                "Prevention of system compromise",
                "Maintaining business continuity",
                "Protecting customer and organizational data",
                "Comprehensive incident documentation",
              ].map((value) => (
                <li key={value} className="flex items-start gap-3 text-slate-300 text-sm">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  {value}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Professional Skills Highlight</h3>
            <div className="grid grid-cols-2 gap-4">
              {professionalSkills.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.skill} className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-lg">
                    <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                      <Icon className="h-5 w-5 text-cyan-400" />
                    </div>
                    <span className="text-white font-medium text-sm">{item.skill}</span>
                  </div>
                )
              })}
            </div>
            <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <p className="text-green-400 font-medium text-sm">
                This project demonstrates ability to work as a SOC Analyst L1 and handle real security incidents professionally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
