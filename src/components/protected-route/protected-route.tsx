/* eslint-disable react/jsx-props-no-spreading */
import { useSelector } from 'react-redux';
import { Route, Redirect, useLocation } from 'react-router-dom';
import React, { FC, ReactNode } from 'react';
import { RootState } from '../../services/store';

interface IProtectedRouteProps {
  children: ReactNode;
  path: string;
}

const ProtectedRoute: FC<IProtectedRouteProps> = (props) => {
  const location = useLocation();
  const { children, ...rest } = props;
  const isLogged = useSelector((state: RootState) => state.auth.isLogged);
  return (
    <Route {...rest}>
      {isLogged ? children : <Redirect to={{ pathname: '/login', state: { from: location } }} />}
    </Route>
  );
};

export default ProtectedRoute;
