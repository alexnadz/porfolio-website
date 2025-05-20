import Link from 'next/link';
import { cn } from '@/lib/utils/class-name.utils';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { FooterLogo } from './footer-logo';

// TODO: Add social links
const SOCIAL_LINKS = [
    { href: '#1', Icon: SiGithub, ariaLabel: 'GitHub' },
    //  TODO: linkedin
];

export const Footer = () => (
    <footer className="bg-background/90 border-t border-border">
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
                <div className="flex gap-4">
                    <FooterLogo />
                </div>
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} AlexNadz. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
);
