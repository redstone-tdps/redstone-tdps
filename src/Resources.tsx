import { Link } from 'react-router-dom';
import { ArrowLeft, Download, FileText, FolderOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from './config';

export default function Resources() {
  const resourceGroups = siteConfig.resourceGroups;

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
          {resourceGroups.map((group, groupIndex) => (
            <motion.div 
              key={group.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: groupIndex * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-4 text-red-500">
                <FolderOpen size={24} />
                <h2 className="text-2xl font-bold text-zinc-100">{group.name}</h2>
              </div>
              
              <div className="flex flex-col gap-4">
                {group.files.map((file, fileIndex) => (
                  <motion.div 
                    key={file.id} 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (groupIndex * 0.1) + (fileIndex * 0.1) + 0.1 }}
                    className="flex items-center justify-between p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-zinc-800 text-zinc-400">
                        <FileText size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-zinc-200">{file.title}</h4>
                        {file.description && (
                          <p className="text-sm text-zinc-400">{file.description}</p>
                        )}
                      </div>
                    </div>
                    <a 
                      href={file.url} 
                      download={file.filename}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-red-500 bg-red-500/10 rounded-lg hover:bg-red-500/20 transition-colors"
                    >
                      <Download size={18} />
                      Download
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
          
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

