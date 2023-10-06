import Coin from 'components/layout/Home/Coin';
import { PageWrapper } from 'components/modules/wrapper';
import React from 'react';

function HomeView() {
  return (
    <PageWrapper>
      <div className="bg-white mx-4 py-10 rounded-xl">
        <Coin />
      </div>
    </PageWrapper>
  );
}

export default HomeView;
