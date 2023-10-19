import React from 'react';
import { ProtectedRoutes } from 'components/guards';
import {
  Home,
  Crypto,
  Nft,
  Watchlist,
  SignIn,
  SignUp,
  Rates,
  TopCrypto,
  TopExchanges,
} from 'pages';
import { Route, Routes } from 'react-router-dom';
import {
  HOME,
  CRYPTO,
  EXCHANGES,
  WATCHLIST,
  SIGN_IN,
  SIGN_UP,
  RATES,
  TOP_CRYPTO,
  TOP_EXCHANGES,
} from 'navigation/constants';

function RouterConfig() {
  return (
    <Routes>
      {/*************************PUBLIC ROUTES************************************** */}

      {/* List all public routes here */}
      <Route exact path={HOME} element={<Home />} />
      <Route path={CRYPTO} element={<Crypto />} />
      <Route path={TOP_CRYPTO} element={<TopCrypto />} />
      <Route path={RATES} element={<Rates />} />
      <Route path={TOP_EXCHANGES} element={<TopExchanges />} />
      <Route path={EXCHANGES} element={<Nft />} />
      <Route path={WATCHLIST} element={<Watchlist />} />
      <Route path={SIGN_IN} element={<SignIn />} />
      <Route path={SIGN_UP} element={<SignUp />} />

      {/*************************PROTECTED ROUTES************************************** */}
      <Route element={<ProtectedRoutes redirectPath={SIGN_UP} />}>
        {/* LIST ALL PROTECTED ROUTES HERE */}
      </Route>

      {/*************************404************************************** */}

      {/* List All 404 routes here */}
      <Route path="*" element={<div>404 PAGE NOT FOUND</div>} />
    </Routes>
  );
}

export default RouterConfig;
