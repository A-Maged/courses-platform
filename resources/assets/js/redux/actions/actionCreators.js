import axios from 'axios';

import * as actionTypes from './actionTypes';
import { namedRoutes } from '../../Routes';

export const authFormEdit = payload => {
    return {
        type: actionTypes.AUTH_FORM_EDIT,
        payload
    };
};

export const authFormUpdateRememberMe = value => {
    return {
        type: actionTypes.AUTH_FORM_UPDATE_REMEMBER_ME,
        value
    };
};

export const courseFormEdit = payload => {
    return {
        type: actionTypes.CREATE_COURSE__FORM_EDIT,
        payload
    };
};

export const getAllCourses = () => {
    return dispatch => {
        axios.get(namedRoutes('courses.index')).then(response => {
            dispatch({
                type: actionTypes.GET_ALL_COURSES,
                allCourses: response.data.data
            });
        });
    };
};
