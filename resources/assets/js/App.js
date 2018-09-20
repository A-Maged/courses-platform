import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { connect } from 'react-redux';

import history from './redux/history';
import { dispatch } from './redux/store';
import {
	toggleLoading,
	isAuthenticated,
	boundRouteChanged
} from './redux/actions/actionCreators';

import LoadingScreen from './components/LoadingScreen';
import Nav from './components/Nav';
import Routes from './routing/Routes';
import { LOADING } from './redux/actions/actionTypes';

class App extends Component {
	state = {
		initialUrl: ''
	};

	componentWillMount() {
		this.setState({ initialUrl: history.location.pathname });
		boundRouteChanged(history.location);
	}

	componentDidMount() {
		history.listen(() => {
			boundRouteChanged(history.location);
		});

		/*   VERY IMPORTANT */
		// this makes sure user's data is available in the store
		// but only if user is logged-in (browser has a valid cookie)
		if (!this.props.isAuthenticated) {
			dispatch(toggleLoading());
			dispatch(isAuthenticated()).then(() => {
				history.push(this.state.initialUrl);
			});
		}
	}

	render() {
		return (
			<Router history={history}>
				<React.Fragment>
					<Nav />
					{this.props.loading && <LoadingScreen />}
					<Routes />
				</React.Fragment>
			</Router>
		);
	}
}

export default connect(state => ({
	isAuthenticated: state.auth.isAuthenticated,
	loading: state.ui.loading
}))(App);
