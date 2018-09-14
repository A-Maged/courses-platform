// a form to create a video record in db and upload the video-file
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { dispatch } from '../../redux/store';
import { createVideo } from '../../redux/actions/actionCreators';
import Card from '../../components/Card';

const onFormSubmite = data => {
  dispatch(createVideo(data, '#video_file'));
};

class VideoForm extends Component {
  render() {
    const { handleSubmit } = this.props;

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

          {/* grab all courses in <select> */}

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

export default reduxForm({
  form: 'videoForm',
  initialValues: {
    publishedStatus: 'draft'
  }
})(VideoForm);
