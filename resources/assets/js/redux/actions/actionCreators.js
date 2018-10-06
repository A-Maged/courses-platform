import axios from 'axios';

import * as actionTypes from './actionTypes';
import { dispatch } from '../store';
import namedRoutes from '../../routing/namedRoutes';
import { resolve } from 'url';

export const boundRedirect = (path, intendedUrl) => {
	dispatch({
		type: actionTypes.REDIRECT,
		redirectTo: path,
		intendedUrl: intendedUrl
	});
};

export const boundRouteChanged = location => {
	dispatch({
		type: actionTypes.ROUTE_CHANGED,
		location
	});
};

export const boundToggleLoading = value => {
	dispatch({
		type: actionTypes.LOADING,
		value
	});
};

// ****************************************************************************

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
	return (dispatch, getState) => {
		return axios
			.get(namedRoutes('server.auth.is_authenticated'))
			.then(response => {
				authRequestSuccess({
					user: response.data.data,
					isAuthenticated: true
				});

				boundToggleLoading(false);
			})
			.catch(error => {
				// console.log(error);
				dispatch(logout());
				boundToggleLoading(false);
			});
	};
};

export const register = () => {
	return (dispatch, getState) => {
		let { name, email, password } = getState().auth;

		axios
			.post(namedRoutes('server.auth.register'), { name, email, password })
			.then(function(response) {
				dispatch({
					type: actionTypes.AUTH_REQUEST_SUCCESS,
					user: response.data.data,
					isAuthenticated: true
				});

				// redirect
				boundRedirect(namedRoutes('app.root'));
			});
	};
};

export const login = redirectUrl => {
	return (dispatch, getState) => {
		let { email, password, rememberMe } = getState().auth;

		return axios
			.post(namedRoutes('server.auth.login'), {
				email: email,
				password: password,
				remember: rememberMe
			})
			.then(function(response) {
				authRequestSuccess({
					user: response.data.data,
					isAuthenticated: true
				});
			})
			.catch(error => {
				console.log(error);
			});
	};
};

export const logout = redirectUrl => {
	return (dispatch, getState) => {
		return axios
			.post(namedRoutes('server.auth.logout'), {})
			.then(function(response) {
				dispatch({
					type: actionTypes.AUTH_LOGOUT_REQUEST
				});
			});
	};
};

export const authRequestSuccess = ({ user, isAuthenticated }) => {
	dispatch({
		type: actionTypes.AUTH_REQUEST_SUCCESS,
		user,
		isAuthenticated
	});
};

// ****************************************************************************

export const getAllCourses = () => {
	return dispatch => {
		let url = namedRoutes('server.courses.index');

		return axios.get(url).then(response => {
			dispatch({
				type: actionTypes.GET_ALL_COURSES,
				allCourses: response.data.data
			});
		});
	};
};

export const createCourse = data => {
	return (dispatch, getState) => {
		return axios
			.post(namedRoutes('server.courses.store'), data)
			.then(function(response) {
				// redirect
				boundRedirect(namedRoutes('app.courses.index'));
			});
	};
};

export const deleteCourse = id => {
	let url = namedRoutes('server.courses.destroy', { id });

	return (dispatch, getState) => {
		return axios.delete(url).then(function(response) {
			dispatch({
				type: actionTypes.DELETE_COURSE,
				id: id
			});
		});
	};
};

export const createVideo = (data, fileSelector) => {
	let formData = new FormData();

	for (var key in data) {
		formData.append(key, data[key]);
	}
	formData.append('video_file', document.querySelector(fileSelector).files[0]);

	return (dispatch, getState) => {
		return axios
			.post(namedRoutes('server.videos.store'), formData)
			.then(response => {
				console.log(response.data);

				// redirect
				boundRedirect(namedRoutes('app.courses.index'));
			});
	};
};
