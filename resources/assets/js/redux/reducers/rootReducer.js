import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import * as actionTypes from '../actions/actionTypes';
import authReducer from './authReducer';
import uiReducer from './uiReducer';
import courseReducer from './courseReducer';
import routingReducer from './routingReducer';

const appReducer = combineReducers({
	auth: authReducer,
	ui: uiReducer,
	course: courseReducer,
	form: formReducer,
	routing: routingReducer
});

const rootReducer = (state, action) => {
	// resets all state when logging out
	if (action.type === actionTypes.AUTH_LOGOUT_REQUEST) {
		state = undefined;
	}
	return appReducer(state, action);
};

export default rootReducer;
