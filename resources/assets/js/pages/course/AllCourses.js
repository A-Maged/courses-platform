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
			this.props.allCourses &&
			this.props.allCourses.map((course, i) => {
				return (
					<React.Fragment key={i}>
						<Card header={course.title}>
							<p>{course.description}</p>
							<b>{course.duration}</b>

							<Link className="btn" to={namedRoutes('app.courses.show', { id: course.id })}>
								show
							</Link>

							<button
								className="btn btn-danger"
								onClick={this.props.deleteCourse.bind(null, course.id)}
							>
								delete
							</button>
						</Card>
						<br />
					</React.Fragment>
				);
			})
		);
	}
}

export default WithCourse(AllCourses);
