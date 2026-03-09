import { Shield, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative z-10 py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-slate-950/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-cyan-400" />
            <span className="text-white font-bold">Riyaz Shaik</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 text-sm">SOC Analyst L1</span>
          </div>
          
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> for Cybersecurity
          </p>
          
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
