'use client';

import { useContext, useState } from 'react';
import { DataContext } from '@/context/dataContext';
import { imageUpload, getUser } from '@/appwrite/utils';
import { addItemAsProvider } from '@/appwrite/db';
import { useRouter } from 'next/navigation';
import SadFace from '@/assets/sadFace.png';
import Image from 'next/image';

export default function AddItem() {
  const router = useRouter();
  const { coordinates } = useContext(DataContext);

  const [formData, setFormData] = useState({
    item: '',
    quantity: 1,
    phone: '',
    address1: '',
    address2: '',
    city: '',
    zipCode: '',
    gpsLatitude: coordinates[0],
    gpsLongitude: coordinates[1],
  });

  const [image, setImage] = useState();
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);

  const changeHandler = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const imageChangeHandler = (e) => {
    setImage(e.target.files[0]);
  };

  // Uploades image and return URL
  const imageUploader = async () => {
    try {
      const imgUrl = await imageUpload(image);
      return imgUrl;
    } catch (error) {
      setError(true);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setSending(true);
    const imgUrl = await imageUploader();
    const {
      item,
      quantity,
      phone,
      address1,
      address2,
      city,
      zipCode,
      gpsLatitude,
      gpsLongitude,
    } = formData;
    const address = `${address1}, ${address2}, ${city} ${zipCode}`;
    const userData = await getUser();
    const [provider, providerID] = [userData.name, userData.$id];
    const data = {
      item,
      provider,
      providerID,
      quantity,
      imgUrl,
      phone,
      address,
      gpsLatitude: Number(gpsLatitude),
      gpsLongitude: Number(gpsLongitude),
    };

    try {
      const response = await addItemAsProvider(data);
      if (response) router.push('/dashboard/provide');
    } catch (error) {
      setError(true);
    }
    setSending(false);
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
            value={formData.item}
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
                setFormData((formData) => {
                  return { ...formData, quantity: formData.quantity - 1 };
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
              value={formData.quantity}
              onChange={changeHandler}
              required
            />
            <button
              className="btn font-semibold text-2xl p-3 flex flex-col justify-center"
              type="button"
              onClick={() =>
                setFormData((formData) => {
                  return { ...formData, quantity: formData.quantity + 1 };
                })
              }
            >
              <span>+</span>
            </button>
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="image"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            accept=".jpg, .jpeg, .png"
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
            onChange={imageChangeHandler}
            required
          />
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
            value={formData.phone}
            onChange={changeHandler}
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="address1"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Address line 1
          </label>
          <input
            type="text"
            id="address1"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="123 Main St"
            value={formData.address1}
            onChange={changeHandler}
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="address2"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Address line 2
          </label>
          <input
            type="text"
            id="address2"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="optional"
            value={formData.address2}
            onChange={changeHandler}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="city"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="New York"
            value={formData.city}
            onChange={changeHandler}
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="zipCode"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Zip Code
          </label>
          <input
            type="number"
            id="zipCode"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="1234"
            value={formData.zipCode}
            onChange={changeHandler}
            required
          />
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
            value={formData.gpsLatitude}
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
            value={formData.gpsLongitude}
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
              <span className="text-lg">Submit</span>
            )}
          </button>
        </div>
      </form>
    </main>
  );
}
