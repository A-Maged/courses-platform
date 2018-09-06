import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import UiReducer from './UiReducer';
import CourseReducer from './CourseReducer';

const rootReducer = combineReducers({
    authForm: AuthReducer,
    ui: UiReducer,
    course: CourseReducer
});

export default rootReducer;
