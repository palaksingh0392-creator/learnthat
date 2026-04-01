// Notice 'Linkedin' and 'Twitter' casing
//import { Github, Linkedin, Twitter, Mail } from "lucide-react";
// This array holds the actual Component references, not strings
//const socialLinks = [
//
export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* 1. MAIN FOOTER CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand & Mission (Takes 5 columns for prominence) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
                L
              </div>
              <span className="text-2xl font-bold tracking-tighter">
                Learnthat
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              Empowering the next generation of developers through project-based
              learning and community-driven curriculum.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {[].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="p-2 rounded-full border border-slate-100 dark:border-slate-800 text-slate-400 hover:text-blue-600 hover:border-blue-100 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links (Spread across remaining 7 columns) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-slate-900 dark:text-white">
                Platform
              </h4>
              <ul className="flex flex-col gap-3 text-slate-500 dark:text-slate-400 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    Notes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    Tutorials
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-slate-900 dark:text-white">
                Community
              </h4>
              <ul className="flex flex-col gap-3 text-slate-500 dark:text-slate-400 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    Showcase
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-slate-900 dark:text-white">
                Legal
              </h4>
              <ul className="flex flex-col gap-3 text-slate-500 dark:text-slate-400 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 2. BOTTOM BAR (The Signature) */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400 uppercase tracking-widest">
          <p>© 2026 Learnthat. Build with passion.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            System Status: All Systems Operational
          </div>
        </div>
      </div>
    </footer>
  );
}
