'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export const HeroContent = () => (
    <div className="text-center relative">
        <div className="absolute -inset-4 bg-opacity-30 blur-xl bg-gradient-to-r from-[hsl(var(--glow-pink))/20] via-[hsl(var(--glow-purple))/10] to-[hsl(var(--glow-blue))/20] animate-pulse rounded-xl opacity-0 dark:opacity-100"></div>

        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 relative z-10"
        >
            <span className="block dark:glow-text text-primary">Hi there! I'm Alex.</span>
            <span className="block text-foreground">Your Software Developer.</span>
        </motion.h1>

        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-foreground mb-8 relative z-10"
        >
            Fast, responsive, and tailored to your needs.
        </motion.p>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 justify-center relative z-10"
        >
            <Link href="#contact">
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all cursor-pointer dark:glow-glow dark:hover:bg-[hsl(var(--glow-pink))]">
                    Get in Touch
                </button>
            </Link>
            {/* TODO: Add projects section */}
            {/* <button className="px-6 py-3 border border-border rounded-lg hover:bg-muted/50 transition-all">
                View Projects
            </button> */}
        </motion.div>

        {/* <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-background dark:from-[hsl(var(--glow-pink))] dark:via-[hsl(var(--glow-purple))] dark:to-background"
        /> */}
    </div>
);
