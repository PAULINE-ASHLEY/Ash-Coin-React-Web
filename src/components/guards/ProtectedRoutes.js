// import { LOGIN } from 'navigation/constants';
import React from 'react';
import PropTypes from 'prop-types';

import { Navigate, Outlet } from 'react-router-dom';
import { SIGN_UP } from 'navigation/constants';

const useAuth = () => {
  const user = localStorage.getItem('user');
  if (user) {
    return true;
  } else {
    return false;
  }
};

const ProtectedRoutes = ({ redirectPath = SIGN_UP, children }) => {
  const auth = useAuth();

  if (!auth) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};
ProtectedRoutes.propTypes = {
  redirectPath: PropTypes.string,
  children: PropTypes.node,
};

export default ProtectedRoutes;
