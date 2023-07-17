import PhoneIcon from '@/assets/PhoneIcon';
import { useState } from 'react';

export default function Card() {
  const data = {
    item: 'Chicken',
    provider: 'Mr. Bruce Wayne',
    imgUrl:
      'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg',
    location: [0.0, 0.0],
    address: '123 Fake St, Gotham City, New York 2312',
    availability: '10:30 PM 12/12/2024',
    quantity: 100,
    phone: '123-456-7890',
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    item,
    provider,
    imgUrl,
    location,
    address,
    availability,
    quantity,
    phone,
  } = data;
  return (
    <>
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
          <div className="badge bg-mejbaanLite m-2 text-white font-semibold">
            2 KM
          </div>
        </div>
      </div>
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
                <h2 className="text-lg font-bold pl-3">{provider}</h2>
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

            <div className="flex justify-between">
              <div className="flex flex-col text-mejbaan ">
                <p className="font-thin">Available till</p>
                <h2 className="text-lg pl-3">{availability}</h2>
              </div>
              <div className="flex flex-col text-mejbaan ">
                <p className="font-thin">Quantity</p>
                <h2 className="text-lg">{quantity}</h2>
              </div>
            </div>
            <div className="flex justify-between gap-3">
              <div className="flex flex-col text-mejbaan ">
                <p className="font-thin">Address</p>
                <h2 className="text-lg pl-3">{address}</h2>
              </div>
              <div className="badge bg-mejbaanLite mt-5 text-white font-semibold">
                2KM
              </div>
            </div>
          </div>
          <div className="modal-action flex justify-between">
            <button
              className="btn bg-mejbaanDark text-white hover:bg-mejbaanLite"
              onClick={() => setIsModalOpen(false)}
            >
              Show in Map
            </button>
            {/* if there is a button in form, it will close the modal */}
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
