'use client';

import { useEffect, useState } from 'react';
import { getProvidedItems } from '@/appwrite/db';
import Link from 'next/link';
import ProviderCard from '@/components/ProviderCard';
import Image from 'next/image';
import SadFace from '@/assets/sadFace.png';

export default function Provide() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  // Gets the items that the user has added
  const fetcher = async () => {
    try {
      const items = await getProvidedItems();
      setData(items.documents);
      setError(false);
    } catch (error) {
      setError(true);
      setTimeout(fetcher, 3000);
    }
  };

  useEffect(() => {
    fetcher();
  }, []);

  // Shows if error has occured during submittion (eg. connection failure)
  if (error)
    return (
      <div className="w-10/12 max-w-sm h-40 bg-white rounded-xl flex flex-col justify-center items-center">
        <Image src={SadFace} alt="error" height={60} />
        <h2 className="font-semibold text-red-500">Something went wrong !</h2>
      </div>
    );
  else if (!data.length)
    return <span className="mt-5 loading loading-spinner loading-lg"></span>;

  return (
    <main className="flex  flex-col items-center mx-auto gap-3">
      <section className="container">
        {data.map((item) => {
          return <ProviderCard key={item.itemID} data={item} />;
        })}
      </section>
      <section>
        <Link href={'/dashboard/provide/add'}>
          <button className="btn text-mejbaan bg-white">Add Item</button>
        </Link>
      </section>
    </main>
  );
}
