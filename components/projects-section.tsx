"use client"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="mx-auto max-w-5xl">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Projects
          </h2>
        </div>

        {/* PROJECT LIST */}
        <div className="space-y-12 text-slate-300 leading-relaxed text-[15px]">

          {/* 1 */}
          <div>
            <h3 className="text-lg font-bold text-white mb-2">
              Virtual SOC with Real-Time Threat Detection – Cyber Guide
            </h3>
            <p>
              Built a virtual SOC environment using ELK Stack/Wazuh for real-time threat detection and log analysis on Ubuntu to monitor and analyze security events from Windows and Linux endpoints through centralized SIEM dashboards. Created 15+ detection rules and Sigma Rules for brute-force attacks, privilege escalation, and port-scanning activities mapped to MITRE ATT&CK framework and Cyber Kill Chain stages. Monitored Active Directory events and performed alert triage, investigation, escalation, and reporting to simulate real SOC workflows.
            </p>

            <ul className="mt-3 space-y-1 text-sm text-cyan-400">
              <li>• ELK Stack / Wazuh</li>
              <li>• Splunk</li>
              <li>• Kali Linux & Metasploit</li>
              <li>• Wireshark</li>
            </ul>
          </div>

          {/* 2 */}
          <div>
            <h3 className="text-lg font-bold text-white mb-2">
              OWASP Top 10 Lab Series
            </h3>
            <p>
              Exploited 8 OWASP Top 10 vulnerabilities including XSS, SQL Injection, Brute Force, Command Injection, File Upload, CSRF, File Inclusion, and Broken Authentication using professional penetration testing tools. Documented payloads, exploitation steps, and secure fixes.
            </p>

            <ul className="mt-3 space-y-1 text-sm text-red-400">
              <li>• Burp Suite</li>
              <li>• DVWA</li>
              <li>• SQL Injection / XSS</li>
              <li>• Web Security Testing</li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h3 className="text-lg font-bold text-white mb-2">
              Deep Fake Source Identifier – B.Tech Final Year
            </h3>
            <p>
              Built an NLP-based deep learning system using Python, PHP, and MySQL to detect AI-generated (deepfake) and bot-driven content on social media. Focused on misinformation detection and security threat analysis.
            </p>

            <ul className="mt-3 space-y-1 text-sm text-purple-400">
              <li>• Python</li>
              <li>• NLP / Deep Learning</li>
              <li>• PHP</li>
              <li>• MySQL</li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h3 className="text-lg font-bold text-white mb-2">
              Threat Detection & Incident Response Lab – TryHackMe
            </h3>
            <p>
              Detected and analyzed 30+ simulated attacks using Splunk dashboards. Covered alert triage, SIEM dashboards, Windows Event Log analysis, network traffic analysis, phishing, malware analysis, and incident escalation.
            </p>

            <ul className="mt-3 space-y-1 text-sm text-blue-400">
              <li>• Splunk</li>
              <li>• SIEM & Log Analysis</li>
              <li>• Windows Event Logs</li>
              <li>• Network Traffic Analysis</li>
            </ul>
          </div>

          {/* 5 */}
          <div>
            <h3 className="text-lg font-bold text-white mb-2">
              Malware Simulation Lab – SkillsUprise Hackathon
            </h3>
            <p>
              Designed ethical malware simulations to understand attacker techniques like clickjacking, remote command execution, and data exfiltration. Built C2 workflows and SOC-ready detection insights.
            </p>

            <ul className="mt-3 space-y-1 text-sm text-orange-400">
              <li>• Malware Analysis</li>
              <li>• C2 Workflows</li>
              <li>• Incident Response</li>
              <li>• Logging Techniques</li>
            </ul>
          </div>

          {/* 6 */}
          <div>
            <h3 className="text-lg font-bold text-white mb-2">
              Cloud Security Mini Project
            </h3>
            <p>
              Implemented Microsoft Defender for Cloud to monitor endpoints, configure policies, analyze alerts, and generate reports for enhanced endpoint protection and security posture.
            </p>

            <ul className="mt-3 space-y-1 text-sm text-green-400">
              <li>• Microsoft Defender for Cloud</li>
              <li>• Azure</li>
              <li>• Endpoint Protection</li>
              <li>• Security Monitoring</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  )
}
