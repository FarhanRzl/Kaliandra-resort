// app/layout.tsx  ← NO "use client"
import React from 'react';
import '@/app/styles/globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import ClientLayout from './ClientLayout';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}