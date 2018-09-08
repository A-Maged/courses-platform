import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import namedRoutes from '../../routing/namedRoutes';
import WithCourse from '../../containers/WithCourse';
import Card from '../../components/Card';

class CourseForm extends Component {
  render() {
    return (
      <Card header="create course">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="courseTitle">title</label>
            <input
              onChange={this.props.updateTitle}
              value={this.props.title}
              name="title"
              placeholder="title"
              className="form-control"
              type="text"
            />
          </div>

          <div className="form-group">
            <label htmlFor="courseDescription">description</label>
            <textarea
              onChange={this.props.updateDescription}
              value={this.props.description}
              name="description"
              className="form-control"
              placeholder="description"
              cols="30"
              rows="10"
            />
          </div>

          <div className="form-group">
            <label htmlFor="publishedStatus">published status</label>
            <select
              onChange={this.props.updatePublishedStatus}
              value={this.props.publishedStatus}
              className="form-control"
              name="publishedStatus"
            >
              <option value="draft">draft</option>
              <option value="published">published</option>
            </select>
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

export default WithCourse(CourseForm);
