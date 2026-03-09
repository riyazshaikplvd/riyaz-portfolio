import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Riyaz Shaik | SOC Analyst L1 | Cybersecurity Professional',
  description: 'SOC Analyst L1 | Cybersecurity Analyst | SIEM | Incident Response | Threat Detection | Log Analysis | Splunk | Wazuh | TryHackMe Top 25% | LetsDefend 913 Points. B.Tech in Computer Science (Data Science) with hands-on SOC experience.',
  keywords: ['SOC Analyst', 'Cybersecurity Analyst', 'Threat Detection', 'SIEM Monitoring', 'Incident Response', 'Security Operations Center', 'Splunk', 'Wazuh', 'TryHackMe', 'LetsDefend', 'Hack The Box'],
  authors: [{ name: 'Riyaz Shaik', url: 'https://linkedin.com/in/riyazshaikplvd' }],
  creator: 'Riyaz Shaik',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
