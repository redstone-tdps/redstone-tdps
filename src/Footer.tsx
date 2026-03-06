import { Mail, Github } from 'lucide-react';
import { siteConfig } from './config';

export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 border-t border-zinc-800/50 bg-zinc-950/80 backdrop-blur-sm z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col md:flex-row items-center gap-2 text-zinc-400">
          <span className="text-sm">© {new Date().getFullYear()} {siteConfig.teamName}. All rights reserved.</span>
          <span className="hidden md:inline text-zinc-700">•</span>
          <span className="text-sm">TDPS Course Project</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-300 bg-zinc-900 rounded-lg hover:bg-zinc-800 hover:text-white transition-colors border border-zinc-800"
          >
            <Mail size={16} />
            Contact Us
          </a>
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-zinc-400 hover:text-white transition-colors bg-zinc-900 rounded-lg hover:bg-zinc-800 border border-zinc-800"
            title="GitHub Repository"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
