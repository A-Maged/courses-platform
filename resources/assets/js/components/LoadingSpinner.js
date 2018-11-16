import React from 'react';
import ReactLoading from 'react-loading';

export default () => (
	<div
		style={{
			position: 'relative',
			minWidth: '100%',
			minHeight: '100%'
		}}
	>
		<ReactLoading className="loading-spinner" type={'spin'} color={'blue'} />
	</div>
);
