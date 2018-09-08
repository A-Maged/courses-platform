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
    title: state.course.title,
    description: state.course.description,
    publishedStatus: state.course.publishedStatus,
    allCourses: state.course.allCourses
  };
};

const mapDispatchToprops = dispatch => {
  return {
    updateTitle: e => dispatch(actionCreators.courseFormEdit({ title: e.target.value })),
    updateDescription: e =>
      dispatch(actionCreators.courseFormEdit({ description: e.target.value })),
    updatePublishedStatus: e =>
      dispatch(
        actionCreators.courseFormEdit({
          publishedStatus: e.target.value
        })
      ),

    getAllCourses: () => dispatch(actionCreators.getAllCourses()),
    createCourse: () => dispatch(actionCreators.createCourse())
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToprops
  ),
  WithCourse
);
