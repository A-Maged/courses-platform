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
		email: state.auth.email,
		password: state.auth.password,
		name: state.auth.name,
		rememberMe: state.auth.rememberMe,
		isAuthenticated: state.auth.isAuthenticated,
		user: state.auth.user
	};
};

const mapDispatchToprops = dispatch => {
	return {
		nameChanged: e => dispatch(actionCreators.authFormEdit({ name: e.target.value })),
		emailChanged: e => dispatch(actionCreators.authFormEdit({ email: e.target.value })),
		passwordChanged: e =>
			dispatch(actionCreators.authFormEdit({ password: e.target.value })),
		rememberMeChanged: e => dispatch(actionCreators.authFormUpdateRememberMe()),

		login: redirectUrl => dispatch(actionCreators.login(redirectUrl)),
		logout: () => dispatch(actionCreators.logout()),
		register: () => dispatch(actionCreators.register())
	};
};

export default compose(
	connect(
		mapStateToProps,
		mapDispatchToprops
	),
	WithAuthForm
);
