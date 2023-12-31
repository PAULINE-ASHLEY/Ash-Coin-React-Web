import { grid, list, star, line, currency, fire } from 'assets/images';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from 'features/cartSlice';

function Navbar() {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, cart]);
  return (
    <>
      <div className="flex flex-row pt-10 ml-6">
        <div>
          <ul className="md:flex hidden items-center text-sm font-semibold">
            <li>
              <Link
                to="/Cryptocurrencies"
                className="px-3 flex-row flex gap-x-2 text-gray-600"
              >
                <img src={grid} alt={grid} />
                Cryptocurrencies
              </Link>
            </li>
            <li>
              <Link
                to="/Exchanges"
                className="px-3 flex-row flex gap-x-2 text-gray-600"
              >
                <img src={list} alt={list} />
                Exchanges
              </Link>
            </li>
            <li className="px-3 flex-row flex">
              <img src={line} alt={line} />
            </li>
            <li>
              <Link
                to="/Rates"
                className="px-3 flex-row flex gap-x-2 text-gray-600"
              >
                <img src={currency} alt={currency} />
                Rates
              </Link>
            </li>
            <li>
              <Link
                to="/Watchlist"
                className="px-3 flex-row flex gap-x-2 text-gray-600"
              >
                <img src={star} alt={star} />
                Watchlist{' '}
                <sup className="text-base bg-black text-white font-extrabold rounded-full px-2">
                  {totalQuantity}
                </sup>
              </Link>
            </li>
            <li>
              <Link
                to="/TopCryptocurrencies"
                className="px-3 flex-row flex gap-x-2 items-center text-gray-600"
              >
                <img src={fire} alt={fire} width={40} />
                Top 30 Cryptocurrencies
              </Link>
            </li>
            <li>
              <Link
                to="/TopExchanges"
                className="px-3 flex-row flex gap-x-2 items-center text-gray-600"
              >
                <img src={fire} alt={fire} width={40} />
                Top 30 Exchanges
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Navbar;
