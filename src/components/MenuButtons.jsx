'use client';

import SearchIcon from '@/assets/SearchIcon';
import ProviderIcon from '@/assets/ProviderIcon';

export default function MenuButtons({ menu, setMenu }) {
  return (
    <div>
      <div className="flex border border-white rounded-3xl p-1 mt-2 mb-2 text-xl cursor-pointer">
        <div
          className={`rounded-2xl ${menu === 'find' && 'bg-white'}`}
          onClick={() => setMenu('find')}
        >
          <div className="flex p-1">
            <span className="p-1">
              <SearchIcon color={menu === 'find' ? 'mejbaan' : 'white'} />
            </span>
            <h2 className="text-mejbaan pr-1">
              <span className={menu !== 'find' && 'text-white'}>Find</span>
            </h2>
          </div>
        </div>

        <div
          className={`rounded-2xl ${menu === 'provide' && 'bg-white'}`}
          onClick={() => setMenu('provide')}
        >
          <div className="flex p-1">
            <span className="p-1">
              <ProviderIcon color={menu === 'provide' ? 'mejbaan' : 'white'} />
            </span>
            <h2 className="text-mejbaan pr-1">
              <span className={menu !== 'provide' && 'text-white'}>
                Provide
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
