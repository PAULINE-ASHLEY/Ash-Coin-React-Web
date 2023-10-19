import React from 'react';
import PropTypes from 'prop-types';
import { PageNavBar } from 'components/modules/navbar';
import { PageFooter } from 'components/modules/footer';

function PageWrapper({ children }) {
  return (
    <div className="relative">
      <div className="border-b-2 border-solid border-grey">
        <PageNavBar />
      </div>
      <main>
        <div className="min-h-[75vh] box-border w-full">{children}</div>
      </main>
      <div className="border-t-2 border-solid border-grey">
        <PageFooter />
      </div>
    </div>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.any,
};

export default PageWrapper;
