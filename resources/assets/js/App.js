import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { connect } from 'react-redux';

import history from './redux/history';
import { dispatch } from './redux/store';
import { toggleLoading, isAuthenticated } from './redux/actions/actionCreators';

import LoadingScreen from './components/LoadingScreen';
import Nav from './components/Nav';
import Routes from './routing/Routes';
import { LOADING } from './redux/actions/actionTypes';

class App extends Component {
  componentDidMount() {
    if (!this.props.isAuthenticated) {
      dispatch(toggleLoading());
      dispatch(isAuthenticated());
    }
  }

  render() {
    return (
      <Router history={history}>
        <React.Fragment>
          <Nav />
          {this.props.loading && <LoadingScreen />}
          <Routes />
        </React.Fragment>
      </Router>
    );
  }
}
export default connect(state => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.ui.loading
}))(App);
