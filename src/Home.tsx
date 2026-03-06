import { Github, Download, Car, Zap, Radar, Radio, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { siteConfig } from './config';

export default function Home() {
  return (
    <div className="relative w-full flex flex-col items-center overflow-hidden flex-1">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:40px_40px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-red-600/10 blur-[100px] pointer-events-none" />

      {/* Hero Section */}
      <div className="relative z-10 w-full max-w-6xl px-6 pt-32 pb-20 mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-sm font-medium rounded-full bg-red-500/10 text-red-500 border border-red-500/20"
        >
          <Zap size={16} />
          <span>TDPS Project Team</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="mb-6 text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500"
        >
          {siteConfig.teamName}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-zinc-400"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
        >
          <Link
            to="/resources"
            className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-all bg-red-600 rounded-lg hover:bg-red-500 ring-1 ring-transparent hover:ring-red-400"
          >
            <Download size={18} />
            Course Resources
          </Link>
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all rounded-lg text-zinc-300 bg-zinc-900 hover:bg-zinc-800 hover:text-white ring-1 ring-zinc-800"
          >
            <Github size={18} />
            GitHub Repository
          </a>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-500/10 text-red-500 mb-4">
              <Car size={24} />
            </div>
            <h3 className="text-xl font-semibold text-zinc-200 mb-2">Autonomous Navigation</h3>
            <p className="text-zinc-400">Advanced line-following capabilities to ensure precise track navigation.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-500/10 text-red-500 mb-4">
              <Radar size={24} />
            </div>
            <h3 className="text-xl font-semibold text-zinc-200 mb-2">Obstacle Detection</h3>
            <p className="text-zinc-400">Intelligent scanning to detect obstacle directions and avoid collisions.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-500/10 text-red-500 mb-4">
              <Radio size={24} />
            </div>
            <h3 className="text-xl font-semibold text-zinc-200 mb-2">LoRa Telemetry</h3>
            <p className="text-zinc-400">Long-range transmission of vehicle status and detection data to base stations.</p>
          </motion.div>
        </div>

        {/* Project Gallery / Showcase Section */}
        <div className="text-left w-full mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-zinc-100">Project Showcase</h2>
              <p className="text-zinc-400 mt-2">Documenting our vehicle build progress.</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siteConfig.showcase.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden bg-zinc-900/50 border border-zinc-800/50 aspect-video flex flex-col items-center justify-center"
              >
                {item.imageUrl ? (
                  <img src={item.imageUrl} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <>
                    <ImageIcon size={48} className="text-zinc-700 mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    <p className="text-zinc-500 font-medium">{item.label} ({item.status})</p>
                  </>
                )}
                
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <h4 className="text-white font-semibold">{item.title}</h4>
                  <p className="text-sm text-zinc-400 mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Development Timeline Section */}
        <div className="text-left w-full mb-20 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="text-3xl font-bold text-zinc-100">Development Milestones</h2>
            <p className="text-zinc-400 mt-2">Tracing our steps from design to final presentation.</p>
          </motion.div>

          <div className="space-y-6">
            {siteConfig.timeline.map((item, index) => {
              const isActive = item.status === 'active';
              return (
                <div key={item.id} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    {isActive ? (
                      <div className="w-8 h-8 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center ring-1 ring-red-500/30">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-500">
                        <span className="text-sm">{index + 1}</span>
                      </div>
                    )}
                    {index !== siteConfig.timeline.length - 1 && (
                      <div className={`w-px h-full my-2 ${isActive ? 'bg-zinc-800' : 'bg-zinc-800/50'}`} />
                    )}
                  </div>
                  <div className={`pb-8 ${!isActive && 'opacity-60'}`}>
                    <h4 className={`text-lg font-semibold ${isActive ? 'text-zinc-200' : 'text-zinc-300'}`}>{item.title}</h4>
                    <p className="text-sm text-zinc-500 mb-2">{item.date}</p>
                    <p className={`text-zinc-400 ${isActive ? 'bg-zinc-900/50' : 'bg-zinc-900/30'} p-4 rounded-xl border ${isActive ? 'border-zinc-800/50' : 'border-zinc-800/30'}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
