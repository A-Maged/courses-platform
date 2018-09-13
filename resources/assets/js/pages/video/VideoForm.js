// a form to create a video record in db and upload the video-file
import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Card from '../../components/Card';

const handleSubmit = e => {
  e.preventDefault();

  //   fire action  createVideo
  console.log('pages/videos/VideoForm:  fire action  createVideo');
};

let VideoForm = props => {
  return (
    <Card header="create video">
      <form onSubmit={handleSubmit}>
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
