"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Lock, Radio, Cpu, Network, Database } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/data';

const Footer = () => {
    return (
        <footer className="relative mt-40 border-t border-green-500/20 bg-background/50 py-20 px-6 font-mono text-xs font-bold uppercase tracking-widest text-foreground/40 backdrop-blur-md">

            {/* Decorative Glow Line */}
            <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />

            <div className="container mx-auto grid grid-cols-1 gap-12 lg:grid-cols-4">

                {/* Identity Token */}
                <div className="col-span-1 lg:col-span-2 space-y-8">
                    <div className="flex items-center gap-2 text-xl font-black text-foreground drop-shadow-[0_0_5px_rgba(0,255,159,0.3)]">
                        <Shield className="text-green-500" size={24} />
                        MITHLESH<span className="text-green-500/50">_SYS</span>
                    </div>
                    <p className="max-w-md leading-loose">
                        SYSTEM_ARCHITECTING_PROTOCOLS_SINCE_2023. <br />
                        ESTABLISHING_HIGH_PERFORMANCE_CODING_SYSTEMS. <br />
                        ALL_DATA_FLOWS_PROTECTED_BY_QUANTUM_LOGIC_AND_CYBER_ENCRYPTION.
                    </p>

                    <div className="flex gap-8">
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] text-green-500/20">ENCRYPTION:</span>
                            <span className="text-foreground/60">AES-256-GCM</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] text-green-500/20">NETWORK:</span>
                            <span className="text-foreground/60">IPV6_ACTIVE</span>
                        </div>
                    </div>
                </div>

                {/* System Status Indicators */}
                <div className="grid grid-cols-2 gap-8 lg:col-span-2">
                    <div className="space-y-6">
                        <div className="text-[10px] text-green-500 opacity-50 border-b border-green-500/10 pb-2">ACTIVE_HARDWARE</div>
                        <div className="flex items-center gap-3">
                            <Cpu size={14} className="text-green-500" />
                            <span className="text-foreground/60">INTEL_SILICON_V8</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Database size={14} className="text-green-500" />
                            <span className="text-foreground/60">NO_SQL_NODE_V0.1</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Network size={14} className="text-green-500" />
                            <span className="text-foreground/60">JS_ENGINE_STABLE</span>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="text-[10px] text-green-500 opacity-50 border-b border-green-500/10 pb-2">CONNECTION_NODE</div>
                        <motion.div
                            animate={{ opacity: [0.3, 0.7, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="flex items-center gap-3"
                        >
                            <Radio size={14} className="text-green-500" />
                            <span className="text-foreground/60">FREQ: 5.4 GHZ</span>
                        </motion.div>
                        <div className="flex items-center gap-3">
                            <Lock size={14} className="text-green-500" />
                            <span className="text-foreground/60">SSL_SECURED</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Terminal size={14} className="text-green-500" />
                            <span className="text-foreground/60">ROOT_TERMINAL</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20 flex flex-col items-center justify-between gap-12 border-t border-green-500/10 pt-12 md:flex-row">
                <div className="text-[8px] tracking-[0.4em] font-black">{`AUTHORIZED_SYSTEMS_ONLY // ACCESS_DENIED_TO_GUESTS`}</div>

                <div className="flex gap-12 font-black text-foreground hover:text-green-500 transition-colors">
                    <a href={PERSONAL_INFO.github} className="hover:drop-shadow-[0_0_8px_var(--hacker-glow)]">GITHUB_HUB</a>
                    <a href={PERSONAL_INFO.linkedin} className="hover:drop-shadow-[0_0_8px_var(--hacker-glow)]">LINKEDIN_PORT</a>
                </div>

                <div className="text-[8px] font-medium opacity-30 text-right">
                    © 2026 MITHLESH_KUMAR SYNC_V1.0.4 <br />
                    BUILD: {new Date().toLocaleDateString()}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
