"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import ScientificBackground from '@/components/ScientificBackground';
import Footer from '@/components/Footer';
import { ProjectGrid } from '@/components/ProjectSection';
import { PROJECTS, PERSONAL_INFO, SKILLS } from '@/lib/data';
import { ChevronRight, Github, Linkedin, Mail, Download, Shield, Cpu, ExternalLink, Terminal } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <main className="relative min-h-screen text-foreground font-mono bg-background transition-colors duration-500 overflow-x-hidden">
      <ScientificBackground />
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative flex min-h-screen items-center justify-center px-6 pt-20 overflow-hidden">
        <div className="container mx-auto grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="z-10"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 border border-green-500/20 bg-green-500/5 px-4 py-1.5 text-xs font-bold leading-tight uppercase tracking-widest text-green-500 transition-all hover:bg-green-500 hover:text-black">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              SYSTEM_LIVE_V1.0.4 [Uptime: 99.9%]
            </motion.div>

            <motion.h1 variants={itemVariants} className="mt-8 text-5xl font-black tracking-tighter uppercase md:text-7xl lg:text-9xl leading-none">
              MITHLESH<br />
              <span className="text-green-500 drop-shadow-[0_0_15px_var(--hacker-glow)] glitch-text">SYST_KUMAR</span>_
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-8 max-w-xl text-xs font-medium leading-loose opacity-70">
              {`> _BOOT... SUCCESS`} <br />
              {`> MISSION: DEVELOPING_HIGH_CONCURRENCY_UI_ARCHITECTURES.`} <br />
              {`> CORE_SKILLS: Java // JS // AI_AGENT_TRAINING // CRYPTO_SEC.`}
            </motion.p>

            <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center gap-6">
              <Link href="/contact" className="group flex items-center gap-2 border border-green-500 bg-green-500/10 px-8 py-5 text-[10px] font-bold text-green-500 transition-all hover:bg-green-500 hover:text-black hover:shadow-[0_0_20px_var(--hacker-glow)]">
                ESTABLISH_COMM_LINK <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a href={PERSONAL_INFO.resumeUrl} download className="flex items-center gap-2 border border-green-500/20 px-8 py-5 text-[10px] font-bold text-foreground/60 hover:border-green-500 hover:text-green-500 transition-all">
                <Download size={14} /> EXPORT_IDENT_TOKEN.pdf
              </a>
            </motion.div>

            {/* Terminal Output snippet */}
            <motion.div variants={itemVariants} className="mt-12 hidden lg:block max-w-sm">
              <div className="text-[10px] text-green-500/30 flex justify-between uppercase mb-2">
                <span>node_activity</span>
                <span>0x7631_M_FORCE</span>
              </div>
              <div className="space-y-1 font-mono text-[10px] opacity-40 leading-none">
                <div>[OK] INITIALIZING_CORE_COMPONENTS...</div>
                <div>[OK] ATOMIC_CSS_LOADED_SECURELY...</div>
                <div>[OK] SYNCING_VIRTUAL_DOM_V8...</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visuals - RADIAL HUD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative flex items-center justify-center p-8"
          >
            {/* Cyber HUD Circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="h-[400px] w-[400px] rounded-full border border-green-500/10 md:h-[600px] md:w-[600px]"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute h-[350px] w-[350px] rounded-full border border-dashed border-green-500/5 md:h-[550px] md:w-[550px]"
              />
            </div>

            <div className="relative group p-4 border border-green-500/30 rounded-full bg-background transition-all hover:scale-105 hover:border-green-500 duration-500">
              <div className="relative h-72 w-72 md:h-[450px] md:w-[450px] overflow-hidden rounded-full border-4 border-background bg-zinc-900 shadow-[0_0_50px_rgba(0,255,0,0.1)]">
                <img
                  src="/avatar.png"
                  alt="Mithlesh Kumar Profile"
                  className="h-full w-full object-cover grayscale brightness-90 contrast-125 transition-all duration-700 hover:grayscale-0"
                />

                {/* HUD Elements over image */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] w-full bg-green-500/20 z-10 animate-pulse" />
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 h-full w-[1px] bg-green-500/20 z-10" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-black/60 px-4 py-2 border border-green-500 text-[10px] font-bold tracking-widest text-green-500 animate-bounce">0x76_CORE_READY</div>
                </div>
              </div>

              {/* Secure Floating Tags */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 flex flex-col items-center justify-center h-24 w-24 md:h-32 md:w-32 rounded-full border border-green-500 bg-background font-bold text-green-500 shadow-xl"
              >
                <Shield size={24} className="animate-pulse" />
                <span className="text-[8px] md:text-[10px] mt-2 tracking-tighter">SEC_V3_0x00A</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Skills Showcase Section */}
      <section className="py-24 border-y border-green-500/10 bg-green-500/[0.01] px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-16 border-b border-green-500/20 pb-4">
            <Cpu className="text-green-500" />
            <h2 className="text-2xl font-black uppercase tracking-[0.3em]">RESOURCE_HARDWARE</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
            {SKILLS.technologies.slice(0, 12).map((skill, idx) => (
              <div key={skill} className="group p-8 border border-green-500/10 bg-background transition-all hover:border-green-500 hover:shadow-[0_0_15px_rgba(0,255,0,0.1)]">
                <div className="text-[8px] text-green-500/20 mb-4 font-black">NODE_0x0{idx}</div>
                <div className="text-xs font-black uppercase tracking-widest transition-colors group-hover:text-green-500">{skill}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section id="projects" className="py-32 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <div className="flex items-center gap-2 text-green-500/30 uppercase tracking-[0.5em] text-[10px] font-bold mb-4">{`> ACCESSING_ENCRYPTED_ARCHIVE...`}</div>
              <h2 className="text-5xl font-black uppercase md:text-7xl leading-none">CODE_CORE</h2>
            </div>
            <Link href="/projects" className="group flex items-center gap-2 text-green-500 font-black hover:drop-shadow-[0_0_10px_rgba(0,255,0,0.5)] transition-all uppercase text-xs">
              DECRYPT_FULL_REPO_PHASE_07 <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <ProjectGrid projects={PROJECTS.slice(0, 3)} itemsPerPage={3} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
