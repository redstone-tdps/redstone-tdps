import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, FileText, FolderOpen, ChevronDown, ChevronRight, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from './config';

export default function Resources() {
  const resourceGroups = siteConfig.resourceGroups;
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(new Set());

  const toggleGroup = (id: string) => {
    setCollapsedGroups(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="w-full flex-1 px-6 pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:40px_40px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-12 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
        
        <motion.h1 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-white"
        >
          Course Resources
        </motion.h1>
        
        <div className="flex flex-col gap-12">
          {resourceGroups.map((group, groupIndex) => {
            const isCollapsed = collapsedGroups.has(group.id);
            return (
            <motion.div 
              key={group.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: groupIndex * 0.1 }}
            >
              <button 
                onClick={() => toggleGroup(group.id)}
                className="flex items-center gap-2 mb-4 text-red-500 hover:text-red-400 transition-colors w-full text-left focus:outline-none"
              >
                {isCollapsed ? <ChevronRight size={24} /> : <ChevronDown size={24} />}
                <FolderOpen size={24} />
                <h2 className="text-2xl font-bold text-zinc-100">{group.name}</h2>
              </button>
              
              {!isCollapsed && (
              <div className="flex flex-col gap-4">
                {group.files.map((file, fileIndex) => (
                  <motion.div 
                    key={file.id} 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (groupIndex * 0.1) + (fileIndex * 0.1) + 0.1 }}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/50"
                  >
                    <div className="flex items-start sm:items-center gap-4">
                      <div className="p-3 rounded-lg bg-zinc-800 text-zinc-400 shrink-0">
                        <FileText size={24} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-lg font-semibold text-zinc-200 truncate whitespace-normal break-words">{file.title}</h4>
                        {file.description && (
                          <p className="text-sm text-zinc-400">{file.description}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-row w-full sm:w-auto gap-2 shrink-0">
                      {file.filename?.toLowerCase().endsWith('.pdf') && (
                        <a 
                          href={file.url} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-zinc-300 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors whitespace-nowrap"
                        >
                          <Eye size={18} />
                          View
                        </a>
                      )}
                      <a 
                        href={file.url} 
                        download={file.filename}
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-red-500 bg-red-500/10 rounded-lg hover:bg-red-500/20 transition-colors whitespace-nowrap"
                      >
                        <Download size={18} />
                        Download
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
              )}
            </motion.div>
          )})}
          
          {resourceGroups.length === 0 && (
            <div className="p-8 text-center text-zinc-500 border border-dashed border-zinc-800 rounded-xl">
              No resources available for download yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

