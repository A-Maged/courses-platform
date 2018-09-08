import * as actionTypes from '../actions/actionTypes';
import history from '../history';

export const uiRedirect = store => next => action => {
  if (action.type === actionTypes.REDIRECT) {
    let url = store.getState().ui.redirectTo;
    history.push(action.redirectTo);
  }
  return next(action);
};
