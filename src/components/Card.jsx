'use client';

import PhoneIcon from '@/assets/PhoneIcon';
import { useState, useContext } from 'react';
import { calculateDistance } from '@/utils/utils';
import { DataContext } from '@/context/dataContext';

export default function Card({ data }) {
  const { coordinates } = useContext(DataContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  let {
    item,
    provider,
    imgUrl,
    address,
    gpsLatitude,
    gpsLongitude,
    availability,
    quantity,
    phone,
  } = data;

  const distance = calculateDistance(
    gpsLatitude,
    gpsLongitude,
    coordinates[0],
    coordinates[1]
  );

  return (
    <>
      {/* This is the card body */}
      <div
        className="flex flex-col md:flex-row p-1 bg-white m-5 rounded-xl mx-auto"
        onClick={() => setIsModalOpen(true)}
      >
        <div>
          <img
            className="w-96 h-52 object-cover rounded-xl"
            src={imgUrl}
            alt={item}
          />
        </div>
        <div className="text-mejbaan flex md:flex-col justify-between m-2">
          <div>
            <h2 className="text-2xl font-bold">{item}</h2>
            <h3 className="text-xl font-semibold">{provider}</h3>
          </div>
          <div className="badge bg-mejbaanLite m-2 text-white font-semibold whitespace-nowrap">
            {distance} KM
          </div>
        </div>
      </div>

      {/* This is the modal body */}
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle mx-auto shadow-2xl bg-black bg-opacity-60"
        open={isModalOpen}
      >
        <form method="dialog" className="modal-box">
          <div className="flex flex-col">
            <div className="">
              <img
                className="w-96 md:w-full h-52 object-cover rounded-xl"
                src={imgUrl}
                alt={item}
              />
            </div>
            <div className="text-mejbaan mt-2">
              <h2 className="text-2xl font-bold">{item}</h2>
            </div>
            <div className="flex justify-between">
              <div className="text-mejbaan">
                <h2 className="text-lg font-semibold pl-3">{provider}</h2>
              </div>
              <div className="flex flex-col text-mejbaan ">
                <p className="font-thin">Quantity</p>
                <h2 className="text-lg">{quantity}</h2>
              </div>
            </div>
            <div className="text-mejbaan pt-1 pb-1">
              <div className="flex gap-2 text-xl">
                <span className="pt-1">
                  <PhoneIcon />
                </span>
                <span>
                  <a href={`tel:${phone}`}>{phone}</a>
                </span>
              </div>
            </div>

            <div className="flex justify-between"></div>
            <div className="flex justify-between">
              <div className="flex flex-col text-mejbaan ">
                <p className="font-thin">Address</p>
                <h2 className="text-lg pl-3">{address}</h2>
              </div>
              <div className="badge bg-mejbaanLite mt-5 text-white font-semibold rounded-3xl whitespace-nowrap">
                {distance} KM
              </div>
            </div>
          </div>
          <div className="modal-action flex justify-between">
            <button
              className="btn bg-mejbaanDark text-white hover:bg-mejbaanLite"
              onClick={() => {
                const url = `https://www.google.com/maps/place/${gpsLatitude},${gpsLongitude}`;
                window.open(url, '_blank');
                setIsModalOpen(false);
              }}
            >
              Show in Map
            </button>

            <button
              className="btn bg-mejbaanDark text-white hover:bg-mejbaanLite"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}
