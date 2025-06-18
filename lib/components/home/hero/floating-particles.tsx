'use client';

import { motion } from 'framer-motion';

export const FloatingParticles = () => (
    <div className="absolute inset-0 opacity-70 dark:opacity-0 pointer-events-none">
        {/* Small particles */}
        {[...Array(40)].map((_, i) => (
            <motion.div
                key={`small-${i}`}
                suppressHydrationWarning
                className="absolute w-2 h-2 bg-gray-300 rounded-full shadow shadow-gray-300/50 blur-[0.5px]"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                }}
                animate={{
                    y: [0, -20, 0],
                    opacity: [0.4, 0.9, 0.4],
                }}
                transition={{
                    duration: 3 + Math.random() * 5,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                }}
            />
        ))}

        {/* Medium particles */}
        {[...Array(15)].map((_, i) => (
            <motion.div
                key={`medium-${i}`}
                suppressHydrationWarning
                className="absolute w-3 h-3 bg-white rounded-full shadow-md shadow-white/60 blur-[1px]"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                }}
                animate={{
                    y: [0, -30, 0],
                    opacity: [0.5, 0.9, 0.5],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 5 + Math.random() * 7,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                }}
            />
        ))}

        {/* Large particles */}
        {[...Array(8)].map((_, i) => (
            <motion.div
                key={`large-${i}`}
                suppressHydrationWarning
                className="absolute w-4 h-4 bg-gray-600 rounded-full shadow-lg shadow-gray-500/70 blur-[1.5px]"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                }}
                animate={{
                    y: [0, -40, 0],
                    x: [0, Math.random() > 0.5 ? 10 : -10, 0],
                    opacity: [0.6, 1, 0.6],
                    scale: [1, 1.5, 1],
                }}
                transition={{
                    duration: 8 + Math.random() * 10,
                    repeat: Infinity,
                    delay: Math.random() * 4,
                }}
            />
        ))}

        {/* Extra large glowing particles */}
        {[...Array(5)].map((_, i) => (
            <motion.div
                key={`xlarge-${i}`}
                suppressHydrationWarning
                className="absolute w-8 h-8 bg-gray-200 rounded-full shadow-xl shadow-gray-200/70 blur-[2px]"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                }}
                animate={{
                    y: [0, -50, 0],
                    x: [0, Math.random() > 0.5 ? 20 : -20, 0],
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.8, 1],
                }}
                transition={{
                    duration: 12 + Math.random() * 8,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                }}
            />
        ))}

        {/* Special highlight particles */}
        {[...Array(3)].map((_, i) => (
            <motion.div
                key={`highlight-${i}`}
                suppressHydrationWarning
                className="absolute w-10 h-10 bg-black rounded-full shadow-2xl shadow-black/40 blur-[3px]"
                style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                }}
                animate={{
                    y: [0, -30, 0],
                    x: [0, Math.random() > 0.5 ? 15 : -15, 0],
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.5, 1],
                }}
                transition={{
                    duration: 15 + Math.random() * 10,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                }}
            />
        ))}
    </div>
);
