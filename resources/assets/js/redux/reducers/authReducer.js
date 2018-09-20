import * as actionTypes from '../actions/actionTypes';

const initialState = {
	email: '',
	password: '',
	name: '',
	rememberMe: true,
	isAuthenticated: false,
	user: {}
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		//  using payload based actions
		case actionTypes.AUTH_FORM_EDIT:
			return {
				...state,
				...action.payload
			};

		case actionTypes.AUTH_FORM_UPDATE_REMEMBER_ME:
			return {
				...state,
				rememberMe: !state.rememberMe
			};

		case actionTypes.AUTH_LOGOUT_REQUEST:
			return {
				...state,
				isAuthenticated: false,
				user: {}
			};

		case actionTypes.AUTH_REQUEST_SUCCESS:
			return {
				...state,
				isAuthenticated: action.isAuthenticated,
				user: action.user
			};

		default:
			return state;
	}
};

export default authReducer;
