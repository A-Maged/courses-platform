import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../redux/actions/actionCreators';

const WithAuthForm = WrapedComponent => {
    return class extends Component {
        render() {
            return <WrapedComponent {...this.props} />;
        }
    };
};

const mapStateToProps = state => {
    return {
        email: state.authForm.email,
        password: state.authForm.password,
        name: state.authForm.name,
        rememberMe: state.authForm.rememberMe
    };
};

const mapDispatchToprops = (dispatch, getState) => {
    return {
        nameChanged: e =>
            dispatch(actionCreators.authFormEdit({ name: e.target.value })),
        emailChanged: e =>
            dispatch(actionCreators.authFormEdit({ email: e.target.value })),
        passwordChanged: e =>
            dispatch(actionCreators.authFormEdit({ password: e.target.value })),
        rememberMeChanged: e =>
            dispatch(actionCreators.authFormUpdateRememberMe())
    };
};

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToprops
    ),
    WithAuthForm
);
