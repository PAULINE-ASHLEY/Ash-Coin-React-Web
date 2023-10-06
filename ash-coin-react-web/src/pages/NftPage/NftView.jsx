import Exchanges from 'components/layout/Exchanges/Exchanges';
import { PageWrapper } from 'components/modules/wrapper';
import React from 'react';

function NftView() {
  return (
    <PageWrapper>
      <div className="bg-white mx-4 py-10 rounded-xl">
        <Exchanges />
      </div>
    </PageWrapper>
  );
}

export default NftView;
