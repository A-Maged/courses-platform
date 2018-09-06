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
        console.log(this.props.allCourses);

        return (
            <div>
                {this.props.allCourses.map((course, i) => {
                    return <h3 key={i}> {course.title} </h3>;
                })}
            </div>
        );
    }
}

export default WithCourse(AllCourses);
