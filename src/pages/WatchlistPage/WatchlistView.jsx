import Watchlist from 'components/layout/Watchlist/Watchlist';
import { SubNavBar } from 'components/modules/subnavbar';
import { PageWrapper } from 'components/modules/wrapper';
import React from 'react';

function WatchlistView() {
  return (
    <PageWrapper>
      <div className="bg-white mx-4 py-10 rounded-xl">
        <h1 className="text-3xl text-black font-bold mx-6 my-10">
            You're Cryptocurrency Watchlist
        </h1>
        <div className="mb-6">
          <SubNavBar />
        </div>
        <Watchlist />
      </div>
    </PageWrapper>
  );
}

export default WatchlistView;
