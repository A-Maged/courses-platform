import React from 'react';

const Card = props => (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">{props.header}</div>
                    <div className="card-body">{props.children}</div>
                </div>
            </div>
        </div>
    </div>
);

export default Card;
