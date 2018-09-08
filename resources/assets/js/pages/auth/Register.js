import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

import WithAuthForm from '../../containers/WithAuthForm';
import { namedRoutes } from '../../Routes';
import Card from '../../components/Card';

class Register extends Component {
    render() {
        return (
            <Card header="register">
                <form onSubmit={this.handleSubmit} method="POST">
                    <div className="form-group row justify-content-center">
                        <div className="col-md-6">
                            <input
                                onChange={this.props.nameChanged}
                                value={this.props.name}
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
                                onChange={this.props.emailChanged}
                                value={this.props.email}
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
                                onChange={this.props.passwordChanged}
                                value={this.props.password}
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
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.register();
    };
}

export default WithAuthForm(Register);
