'use client';

import ProviderCard from '@/components/ProviderCard';
import { useEffect } from 'react';
import { getUser } from '@/appwrite/utils';
import Link from 'next/link';

export default function Provide() {
  return (
    <main className="flex  flex-col items-center mx-auto gap-3">
      <section>
        <ProviderCard />
      </section>
      <section>
        <Link href={'/dashboard/provide/add'}>
          <button className="btn text-mejbaan bg-white">Add Item</button>
        </Link>
      </section>
    </main>
  );
}
