import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import namedRoutes from './namedRoutes';
import PrivateRoute from './PrivateRoute';

import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Logout from '../pages/auth/Logout';
import CourseForm from '../pages/course/CourseForm';
import VideoForm from '../pages/video/VideoForm';
import ShowVideo from '../pages/video/ShowVideo';
import AllCourses from '../pages/course/AllCourses';
import ShowCourse from '../pages/course/ShowCourse';

class Routes extends Component {
	render() {
		return (
			<React.Fragment>
				<Switch>
					<Route path={namedRoutes('app.auth.login')} component={Login} />
					<Route path={namedRoutes('app.auth.register')} component={Register} />
					<Route path={namedRoutes('app.auth.logout')} component={Logout} />

					<PrivateRoute
						path={namedRoutes('app.courses.create')}
						component={CourseForm}
					/>

					<PrivateRoute
						path={namedRoutes('app.courses.show')}
						component={ShowCourse}
					/>

					<PrivateRoute
						exact
						path={namedRoutes('app.courses.index')}
						component={AllCourses}
					/>

					<PrivateRoute
						path={namedRoutes('app.videos.create')}
						component={VideoForm}
					/>

					<PrivateRoute
						path={namedRoutes('app.videos.show')}
						component={ShowVideo}
					/>

					<Route
						path="/"
						render={() => <Redirect to={namedRoutes('app.courses.index')} />}
					/>

					<Route component={() => <h1> no match </h1>} />
				</Switch>
			</React.Fragment>
		);
	}
}

export default Routes;
