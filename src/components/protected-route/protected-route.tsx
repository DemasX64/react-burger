/* eslint-disable react/jsx-props-no-spreading */
import { Route, Redirect, useLocation } from 'react-router-dom';
import React, { FC, ReactNode } from 'react';
import useAppSelector from '../../hooks/useAppSelector';

interface IProtectedRouteProps {
  children: ReactNode;
  path: string;
  exact?: boolean;
}

const ProtectedRoute: FC<IProtectedRouteProps> = (props) => {
  const location = useLocation();
  const { children, ...rest } = props;
  const isLogged = useAppSelector((state) => state.auth.isLogged);
  return (
    <Route {...rest}>
      {isLogged ? children : <Redirect to={{ pathname: '/login', state: { from: location } }} />}
    </Route>
  );
};

ProtectedRoute.defaultProps = {
  exact: false,
};

export default ProtectedRoute;
