import './globals.css';
import { Inter } from 'next/font/google';
import { UserContextProvider } from '@/context/userContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mejbaan',
  description: 'Share surplus food with those in need!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-white bg-mejbaan">
        <UserContextProvider>{children}</UserContextProvider>
      </body>
    </html>
  );
}
