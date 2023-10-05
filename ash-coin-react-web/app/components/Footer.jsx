import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from './giraffe.png';

export default function Footer() {
  return (
    <>
      {/* Logo Section */}
      <div className="mx-10 flex flex-row items-center my-6">
        <Image src={logo} width={60} height={60} alt={logo} quality={100} />
        <p className="text-primary font-semibold text-2xl">Ash Coin</p>
      </div>
      {/* Section with links */}
      <div className="text-primary grid grid-cols-4 mx-10">
        <div>
          <h3 className="font-semibold text-2xl mt-5 mb-6 text-primary">
            Products
          </h3>
          <div className="flex flex-col text-lg">
            <Link href="/" className="font-medium text-gray mb-4">
              Blockchain Explorer
            </Link>
            <Link href="/" className="font-medium text-gray mb-4">
              Crypto API
            </Link>
            <Link href="/" className="font-medium text-gray mb-4">
              Crypto Indices
            </Link>
            <Link href="/" className="font-medium text-gray mb-4">
              Doodles
            </Link>
            <Link href="/" className="font-medium text-gray mb-4">
              Sitemap
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-2xl mt-5 mb-6 text-primary">
            Company
          </h3>
          <div className="flex flex-col text-lg">
            <Link href="/" className="font-medium text-gray mb-4">
              About Us
            </Link>
            <Link href="/" className="font-medium text-gray mb-4">
              Terms of use
            </Link>
            <Link href="/" className="font-medium text-gray mb-4">
              Policy Privacy
            </Link>
            <Link href="/" className="font-medium text-gray mb-4">
              Cookie preferences
            </Link>
            <Link href="/" className="font-medium text-gray mb-4">
              Community Rules
            </Link>
            <Link href="/" className="font-medium text-gray mb-4">
              Disclaimer
            </Link>
            <Link href="/" className="font-medium text-gray mb-4">
              Methodology
            </Link>
            <Link href="/" className="font-medium text-gray mb-4">
              Careers
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-2xl mt-5 mb-6 text-primary">
            Support
          </h3>
          <div className="flex flex-col text-lg">
            <Link href="/" className="font-medium text-gray mb-4">
              Request Form
            </Link>
            <Link href="/" className="font-medium text-gray mb-4">
              Contact Support
            </Link>
            <Link href="/" className="font-medium text-gray mb-4">
              FAQ
            </Link>
            <Link href="/" className="font-medium text-gray mb-4">
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
        <p className="text-gray font-medium my-20 text-lg">
          © Copyright 2023 Ash Coin All rights reserved.
        </p>
      </div>
    </>
  );
}
