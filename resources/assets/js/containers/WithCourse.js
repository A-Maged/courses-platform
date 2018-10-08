import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../redux/actions/actionCreators';

const WithCourse = WrapedComponent => {
	return class extends Component {
		render() {
			return <WrapedComponent {...this.props} />;
		}
	};
};

const mapStateToProps = state => {
	return {
		allCourses: state.course.allCourses,
		selectedCourse: state.course.selectedCourse,
		videos: state.course.videos
	};
};

const mapDispatchToprops = dispatch => {
	return {
		getAllCourses: () => dispatch(actionCreators.getAllCourses()),
		createCourse: () => dispatch(actionCreators.createCourse()),
		deleteCourse: id => dispatch(actionCreators.deleteCourse(id)),
		selectCourse: id => dispatch(actionCreators.selectCourse(id)),
		getCourse: id => dispatch(actionCreators.getCourse(id)),
		getVideo: id => dispatch(actionCreators.getVideo(id))
	};
};

export default compose(
	connect(
		mapStateToProps,
		mapDispatchToprops
	),
	WithCourse
);
