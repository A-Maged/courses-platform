import * as actionTypes from '../actions/actionTypes';

const initialState = {
    email: '',
    password: '',
    name: '',
    rememberMe: true
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        //  using payload based actions
        case actionTypes.AUTH_FORM_EDIT:
            return {
                ...state,
                ...action.payload
            };

        case actionTypes.AUTH_FORM_UPDATE_REMEMBER_ME:
            return {
                ...state,
                rememberMe: !state.rememberMe
            };

        default:
            return state;
    }
};

export default AuthReducer;
