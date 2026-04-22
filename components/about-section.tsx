"use client"

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
    >
      <div className="mx-auto max-w-5xl w-full text-center">

        {/* Heading */}
        <p className="text-cyan-400 font-medium mb-2 tracking-wider">
          ABOUT ME
        </p>

        <h2 className="text-4xl font-bold text-white mb-8">
          Professional Summary
        </h2>

        {/* Professional Summary */}
        <div className="text-slate-300 text-lg leading-relaxed space-y-5">

          <p>
            Motivated <span className="text-cyan-400 font-semibold">Cybersecurity Professional</span> and aspiring 
            <span className="text-cyan-400 font-semibold"> SOC Analyst</span>, with a B.Tech in Computer Science (Data Science, 2025), currently pursuing 
            <span className="text-cyan-400">CompTIA Security+</span> certification to strengthen core security fundamentals.
          </p>

          <p>
            Hands-on experience in <span className="text-cyan-400">SIEM monitoring</span>, 
            <span className="text-cyan-400">alert triage</span>, 
            <span className="text-cyan-400">incident response</span>, and 
            <span className="text-cyan-400">threat detection</span> through real-world lab environments including </span className="text-orange-400"> TryHackMe, LetsDefend, and Hack The Box</span>
          </p>

          <p>
            Skilled in analyzing <span className="text-cyan-400">Windows Event Logs</span>, 
            <span className="text-cyan-400">Linux syslogs</span>, and network traffic to identify and respond to security incidents using tools such as 
            <span className="text-cyan-400">Splunk</span>, 
            <span className="text-cyan-400">Wazuh</span>, 
            <span className="text-cyan-400">IBM QRadar</span>, and 
            <span className="text-cyan-400">Microsoft Sentinel</span>.
          </p>

          <p>
            Experienced in <span className="text-cyan-400">phishing analysis</span>, 
            <span className="text-cyan-400">malware analysis</span>, 
            <span className="text-cyan-400">vulnerability assessment</span>, and 
            <span className="text-cyan-400">MITRE ATT&CK framework mapping</span>, with a focus on improving detection accuracy and reducing false positives.
          </p>

          <p>
            Strong understanding of SOC workflows including monitoring, investigation, escalation, and reporting. Passionate about protecting digital assets, continuously improving security posture, and contributing effectively to modern SOC teams.
          </p>

        </div>

      </div>
    </section>
  )
}
