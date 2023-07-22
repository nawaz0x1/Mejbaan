'use client';

import { useEffect, useState } from 'react';
import { getProvidedItems } from '@/appwrite/db';
import Link from 'next/link';
import ProviderCard from '@/components/ProviderCard';

export default function Provide() {
  const [data, setData] = useState([]);

  // Gets the items that the user has added
  const fetcher = async () => {
    const items = await getProvidedItems();
    setData(items.documents);
  };

  useEffect(() => {
    fetcher();
  }, []);

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
