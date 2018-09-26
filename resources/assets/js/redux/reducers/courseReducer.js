import * as actionTypes from '../actions/actionTypes';

const initialState = {
	allCourses: []
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

		default:
			return state;
	}
};

export default courseReducer;
