import type { Metadata } from 'next';
import { Hero } from '@/lib/components/home/hero/hero';
import { About } from '@/lib/components/home/about/about';
import { Skills } from '@/lib/components/home/skills/skills';
import { Contact } from '@/lib/components/home/contact/contact';

export const metadata: Metadata = {
    title: 'Alex | Software Developer',
    description:
        'Full-stack developer specializing in React, Next.js, and TypeScript. Creating elegant and efficient web solutions.',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Alex | Software Developer Portfolio',
        description:
            'Full-stack developer specializing in React, Next.js, and TypeScript. Creating elegant and efficient web solutions.',
        url: '/',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Alex - Software Developer Portfolio',
            },
        ],
    },
};

const HomePage = () => (
    <div className="scroll-smooth">
        <Hero />
        <About />
        <Skills />
        <Contact />
    </div>
);

export default HomePage;
