import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { dispatch } from '../../redux/store';
import { createCourse } from '../../redux/actions/actionCreators';
import Card from '../../components/Card';

class CourseForm extends Component {
	onFormSubmite = data => {
		dispatch(createCourse(data));
	};

	render() {
		const { handleSubmit } = this.props;

		return (
			<Card header="create course">
				<form onSubmit={handleSubmit(this.onFormSubmite)}>
					<div className="form-group">
						<label htmlFor="courseTitle">title</label>
						<Field
							component="input"
							name="title"
							placeholder="title"
							className="form-control"
							type="text"
						/>
					</div>

					<div className="form-group">
						<label htmlFor="courseDescription">description</label>
						<Field
							component="textarea"
							name="description"
							className="form-control"
							placeholder="description"
							cols="30"
							rows="10"
						/>
					</div>

					<div className="form-group">
						<label htmlFor="courseDuration">duration</label>
						<Field
							component="input"
							name="duration"
							className="form-control"
							placeholder="duration"
						/>
					</div>

					<div className="form-group">
						<label htmlFor="publishedStatus">published status</label>
						<Field
							component="select"
							className="form-control"
							name="publishedStatus"
						>
							<option value="draft">draft</option>
							<option value="published">published</option>
						</Field>
					</div>

					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</Card>
		);
	}
}

export default reduxForm({
	form: 'courseForm',
	initialValues: {
		publishedStatus: 'draft'
	}
})(CourseForm);
