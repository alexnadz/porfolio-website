'use client';

import { motion } from 'framer-motion';

export const LightThemeOrbs = () => (
    <>
        <div className="absolute inset-0 opacity-0 dark:opacity-0 md:opacity-10 bg-gradient-to-r from-blue-200 to-indigo-200 pointer-events-none"></div>

        <motion.div
            className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full opacity-0 dark:opacity-0 md:opacity-20 filter blur-xl pointer-events-none"
            animate={{
                y: [0, -20, 0],
                scale: [1, 1.05, 1],
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
        />

        <motion.div
            className="absolute bottom-40 right-20 w-80 h-80 bg-indigo-200 rounded-full opacity-0 dark:opacity-0 md:opacity-20 filter blur-xl pointer-events-none"
            animate={{
                y: [0, 20, 0],
                scale: [1, 1.1, 1],
            }}
            transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
            }}
        />

        <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100 rounded-full opacity-0 dark:opacity-0 md:opacity-15 filter blur-xl pointer-events-none"
            animate={{
                scale: [1, 1.2, 1],
            }}
            transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2,
            }}
        />
    </>
);
