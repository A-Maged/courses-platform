import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import * as actionCreators from '../redux/actions/actionCreators';
import namedRoutes from './namedRoutes';

class PrivateRoute extends Component {
	componentWillMount() {
		let intendedUrl = this.props.location.pathname + this.props.location.search;
		let redirectTo = namedRoutes('app.auth.login');

		if (!this.props.isAuthenticated) {
			this.props.boundRedirect(redirectTo, intendedUrl);
		}
	}

	render() {
		let { component: Component, ...rest } = this.props;

		return <Route {...rest} render={props => <Component {...props} />} />;

		// return this.props.isAuthenticated ? (
		// 	<Route {...rest} render={props => <Component {...props} />} />
		// ) : null;
	}
}

export default connect(
	state => ({
		isAuthenticated: state.auth.isAuthenticated
	}),
	dispatch => ({
		boundRedirect: (path, intendedUrl) => actionCreators.boundRedirect(path, intendedUrl)
	})
)(PrivateRoute);
