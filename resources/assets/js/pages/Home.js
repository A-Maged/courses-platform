import React, { Component } from 'react';

import Nav from '../components/Nav';
import AllCourses from './course/AllCourses';

class Home extends Component {
	render() {
		return (
			<div className="page-home">
				<aside>
					<Nav />
				</aside>
				<main className="content">
					<AllCourses />
				</main>
			</div>
		);
	}
}

export default Home;
