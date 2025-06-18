'use client';

import { cn } from '@/lib/utils/class-name.utils';
import { HeroContent } from './hero-content';
import { DarkThemeOrbs } from './dark-theme-orbs';
import { LightThemeEffects } from './light-theme-effects';
import { HexagonPattern } from './hexagon-pattern';

export const Hero = () => (
    <section
        id="hero"
        className={cn(
            'relative min-h-screen flex items-center justify-center overflow-hidden',
            'bg-gradient-to-br from-blue-50 via-indigo-50 to-background',
            'dark:bg-gradient-to-br dark:from-[hsl(var(--glow-dark))] dark:via-[hsl(var(--glow-purple))/10] dark:to-background',
            'before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/30 before:via-primary/15 before:to-background/10 before:pointer-events-none before:animate-gradient',
        )}
    >
        <DarkThemeOrbs />
        <LightThemeEffects />
        <HexagonPattern />
        <div className="container relative mx-auto px-4 py-16 z-10">
            <HeroContent />
        </div>
    </section>
);
