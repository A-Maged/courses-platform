import * as actionTypes from '../actions/actionTypes';

const initialState = {
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

        default:
            return state;
    }
};

export default UiReducer;
