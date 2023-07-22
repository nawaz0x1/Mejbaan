'use client';

import { useEffect, useState } from 'react';
import { getItemInfo, updateItemInfo } from '@/appwrite/db';
import { useRouter } from 'next/navigation';
import { objectCleaner } from '@/utils/utils';
import Image from 'next/image';
import SadFace from '@/assets/sadFace.png';

export default function Edit({ params }) {
  const { id } = params;
  const router = useRouter();
  const [data, setData] = useState({});
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  // Gets item data
  const fetcher = async () => {
    const response = await getItemInfo(id);
    setData(response);
  };

  useEffect(() => {
    fetcher();
  }, []);

  const changeHandler = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await updateItemInfo(id, objectCleaner(data));
      setSending(false);
      router.push('/dashboard/provide');
    } catch (error) {
      setError(true);
    }
  };

  // Shows if error has occured during submittion (eg. connection failure)
  if (error)
    return (
      <div className="w-10/12 max-w-sm h-40 bg-white rounded-xl flex flex-col justify-center items-center">
        <Image src={SadFace} alt="error" height={60} />
        <h2 className="font-semibold text-red-500">Something went wrong !</h2>
      </div>
    );

  return (
    <main>
      <form className="bg-white p-10 rounded-xl mt-2" onSubmit={submitHandler}>
        <div className="form-control mb-4">
          <label className="cursor-pointer label">
            <span className="label-text text-sm font-medium text-gray-900">
              Active
            </span>
            <input
              type="checkbox"
              className="toggle toggle-accent"
              checked={data.active}
              onClick={() => {
                setData({ ...data, active: !data.active });
              }}
            />
          </label>
        </div>

        <div className="mb-6">
          <label
            htmlFor="text"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Item
          </label>
          <input
            type="text"
            id="item"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Bread"
            value={data.item}
            onChange={changeHandler}
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="quantity"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Quantity
          </label>
          <div className="flex gap-2">
            <button
              className="btn font-semibold text-2xl p-3 flex flex-col justify-center"
              type="button"
              onClick={() =>
                setData((data) => {
                  return { ...data, quantity: data.quantity - 1 };
                })
              }
            >
              <span>-</span>
            </button>
            <input
              type="number"
              id="quantity"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="1"
              value={data.quantity}
              onChange={changeHandler}
              required
            />
            <button
              className="btn font-semibold text-2xl p-3 flex flex-col justify-center"
              type="button"
              onClick={() =>
                setData((data) => {
                  return { ...data, quantity: data.quantity + 1 };
                })
              }
            >
              <span>+</span>
            </button>
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="123 456 789"
            value={data.phone}
            onChange={changeHandler}
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Address
          </label>
          <textarea
            id="address"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="123 456 789"
            value={data.address}
            onChange={changeHandler}
            required
          ></textarea>
        </div>

        <div className="mb-6">
          <label
            htmlFor="gpsLatitude"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Latitude
          </label>
          <input
            type="number"
            id="gpsLatitude"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={Number(data.gpsLatitude)}
            onChange={changeHandler}
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="gpsLongitude"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Longitude
          </label>
          <input
            type="number"
            id="gpsLongitude"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={Number(data.gpsLongitude)}
            onChange={changeHandler}
            required
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="btn btn-wide text-white bg-mejbaan hover:bg-mejbaanDark font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            {sending ? (
              <span className="loading loading-spinner"></span>
            ) : (
              <span className="text-lg">Update</span>
            )}
          </button>
        </div>
      </form>
    </main>
  );
}
