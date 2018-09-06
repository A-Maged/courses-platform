import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { getNestedProp } from './utils';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Logout from './pages/auth/Logout';
import CourseForm from './pages/course/CourseForm';
import AllCourses from './pages/course/AllCourses';

// usage
// namedRoutes('courses.edit', { id: 1 });
export const namedRoutes = (key, term) => {
    let { token, id } = term || {};

    let routes = {
        app: {
            root: '/home'
        },
        auth: {
            register: '/register',
            login: '/login',
            logout: '/logout',
            password: {
                email: '/password/email',
                request: '/password/reset',
                reset: `/password/reset/${token}`
            }
        },
        courses: {
            index: '/courses',
            store: '/courses',
            create: '/courses/create',
            show: `/courses/${id}`,
            update: `/courses/${id}`,
            destroy: `/courses/${id}`,
            edit: `/courses/${id}/edit`
        }
    };

    return getNestedProp(routes, key);
};

const Routes = () => (
    <React.Fragment>
        <Switch>
            <Route
                exact
                path="/"
                component={() => <Redirect to={namedRoutes('auth.login')} />}
            />
            <Route path={namedRoutes('auth.login')} component={Login} />
            <Route path={namedRoutes('auth.register')} component={Register} />
            <Route path={namedRoutes('auth.logout')} component={Logout} />

            <Route
                path={namedRoutes('courses.create')}
                component={CourseForm}
            />
            <Route
                exact
                path={namedRoutes('courses.index')}
                component={AllCourses}
            />

            <Route component={() => <h1> no match </h1>} />
        </Switch>
    </React.Fragment>
);

export default Routes;
