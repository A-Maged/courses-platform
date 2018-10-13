import React, { Component } from 'react';

import WithCourse from '../../containers/WithCourse';
import LoadingSpinner from '../../components/LoadingSpinner';

class ShowVideo extends Component {
	componentWillMount() {
		this.videoID = this.props.match.params.id;

		this.props.getVideo(this.videoID);
	}

	videoDetails() {
		let videos = this.props.videos;

		let video = Object.keys(videos).map(key => {
			return videos[key][this.videoID];
		});

		if (!!video[0]) {
			return video[0];
		} else if (!!video[1]) {
			return video[1];
		}
	}

	renderVideo(video) {
		return (
			<div>
				<h3>{video.title}</h3>
				<p>{video.description}</p>
				<p>{video.updated_at}</p>
				<video width="320" height="240" controls>
					<source src={video.url} type="video/mp4" /> Your browser does not
					support the video tag.
				</video>
				{console.log(video)}
			</div>
		);
	}

	render() {
		let video = this.videoDetails();

		return !video || Object.keys(video).length === 0 ? (
			<LoadingSpinner />
		) : (
			this.renderVideo(video)
		);
	}
}

export default WithCourse(ShowVideo);
