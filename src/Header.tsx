import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from './config';

const RedstoneLogo = () => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className="drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]"
  >
    <path 
      d="M12 2L2 7V17L12 22L22 17V7L12 2Z" 
      fill="url(#redstone-grad)" 
      stroke="#ef4444" 
      strokeWidth="1.5" 
      strokeLinejoin="round"
    />
    <path 
      d="M12 22V12M12 12L2 7M12 12L22 7" 
      stroke="#ef4444" 
      strokeWidth="1.5" 
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="redstone-grad" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ef4444" stopOpacity="0.4"/>
        <stop offset="1" stopColor="#7f1d1d" stopOpacity="0.8"/>
      </linearGradient>
    </defs>
  </svg>
);

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-6 w-full">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-white group">
          <RedstoneLogo />
          <span className="font-bold text-2xl tracking-tight text-zinc-100 group-hover:text-white transition-colors">
            {siteConfig.teamName}
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Home</Link>
          <Link to="/resources" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Resources</Link>
        </nav>
      </div>
    </header>
  );
}
