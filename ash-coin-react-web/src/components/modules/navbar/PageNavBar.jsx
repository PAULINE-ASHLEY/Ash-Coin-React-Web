import React from 'react';
import { giraffe } from 'assets/images';
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
          <p className="text-primary font-semibold text-2xl">Ash Coin</p>
        </div>
        {/* Other section */}
        <div className="flex flex-row-reverse gap-x-4">
          <button className="bg-black text-white px-4 text-xl font-semibold my-4 rounded-full">
            <Link to="/">Sign In</Link>
          </button>
          <button className="bg-black text-white px-4 text-xl font-semibold my-4 rounded-full">
            <Link to="/">Sign Up</Link>
          </button>
          <ul className="md:flex hidden items-center gap-8 text-xl font-semibold">
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
              <Link to="/NFTs" className="py-7 px-3 inline-block">
                Exchanges
              </Link>
            </li>
            <li>
              <Link to="/" className="py-7 px-3 inline-block">
                Watchlist
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Navbar;
