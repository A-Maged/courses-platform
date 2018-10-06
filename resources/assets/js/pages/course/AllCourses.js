import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import namedRoutes from '../../routing/namedRoutes';
import WithCourse from '../../containers/WithCourse';
import Card from '../../components/Card';

class AllCourses extends Component {
	componentDidMount() {
		// if (this.props.allCourses.length === 0) {
		this.props.getAllCourses();
		// }
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

									<Link
										className="btn"
										to={namedRoutes('app.courses.show', { id: course.id })}
									>
										show
									</Link>

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
