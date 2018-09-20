import axios from 'axios';

import * as actionTypes from './actionTypes';
import { dispatch } from '../store';
import namedRoutes from '../../routing/namedRoutes';

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
export const toggleLoading = value => ({
	type: actionTypes.LOADING,
	value
});

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
				dispatch(logout());
			}

			dispatch(toggleLoading(false));
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

				boundRedirect();
			})
			.catch(error => {
				console.log(error);
			});
	};
};

export const logout = () => {
	return (dispatch, getState) => {
		axios.post(namedRoutes('server.auth.logout'), {}).then(function(response) {
			dispatch({
				type: actionTypes.AUTH_LOGOUT_REQUEST
			});

			boundRedirect(namedRoutes('app.auth.login'));
		});
	};
};

export const getAllCourses = () => {
	return dispatch => {
		let url = namedRoutes('server.courses.index');

		axios.get(url).then(response => {
			dispatch({
				type: actionTypes.GET_ALL_COURSES,
				allCourses: response.data.data
			});
		});
	};
};

export const createCourse = data => {
	return (dispatch, getState) => {
		axios
			.post(namedRoutes('server.courses.store'), {
				title: data.title,
				description: data.description,
				publishedStatus: data.publishedStatus
			})
			.then(function(response) {
				// redirect
				boundRedirect(namedRoutes('app.courses.index'));
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
		axios.post(namedRoutes('server.videos.store'), formData).then(response => {
			console.log(response.data);

			// redirect
			boundRedirect(namedRoutes('app.courses.index'));
		});
	};
};
