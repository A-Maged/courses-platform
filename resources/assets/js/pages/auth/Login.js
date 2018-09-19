import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { withLastLocation } from 'react-router-last-location';

import namedRoutes from '../../routing/namedRoutes';
import WithAuthForm from '../../containers/WithAuthForm';
import LoginForm from '../../components/LoginForm';

class Login extends Component {
	render() {
		return (
			<div>
				{(this.props.isAuthenticated && (
					<Redirect to={this.props.lastLocation.pathname} />
				)) || <LoginForm />}
			</div>
		);
	}
}

export default withLastLocation(WithAuthForm(Login));
