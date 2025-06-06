import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { MonitorSmartphone, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Toaster } from '@/components/ui';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
  // ads,
}: Readonly<{
  children: React.ReactNode;
  // ads: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="flex flex-col justify-between min-h-screen">
          <header className="fixed flex justify-between items-center shadow-xl bg-white px-20 w-full h-20 z-40">
            <div className="flex items-center gap-3">
              <MonitorSmartphone />
              <Link href="/" className="font-bold text-2xl">
                Digital Shop
              </Link>
            </div>
            <div>
              <ShoppingCart />
            </div>
          </header>
          <div className="px-20 mt-28">
            {children}
            <Toaster />
          </div>
          <div className="my-10 mx-auto flex justify-center">{/* {ads} */}</div>
          <footer className="bg-black w-full text-white flex items-center justify-center h-10">
            <p>&copy; 2025 JS with Ali. All rights reserved.</p>
          </footer>
        </main>
      </body>
    </html>
  );
}
