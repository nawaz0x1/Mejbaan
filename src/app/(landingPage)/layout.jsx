import Navbar from '@/components/Navbar';

export default function LandingPageLayout({ children }) {
  return (
    <body className="bg-mebjaan text-white">
      <Navbar />
      {children}
    </body>
  );
}
