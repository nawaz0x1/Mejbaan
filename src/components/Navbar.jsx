import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/appLogo.png';

export default function Navbar() {
  return (
    <nav className="p-2 m-2 flex flex-row justify-between">
      <div className="flex gap-2">
        <Image src={Logo} height={'70'} alt="logo" />
        <span className="text-4xl font-semibold m-2 hidden sm:inline-flex typo1">
          Mejbaan
        </span>
      </div>
      <div className="flex gap-2 m-2">
        <Link href={'/login'}>
          <button className="bg-yellow-300 hover:bg-yellow-500 text-teal-700 p-3 text-2xl font-bold rounded-3xl">
            Login
          </button>
        </Link>
        <Link href={'/register'}>
          <button className="bg-yellow-300 hover:bg-yellow-500 text-teal-700 p-3 text-2xl font-bold rounded-3xl">
            Register
          </button>
        </Link>
      </div>
    </nav>
  );
}
