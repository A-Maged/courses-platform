import * as actionTypes from '../actions/actionTypes';

const initialState = {
    title: '',
    description: '',
    publishedStatus: 'draft',
    allCourses: []
};

const CourseReducer = (state = initialState, action) => {
    switch (action.type) {
        //  using payload based actions
        case actionTypes.CREATE_COURSE__FORM_EDIT:
            return {
                ...state,
                ...action.payload
            };

        case actionTypes.GET_ALL_COURSES:
            return {
                ...state,
                allCourses: action.allCourses
            };

        default:
            return state;
    }
};

export default CourseReducer;
