import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import namedRoutes from '../routing/namedRoutes';

const Nav = props => {
	return (
		<nav className="nav">
			<div className="img-wrap">
				<img src="/images/logo.png" />
			</div>

			{!props.isAuthenticated ? (
				<React.Fragment>
					<Link to={namedRoutes('app.auth.register')}>register</Link>
					<Link to={namedRoutes('app.auth.login')}>login</Link>
				</React.Fragment>
			) : (
				<React.Fragment>
					<Link to={namedRoutes('app.videos.create')}>create video</Link>
					<Link to={namedRoutes('app.courses.index')}>all course</Link>
					<Link to={namedRoutes('app.courses.create')}>create course</Link>
					<Link to={namedRoutes('app.auth.logout')}>logout</Link>
				</React.Fragment>
			)}
		</nav>
	);
};

export default connect(state => ({
	isAuthenticated: state.auth.isAuthenticated
}))(Nav);

// export default Nav;
