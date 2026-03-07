"use client";

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Download, Terminal, Cpu, Award, Shield } from 'lucide-react';
import { useTheme } from 'next-themes';

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const navLinks = [
        { name: "ROOT_HOME", href: "/", icon: Terminal },
        { name: "SYSTEM_ABOUT", href: "/about", icon: Shield },
        { name: "TECH_SKILLS", href: "/about#skills", icon: Cpu },
        { name: "CODE_VAULT", href: "/projects", icon: Terminal },
        { name: "CERT_LOGS", href: "/certificates", icon: Award },
        { name: "COMM_LINK", href: "/contact", icon: Shield },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 z-50 w-full border-b border-green-500/30 bg-black/80 backdrop-blur-md"
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <Link href="/" className="flex items-center gap-2 group">
                    <Terminal className="text-green-500 group-hover:scale-110 transition-transform" />
                    <span className="text-xl font-bold tracking-tighter text-green-500 uppercase">
                        MITHLESH<span className="animate-pulse">_</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden space-x-6 lg:flex items-center font-mono">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xs font-medium text-green-500/60 uppercase transition-all hover:text-green-400 hover:drop-shadow-[0_0_8px_rgba(0,255,159,0.8)]"
                        >
                            [{link.name}]
                        </Link>
                    ))}

                    <div className="h-4 w-px bg-green-500/20 mx-2" />

                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="rounded p-2 text-green-500/50 transition-colors hover:bg-green-500/10 hover:text-green-500"
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    <a
                        href="/resume.pdf"
                        download
                        className="group flex items-center gap-2 border border-green-500/40 bg-green-500/5 px-4 py-1.5 text-[10px] font-bold text-green-500 transition-all hover:bg-green-500 hover:text-black"
                    >
                        <Download size={14} className="transition-transform group-hover:translate-x-1" /> EXPORT_RESUME
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-4 lg:hidden">
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="text-green-500/50"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-green-500">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-full left-0 w-full overflow-hidden border-b border-green-500/30 bg-black/95 p-6 lg:hidden"
                    >
                        <div className="flex flex-col gap-6 font-mono">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    onClick={() => setIsOpen(false)}
                                    href={link.href}
                                    className="flex items-center gap-4 text-sm font-medium text-green-500/70"
                                >
                                    <link.icon size={16} /> {link.name}
                                </Link>
                            ))}
                            <a
                                href="/resume.pdf"
                                download
                                className="mt-2 flex w-full items-center justify-center gap-2 border border-green-500 py-4 text-xs font-bold text-green-500"
                            >
                                <Download size={18} /> EXPORT_RESUME.pdf
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
