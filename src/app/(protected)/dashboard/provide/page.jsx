'use client';

import ProviderCard from '@/components/ProviderCard';

export default function Provide() {
  return (
    <main className="flex  flex-col items-center mx-auto gap-3">
      <section>
        <ProviderCard />
      </section>
      <section>
        <button className="btn text-mejbaan bg-white">Add Item</button>
      </section>
    </main>
  );
}
