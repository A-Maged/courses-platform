import React from 'react';
import { Link } from 'react-router-dom';

import store from '../redux/store';
import namedRoutes from '../routing/namedRoutes';
import { boundRedirect } from '../redux/actions/actionCreators';
import Card from './Card';

const LoginForm = props => {
	const handleSubmit = e => {
		e.preventDefault();

		props.login().then(() => {
			let intendedUrl = store.getState().routing.intendedUrl;
			// redirect to intented url
			intendedUrl ? boundRedirect(intendedUrl) : null;
		});
	};

	return (
		<Card header="login">
			<form onSubmit={handleSubmit} method="POST">
				<div className="form-group row justify-content-center">
					<div className="col-md-6">
						<input
							onChange={props.emailChanged}
							value={props.email}
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
							onChange={props.passwordChanged}
							value={props.password}
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
								onChange={props.rememberMeChanged}
								checked={props.rememberMe}
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
};

export default LoginForm;
