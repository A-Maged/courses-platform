// a form to create a video record in db and upload the video-file
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { dispatch } from '../../redux/store';
import { createVideo } from '../../redux/actions/actionCreators';
import WithCourse from '../../containers/WithCourse';
import Card from '../../components/Card';

const onFormSubmite = data => {
	dispatch(createVideo(data, '#video_file'));
};

class VideoForm extends Component {
	componentDidMount() {
		this.props.getAllCourses();
	}

	render() {
		const { handleSubmit, allCourses } = this.props;

		return (
			<Card header="create video">
				<form onSubmit={handleSubmit(onFormSubmite)}>
					<div className="form-group">
						<label htmlFor="title">title</label>
						<Field name="title" component="input" className="form-control" type="text" />
					</div>
					<div className="form-group">
						<label htmlFor="description">description</label>
						<Field
							name="description"
							component="textarea"
							className="form-control"
							type="text"
						/>
					</div>

					<div className="form-group">
						<label htmlFor="course_id">add to course</label>
						<Field component="select" className="form-control" name="course_id">
							<option value="">single</option>

							{allCourses &&
								allCourses.map(course => {
									return (
										<option key={course.id} value={course.id}>
											{course.title}
										</option>
									);
								})}
						</Field>
					</div>

					<div className="form-group">
						<label htmlFor="publishedStatus">published status</label>
						<Field component="select" className="form-control" name="publishedStatus">
							<option value="draft">draft</option>
							<option value="published">published</option>
						</Field>
					</div>
					<div className="form-group">
						<label htmlFor="video_file">upload file</label>
						<input type="file" name="video_file" id="video_file" />
					</div>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</Card>
		);
	}
}

VideoForm = WithCourse(VideoForm);

export default reduxForm({
	form: 'videoForm',
	initialValues: {
		publishedStatus: 'draft'
	}
})(VideoForm);
