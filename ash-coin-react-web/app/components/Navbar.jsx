import React from 'react';
import Image from 'next/image';
import logo from './giraffe.png';
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <div className="grid grid-cols-2 mx-10">
        {/* Logo Section */}
        <div className="flex flex-row items-center my-4">
          <Image src={logo} width={40} height={40} alt={logo} quality={100} />
          <p className="text-primary font-semibold text-2xl">Ash Coin</p>
        </div>
        {/* Other section */}
        <div className="flex flex-row-reverse gap-x-4">
          <button className="bg-primary text-white px-4 text-xl font-semibold my-4 rounded-full">
            <Link href="/">Sign In</Link>
          </button>
          <button className="bg-primary text-white px-4 text-xl font-semibold my-4 rounded-full">
            <Link href="/">Sign Up</Link>
          </button>
          <ul className="md:flex hidden items-center gap-8 text-xl font-semibold">
            <li>
              <Link href="/" className="py-7 px-3 inline-block">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="py-7 px-3 inline-block">
                Cryptocurrencies
              </Link>
            </li>
            <li>
              <Link href="/" className="py-7 px-3 inline-block">
                NFT
              </Link>
            </li>
            <li>
              <Link href="/" className="py-7 px-3 inline-block">
                Watchlist
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
