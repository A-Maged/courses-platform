import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import queryString from 'query-string';

import history from '../../redux/history';
import { selectCourse, getCourse } from '../../redux/actions/actionCreators';
import namedRoutes from '../../routing/namedRoutes';
import WithCourse from '../../containers/WithCourse';
import Card from '../../components/Card';
import LoadingSpinner from '../../components/LoadingSpinner';

class ShowCourse extends Component {
	videoElement = React.createRef();

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

	componentDidUpdate() {
		if (this.videoElement.current) {
			this.videoElement.current.load();
		}
	}

	renderVideosList() {
		let videos = this.props.videos[this.props.selectedCourse.id];

		if (!videos || Object.keys(videos).length === 0) return <h3>no videos to show</h3>;

		return (
			<ul>
				{Object.keys(videos).map((key, index) => {
					const video = videos[key];
					const videoUrl =
						namedRoutes('app.courses.show', { id: this.props.selectedCourse.id }) +
						'?video=' +
						video.id;

					return (
						<li key={Math.random()}>
							<Link to={videoUrl}>{index + 1 + '. ' + video.title}</Link>
						</li>
					);
				})}
			</ul>
		);
	}

	renderVideoPlayer(videoID) {
		let allVideos = this.props.videos[this.props.selectedCourse.id];

		if (!allVideos) return;

		let video = allVideos[videoID];
		let videoIndex = Object.keys(allVideos).indexOf(videoID) + 1 || 1;

		// !video ? change querystring to the first video in allVideos
		video = video || allVideos[Object.keys(allVideos)[0]];

		return (
			<div className="video-wrap">
				<video ref={this.videoElement} controls>
					<source src={video.url} type="video/mp4" /> Your browser does not support the video tag.
				</video>
				<h3 className="title">{videoIndex + '. ' + video.title}</h3>
				{/* <p>{video.description}</p> */}
				{/* <p>{video.updated_at}</p> */}
			</div>
		);
	}

	render() {
		let videoID = queryString.parse(history.location.search).video;

		let course = this.props.selectedCourse;

		return !course || Object.keys(course).length === 0 ? (
			<LoadingSpinner />
		) : (
			<div className="current-course page">
				<div className="page-tile">{course.title}</div>
				<div className="page-content">
					{this.renderVideoPlayer(videoID)}
					<p>{course.description}</p>
					{this.renderVideosList()}
				</div>
			</div>
		);
	}
}

export default WithCourse(ShowCourse);
