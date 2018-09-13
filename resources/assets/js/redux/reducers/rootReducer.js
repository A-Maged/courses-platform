import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import AuthReducer from './AuthReducer';
import UiReducer from './UiReducer';
import CourseReducer from './CourseReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  ui: UiReducer,
  course: CourseReducer,
  form: formReducer
});

export default rootReducer;
