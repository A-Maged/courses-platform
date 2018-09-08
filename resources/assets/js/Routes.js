import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { getNestedProp } from './utils';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Logout from './pages/auth/Logout';
import CourseForm from './pages/course/CourseForm';
import AllCourses from './pages/course/AllCourses';

// usage
// namedRoutes('app.courses.edit', { id: 1 });
export const namedRoutes = (key, term) => {
  let { token, id } = term || {};

  let routes = {
    app: {
      root: '/app/home',
      auth: {
        login: '/app/login',
        logout: '/app/logout',
        register: '/app/register'
      },
      courses: {
        index: '/app/courses',
        create: '/app/courses/create',
        edit: `/app/courses/${id}/edit`
      }
    },
    //   ***************************************
    server: {
      auth: {
        is_authenticated: '/is_authenticated',
        login: '/login',
        logout: '/logout',
        register: '/register',
        password: {
          email: '/password/email',
          request: '/password/reset',
          reset: `/password/reset/${token}`
        }
      },

      courses: {
        index: '/courses',
        store: '/courses',
        show: `/courses/${id}`,
        update: `/courses/${id}`,
        destroy: `/courses/${id}`
      }
    }
  };

  return getNestedProp(routes, key);
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      false ? <Component {...props} /> : <Redirect to={namedRoutes('app.auth.login')} />
    }
  />
);

const Routes = () => (
  <React.Fragment>
    <Switch>
      <PrivateRoute path="/protected" component={() => <h2>protected</h2>} />

      {/* <Route exact path="/" component={RedirectToLogin} /> */}
      <Route path={namedRoutes('app.auth.login')} component={Login} />
      <Route path={namedRoutes('app.auth.register')} component={Register} />
      <Route path={namedRoutes('app.auth.logout')} component={Logout} />

      <Route path={namedRoutes('app.courses.create')} component={CourseForm} />
      <Route exact path={namedRoutes('app.courses.index')} component={AllCourses} />

      <Route component={() => <h1> no match </h1>} />
    </Switch>
  </React.Fragment>
);

export default Routes;
