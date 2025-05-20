import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/lib/components/layout/header';
import { Footer } from '@/lib/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Portfolio Website',
    description: 'Software Developer Portfolio',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className + ' min-h-screen bg-background antialiased'}>
                <Header />
                <main className="pt-14 pb-24">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
