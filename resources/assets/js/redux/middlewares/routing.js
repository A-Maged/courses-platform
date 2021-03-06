import * as actionTypes from '../actions/actionTypes';
import history from '../history';

export const routeRedirect = store => next => action => {
	if (action.type !== actionTypes.REDIRECT) return next(action);

	history.push(action.redirectTo);

	if (!action.intendedUrl) action.intendedUrl = store.getState().ui.intendedUrl;
	// console.log(action);
	// return;
	return next(action);
};
