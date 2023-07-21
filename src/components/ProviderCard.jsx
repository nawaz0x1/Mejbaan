import PenIcon from '@/assets/pen.png';
import DeleteIcon from '@/assets/delete.png';
import Image from 'next/image';
import { deleteItem } from '@/appwrite/db';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ProviderCard({ data }) {
  const router = useRouter();

  const { item, imgUrl, itemID, $id, active } = data;
  const [blank, setBlank] = useState(false);

  if (blank) return <></>;

  return (
    <div className="bg-white rounded-lg p-1 flex text-mejbaan justify-between w-fit">
      <div>
        <img
          src={imgUrl}
          alt={item}
          className="object-cover h-24 aspect-square rounded-lg"
        />
      </div>
      <div className="m-2 ml-4 flex flex-col gap-1 my-auto">
        <h2 className="text-xl font-semibold">{item}</h2>
        {active ? (
          <div className="badge bg-mejbaan text-white font-semibold">
            <span>Active</span>
          </div>
        ) : (
          <div className="badge bg-red-700 text-white font-semibold">
            <span>Inactive</span>
          </div>
        )}
      </div>
      <div className="my-auto flex gap-2 sm:ml-3">
        <button
          className="btn bg-mejbaan text-white hover:bg-mejbaanDark p-2"
          onClick={async () => {
            router.push(`provide/edit/${$id}`);
          }}
        >
          <Image src={PenIcon} width={25} />
          <span className="hidden sm:inline-flex">Edit</span>
        </button>
        <button
          className="btn bg-red-700 text-white hover:bg-red-800 p-2"
          onClick={async () => {
            setBlank(true);
            await deleteItem($id);
            router.refresh();
          }}
        >
          <Image src={DeleteIcon} width={25} />
          <span className="hidden sm:inline-flex">Delete</span>
        </button>
      </div>
    </div>
  );
}
