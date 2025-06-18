'use client';

import { motion } from 'framer-motion';
import { AboutFactItemData } from './about-facts.types';

type AboutFactItemProps = {
    item: AboutFactItemData;
};

export const AboutFactItem = ({ item }: AboutFactItemProps) => {
    const { icon, text } = item;

    return (
        <motion.li
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative flex items-center gap-4 text-lg p-4 rounded-lg bg-card backdrop-blur-sm border border-border hover:bg-background/90 transition-all duration-200"
        >
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10">
                {icon}
            </div>
            <span className="relative z-10">{text}</span>
        </motion.li>
    );
};

type AboutFactsListProps = {
    items: AboutFactItemData[];
};

export const AboutFactsList = ({ items }: AboutFactsListProps) => (
    <ul className="space-y-4">
        {items.map((item, index) => (
            <AboutFactItem key={index} item={item} />
        ))}
    </ul>
);
