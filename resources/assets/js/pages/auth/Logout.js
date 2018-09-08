import React, { Component } from 'react';

import WithAuthForm from '../../containers/WithAuthForm';

class Logout extends Component {
    componentDidMount() {
        this.props.logout();
    }

    render() {
        return <div />;
    }
}

export default WithAuthForm(Logout);
