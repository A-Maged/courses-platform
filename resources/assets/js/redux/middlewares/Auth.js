import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';

import { namedRoutes } from '../../Routes';

export const register = ({ getState, dispatch }) => next => action => {
  if (action.type === actionTypes.AUTH_REGISTER_REQUEST) {
    let { name, email, password } = getState().authForm;

    axios
      .post(namedRoutes('server.auth.register'), { name, email, password })
      .then(function(response) {
        dispatch({
          type: actionTypes.AUTH_REQUEST_SUCCESS,
          user: response.data.data,
          isAuthenticated: true
        });

        // redirect
        dispatch({
          type: actionTypes.REDIRECT,
          redirectTo: namedRoutes('app.root')
        });
      });
  }

  return next(action);
};

export const login = ({ getState, dispatch }) => next => action => {
  if (action.type === actionTypes.AUTH_LOGIN_REQUEST) {
    let { email, password, rememberMe } = getState().authForm;

    axios
      .post(namedRoutes('server.auth.login'), {
        email: email,
        password: password,
        remember: rememberMe
      })
      .then(function(response) {
        dispatch({
          type: actionTypes.AUTH_REQUEST_SUCCESS,
          user: response.data.data,
          isAuthenticated: true
        });

        // redirect
        dispatch({
          type: actionTypes.REDIRECT,
          redirectTo: namedRoutes('app.root')
        });
      });
  }
  return next(action);
};

export const logout = ({ getState, dispatch }) => next => action => {
  if (action.type === actionTypes.AUTH_LOGOUT_REQUEST) {
    axios.post(namedRoutes('server.auth.logout'), {}).then(function(response) {
      console.log(response.data);

      // redirect
      dispatch({
        type: actionTypes.REDIRECT,
        redirectTo: namedRoutes('app.auth.login')
      });
    });
  }

  return next(action);
};
