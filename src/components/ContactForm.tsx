"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2, Terminal, Shield, Lock } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [locationData, setLocationData] = useState<any>(null);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [responseMsg, setResponseMsg] = useState('');

    // Track location on component mount
    React.useEffect(() => {
        fetch('https://ipapi.co/json/')
            .then(res => res.json())
            .then(data => setLocationData(data))
            .catch(err => console.error('Location tracking failed', err));
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const payload = {
                ...formData,
                location: locationData ? `${locationData.city}, ${locationData.country_name} (IP: ${locationData.ip})` : 'Unknown'
            };

            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus('success');
                setResponseMsg("0x00_SUCCESS: DATA_STORED_IN_QUANTUM_DRIVE_");
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
                setResponseMsg(`0x01_ERROR: ${data.error || 'TRANS_FAILURE'}_`);
            }
        } catch (error) {
            setStatus('error');
            setResponseMsg('0x03_BRIDGE_COLLAPSE: CONNECTION_LOST_');
        }
    };

    return (
        <div className="relative w-full max-w-2xl font-mono text-green-500 overflow-hidden group">
            <div className="flex flex-col gap-6">
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="space-y-4">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-green-500/40">{`> ENTRY_NODE_NAME`}</label>
                            <input
                                required
                                type="text"
                                placeholder="root@mithlesh:~$"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full border-b border-green-500/20 bg-transparent px-0 py-2 text-sm text-green-500 placeholder:text-green-500/20 outline-none transition-all focus:border-green-500 focus:bg-white/5"
                            />
                        </div>
                        <div className="space-y-4">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-green-500/40">{`> SIGNAL_DEST`}</label>
                            <input
                                required
                                type="email"
                                placeholder="user@domain.v3"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full border-b border-green-500/20 bg-transparent px-0 py-2 text-sm text-green-500 placeholder:text-green-500/20 outline-none transition-all focus:border-green-500 focus:bg-white/5"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-green-500/40">{`> DATA_PAYLOAD_CONTENT`}</label>
                        <textarea
                            required
                            rows={4}
                            placeholder="System will record current keystrokes..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full border-b border-green-500/20 bg-transparent px-0 py-2 text-sm text-green-500 placeholder:text-green-500/20 outline-none transition-all focus:border-green-500 focus:bg-white/5 resize-none"
                        />
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        {/* Location Badge */}
                        {locationData && (
                            <div className="flex items-center gap-2 text-[8px] font-bold text-green-500/40 uppercase tracking-widest bg-green-500/5 px-3 py-1.5 border border-green-500/10">
                                <Terminal size={10} className="animate-pulse text-green-500" />
                                LINK_ESTABLISHED: {locationData.city}, {locationData.country_code}
                            </div>
                        )}

                        <button
                            disabled={status === 'loading'}
                            className="group relative flex items-center justify-center gap-3 overflow-hidden border border-green-500 bg-green-500/10 px-10 py-4 text-xs font-black text-green-500 transition-all hover:bg-green-500 hover:text-black hover:shadow-[0_0_20px_rgba(0,255,0,0.4)]"
                        >
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-green-500 opacity-50 transition-all group-hover:h-full group-hover:opacity-100 -z-10" />
                            {status === 'loading' ? (
                                <Loader2 className="h-5 w-5 animate-spin" />
                            ) : (
                                <>
                                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    TRANSMIT_SIGNAL
                                </>
                            )}
                        </button>
                    </div>
                </form>

                <AnimatePresence>
                    {status === 'success' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="mt-8 flex items-center gap-3 border border-green-500 bg-green-500/10 p-4 text-[10px] font-bold text-green-500 uppercase tracking-[0.2em] shadow-[inset_0_0_10px_rgba(34,197,94,0.1)]"
                        >
                            <CheckCircle className="h-5 w-5" />
                            <div className="flex flex-col gap-1">
                                <div>{responseMsg}</div>
                                <div className="opacity-40 text-[8px]">LOG_RECORD: {new Date().toISOString()}</div>
                            </div>
                        </motion.div>
                    )}

                    {status === 'error' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="mt-8 flex items-center gap-3 border border-red-500 bg-red-500/10 p-4 text-[10px] font-bold text-red-500 uppercase tracking-[0.2em]"
                        >
                            <AlertCircle className="h-5 w-5" />
                            <span>{responseMsg}</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ContactForm;
