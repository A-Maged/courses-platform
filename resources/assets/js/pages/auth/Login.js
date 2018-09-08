import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

import WithAuthForm from '../../containers/WithAuthForm';
import { namedRoutes } from '../../Routes';
import Card from '../../components/Card';

class Login extends Component {
    render() {
        return (
            <Card header="login">
                <form onSubmit={this.handleSubmit} method="POST">
                    <div className="form-group row justify-content-center">
                        <div className="col-md-6">
                            <input
                                onChange={this.props.emailChanged}
                                value={this.props.email}
                                id="email"
                                type="email"
                                name="email"
                                className="form-control"
                                required
                                autoFocus
                            />
                        </div>
                    </div>

                    <div className="form-group row justify-content-center">
                        <div className="col-md-6">
                            <input
                                onChange={this.props.passwordChanged}
                                value={this.props.password}
                                name="password"
                                id="password"
                                type="password"
                                className="form-control"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group row justify-content-center">
                        <div className="col-md-6 ">
                            <div className="form-check">
                                <input
                                    onChange={this.props.rememberMeChanged}
                                    checked={this.props.rememberMe}
                                    className="form-check-input"
                                    type="checkbox"
                                    name="remember"
                                    id="remember"
                                />
                                Remember me
                            </div>
                        </div>
                    </div>

                    <div className="form-group row mb-0 justify-content-center">
                        <div className="col-md-6 ">
                            <button type="submit" className="btn btn-primary">
                                submit
                            </button>
                            {/* <Link
                                to={namedRoutes('server.auth.password.request')}
                                className=" btn-link"
                            >
                                {` `}
                                Forgot Your Password
                            </Link> */}
                        </div>
                    </div>
                </form>
            </Card>
        );
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.login();
    };
}

export default WithAuthForm(Login);
