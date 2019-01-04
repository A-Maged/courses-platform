import * as actionTypes from '../actions/actionTypes';

const initialState = {
	allCourses: [],
	selectedCourse: {},
	videos: [],
	videoUploadProgress: 0
};

const courseReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.VIDEO_UPLOAD_PROGRESS:
			return {
				...state,
				videoUploadProgress: action.value
			};

		case actionTypes.GET_ALL_COURSES:
			return {
				...state,
				allCourses: action.allCourses
			};

		case actionTypes.DELETE_COURSE:
			return {
				...state,
				allCourses: state.allCourses.filter(course => course.id !== action.id)
			};

		case actionTypes.SELECT_COURSE:
			return {
				...state,
				selectedCourse: state.allCourses.filter(course => action.id == course.id)[0]
			};

		case actionTypes.COURSE_VIDEOS:
			let modifiedVideos = { ...state.videos };
			action.course.videos.map(video => {
				modifiedVideos[video.course_id] = {
					...modifiedVideos[video.course_id],
					[video.id]: video
				};
			});
			return {
				...state,
				videos: { ...modifiedVideos }
			};

		case actionTypes.VIDEO_DATA:
			let newVideos = {
				...state.videos,
				[action.video.course_id]: {
					...state.videos[action.video.course_id],
					[action.video.id]: action.video
				}
			};

			return {
				...state,
				videos: { ...newVideos }
			};

		default:
			return state;
	}
};

export default courseReducer;
