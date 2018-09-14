import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: false,
  redirectTo: '',
  errors: []
};

const UiReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REDIRECT:
      return {
        ...state,
        redirectTo: action.to
      };

    case actionTypes.LOADING:
      return {
        ...state,
        loading: action.value || !state.loading
      };

    default:
      return state;
  }
};

export default UiReducer;
