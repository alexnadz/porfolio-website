import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { SocialLink } from './contact.types';

export const SOCIAL_LINKS: SocialLink[] = [
    {
        name: 'GitHub',
        href: 'https://github.com/yourusername',
        Icon: Github,
        ariaLabel: 'GitHub profile',
    },
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com/in/yourusername',
        Icon: Linkedin,
        ariaLabel: 'LinkedIn profile',
    },
    {
        name: 'Email',
        href: 'mailto:your.email@example.com',
        Icon: Mail,
        ariaLabel: 'Send email',
    },
];
