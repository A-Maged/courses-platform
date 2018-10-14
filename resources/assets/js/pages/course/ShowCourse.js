import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';

import { selectCourse, getCourse } from '../../redux/actions/actionCreators';
import namedRoutes from '../../routing/namedRoutes';
import WithCourse from '../../containers/WithCourse';
import Card from '../../components/Card';
import LoadingSpinner from '../../components/LoadingSpinner';

class ShowCourse extends Component {
	componentWillMount() {
		selectCourse('');
	}

	componentDidMount() {
		this.props.getAllCourses().then(() => {
			selectCourse(this.props.match.params.id);
		});

		this.props.getCourse(this.props.match.params.id);
	}

	componentWillUnmount() {
		selectCourse('');
	}

	renderVideosList() {
		let videos = this.props.videos[this.props.selectedCourse.id];

		if (!videos || Object.keys(videos).length === 0) return;

		return Object.keys(videos).map(key => {
			const video = videos[key];
			const videoUrl =
				namedRoutes('app.courses.show', { id: this.props.selectedCourse.id }) +
				'?video=' +
				video.id;

			return (
				<Link to={videoUrl} key={Math.random()}>
					<Card header={video.title}>{/*video.description*/}</Card>
				</Link>
			);
		});
	}

	render() {
		let course = this.props.selectedCourse;

		return !course || Object.keys(course).length === 0 ? (
			<LoadingSpinner />
		) : (
			<Card header={course.title}>
				<p>{course.description}</p>

				{/* render video player */}

				{this.renderVideosList()}
			</Card>
		);
	}
}

export default WithCourse(ShowCourse);
