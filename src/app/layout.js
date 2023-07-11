import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mejbaan',
  description: 'A Food Sharing Platform',
};

export default function RootLayout({ children }) {
  return <html lang="en">{children}</html>;
}
