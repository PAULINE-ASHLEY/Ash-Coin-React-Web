import React from 'react';
import { Link } from 'react-router-dom';

const Crypto = ({
  name,
  rank,
  symbol,
  priceUsd,
  supply,
  volumeUsd24Hr,
  marketCapUsd,
  changePercent24Hr,
}) => {
  return (
    <>
      <div className="grid grid-cols-7 p-6 text-xl border-b-2 border-[#EEEEEE] boder-solid font-medium items-center">
        <div className="flex flex-row gap-x-4 items-center">
          <p className="text-gray-600">{rank}.</p>
          <div>
          <h1 className="text-black">{name}</h1>
          <p className="text-gray-400">{symbol}</p>
          </div>
        </div>
        <p className="text-blue-600">${Math.round(priceUsd)}</p>
        <p>${Math.floor(supply)}</p>
        <p className="text-blue-600">${Math.floor(volumeUsd24Hr)}</p>
        <p>${Math.floor(marketCapUsd)}</p>
        {changePercent24Hr < 0 ? (
          <p className="text-red-600">{changePercent24Hr}%</p>
        ) : (
          <p className="text-green-600">{changePercent24Hr}%</p>
        )}
        <button className="bg-black text-white text-xl font-semibold rounded-full my-4 mx-10 py-4">
          <Link href="/">View More</Link>
        </button>
      </div>
    </>
  );
};

export default Crypto;
