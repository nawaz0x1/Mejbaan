'use client';

import { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/appLogo.png';
import { useRouter } from 'next/navigation';
import { loginUser } from '@/appwrite/utils';
import { UserContext } from '@/context/userContext';

export default function Register() {
  const router = useRouter();
  const { setIsLoggedIn } = useContext(UserContext);

  const [invalid, setInvalid] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isWorking, setIsWorking] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsWorking(true);

    try {
      await loginUser(formData);
      setIsLoggedIn(true);
      router.push('/dashboard');
    } catch (error) {
      if (
        error.message ===
        'Invalid credentials. Please check the email and password.'
      )
        setInvalid(true);
    } finally {
      setIsWorking(false);
    }
  };

  const changeHandler = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="m-4">
        <Link href="/">
          <Image src={Logo} alt="Mebjaan" width={75} />
        </Link>
      </div>
      <div className="bg-slate-50 rounded-lg w-80 md:w-96">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-3xl flex justify-center font-bold leading-tight tracking-tight text-mejbaan ">
            Login
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
            {invalid && (
              <div>
                <p className="text-red-500 text-center">
                  Wrong Email or Password!
                </p>
              </div>
            )}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-mejbaan"
              >
                Email
              </label>

              <input
                value={formData.email}
                onChange={changeHandler}
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border  text-mejbaan sm:text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 "
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-mejbaan "
              >
                Password
              </label>
              <input
                value={formData.password}
                onChange={changeHandler}
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                minLength="8"
                className="bg-gray-50 border   text-mejbaan sm:text-sm rounded-lg focus:ring-primary-600     block w-full p-2.5 "
                required
              />
            </div>
            {formData.confirmPassword &&
              formData.confirmPassword !== formData.password && (
                <div>
                  <p className="text-red-500">Password doesn&apos;t match !</p>
                </div>
              )}

            <button
              type="submit"
              className="w-full text-white bg-mejbaan hover:bg-mejbaanDark focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              {isWorking ? (
                <span className="loading loading-spinner"></span>
              ) : (
                <span className="text-lg">Let Me In</span>
              )}
            </button>
          </form>
          <p className="text-sm font-light text-mejbaan ">
            Don&apos;t have an account?
            <Link
              href="/register"
              className="font-medium text-primary-600 hover:underline pl-1"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
