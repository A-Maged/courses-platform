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

		default:
			return state;
	}
};

export default courseReducer;
