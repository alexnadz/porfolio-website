'use client';

import { SocialLink } from './contact.types';
import { motion } from 'framer-motion';

type SocialLinksListProps = {
    links: SocialLink[];
};

export const SocialLinksList = ({ links }: SocialLinksListProps) => (
    <motion.div className="flex flex-wrap justify-center gap-6">
        {links.map((link, index) => (
            <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: 'easeOut',
                }}
            >
                <SocialLinkItem link={link} />
            </motion.div>
        ))}
    </motion.div>
);

type SocialLinkItemProps = {
    link: SocialLink;
};

export const SocialLinkItem = ({ link }: SocialLinkItemProps) => (
    <motion.a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.ariaLabel}
        className="flex items-center gap-6 p-6 rounded-lg bg-card hover:bg-card/90 transition-colors"
        whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.98 }}
    >
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <link.Icon className="w-8 h-8 text-primary" />
        </div>
        <div className="flex-1">
            <span className="text-lg font-medium text-left w-full">{link.name}</span>
        </div>
    </motion.a>
);
