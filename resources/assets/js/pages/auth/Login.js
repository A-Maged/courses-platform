import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import namedRoutes from '../../routing/namedRoutes';
import WithAuthForm from '../../containers/WithAuthForm';
import LoginForm from '../../components/LoginForm';

class Login extends Component {
  render() {
    return (
      <div>
        {(this.props.isAuthenticated && (
          <Redirect to={namedRoutes('app.courses.index')} />
        )) || <LoginForm />}
      </div>
    );
  }
}

export default WithAuthForm(Login);
