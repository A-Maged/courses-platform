import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import LoadingSpinner from './LoadingSpinner';

class LoadingScreen extends Component {
	constructor(props) {
		super(props);

		this.overlayNode = document.createElement('div');
		this.overlayNode.setAttribute('id', 'loading-screen-overlay');
	}

	componentDidMount() {
		// add overlay div at the end of <body>
		document.body.appendChild(this.overlayNode);
	}
	componentWillUnmount() {
		// remove overlay div from the dom
		document.body.removeChild(this.overlayNode);
	}

	render() {
		return ReactDOM.createPortal(<LoadingSpinner />, this.overlayNode);
	}
}

export default connect(state => ({
	loading: state.ui.loading
}))(LoadingScreen);
