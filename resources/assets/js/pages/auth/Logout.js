import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import { namedRoutes } from '../../Routes';

class Logout extends Component {
    componentDidMount() {
        var self = this;
        axios
            .post(namedRoutes('auth.logout'), {})
            .then(function(response) {
                console.log(response.data);
                // redirect
                self.props.history.push(namedRoutes('app.root'));
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    render() {
        return <div />;
    }
}

export default Logout;
