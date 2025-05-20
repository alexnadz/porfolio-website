'use client';

import { motion } from 'framer-motion';
import { AboutDescription } from './about-description';
import Image from 'next/image';

export const AboutContent = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <AboutDescription />
        </motion.div>
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="relative w-full max-w-[400px] mx-auto">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/10 to-background/5" />
                <Image
                    src="/profile-image.jpg"
                    alt="Profile picture"
                    width={400}
                    height={400}
                    className="rounded-lg object-cover"
                    priority
                />
            </div>
        </motion.div>
    </motion.div>
);
