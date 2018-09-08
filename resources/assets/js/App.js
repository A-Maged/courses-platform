import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import history from './redux/history';

import Nav from './components/Nav';
import Routes from './routing/Routes';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <React.Fragment>
          <Nav />
          <Routes />
        </React.Fragment>
      </Router>
    );
  }
}
export default App;
