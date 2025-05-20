import { Linkedin, Mail } from 'lucide-react';
import { SocialLink } from './contact.types';

export const SOCIAL_LINKS: SocialLink[] = [
    // TODO: To be added
    // {
    //     name: 'GitHub',
    //     href: 'https://github.com/yourusername',
    //     Icon: Github,
    //     ariaLabel: 'GitHub profile',
    // },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/aliaksandr-nadzeika/',
        Icon: Linkedin,
        ariaLabel: 'LinkedIn profile',
    },
    {
        name: 'Email',
        href: 'mailto:nadeykoa.contact@gmail.com',
        Icon: Mail,
        ariaLabel: 'Send email',
    },
];
