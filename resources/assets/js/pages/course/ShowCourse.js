import React, { Component } from 'react';
// import {  } from "lodash";
import { selectCourse, getCourse } from '../../redux/actions/actionCreators';
import WithCourse from '../../containers/WithCourse';
import Card from '../../components/Card';

class ShowCourse extends Component {
	componentDidMount() {
		this.props.getAllCourses().then(() => {
			selectCourse(this.props.match.params.id);
		});

		// get course videos and add them to store
		this.props.getCourse(this.props.match.params.id);
	}

	componentWillUnmount() {
		selectCourse('');
	}

	renderVideos() {
		let videos = this.props.videos[this.props.selectedCourse.id];
		let results = [];

		for (const key in videos) {
			if (videos.hasOwnProperty(key)) {
				const video = videos[key];

				results.push(
					<div key={Math.random()}>
						<Card header={video.title} />
					</div>
				);
			}
		}

		return [...results];
	}

	render() {
		let course = this.props.selectedCourse;

		return !course ? null : (
			<Card header={course.title}>
				<p>{course.description}</p>
				{this.renderVideos()}
			</Card>
		);
	}
}

export default WithCourse(ShowCourse);
