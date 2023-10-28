import Exchanges from 'components/layout/Exchanges/Exchanges';
import { SubNavBar } from 'components/modules/subnavbar';
import { PageWrapper } from 'components/modules/wrapper';
import React from 'react';

function NftView() {
  return (
    <PageWrapper>
      <div className="bg-white mx-4 py-10 rounded-xl">
      <h1 className="text-2xl text-black font-bold mx-6 my-6">
          Today's Exchanges Prices by Trading Pairs
        </h1>
        <div className="mb-6">
          <SubNavBar />
        </div>
        <Exchanges />
      </div>
    </PageWrapper>
  );
}

export default NftView;
