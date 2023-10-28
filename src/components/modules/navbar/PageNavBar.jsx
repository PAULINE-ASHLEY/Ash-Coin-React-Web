import React, { useEffect } from 'react';
import { fire, giraffe } from 'assets/images';
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
      <div className="flex mx-10">
        {/* Logo Section */}
        <div className="flex flex-row items-center my-4 w-[30%]">
          <img
            src={giraffe}
            width={40}
            height={40}
            alt={giraffe}
            quality={100}
          />
          <p className="text-primary font-semibold text-base">AshCoinCap</p>
        </div>
        {/* Other section */}
        <div className="flex flex-row-reverse gap-x-4 w-[70%]">
          <ul className="md:flex hidden items-center text-sm font-semibold">
            <li>
              <Link to="/" className="py-7 px-3 inline-block">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Cryptocurrencies" className="py-7 px-3 inline-block">
                Cryptocurrencies
              </Link>
            </li>
            <li>
              <Link to="/Exchanges" className="py-7 px-3 inline-block">
                Exchanges
              </Link>
            </li>
            <li>
              <Link to="/Watchlist" className="py-7 px-3 inline-block">
                Watchlist
                <sup className="text-base bg-black text-white font-extrabold rounded-full px-2">
                  {totalQuantity}
                </sup>
              </Link>
            </li>
            <li>
              <Link
                to="/TopCryptocurrencies"
                className="px-3 flex-row flex gap-x-2 items-center text-black"
              >
                <img src={fire} alt={fire} width={40} />
                Top 30 Cryptocurrencies
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Navbar;
