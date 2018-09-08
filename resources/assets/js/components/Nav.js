import React from 'react';
import { NavLink } from 'react-router-dom';

import { namedRoutes } from '../Routes';

const Nav = () => (
    <nav className="nav">
        <NavLink to={namedRoutes('app.courses.index')}>all course</NavLink>
        <NavLink to={namedRoutes('app.courses.create')}>create course</NavLink>
        <NavLink to={namedRoutes('app.auth.register')}>register</NavLink>
        <NavLink to={namedRoutes('app.auth.login')}>login</NavLink>
        <NavLink to={namedRoutes('app.auth.logout')}>logout</NavLink>
    </nav>
);

export default Nav;
