import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/lib/layout/header';
import { Footer } from '@/lib/layout/footer';
import { ThemeProvider } from 'next-themes';

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
