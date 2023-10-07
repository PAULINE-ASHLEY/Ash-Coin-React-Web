import Coin from 'components/layout/Home/Coin';
import { PageWrapper } from 'components/modules/wrapper';
import React from 'react';

function HomeView() {
  return (
    <PageWrapper>
      <div className="bg-white mx-4 pb-10 pt-6 rounded-xl">
        <Coin />
      </div>
    </PageWrapper>
  );
}

export default HomeView;
