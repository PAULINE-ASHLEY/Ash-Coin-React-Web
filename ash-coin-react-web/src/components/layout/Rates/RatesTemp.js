import React from 'react';

const Rates = ({ id, symbol, currencySymbol, type, rateUsd }) => {
  return (
    <>
      <div className="grid grid-cols-4 p-6 text-xl border-b-2 border-[#EEEEEE] boder-solid font-medium items-center">
        <div className="flex flex-row gap-x-4 items-center">
          <div>
            <h1 className="text-black">{id}</h1>
            <p className="text-gray-600 font-normal">{symbol}</p>
          </div>
        </div>
        <p className="text-black">{currencySymbol}</p>
        <p className="text-black">{type}</p>
        <p>{rateUsd}</p>
      </div>
    </>
  );
};

export default Rates;
