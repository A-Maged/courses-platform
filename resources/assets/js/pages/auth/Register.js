import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import namedRoutes from '../../routing/namedRoutes';
import WithAuthForm from '../../containers/WithAuthForm';
import RegisterForm from '../../components/RegisterForm';

class Register extends Component {
	render() {
		return (
			<React.Fragment>
				{(this.props.isAuthenticated && (
					<Redirect to={namedRoutes('app.courses.index')} />
				)) || <RegisterForm />}
			</React.Fragment>
		);
	}
}

export default WithAuthForm(Register);
