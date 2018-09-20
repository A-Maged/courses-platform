import * as actionTypes from '../actions/actionTypes';

const initialState = {
	redirectTo: '',
	intendedUrl: '/cm',
	location: {}
};

const routingReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.REDIRECT:
			return {
				...state,
				redirectTo: action.redirectTo,
				intendedUrl: action.intendedUrl
			};

		case actionTypes.ROUTE_CHANGED:
			return {
				...state,
				location: action.location
			};
		default:
			return state;
	}
};

export default routingReducer;
