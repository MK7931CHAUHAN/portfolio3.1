"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
            {/* Mesh Gradient Effect */}
            <div
                className="absolute inset-0 opacity-40 blur-[100px]"
                style={{
                    background: `
            radial-gradient(circle at 20% 20%, #4f46e5 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, #7c3aed 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, #db2777 0%, transparent 50%)
          `
                }}
            />

            {/* Animated Subtle Orbs */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl"
            />

            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 100, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"
            />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
    );
};

export default Background;
