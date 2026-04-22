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
            Results-driven{" "}
            <span className="text-cyan-400 font-semibold">
              SOC Analyst L1
            </span>{" "}
            with a B.Tech in Computer Science (Data Science, 2025), focused on
            real-time threat detection and incident response in modern Security
            Operations Center (SOC) environments.
          </p>

          <p>
            Hands-on experience in{" "}
            <span className="text-cyan-400">SIEM monitoring</span>,{" "}
            <span className="text-cyan-400">alert triage</span>, and{" "}
            <span className="text-cyan-400">security event analysis</span>{" "}
            using tools like Splunk, Wazuh, IBM QRadar, and Microsoft Sentinel.
          </p>

          <p>
            Skilled in analyzing{" "}
            <span className="text-cyan-400">Windows Event Logs</span>,{" "}
            <span className="text-cyan-400">Linux syslogs</span>, and network
            traffic to detect and respond to threats. Experienced in{" "}
            <span className="text-cyan-400">phishing analysis</span>,{" "}
            <span className="text-cyan-400">malware analysis</span>,{" "}
            <span className="text-cyan-400">
              vulnerability assessment
            </span>{" "}
            and{" "}
            <span className="text-cyan-400">
              MITRE ATT&CK framework mapping
            </span>.
          </p>

          <p>
            Strong understanding of SOC workflows including monitoring,
            investigation, escalation, and reporting. Passionate about reducing
            false positives, improving detection accuracy, and protecting
            digital assets in real-world environments.
          </p>

        </div>
      </div>
    </section>
  )
}
