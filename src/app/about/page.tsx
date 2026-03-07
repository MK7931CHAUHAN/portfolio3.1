"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import ScientificBackground from '@/components/ScientificBackground';
import Footer from '@/components/Footer';
import { EDUCATION, EXPERIENCE, SKILLS, CERTIFICATES, ACHIEVEMENTS } from '@/lib/data';
import { Briefcase, GraduationCap, Award, Code, CheckCircle, Trophy, Terminal, Shield, Cpu, Lock, Radio } from 'lucide-react';

const AboutPage = () => {
    return (
        <main className="relative min-h-screen pb-20 overflow-x-hidden font-mono text-foreground bg-background transition-colors duration-500">
            <ScientificBackground />
            <Navbar />

            <section className="container mx-auto px-6 pt-32">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="max-w-4xl border-l-4 border-green-500 pl-8"
                >
                    <div className="mb-4 text-[10px] font-black uppercase tracking-[1em] text-green-500/30">{`> DECRYPTING_HUMAN_INTERFACE...`}</div>
                    <h1 className="text-6xl font-black uppercase tracking-tighter md:text-9xl">
                        IDENTITY_<span className="text-green-500/20">MITHLESH</span>_
                    </h1>
                    <p className="mt-8 text-sm font-medium leading-loose opacity-60 border-l border-green-500/30 pl-6 py-4">
                        {`> _BOOT_SEQUENCE_IDENTIFIED`} <br />
                        {`> ROLE: FULL_STACK_ENGINEER_V.3.1.2026`} <br />
                        {`> MISSION_PARAMS: BUILDING_HIGH_CONCURRENCY_APPLICATIONS_AND_AI_INTEGRATIONS.`} <br />
                        {`> SECURE_CLEARANCE: AUTHORIZED.`}
                    </p>
                </motion.div>

                <div className="mt-40 space-y-48">

                    {/* Tech Stack Matrix */}
                    <section id="skills" className="scroll-mt-32">
                        <div className="flex items-center gap-4 mb-16 border-b border-green-500/20 pb-4">
                            <Cpu className="text-green-500" size={32} />
                            <h2 className="text-3xl font-black uppercase tracking-[0.2em] leading-none">TECH_CORE_MATRIX</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: 'CORE_LANG_bin', items: SKILLS.languages },
                                { title: 'FRAME_RE_WORK_sys', items: SKILLS.technologies },
                                { title: 'DB_RE_WORK_sys', items: SKILLS.databases },
                                { title: 'CI_CD_git', items: SKILLS.versionControl },
                            ].map((category, idx) => (
                                <motion.div
                                    key={category.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-10 border border-green-500/10 bg-background hover:border-green-500/40 hover:bg-green-500/[0.02] transition-all relative group"
                                >
                                    <div className="absolute top-0 right-0 h-4 w-4 border-t border-r border-green-500 opacity-20 group-hover:opacity-100" />
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-green-500/40 mb-10 border-b border-green-500/10 pb-2">
                                        {category.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {category.items.map(skill => (
                                            <span key={skill} className="text-[10px] font-bold px-3 py-2 border border-green-500/5 bg-green-500/[0.01] text-foreground/70 transition-all hover:bg-green-500 hover:text-black">
                                                {`{${skill}}`}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Sector Experience */}
                    <section>
                        <div className="flex items-center gap-4 mb-16 border-b border-green-500/20 pb-4">
                            <Terminal className="text-green-500" size={32} />
                            <h2 className="text-3xl font-black uppercase tracking-[0.2em] leading-none">SECTOR_EXPERIENCE</h2>
                        </div>

                        <div className="space-y-12">
                            {EXPERIENCE.map((exp, idx) => (
                                <motion.div
                                    key={exp.company}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="group relative p-12 lg:p-16 border border-green-500/10 bg-background transition-all hover:border-green-500 hover:shadow-[inset_0_0_50px_rgba(0,255,159,0.05)]"
                                >
                                    <div className="flex flex-col md:flex-row justify-between mb-12 gap-6 pb-6 border-b border-green-500/10">
                                        <div>
                                            <div className="text-[10px] font-black text-green-500/30 mb-4">{`// ACCESS_PROTOCOL: EXP_0x${idx}`}</div>
                                            <h3 className="text-3xl font-black uppercase md:text-4xl tracking-tighter">{exp.role}</h3>
                                            <div className="text-green-500 font-bold mt-2 text-sm italic">{exp.company} // {exp.domain}</div>
                                        </div>
                                        <div className="text-xs font-black text-green-500 flex items-center gap-3">
                                            <Radio className="animate-pulse" size={14} /> {exp.period}
                                        </div>
                                    </div>
                                    <ul className="space-y-6">
                                        {exp.highlights.map((point, i) => (
                                            <li key={i} className="flex gap-4 text-xs font-medium text-foreground/60 leading-loose group-hover:text-green-500 transition-colors">
                                                <Shield className="text-green-500 shrink-0 mt-1" size={14} />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Education Cycles */}
                    <section>
                        <div className="flex items-center gap-4 mb-16 border-b border-green-500/20 pb-4">
                            <GraduationCap className="text-green-500" size={32} />
                            <h2 className="text-3xl font-black uppercase tracking-[0.2em] leading-none">LEARNING_STAGES</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {EDUCATION.map((edu, idx) => (
                                <motion.div
                                    key={edu.institution}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="p-10 border border-green-500/10 bg-background hover:border-green-500 hover:bg-green-500/[0.02] transition-all group"
                                >
                                    <div className="text-[10px] font-black text-green-500/20 uppercase mb-8 flex justify-between">
                                        <span>{edu.period}</span>
                                        <span>VER_{3 - idx}.0</span>
                                    </div>
                                    <h3 className="text-sm font-black uppercase mb-6 leading-relaxed group-hover:text-green-500 transition-colors h-12">{edu.institution}</h3>
                                    <p className="text-[10px] text-foreground/40 mb-8 border-l-2 border-green-500/20 pl-4">{edu.degree}</p>
                                    <p className="text-[10px] font-black text-green-500 tracking-tighter uppercase group-hover:drop-shadow-[0_0_8px_var(--hacker-glow)]">
                                        {edu.location} {edu.grade ? ` | ${edu.grade}` : ''}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Records & Achievements Vault */}
                    <div id="certificates" className="grid grid-cols-1 lg:grid-cols-2 gap-24 scroll-mt-32">
                        <section>
                            <div className="flex items-center gap-4 mb-12 border-b border-green-500/20 pb-4">
                                <Award className="text-green-500" size={32} />
                                <h2 className="text-3xl font-black uppercase tracking-[0.2em] leading-none">RECORD_ENTRY</h2>
                            </div>
                            <div className="space-y-4">
                                {CERTIFICATES.map(cert => (
                                    <div key={cert.title} className="p-8 border border-green-500/10 bg-background transition-all hover:bg-green-500/[0.05] hover:border-green-500 flex justify-between items-center group">
                                        <div>
                                            <h4 className="font-black text-sm group-hover:text-green-500 uppercase tracking-tighter">{cert.title}</h4>
                                            <p className="text-[10px] font-medium text-foreground/30 mt-2 uppercase">issuer://{cert.issuer.toLowerCase().replace(/\s+/g, '_')}</p>
                                        </div>
                                        <Lock className="text-green-500/20 group-hover:text-green-500 transition-colors" size={16} />
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center gap-4 mb-12 border-b border-green-500/20 pb-4">
                                <Trophy className="text-green-500" size={24} />
                                <h2 className="text-3xl font-black uppercase tracking-[0.2em] leading-none">DATA_FETCH</h2>
                            </div>
                            <div className="space-y-4">
                                {ACHIEVEMENTS.map(ach => (
                                    <div key={ach.title} className="p-10 border border-green-500/10 bg-background transition-all hover:border-green-500 hover:bg-green-500/[0.05] relative overflow-hidden group">
                                        <h4 className="font-black text-lg group-hover:text-green-500 uppercase tracking-tighter">{ach.title}</h4>
                                        <p className="text-xs text-foreground/50 mt-6 leading-relaxed group-hover:text-foreground/80">{ach.detail}</p>
                                        <div className="mt-10 pt-6 border-t border-green-500/10 flex justify-between items-center">
                                            <div className="text-[10px] font-black text-green-500 uppercase">timestamp_v_{ach.date}</div>
                                            <Radio size={12} className="text-green-500 opacity-20 animate-pulse" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
};

export default AboutPage;
