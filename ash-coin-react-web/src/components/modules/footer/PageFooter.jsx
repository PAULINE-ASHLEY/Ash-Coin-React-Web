import React from 'react';
import { Link } from 'react-router-dom';
import { giraffe } from 'assets/images';

function Footer() {
  return (
    <>
      {/* Logo Section */}
      <div className="mx-10 flex flex-row items-center my-6">
        <img src={giraffe} width={60} height={60} alt={giraffe} quality={100} />
        <p className="text-primary font-semibold text-2xl">AshCoinCap</p>
      </div>
      {/* Section with links */}
      <div className="text-primary grid grid-cols-4 mx-10">
        <div>
          <h3 className="font-semibold text-2xl mt-5 mb-6 text-primary">
            Products
          </h3>
          <div className="flex flex-col text-lg">
            <Link href="/" className="font-medium text-gray-400 mb-4">
              Home
            </Link>
            <Link href="/" className="font-medium text-gray-400 mb-4">
              Cryptocurrencies
            </Link>
            <Link href="/" className="font-medium text-gray-400 mb-4">
              Exchanges
            </Link>
            <Link href="/" className="font-medium text-gray-400 mb-4">
              Watchlist
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-2xl mt-5 mb-6 text-primary">
            Company
          </h3>
          <div className="flex flex-col text-lg">
            <Link href="/" className="font-medium text-gray-400 mb-4">
              About Us
            </Link>
            <Link href="/" className="font-medium text-gray-400 mb-4">
              Terms of use
            </Link>
            <Link href="/" className="font-medium text-gray-400 mb-4">
              Policy Privacy
            </Link>
            <Link href="/" className="font-medium text-gray-400 mb-4">
              Cookie preferences
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-2xl mt-5 mb-6 text-primary">
            Support
          </h3>
          <div className="flex flex-col text-lg">
            <Link href="/" className="font-medium text-gray-400 mb-4">
              Request Form
            </Link>
            <Link href="/" className="font-medium text-gray-400 mb-4">
              Contact Support
            </Link>
            <Link href="/" className="font-medium text-gray-400 mb-4">
              FAQ
            </Link>
            <Link href="/" className="font-medium text-gray-400 mb-4">
              Glossary
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-2xl mt-5 mb-6 text-primary">
            Socials
          </h3>
          <div className="flex flex-col text-lg">
            <Link href="/" className="font-medium text-gray-400 mb-4">
              Facebook
            </Link>
            <Link href="/" className="font-medium text-gray-400 mb-4">
              Twitter
            </Link>
            <Link href="/" className="font-medium text-gray-400 mb-4">
              Telegram
            </Link>
            <Link href="/" className="font-medium text-gray-400 mb-4">
              Instagram
            </Link>
          </div>
        </div>
      </div>
      {/* Section with copyright */}
      <div className="mx-10">
        <p className="text-gray-400 font-medium my-20 text-lg">
          © Copyright 2023 Pauline Ondiek All rights reserved.
        </p>
      </div>
    </>
  );
}
export default Footer;
