import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCartTotal } from 'features/cartSlice';
import { green, red } from 'assets/images';

function Watchlist() {
  const { cart } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, cart]);

  return (
    <>
      <div>
        <div className="grid grid-cols-6 p-6 text-lg font-semibold  border-y-2 border-[#EEEEEE] boder-solid text-gray-600">
          <div className="flex flex-row gap-x-4">
            <p>Name</p>
          </div>
          <p>Price(USD)</p>
          <p>Circulating Supply</p>
          <p>Volume(24Hr)</p>
          <p>Market Cap</p>
          <p>Change(24Hr)</p>
        </div>
        {cart?.map((coin) => {
          return (
            <div className="grid grid-cols-6 p-6 text-xl border-b-2 border-[#EEEEEE] boder-solid font-medium items-center">
              <div className="flex flex-row gap-x-4 items-center">
                <p className="text-gray-600">{coin.rank}.</p>
                <div>
                  <h1 className="text-black">{coin.name}</h1>
                  <p className="text-gray-600 font-normal">{coin.symbol}</p>
                </div>
              </div>
              <p className="text-black">${Math.round(coin.priceUsd)}</p>
              <div className="flex flex-row gap-x-2 items-center">
                <p>${Math.floor(coin.supply)}</p>
                <p className="text-gray-600 font-normal">{coin.symbol}</p>
              </div>
              <p className="text-black">${Math.floor(coin.volumeUsd24Hr)}</p>
              <p>${Math.floor(coin.marketCapUsd)}</p>
              {coin.changePercent24Hr < 0 ? (
                <p className="text-red-600 flex flex-row">
                  <img src={red} alt={red} />
                  {coin.changePercent24Hr}%
                </p>
              ) : (
                <p className="text-green-600 flex flex-row">
                  <img src={green} alt={green} />
                  {coin.changePercent24Hr}%
                </p>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Watchlist;
