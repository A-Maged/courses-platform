import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import history from '../../redux/history';
import namedRoutes from '../../routing/namedRoutes';
import WithAuthForm from '../../containers/WithAuthForm';
import LoginForm from '../../components/LoginForm';

class Login extends Component {
	render() {
		return (
			<React.Fragment>
				{(this.props.isAuthenticated && (
					<Redirect to={namedRoutes('app.courses.index')} />
				)) || <LoginForm {...this.props} />}
			</React.Fragment>
		);
	}
}

export default WithAuthForm(Login);
