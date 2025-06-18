import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/lib/layout/header';
import { Footer } from '@/lib/layout/footer';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Alex | Software Developer Portfolio',
    description: 'Experienced software developer specializing in modern web technologies, creating elegant and efficient solutions for complex problems.',
    keywords: ['software developer', 'web development', 'frontend developer', 'React', 'Next.js', 'TypeScript'],
    authors: [{ name: 'Alex', url: 'https://github.com/alexnadz' }],
    creator: 'Alex',
    publisher: 'Alex',
    metadataBase: new URL('https://alexnadz-portfolio.vercel.app'),
    alternates: {
        canonical: '/',
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://alexnadz-portfolio.vercel.app',
        title: 'Alex | Software Developer Portfolio',
        description: 'Experienced software developer specializing in modern web technologies, creating elegant and efficient solutions for complex problems.',
        siteName: 'Alex Portfolio',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Alex - Software Developer Portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Alex | Software Developer Portfolio',
        description: 'Experienced software developer specializing in modern web technologies, creating elegant and efficient solutions for complex problems.',
        images: ['/og-image.jpg'],
        creator: '@alexnadz',
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
    },
    themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#0f0f1a' }],
    manifest: '/site.webmanifest',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className + 'antialiased'}>
                <div className="min-h-screen bg-background">
                    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                        <Header />
                        <main className="pt-14 pb-24">{children}</main>
                        <Footer />
                        <Analytics />
                    </ThemeProvider>
                </div>
            </body>
        </html>
    );
}
