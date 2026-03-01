"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import ScientificBackground from '@/components/ScientificBackground';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { PERSONAL_INFO } from '@/lib/data';
import { Mail, MapPin, Linkedin, Github, Globe, Terminal, Shield } from 'lucide-react';

const ContactPage = () => {
    return (
        <main className="relative min-h-screen font-mono text-foreground bg-background transition-colors duration-500">
            <ScientificBackground />
            <Navbar />

            <section className="container mx-auto px-6 pt-32 pb-20">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">

                    {/* Contact Info & Hacker Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col space-y-12"
                    >
                        <div>
                            <div className="mb-4 text-[10px] uppercase font-bold tracking-[0.4em] text-green-500/40">{`> COMMS_STATUS: READY`}</div>
                            <h1 className="text-6xl font-black uppercase tracking-tighter md:text-8xl mb-6">
                                SIGNAL_<br /><span className="text-green-500/30">M_FORCE</span>_
                            </h1>
                            <p className="text-xs font-medium text-foreground/60 max-w-sm mb-12">
                                {`> SEARCHING_CHANNELS...`} <br />
                                {`> ESTABLISHING_SECURE_PROTOCOLS.`} <br />
                                {`> READY_FOR_TRANSFER.`}
                            </p>
                        </div>

                        {/* Hacker Styled Google Map */}
                        <div className="relative group overflow-hidden border border-green-500/30 bg-black/60 shadow-[0_0_20px_var(--hacker-glow)] h-80 rounded-3xl">
                            <div className="absolute inset-x-0 top-0 h-10 border-b border-green-500/20 bg-green-500/5 px-6 flex items-center justify-between text-[10px] font-black uppercase z-10 text-green-500">
                                <span className="flex items-center gap-2"><Globe size={12} className="animate-spin" /> MAPPING_COORDS</span>
                                <div className="flex gap-2">
                                    <div className="h-2 w-2 rounded-full bg-red-500/50" />
                                    <div className="h-2 w-2 rounded-full bg-green-500/80" />
                                </div>
                            </div>

                            {/* Styled Map (Filter to make it hacker themed) */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113840.45781611382!2d85.12328114999999!3d25.5940947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58440026f8ed%3A0xe549bc335a90e3df!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1713364234567!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'invert(90%) hue-rotate(100deg) brightness(0.9) contrast(1.2) grayscale(0.5)' }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="pt-10 transition-all opacity-80 hover:opacity-100"
                            />

                            {/* Map Overlays for aesthetic */}
                            <div className="absolute inset-x-0 bottom-0 p-4 bg-black/40 backdrop-blur-sm border-t border-green-500/10 pointer-events-none">
                                <div className="text-[10px] font-bold text-green-500 flex justify-between uppercase">
                                    <span>LOC: Patna_Bihar_SYST</span>
                                    <span className="animate-pulse flex items-center gap-1"><Shield size={8} /> auth:0x00A1</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 border border-green-500/10 p-4 transition-all hover:bg-green-500/5 hover:border-green-500">
                                <Mail size={16} className="text-green-500" />
                                <span className="text-[10px] font-bold uppercase">{PERSONAL_INFO.email}</span>
                            </a>
                            <div className="flex items-center gap-4 border border-green-500/10 p-4">
                                <MapPin size={16} className="text-green-500" />
                                <span className="text-[10px] font-bold uppercase">{PERSONAL_INFO.location}</span>
                            </div>
                        </div>

                    </motion.div>

                    {/* Contact Form Terminal */}
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-full max-w-2xl border border-green-500/30 bg-background shadow-[0_0_50px_rgba(0,255,0,0.05)] relative group transition-all duration-700 hover:border-green-500 lg:p-4 rounded-3xl">
                            <div className="flex items-center justify-between border-b border-green-500/20 bg-green-500/5 px-6 py-4">
                                <div className="flex gap-2">
                                    <div className="h-3 w-3 rounded-full bg-red-500/40" />
                                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="text-[10px] tracking-widest uppercase font-black text-green-500 flex items-center gap-2">
                                    <Terminal size={14} /> MITHLESH_V3_SIGNAL_TRANS_CHANNEL
                                </div>
                            </div>
                            <div className="p-8 lg:p-12">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ContactPage;
