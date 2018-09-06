import React from 'react';
import { NavLink } from 'react-router-dom';

import { namedRoutes } from '../Routes';

const Nav = () => (
    <nav className="nav">
        <NavLink to={namedRoutes('courses.index')}>all course</NavLink>
        <NavLink to={namedRoutes('courses.create')}>create course</NavLink>
        <NavLink to={namedRoutes('auth.register')}>register</NavLink>
        <NavLink to={namedRoutes('auth.login')}>login</NavLink>
        <NavLink to={namedRoutes('auth.logout')}>logout</NavLink>
    </nav>
);

export default Nav;
