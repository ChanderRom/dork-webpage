'use client'

import { Navbar, Watch, Shows, Listen, Header } from '@/components';
import '/styles/global.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
});


export default function RootLayout({
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          <Header />
          <Listen />
          <Watch />
          <Shows />
        </main>
      </body>
    </html>
  );
}
