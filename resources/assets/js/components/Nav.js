import React from 'react';
import { NavLink } from 'react-router-dom';

import namedRoutes from '../routing/namedRoutes';

const navStyle = {
	fontWeight: 'bold',
	backgroundColor: '#444'
};

const Nav = () => (
	<nav className="nav">
		<NavLink activeStyle={navStyle} to={namedRoutes('app.videos.create')}>
			create video
		</NavLink>

		<NavLink activeStyle={navStyle} to={namedRoutes('app.courses.index')}>
			all course
		</NavLink>
		<NavLink activeStyle={navStyle} to={namedRoutes('app.courses.create')}>
			create course
		</NavLink>

		<NavLink activeStyle={navStyle} to={namedRoutes('app.auth.register')}>
			register
		</NavLink>
		<NavLink activeStyle={navStyle} to={namedRoutes('app.auth.login')}>
			login
		</NavLink>
		<NavLink activeStyle={navStyle} to={namedRoutes('app.auth.logout')}>
			logout
		</NavLink>
	</nav>
);

export default Nav;
