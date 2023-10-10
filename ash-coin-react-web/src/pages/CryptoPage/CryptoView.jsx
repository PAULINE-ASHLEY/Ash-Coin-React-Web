import Crypto from 'components/layout/Crypto/Crypto';
import { SubNavBar } from 'components/modules/subnavbar';
import { PageWrapper } from 'components/modules/wrapper';
import React from 'react';

function CryptoView() {
  return (
    <PageWrapper>
      <div className="bg-white mx-4 py-10 rounded-xl">
        <h1 className="text-3xl text-black font-bold mx-6 my-10">
          Today's Cryptocurrency Prices by Market Cap
        </h1>
        <div className="mb-6">
          <SubNavBar />
        </div>
        <Crypto />
      </div>
    </PageWrapper>
  );
}

export default CryptoView;
