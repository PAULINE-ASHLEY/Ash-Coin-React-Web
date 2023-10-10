import { green, red } from 'assets/images';
import React from 'react';
// import { Link } from 'react-router-dom';

const Coin = ({
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
      <div className="grid grid-cols-6 p-6 text-xl border-b-2 border-[#EEEEEE] boder-solid font-medium items-center">
        <div className="flex flex-row gap-x-4 items-center">
          <p className="text-gray-600">{rank}.</p>
          <div>
            <h1 className="text-black">{name}</h1>
            <p className="text-gray-600 font-normal">{symbol}</p>
          </div>
        </div>
        <p className="text-black">${Math.round(priceUsd)}</p>
        <div className="flex flex-row gap-x-2 items-center">
          <p>${Math.floor(supply)}</p>
          <p className="text-gray-600 font-normal">{symbol}</p>
        </div>
        <p className="text-black">${Math.floor(volumeUsd24Hr)}</p>
        <p>${Math.floor(marketCapUsd)}</p>
        {changePercent24Hr < 0 ? (
          <p className="text-red-600 flex flex-row">
            <img src={red} alt={red} />
            {changePercent24Hr}%
          </p>
        ) : (
          <p className="text-green-600 flex flex-row">
            <img src={green} alt={green} />
            {changePercent24Hr}%
          </p>
        )}
        {/* <button className="bg-black text-white text-xl font-semibold rounded-full my-4 mx-10 py-4">
          <Link href="/">View More</Link>
        </button> */}
      </div>
    </>
  );
};

export default Coin;
