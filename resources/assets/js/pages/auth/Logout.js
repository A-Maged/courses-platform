import React, { Component } from 'react';

import WithAuthForm from '../../containers/WithAuthForm';
import { boundRedirect } from '../../redux/actions/actionCreators';
import namedRoutes from '../../routing/namedRoutes';

class Logout extends Component {
	componentDidMount() {
		this.props.logout().then(() => {
			boundRedirect(namedRoutes('app.auth.login'));
		});
	}

	render() {
		return null;
	}
}

export default WithAuthForm(Logout);
