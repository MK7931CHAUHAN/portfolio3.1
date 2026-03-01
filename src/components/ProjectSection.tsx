"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, X, Github, ChevronLeft, ChevronRight, Terminal, Lock } from 'lucide-react';

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    liveLink: string;
    githubLink?: string;
    longDescription: string;
    tags: string[];
}

interface ProjectGridProps {
    projects: Project[];
    itemsPerPage?: number;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, itemsPerPage = 6 }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const totalPages = Math.ceil(projects.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="space-y-12 font-mono">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence mode="wait">
                    {currentProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="group relative overflow-hidden border border-green-500/20 bg-black/80 transition-all hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                        >
                            {/* Terminal Title Bar */}
                            <div className="flex items-center justify-between border-b border-green-500/10 bg-green-500/5 px-4 py-2">
                                <div className="flex gap-1.5">
                                    <div className="h-2 w-2 rounded-full bg-red-500/50" />
                                    <div className="h-2 w-2 rounded-full bg-yellow-500/50" />
                                    <div className="h-2 w-2 rounded-full bg-green-500/50" />
                                </div>
                                <div className="text-[10px] uppercase tracking-tighter text-green-500/50">project://{project.title.toLowerCase().replace(/\s+/g, '_')}</div>
                            </div>

                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover opacity-50 contrast-125 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80"
                                />
                                <div className="absolute inset-0 bg-green-900/10 mix-blend-color transition-opacity group-hover:opacity-0" />

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="flex items-center gap-2 border border-green-500 bg-black px-6 py-2 text-xs font-bold text-green-500 hover:bg-green-500 hover:text-black transition-colors"
                                    >
                                        <Eye size={16} /> ACCESS_DATA
                                    </button>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="mb-4 flex items-center justify-between text-[10px] text-green-500/40">
                                    <span className="flex items-center gap-1 uppercase tracking-widest"><Terminal size={10} /> source_type</span>
                                    <span className="uppercase">rev://v1.0.4</span>
                                </div>
                                <h3 className="mb-2 text-lg font-bold text-green-500 uppercase tracking-tighter group-hover:drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]">
                                    {project.title}
                                </h3>
                                <p className="mb-6 text-xs text-green-500/60 transition-colors group-hover:text-green-500/80 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.slice(0, 3).map(tag => (
                                        <span key={tag} className="border border-green-500/10 bg-green-500/5 px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest text-green-500/60">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-6 pt-8">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(prev => prev - 1)}
                        className="flex h-10 w-10 items-center justify-center border border-green-500/20 text-green-500 transition-all hover:bg-green-500 hover:text-black disabled:opacity-20"
                    >
                        <ChevronLeft size={18} />
                    </button>

                    <div className="flex items-center gap-4">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`h-1.5 transition-all ${currentPage === i + 1 ? 'w-8 bg-green-500' : 'w-2 bg-green-500/20'}`}
                            />
                        ))}
                    </div>

                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(prev => prev + 1)}
                        className="flex h-10 w-10 items-center justify-center border border-green-500/20 text-green-500 transition-all hover:bg-green-500 hover:text-black disabled:opacity-20"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
            )}

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative w-full max-w-4xl border border-green-500 bg-black shadow-[0_0_50px_rgba(0,255,0,0.1)]"
                        >
                            {/* Modal Title Bar */}
                            <div className="flex items-center justify-between border-b border-green-500/30 bg-green-500/5 px-6 py-3">
                                <div className="flex gap-2">
                                    <div className="h-3 w-3 rounded-full bg-red-500" />
                                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                                    <div className="h-3 w-3 rounded-full bg-green-500" />
                                </div>
                                <div className="text-xs font-bold uppercase tracking-[0.2em] text-green-500">DECRYPT_PHASE_07</div>
                                <button onClick={() => setSelectedProject(null)} className="text-green-500 hover:bg-green-500/20 p-1">
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="relative border-r border-green-500/20 p-1">
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="h-full w-full object-cover opacity-60 contrast-125 saturate-50"
                                    />
                                    {/* Digital overlay */}
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,0,0.1),transparent_70%)]" />
                                </div>

                                <div className="flex flex-col p-8 lg:p-12">
                                    <div className="mb-6">
                                        <div className="mb-2 text-[10px] font-bold uppercase tracking-widest text-green-500/40">{`> ENTRY_PROTOCOL_${selectedProject.id}`}</div>
                                        <h2 className="text-3xl font-bold text-green-500 uppercase tracking-tighter">{selectedProject.title}</h2>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {selectedProject.tags.map(tag => (
                                                <span key={tag} className="text-[10px] text-green-500/60 uppercase">::{tag}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-8 space-y-4 text-xs font-mono text-green-500/80 leading-relaxed max-h-[200px] overflow-y-auto pr-4 custom-scrollbar">
                                        <div className="text-green-500/30">_INITIATING_DESCRIPTION_FETCH...</div>
                                        <p>{selectedProject.longDescription}</p>
                                        <div className="text-green-500/30">_DESCRIPTION_BLOCK_CLOSED_</div>
                                    </div>

                                    {/* CUSTOM REQUEST: Live Link LEFT, GitHub Link RIGHT */}
                                    <div className="mt-auto grid grid-cols-2 gap-4 border-t border-green-500/20 pt-8">
                                        <a
                                            href={selectedProject.liveLink}
                                            target="_blank"
                                            className="flex items-center justify-center gap-2 border border-green-500 bg-green-500/10 py-3 text-[10px] font-bold text-green-500 uppercase transition-all hover:bg-green-500 hover:text-black"
                                        >
                                            <ExternalLink size={16} /> LIVE_PROT
                                        </a>
                                        {selectedProject.githubLink && (
                                            <a
                                                href={selectedProject.githubLink}
                                                target="_blank"
                                                className="flex items-center justify-center gap-2 border border-green-500/20 py-3 text-[10px] font-bold text-green-500 uppercase transition-all hover:border-green-500 hover:bg-green-500/10"
                                            >
                                                <Github size={16} /> REPO_ACCESS
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Status Bar */}
                            <div className="border-t border-green-500/20 bg-green-500/5 px-6 py-2 flex justify-between items-center text-[10px] font-mono text-green-500/30 uppercase">
                                <span>enc:RSA-4096</span>
                                <span className="flex items-center gap-2"><Lock size={10} /> secure_tunnel_encrypted</span>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};
