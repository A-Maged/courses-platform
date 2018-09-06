import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import axios from 'axios';

import Nav from './components/Nav';
import Routes from './Routes';

class App extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Nav />
                    <Routes />
                </React.Fragment>
            </Router>
        );
    }
}
export default App;
