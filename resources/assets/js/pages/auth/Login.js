import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import namedRoutes from '../../routing/namedRoutes';
import WithAuthForm from '../../containers/WithAuthForm';
import LoginForm from '../../components/LoginForm';

class Login extends Component {
	componentWillMount() {
		console.log('Login::props  ', this.props);
	}

	render() {
		return (
			<div>
				{(this.props.isAuthenticated && <Redirect to="/qqqqq" />) || (
					<LoginForm {...this.props} />
				)}
			</div>
		);
	}
}

export default WithAuthForm(Login);
