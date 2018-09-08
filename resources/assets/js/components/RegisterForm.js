import React from 'react';
import { Link } from 'react-router-dom';

import WithAuthForm from '../containers/WithAuthForm';
import namedRoutes from '../routing/namedRoutes';
import Card from './Card';

const RegisterForm = props => {
  const handleSubmit = e => {
    e.preventDefault();
    props.register();
  };

  return (
    <Card header="register">
      <form onSubmit={handleSubmit} method="POST">
        <div className="form-group row justify-content-center">
          <div className="col-md-6">
            <input
              onChange={props.nameChanged}
              value={props.name}
              type="text"
              name="name"
              className="form-control"
              required
              autoFocus
            />
          </div>
        </div>

        <div className="form-group row justify-content-center">
          <div className="col-md-6">
            <input
              onChange={props.emailChanged}
              value={props.email}
              type="email"
              name="email"
              className="form-control"
              required
            />
          </div>
        </div>

        <div className="form-group row justify-content-center">
          <div className="col-md-6">
            <input
              onChange={props.passwordChanged}
              value={props.password}
              type="password"
              className="form-control"
              name="password"
              required
            />
          </div>
        </div>

        <div className="form-group row mb-0 justify-content-center">
          <div className="col-md-6 ">
            <button type="submit" className="btn btn-primary">
              submit
            </button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default WithAuthForm(RegisterForm);
