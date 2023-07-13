import Navbar from '@/components/Navbar';
import RedirectToDashboard from '@/components/RedirectToDashboard';

export default function LandingPageLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <RedirectToDashboard />
    </>
  );
}
