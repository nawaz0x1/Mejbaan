'use client';

import PenIcon from '@/assets/pen.png';
import DeleteIcon from '@/assets/delete.png';
import Image from 'next/image';
import { deleteItem } from '@/appwrite/db';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ProviderCard({ data }) {
  const router = useRouter();

  const { item, imgUrl, $id, active } = data;
  const [blank, setBlank] = useState(false);

  const deleteHandler = async () => {
    setBlank(true);
    await deleteItem($id);
    router.refresh();
  };

  // When user click delete button it updates the blank state and hides this comopent as
  // the delete oparation may take some time and done in the background
  if (blank) return <></>;

  return (
    <div className="flex p-1 bg-white m-5 rounded-xl mx-auto justify-between w-screen sm:max-w-screen-sm shadow-lg">
      <div className="flex">
        <div className="sm:p-2">
          <img
            src={imgUrl}
            alt={item}
            className="object-cover h-24 aspect-square rounded-lg"
          />
        </div>
        <div className="text-mejbaan flex-col justify-between m-2 sm:ml-4">
          <h2 className="text-xl font-semibold">{item}</h2>
          {active ? (
            <div className="badge bg-mejbaan text-white font-semibold mt-4">
              <span>Active</span>
            </div>
          ) : (
            <div className="badge bg-red-700 text-white font-semibold">
              <span>Inactive</span>
            </div>
          )}
        </div>
      </div>

      <div className="my-auto flex gap-2 sm:mr-3">
        <button
          className="btn bg-mejbaan text-white hover:bg-mejbaanDark p-2"
          onClick={async () => {
            router.push(`provide/edit/${$id}`);
          }}
        >
          <Image src={PenIcon} width={25} alt="edit" />
          <span className="hidden sm:block">Edit</span>
        </button>
        <button
          className="btn bg-red-700 text-white hover:bg-red-800 p-2"
          onClick={deleteHandler}
        >
          <Image src={DeleteIcon} width={25} alt="delete" />
          <span className="hidden sm:block">Delete</span>
        </button>
      </div>
    </div>
  );
}
