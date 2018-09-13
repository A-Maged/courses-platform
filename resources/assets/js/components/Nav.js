import React from 'react';
import { NavLink } from 'react-router-dom';

import namedRoutes from '../routing/namedRoutes';

const Nav = () => (
  <nav className="nav">
    <NavLink to="/app/protected">protected</NavLink>

    <NavLink to={namedRoutes('app.videos.create')}>create video</NavLink>

    <NavLink to={namedRoutes('app.courses.index')}>all course</NavLink>
    <NavLink to={namedRoutes('app.courses.create')}>create course</NavLink>

    <NavLink to={namedRoutes('app.auth.register')}>register</NavLink>
    <NavLink to={namedRoutes('app.auth.login')}>login</NavLink>
    <NavLink to={namedRoutes('app.auth.logout')}>logout</NavLink>
  </nav>
);

export default Nav;
