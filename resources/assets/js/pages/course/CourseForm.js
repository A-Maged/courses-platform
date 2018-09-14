import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import WithCourse from '../../containers/WithCourse';
import Card from '../../components/Card';

class CourseForm extends Component {
  render() {
    return (
      <Card header="create course">
        <form onSubmit={this.handleSubmit}>
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
            <label htmlFor="publishedStatus">published status</label>
            <Field component="select" className="form-control" name="publishedStatus">
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

  handleSubmit = e => {
    e.preventDefault();

    this.props.createCourse();
  };
}

CourseForm = reduxForm({
  // a unique name for the form
  form: 'courseForm',
  initialValues: {
    publishedStatus: 'draft'
  }
})(CourseForm);

export default WithCourse(CourseForm);
