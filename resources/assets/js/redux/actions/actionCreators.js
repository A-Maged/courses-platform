import axios from 'axios';

import * as actionTypes from './actionTypes';
import { namedRoutes } from '../../Routes';

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
            dispatch({
                type: actionTypes.IS_AUTHENTICATED,
                isAuthenticated: response.data.status === 'success' ? true : false
            });
        });
    };
};

export const register = () => {
    return (dispatch, getState) => {
        let { name, email, password } = getState().authForm;

        axios
            .post(namedRoutes('server.auth.register'), {
                name,
                email,
                password
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
    };
};

export const login = () => {
    return (dispatch, getState) => {
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
    };
};

export const logout = () => {
    return (dispatch, getState) => {
        axios.post(namedRoutes('server.auth.logout'), {}).then(function(response) {
            console.log(response.data);
            dispatch({
                type: actionTypes.AUTH_LOGOUT_REQUEST
            });

            // redirect
            dispatch({
                type: actionTypes.REDIRECT,
                redirectTo: namedRoutes('app.auth.login')
            });
        });
    };
};

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
