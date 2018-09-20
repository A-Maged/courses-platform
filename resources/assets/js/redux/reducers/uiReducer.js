import * as actionTypes from '../actions/actionTypes';

const initialState = {
	loading: false,
	errors: []
};

const uiReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.LOADING:
			return {
				...state,
				loading: action.value || !state.loading
			};

		default:
			return state;
	}
};

export default uiReducer;
