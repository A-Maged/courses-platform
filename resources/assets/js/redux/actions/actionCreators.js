import axios from 'axios';

import * as actionTypes from './actionTypes';
import namedRoutes from '../../routing/namedRoutes';

export const authFormEdit = payload => {
  return {
    type: actionTypes.AUTH_FORM_EDIT,
    payload
  };
};

export const authFormUpdateRememberMe = value => {
  return {
    type: actionTypes.AUTH_FORM_UPDATE_REMEMBER_ME,
    value
  };
};

export const isAuthenticated = () => {
  return dispatch => {
    axios.get(namedRoutes('server.auth.is_authenticated')).then(response => {
      var success = response.data.status === 'success' ? true : false;

      if (success) {
        dispatch({
          type: actionTypes.AUTH_REQUEST_SUCCESS,
          user: response.data.data,
          isAuthenticated: true
        });
      } else {
        dispatch({
          type: actionTypes.AUTH_LOGOUT_REQUEST
        });
      }
    });
  };
};

export const register = () => ({
  type: actionTypes.AUTH_REGISTER_REQUEST
});

export const login = () => ({
  type: actionTypes.AUTH_LOGIN_REQUEST
});

export const logout = () => ({
  type: actionTypes.AUTH_LOGOUT_REQUEST
});

export const courseFormEdit = payload => {
  return {
    type: actionTypes.CREATE_COURSE__FORM_EDIT,
    payload
  };
};

export const getAllCourses = () => {
  return dispatch => {
    axios.get(namedRoutes('server.courses.index')).then(response => {
      dispatch({
        type: actionTypes.GET_ALL_COURSES,
        allCourses: response.data.data
      });
    });
  };
};

export const createCourse = () => {
  return (dispatch, getState) => {
    let { title, description, publishedStatus } = getState().course;

    axios
      .post(namedRoutes('server.courses.store'), {
        title,
        description,
        publishedStatus
      })
      .then(function(response) {
        // redirect
        dispatch({
          type: actionTypes.REDIRECT,
          redirectTo: namedRoutes('app.courses.index')
        });
      });
  };
};
