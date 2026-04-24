"use client"

export function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 scroll-mt-24 bg-slate-950"
    >
      <div className="mx-auto max-w-5xl w-full text-center">

        <p className="text-cyan-400 font-medium mb-2 tracking-wider uppercase">
          About Me
        </p>

        <h2 className="text-4xl font-bold text-white mb-8">
          Professional Summary
        </h2>

        <div className="text-slate-300 text-lg leading-relaxed space-y-6">

          <p>
            Motivated{" "}
            <span className="text-cyan-400 font-semibold text-xl">
              Cybersecurity Professional
            </span>{" "}
            and aspiring{" "}
            <span className="text-cyan-400 font-semibold text-xl">
              SOC Analyst
            </span>
            , with a B.Tech in Computer Science (Data Science, 2025), currently pursuing{" "}
            <span className="text-pink-500 font-black drop-shadow-[0_0_10px_rgba(236,72,153,0.7)] bg-pink-500/10 px-2 py-0.5 rounded">
              CompTIA Security+ and EC-Council Certified SOC Analyst (CSA)
            </span>{" "}
            certifications to strengthen core security fundamentals.
          </p>

          <p>
            Hands-on experience in{" "}
            <span className="text-cyan-400 font-medium">SIEM monitoring</span>,{" "}
            <span className="text-cyan-400 font-medium">alert triage</span>,{" "}
            <span className="text-cyan-400 font-medium">incident response</span>, and{" "}
            <span className="text-cyan-400 font-medium">threat detection</span>{" "}
            through real-world lab environments including:{" "}
            <span className="text-[#FF9933] font-black drop-shadow-[0_0_10px_rgba(255,153,51,0.7)] bg-[#FF9933]/10 px-2 py-0.5 rounded">
              TryHackMe
            </span>
            ,{" "}
            <span className="text-white font-black drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] bg-white/10 px-2 py-0.5 rounded">
              LetsDefend
            </span>
            , and{" "}
            <span className="text-green-400 font-black drop-shadow-[0_0_6px_rgba(74,222,128,0.6)] bg-green-400/10 px-2 py-0.5 rounded">
              Hack The Box
            </span>
            .
          </p>

          <p>
            Skilled in analyzing{" "}
            <span className="text-cyan-400 font-medium underline decoration-cyan-400/30 underline-offset-4">
              Windows Event Logs
            </span>
            ,{" "}
            <span className="text-cyan-400 font-medium underline decoration-cyan-400/30 underline-offset-4">
              Linux syslogs
            </span>
            , and network traffic to identify and respond to security incidents using tools such as{" "}
            <span className="text-cyan-300 font-bold italic underline underline-offset-2 decoration-cyan-300/50">
              Splunk
            </span>
            ,{" "}
            <span className="text-cyan-300 font-bold italic underline underline-offset-2 decoration-cyan-300/50">
              Wazuh
            </span>
            ,{" "}
            <span className="text-cyan-300 font-bold italic underline underline-offset-2 decoration-cyan-300/50">
              IBM QRadar
            </span>
            , and{" "}
            <span className="text-cyan-300 font-bold italic underline underline-offset-2 decoration-cyan-300/50">
              Microsoft Sentinel
            </span>.
          </p>

          <p>
            Experienced in{" "}
            <span className="text-cyan-400">phishing analysis</span>,{" "}
            <span className="text-cyan-400">malware analysis</span>,{" "}
            <span className="text-cyan-400">vulnerability assessment</span>, and{" "}
            <span className="text-cyan-400 font-semibold bg-cyan-400/10 px-1">
              MITRE ATT&CK framework mapping
            </span>
            , with a focus on improving detection accuracy and reducing false positives.
          </p>

          <p className="border-t border-slate-800 pt-6">
            Strong understanding of{" "}
            <span className="text-white font-semibold">SOC workflows</span>{" "}
            including monitoring, investigation, escalation, and reporting. Passionate about protecting digital assets,
            continuously improving security posture, and contributing effectively to modern SOC teams.
          </p>

        </div>
      </div>
    </section>
  )
}
