import React from 'react';

export default function Hero() {
  return (
    <section>
      <div className="p-10 md:p-14">
        <h2 className="text-6xl text-center">
          LET&apos;S FIGHT
          <span className="typo1 text-yellow-300 font-bold block p-4">
            hunger
          </span>
          TOGETHER
        </h2>
      </div>

      <div>
        <h2 className="text-2xl font-semibold p-8 text-center">
          MORE THAN <span className="text-yellow-300">1/3</span> OF ALL FOOD IS
          BEING WASTED
        </h2>
        <h3 className="font-semibold text-3xl text-center p-2">
          <span className="m-1">✌</span>
          Let&apos;s share our extra food with those in need!
          <span className="m-1">✌</span>
        </h3>
      </div>
    </section>
  );
}
