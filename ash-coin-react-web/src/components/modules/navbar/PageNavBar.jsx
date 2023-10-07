import React from 'react';
import { fire, giraffe } from 'assets/images';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className="grid grid-cols-2 mx-10">
        {/* Logo Section */}
        <div className="flex flex-row items-center my-4">
          <img
            src={giraffe}
            width={40}
            height={40}
            alt={giraffe}
            quality={100}
          />
          <p className="text-primary font-semibold text-2xl">AshCoinCap</p>
        </div>
        {/* Other section */}
        <div className="flex flex-row-reverse gap-x-4">
          <ul className="md:flex hidden items-center gap-4 text-xl font-semibold">
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
              <Link to="/" className="py-7 px-3 inline-block">
                Watchlist
              </Link>
            </li>
            <li>
              <Link
                to="/"
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
