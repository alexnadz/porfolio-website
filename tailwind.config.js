import { tailwindcssAnimate } from 'tailwindcss-animate';

module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './lib/**/*.{ts,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                // glow-inspired colors
                glow: {
                    blue: 'hsl(var(--glow-blue))',
                    pink: 'hsl(var(--glow-pink))',
                    purple: 'hsl(var(--glow-purple))',
                    glow: 'hsl(var(--glow-glow))',
                    dark: 'hsl(var(--glow-dark))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            transitionDelay: {
                1000: '1000ms',
                2000: '2000ms',
                3000: '3000ms',
            },
            animationDelay: {
                1000: '1000ms',
                2000: '2000ms',
                3000: '3000ms',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                glow: {
                    '0%, 100%': { opacity: 0.8 },
                    '50%': { opacity: 1 },
                },
                'orb-pulse': {
                    '0%': { opacity: 0.2, transform: 'scale(0.85)' },
                    '50%': { opacity: 0.6, transform: 'scale(1.15)' },
                    '100%': { opacity: 0.2, transform: 'scale(0.85)' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                gradient: 'gradient 15s ease infinite',
                glow: 'glow 2s ease-in-out infinite',
                'orb-pulse': 'orb-pulse 6s ease-in-out infinite',
            },
            // Custom animation delay utilities
            animationDelay: {
                1000: '1s',
                2000: '2s',
                3000: '3s',
            },
        },
    },
    plugins: [tailwindcssAnimate],
};
