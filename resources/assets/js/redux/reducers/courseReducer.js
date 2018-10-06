import * as actionTypes from '../actions/actionTypes';

const initialState = {
	allCourses: [],
	selectedCourse: {},
	videos: []
};

const courseReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_ALL_COURSES:
			return {
				...state,
				allCourses: action.allCourses
			};

		case actionTypes.DELETE_COURSE:
			return {
				...state,
				allCourses: state.allCourses.filter(course => course.id !== action.id)
			};

		case actionTypes.SELECT_COURSE:
			return {
				...state,
				selectedCourse: state.allCourses.filter(
					course => action.id == course.id
				)[0]
			};

		case actionTypes.COURSE_VIDEOS:
			let modifiedVideos = [...state.videos];
			modifiedVideos[action.course.id] = { ...action.course.videos };

			return {
				...state,
				videos: [...modifiedVideos]
			};

		default:
			return state;
	}
};

export default courseReducer;
