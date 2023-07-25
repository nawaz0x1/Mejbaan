import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/appLogo.png';

export default function Navbar() {
  return (
    <nav className="p-2 flex flex-row justify-between w-screen fixed z-50">
      <div className="flex gap-2">
        <Image src={Logo} height={'70'} alt="logo" />
        <span className="text-4xl font-semibold m-2 hidden sm:inline-flex typo1">
          Mejbaan
        </span>
      </div>
      <div className="flex p-2 md:pr-6">
        <div className="pr-1 md:pr-2">
          <Link href={'/login'}>
            <button className="bg-yellow-300 hover:bg-yellow-500 text-teal-700 p-3 text-2xl font-bold rounded-lg">
              Login
            </button>
          </Link>
        </div>
        <div className="pl-1 md:pl-2">
          <Link href={'/register'}>
            <button className="bg-yellow-300 hover:bg-yellow-500 text-teal-700 p-3 text-2xl font-bold rounded-lg">
              Register
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
