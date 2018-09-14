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
    allCourses: state.course.allCourses
  };
};

const mapDispatchToprops = dispatch => {
  return {
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
