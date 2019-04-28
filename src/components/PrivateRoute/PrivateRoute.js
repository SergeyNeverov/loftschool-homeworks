// Реализуйте приватный роут.
// Он должен проверять статус авторизации
// и перенаправлять пользователя на страницу логина,
// если тот не авторизован.

import React from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: RouteComponent, isAuthorized }) => {
  return isAuthorized ? (
    <Route path="/app" component={RouteComponent} />
  ) : (
    <Redirect to="/login" />
  );
};

export default withAuth(PrivateRoute);
