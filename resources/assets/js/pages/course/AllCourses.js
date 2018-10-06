import React, { Component } from 'react';
import axios from 'axios';

import namedRoutes from '../../routing/namedRoutes';
import WithCourse from '../../containers/WithCourse';
import Card from '../../components/Card';

class AllCourses extends Component {
	componentDidMount() {
		this.props.getAllCourses();
	}

	render() {
		return (
			<div>
				{this.props.allCourses &&
					this.props.allCourses.map((course, i) => {
						return (
							<div key={i}>
								<Card header={course.title}>
									<p>{course.description}</p>
									<b>{course.duration}</b>
									<button
										className="btn"
										onClick={this.props.deleteCourse.bind(null, course.id)}
									>
										delete
									</button>
								</Card>
								<br />
							</div>
						);
					})}
			</div>
		);
	}
}

export default WithCourse(AllCourses);
