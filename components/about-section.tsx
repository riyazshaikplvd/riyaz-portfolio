"use client"

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl w-full text-center">

        <p className="text-cyan-400 font-medium mb-2 tracking-wider">
          ABOUT ME
        </p>
        <h2 className="text-4xl font-bold text-white mb-8">
          Professional Summary
        </h2>

        <div className="text-slate-300 text-lg leading-relaxed space-y-5">

          <p>
            Motivated{" "}
            <span className="text-cyan-400 font-semibold">Cybersecurity Professional</span>{" "}
            and aspiring{" "}
            <span className="text-cyan-400 font-semibold">SOC Analyst</span>,
            with a B.Tech in Computer Science (Data Science, 2025), currently pursuing{" "}
            <span className="text-amber-400 font-bold drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]">
              CompTIA Security+
            </span>{" "}
            certification to strengthen core security fundamentals.
          </p>

          <p>
            Hands-on experience in{" "}
            <span className="text-cyan-400">SIEM monitoring</span>,{" "}
            <span className="text-cyan-400">alert triage</span>,{" "}
            <span className="text-cyan-400">incident response</span>, and{" "}
            <span className="text-cyan-400">threat detection</span>{" "}
            through real-world lab environments including{" "}
            <span className="text-orange-400 font-bold drop-shadow-[0_0_8px_rgba(255,153,51,0.6)]">
              TryHackMe
            </span>
            ,{" "}
            <span className="text-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              LetsDefend
            </span>
            , and{" "}
            <span className="text-pink-400 font-bold drop-shadow-[0_0_8px_rgba(244,114,182,0.6)]">
              Hack The Box
            </span>
            .
          </p>

          <p>
            Skilled in analyzing{" "}
            <span className="text-cyan-400">Windows Event Logs</span>,{" "}
            <span className="text-cyan-400">Linux syslogs</span>, and network
            traffic to identify and respond to security incidents using tools such as{" "}
            <span className="text-cyan-400">Splunk</span>,{" "}
            <span className="text-cyan-400">Wazuh</span>,{" "}
            <span className="text-cyan-400">IBM QRadar</span>, and{" "}
            <span className="text-cyan-400">Microsoft Sentinel</span>.
          </p>

          <p>
            Experienced in{" "}
            <span className="text-cyan-400">phishing analysis</span>,{" "}
            <span className="text-cyan-400">malware analysis</span>,{" "}
            <span className="text-cyan-400">vulnerability assessment</span>, and{" "}
            <span className="text-cyan-400">MITRE ATT&amp;CK framework mapping</span>,
            with a focus on improving detection accuracy and reducing false positives.
          </p>

          <p>
            Strong understanding of SOC workflows including monitoring, investigation,
            escalation, and reporting. Passionate about protecting digital assets,
            continuously improving security posture, and contributing effectively to
            modern SOC teams.
          </p>

        </div>
      </div>
    </section>
  )
}
