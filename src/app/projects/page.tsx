"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import ScientificBackground from '@/components/ScientificBackground';
import Footer from '@/components/Footer';
import { ProjectGrid } from '@/components/ProjectSection';
import { PROJECTS } from '@/lib/data';
import { motion } from 'framer-motion';
import { Shield, Terminal } from 'lucide-react';

const ProjectsPage = () => {
    return (
        <main className="relative min-h-screen font-mono text-foreground bg-background transition-colors duration-500 overflow-x-hidden">
            <ScientificBackground />
            <Navbar />

            <section className="container mx-auto px-6 pt-32 pb-40">
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <Terminal className="text-green-500" size={32} />
                        <div className="text-[10px] uppercase font-black text-green-500/40 tracking-[0.5em]">{`> DECRYPTING_VAULT_76`}</div>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-6xl font-black uppercase tracking-tighter md:text-9xl mb-12"
                    >
                        CODE_<span className="text-green-500/20">VAULT</span>_
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mt-6 text-sm font-medium leading-loose opacity-60 border-l-4 border-green-500 pl-8 max-w-2xl py-6 bg-green-500/[0.01] hover:bg-green-500/[0.03] transition-all"
                    >
                        {`> DIRECTORY_SCAN_COMPLETE.`} <br />
                        {`> _REPO_76: A_CURATED_LIST_OF_WEB_SYSTEMS_AND_SIMULATIONS_DEVELOPED_FOR_CLIENTS_AND_RESEARCH.`} <br />
                        {`> ACCESS_CLEARANCE: UNRESTRICTED.`}
                    </motion.p>
                </div>

                {/* Project Grid with Pagination */}
                <div className="relative">
                    <div className="absolute top-0 left-0 h-full w-[1px] bg-green-500/5 hidden lg:block" />
                    <div className="lg:pl-8">
                        <ProjectGrid projects={PROJECTS} itemsPerPage={6} />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ProjectsPage;
