import Crypto from 'components/layout/Crypto/Crypto';
import { PageWrapper } from 'components/modules/wrapper';
import React from 'react';

function CryptoView() {
  return (
    <PageWrapper>
      <div className="bg-white mx-4 py-10 rounded-xl">
        <Crypto />
      </div>
    </PageWrapper>
  );
}

export default CryptoView;
