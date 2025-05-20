'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export const HeroContent = () => (
    <div className="text-center">
        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
        >
            <span className="block text-primary">Hi there!</span>
            <span className="block text-foreground">I'm a Software Developer</span>
        </motion.h1>
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-foreground mb-8"
        >
            Fast, responsive, and tailored to your needs.
        </motion.p>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 justify-center"
        >
            <Link href="#contact">
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all cursor-pointer">
                    Get in Touch
                </button>
            </Link>
            {/* TODO: Add projects section */}
            {/* <button className="px-6 py-3 border border-border rounded-lg hover:bg-muted/50 transition-all">
                View Projects
            </button> */}
        </motion.div>
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-background"
        />
    </div>
);
