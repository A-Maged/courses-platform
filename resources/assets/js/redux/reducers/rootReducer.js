import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import uiReducer from './uiReducer';
import courseReducer from './courseReducer';
import routingReducer from './routingReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	ui: uiReducer,
	course: courseReducer,
	form: formReducer,
	routing: routingReducer
});

export default rootReducer;
