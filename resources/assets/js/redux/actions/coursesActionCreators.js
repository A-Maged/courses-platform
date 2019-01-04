import axios from 'axios';

import * as actionTypes from './actionTypes';
import { boundRedirect } from './uiActionCreators';
import { dispatch } from '../store';
import namedRoutes from '../../routing/namedRoutes';

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

export const getCourse = id => {
	return dispatch => {
		let url = namedRoutes('server.courses.show', { id });

		return axios.get(url).then(response => {
			dispatch({
				type: actionTypes.COURSE_VIDEOS,
				course: response.data
			});
		});
	};
};

export const getVideo = id => {
	return dispatch => {
		let url = namedRoutes('server.videos.show', { id });

		return axios.get(url).then(response => {
			dispatch({
				type: actionTypes.VIDEO_DATA,
				video: response.data
			});
		});
	};
};

export const createCourse = data => {
	return (dispatch, getState) => {
		return axios.post(namedRoutes('server.courses.store'), data).then(function(response) {
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

export const selectCourse = id => {
	dispatch({
		type: actionTypes.SELECT_COURSE,
		id
	});
};

export const updateVideoUploadProgress = value => {
	dispatch({
		type: actionTypes.VIDEO_UPLOAD_PROGRESS,
		value
	});
};

export const createVideo = (data, fileSelector) => {
	const url = namedRoutes('server.videos.store');
	const requestConfig = {
		onUploadProgress: progressEvent => {
			let percentage = (progressEvent.loaded / progressEvent.total) * 100;
			updateVideoUploadProgress(percentage);
			console.log(percentage);
		}
	};

	let formData = new FormData();

	for (var key in data) {
		formData.append(key, data[key]);
	}
	formData.append('video_file', document.querySelector(fileSelector).files[0]);

	return (dispatch, getState) => {
		return axios.post(url, formData, requestConfig).then(response => {
			console.log(response.data);

			// redirect
			boundRedirect(namedRoutes('app.courses.index'));
		});
	};
};
