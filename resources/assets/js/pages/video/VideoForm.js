// a form to create a video record in db and upload the video-file
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { dispatch } from '../../redux/store';
import { createVideo } from '../../redux/actions/actionCreators';
import Card from '../../components/Card';

const onFormSubmite = data => {
  dispatch(createVideo(data, '#video_file'));
};

let VideoForm = props => {
  const { handleSubmit } = props;

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
          <label htmlFor="video_file">upload file</label>
          <input type="file" name="video_file" id="video_file" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Card>
  );
};

VideoForm = reduxForm({
  // a unique name for the form
  form: 'videoForm'
})(VideoForm);

export default VideoForm;
