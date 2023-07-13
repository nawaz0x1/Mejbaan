import Navbar from '@/components/Navbar';

export default function LandingPageLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
