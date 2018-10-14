import * as actionTypes from './actionTypes';
import { dispatch } from '../store';

export const boundRedirect = (path, intendedUrl) => {
	dispatch({
		type: actionTypes.REDIRECT,
		redirectTo: path,
		intendedUrl: intendedUrl
	});
};

export const boundRouteChanged = location => {
	dispatch({
		type: actionTypes.ROUTE_CHANGED,
		location
	});
};

export const boundToggleLoading = value => {
	dispatch({
		type: actionTypes.LOADING,
		value
	});
};
