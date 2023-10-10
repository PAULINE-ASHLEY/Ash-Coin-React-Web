import TopExchanges from 'components/layout/Exchanges/TopExchanges';
import { SubNavBar } from 'components/modules/subnavbar';
import { PageWrapper } from 'components/modules/wrapper';
import React from 'react';

function TopExchangesView() {
  return (
    <PageWrapper>
      <div className="bg-white mx-4 py-10 rounded-xl">
        <h1 className="text-3xl text-black font-bold mx-6 my-10">
          Today's Exchanges Prices by Trading Pairs
        </h1>
        <div className="mb-6">
          <SubNavBar />
        </div>
        <TopExchanges />
      </div>
    </PageWrapper>
  );
}

export default TopExchangesView;
