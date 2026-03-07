"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import ScientificBackground from '@/components/ScientificBackground';
import Footer from '@/components/Footer';
import { CERTIFICATES } from '@/lib/data';
import { Award, Upload, Lock, Terminal, Shield, FileText, CheckCircle } from 'lucide-react';

const CertificatesPage = () => {
    const [certificates, setCertificates] = useState(CERTIFICATES);
    const [newCert, setNewCert] = useState({ title: '', issuer: '', date: '' });
    const [showUploadForm, setShowUploadForm] = useState(false);

    const handleAddCertificate = (e: React.FormEvent) => {
        e.preventDefault();
        if (newCert.title && newCert.issuer && newCert.date) {
            const newCertificate = { 
                id: certificates.length + 1, 
                title: newCert.title, 
                issuer: newCert.issuer, 
                date: newCert.date 
            };
            setCertificates([...certificates, newCertificate]);
            setNewCert({ title: '', issuer: '', date: '' });
            setShowUploadForm(false);
        }
    };

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
                    <div className="mb-4 text-[10px] font-black uppercase tracking-[1em] text-green-500/30">{`> ACCESSING_CERTIFICATE_VAULT...`}</div>
                    <h1 className="text-6xl font-black uppercase tracking-tighter md:text-9xl">
                        CERT_<span className="text-green-500/20">LOGS</span>_
                    </h1>
                    <p className="mt-8 text-sm font-medium leading-loose opacity-60 border-l border-green-500/30 pl-6 py-4">
                        {`> _SECURE_CERTIFICATE_REPOSITORY`} <br />
                        {`> TOTAL_CERTIFICATES: ${certificates.length}`} <br />
                        {`> ACCESS_LEVEL: AUTHORIZED`}
                    </p>
                </motion.div>

                {/* Upload Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-12"
                >
                    <button
                        onClick={() => setShowUploadForm(!showUploadForm)}
                        className="group flex items-center gap-3 border border-green-500 bg-green-500/10 px-8 py-4 text-xs font-bold text-green-500 transition-all hover:bg-green-500 hover:text-black"
                    >
                        <Upload size={18} className="transition-transform group-hover:scale-110" />
                        {showUploadForm ? 'CANCEL_UPLOAD' : 'ADD_CERTIFICATE'}
                    </button>
                </motion.div>

                {/* Upload Form */}
                <AnimatePresence>
                    {showUploadForm && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-8 overflow-hidden"
                        >
                            <form onSubmit={handleAddCertificate} className="max-w-2xl border border-green-500/30 bg-black/50 p-8">
                                <div className="mb-6 text-xs font-black uppercase tracking-widest text-green-500">
                                    <Terminal size={14} className="inline mr-2" />
                                    NEW_CERTIFICATE_ENTRY
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[10px] font-bold uppercase text-green-500/60 mb-2">Certificate Title</label>
                                        <input
                                            type="text"
                                            value={newCert.title}
                                            onChange={(e) => setNewCert({ ...newCert, title: e.target.value })}
                                            placeholder="e.g., AWS Solutions Architect"
                                            className="w-full bg-black/50 border border-green-500/20 px-4 py-3 text-sm text-green-500 placeholder-green-500/20 focus:border-green-500 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold uppercase text-green-500/60 mb-2">Issuer</label>
                                        <input
                                            type="text"
                                            value={newCert.issuer}
                                            onChange={(e) => setNewCert({ ...newCert, issuer: e.target.value })}
                                            placeholder="e.g., Amazon Web Services"
                                            className="w-full bg-black/50 border border-green-500/20 px-4 py-3 text-sm text-green-500 placeholder-green-500/20 focus:border-green-500 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold uppercase text-green-500/60 mb-2">Date</label>
                                        <input
                                            type="text"
                                            value={newCert.date}
                                            onChange={(e) => setNewCert({ ...newCert, date: e.target.value })}
                                            placeholder="e.g., Jan 2024"
                                            className="w-full bg-black/50 border border-green-500/20 px-4 py-3 text-sm text-green-500 placeholder-green-500/20 focus:border-green-500 focus:outline-none"
                                        />
                                    </div>
                                    <div className="flex items-end">
                                        <button
                                            type="submit"
                                            className="w-full group flex items-center justify-center gap-2 border border-green-500 bg-green-500/10 px-6 py-3 text-xs font-bold text-green-500 transition-all hover:bg-green-500 hover:text-black"
                                        >
                                            <CheckCircle size={16} />
                                            SAVE_CERTIFICATE
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Certificates Grid */}
                <div className="mt-20">
                    <div className="flex items-center gap-4 mb-12 border-b border-green-500/20 pb-4">
                        <Award className="text-green-500" size={32} />
                        <h2 className="text-3xl font-black uppercase tracking-[0.2em] leading-none">CERTIFICATE_RECORDS</h2>
                        <div className="ml-auto text-xs font-black text-green-500">
                            TOTAL: {certificates.length}
                        </div>
                    </div>

                    {certificates.length === 0 ? (
                        <div className="text-center py-20 border border-green-500/10">
                            <FileText size={48} className="mx-auto text-green-500/20 mb-4" />
                            <p className="text-green-500/40 text-sm">NO_CERTIFICATES_FOUND</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {certificates.map((cert, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group p-8 border border-green-500/10 bg-background transition-all hover:border-green-500 hover:shadow-[0_0_30px_rgba(0,255,0,0.1)] relative overflow-hidden"
                                >
                                    {/* Decorative elements */}
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-green-500/5 to-transparent" />
                                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-green-500/20 group-hover:bg-green-500 transition-colors" />
                                    
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="p-3 border border-green-500/20 bg-green-500/5">
                                            <Award className="text-green-500" size={24} />
                                        </div>
                                        <Lock className="text-green-500/20 group-hover:text-green-500 transition-colors" size={16} />
                                    </div>

                                    <h3 className="text-lg font-black uppercase mb-3 group-hover:text-green-500 transition-colors">
                                        {cert.title}
                                    </h3>
                                    
                                    <p className="text-[10px] font-medium text-green-500/40 uppercase mb-4">
                                        issuer: {cert.issuer}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-green-500/10">
                                        <div className="text-[10px] font-black text-green-500">
                                            <Terminal size={10} className="inline mr-1" />
                                            {cert.date}
                                        </div>
                                        <Shield size={14} className="text-green-500/20 group-hover:text-green-500" />
                                    </div>

                                    {/* Hover effect */}
                                    <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {[
                        { label: 'TOTAL_CERTS', value: certificates.length },
                        { label: 'VERIFIED', value: certificates.length },
                        { label: 'THIS_YEAR', value: certificates.filter(c => c.date.includes('2024')).length },
                        { label: 'ACCESS_LEVEL', value: 'L3' },
                    ].map((stat, idx) => (
                        <div key={idx} className="p-6 border border-green-500/10 bg-green-500/[0.02]">
                            <div className="text-[10px] font-black uppercase text-green-500/40 mb-2">{stat.label}</div>
                            <div className="text-2xl font-black text-green-500">{stat.value}</div>
                        </div>
                    ))}
                </motion.div>
            </section>

            <Footer />
        </main>
    );
};

export default CertificatesPage;

