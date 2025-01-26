'use client'

import '/styles/global.css';
import { Navbar } from '../components/Navbar';
import { Roboto } from 'next/font/google';
import styled from 'styled-components';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
