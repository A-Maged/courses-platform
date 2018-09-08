import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import namedRoutes from './namedRoutes';

class PrivateRoute extends Component {
  render() {
    console.log(this.props);

    let { component: Component, isAuthenticated, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={props => {
          return isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect to={namedRoutes('app.auth.login')} />
          );
        }}
      />
    );
  }
}

export default connect(state => ({
  isAuthenticated: state.auth.isAuthenticated
}))(PrivateRoute);
