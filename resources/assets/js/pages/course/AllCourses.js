import React, { Component } from 'react';
import axios from 'axios';

import { namedRoutes } from '../../Routes';
import WithCourse from '../../containers/WithCourse';
import store from '../../redux/store';

class AllCourses extends Component {
    componentDidMount() {
        this.props.getAllCourses(store.dispatch);
    }

    render() {
        return (
            <div>
                {this.props.allCourses &&
                    this.props.allCourses.map((course, i) => {
                        return (
                            <div data-id={course.id} key={i}>
                                <h3> {course.title} </h3>
                                <button onClick={this.handleDelete}>
                                    delete
                                </button>
                            </div>
                        );
                    })}
            </div>
        );
    }

    handleDelete = e => {
        let self = this;
        let courseId = e.target.parentElement.getAttribute('data-id');
        let url = namedRoutes('courses.destroy', { id: courseId });
        axios.delete(url).then(response => {
            console.log(response.data);
            // redirect
            self.props.history.push(namedRoutes('courses.index'));
        });
    };
}

export default WithCourse(AllCourses);
