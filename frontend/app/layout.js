//
// ROOT LAYOUT

import '@/styles/reset.css';
import '@/styles/defaults.css';
import '@/styles/colors.css';

import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-opensans',
  display: 'swap',
});

export const metadata = {
  metadataBase: process.env.VERCEL_URL ? new URL(`https://${process.env.VERCEL_URL}`) : new URL(`http://0.0.0.0:${process.env.PORT || 3000}`),
  title: 'MIMA | Museu da Mulher',
  description: 'O MIMA é o primeiro Museu da Mulher português...',
};

export default function RootLayout({ children }) {
  return (
    <html className={openSans.variable}>
      <body>{children}</body>
    </html>
  );
}
