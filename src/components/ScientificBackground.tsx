"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface Particle {
    x: number;
    y: number;
    opacity: number;
    duration: number;
    size: number;
    delay: number;
}

const ScientificBackground = () => {
    const [mounted, setMounted] = React.useState(false);
    const [particles, setParticles] = React.useState<Particle[]>([]);

    React.useEffect(() => {
        setMounted(true);
        const newParticles = Array.from({ length: 20 }).map(() => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: Math.random() * 0.3 + 0.1,
            duration: Math.random() * 3 + 2,
            size: Math.random() * 2 + 1,
            delay: Math.random() * 5,
        }));
        setParticles(newParticles);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 -z-10 bg-black overflow-hidden pointer-events-none">
            {/* Hacker Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,0,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

            {/* Subtle Matrix Column Glow */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_20%,rgba(0,255,0,0.02)_50%,transparent_80%)]" />

            {/* Glowing Orb in Center */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.05)_0%,transparent_70%)]" />

            {/* Scrolling Code-like particles */}
            {particles.map((p, i) => (
                <motion.div
                    key={i}
                    initial={{
                        x: p.x + "%",
                        y: "-10%",
                    }}
                    animate={{
                        y: "110%",
                        opacity: [0, p.opacity, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: p.delay
                    }}
                    style={{ width: p.size, height: p.size * 20 }}
                    className="absolute bg-green-500/20 blur-[1px]"
                />
            ))}

            {/* Radar / Circular Interface */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="relative h-[800px] w-[800px] rounded-full border border-green-500/10"
                >
                    <div className="absolute inset-[10%] rounded-full border border-green-500/5 border-dashed" />
                    <div className="absolute inset-[25%] rounded-full border border-green-500/10" />
                    <div className="absolute inset-[40%] rounded-full border border-green-500/5 border-dashed" />
                </motion.div>
            </div>

            {/* Corner Decorative Elements */}
            <div className="absolute top-10 left-10 h-32 w-32 border-t border-l border-green-500/10" />
            <div className="absolute bottom-10 right-10 h-32 w-32 border-b border-r border-green-500/10" />
        </div>
    );
};

export default ScientificBackground;
