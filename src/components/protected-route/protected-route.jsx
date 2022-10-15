/* eslint-disable react/jsx-props-no-spreading */
import { useSelector } from 'react-redux';
import { Route, Redirect, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

function ProtectedRoute(props) {
  const location = useLocation();
  const { children, ...rest } = props;
  const user = useSelector((state) => state.auth.user);
  return (
    <Route {...rest}>
      {user ? children : <Redirect to={{ pathname: '/login', state: { from: location } }} />}
    </Route>
  );
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
