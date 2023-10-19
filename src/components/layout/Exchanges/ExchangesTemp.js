import React from 'react';

const Exchange = ({
  name,
  rank,
  percentTotalVolume,
  volumeUsd,
  tradingPairs,
  exchangeId,
}) => {
  return (
    <>
      <div className="grid grid-cols-5 p-6 text-xl border-b-2 border-[#EEEEEE] boder-solid font-medium items-center">
        <div className="flex flex-row gap-x-4 items-center">
          <p className="text-gray-600">{rank}.</p>
          <h1 className="text-black">{name}</h1>
        </div>
        <p className="text-black">{tradingPairs}</p>
        <p>${Math.floor(volumeUsd)}</p>
        <p className="text-black">{Math.floor(percentTotalVolume)}%</p>
        <p className="text-black">{exchangeId}</p>
      </div>
    </>
  );
};

export default Exchange;
