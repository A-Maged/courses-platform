import React from 'react';

const Card = props => (
	<div className="card">
		<div className="card-header">{props.header}</div>

		{props.children ? <div className="card-body">{props.children}</div> : null}
	</div>
);

export default Card;
