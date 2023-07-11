import Navbar from '@/components/Navbar';

export default function LandingPageLayout({ children }) {
  return (
    <body className="text-white">
      <Navbar />
      {children}
    </body>
  );
}
