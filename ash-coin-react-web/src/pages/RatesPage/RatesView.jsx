import Rates from 'components/layout/Rates/Rates';
import { PageWrapper } from 'components/modules/wrapper';
import React from 'react';

function RatesView() {
  return (
    <PageWrapper>
      <div className="bg-white mx-4 py-10 rounded-xl">
        <Rates />
      </div>
    </PageWrapper>
  );
}

export default RatesView;
