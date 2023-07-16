import Image from 'next/image';
import Logo from '@/assets/appLogo.png';

export default function LogoComponent() {
  return (
    <div className="hidden sm:inline-flex aspect-square h-14">
      <Image src={Logo} height={'70'} alt="logo" />
    </div>
  );
}
