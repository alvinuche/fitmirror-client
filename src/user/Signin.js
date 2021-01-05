import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { signin, authenticate } from "../auth";
import "../index.css";

const Signin = () => {
	const [values, setValues] = useState({
		email: "",
		password: "",
		error: "",
		dataId: "",
		loading: false,
		redirectToReferrer: false,
	});

	const {
		email,
		password,
		error,
		loading,
		dataId,
		redirectToReferrer,
	} = values;

	const handleChange = (name) => (event) => {
		setValues({ ...values, error: false, [name]: event.target.value });
	};

	const handleSubmit = (event) => {
		setValues({ ...values, error: false, loading: true });
		event.preventDefault();
		signin({
			email,
			password,
		}).then((data) => {
			if (data.error) {
				setValues({ ...values, error: data.error, loading: false });
			} else {
				authenticate(data, () => {
					setValues({
						...values,
						redirectToReferrer: true,
					});
				});
			}
		});
	};

	const showError = () => {
		return (
			<div
				className="alert alert-danger"
				style={{ display: error ? "" : "none" }}
			>
				{error}
			</div>
		);
	};

	const showLoading = () =>
		loading && (
			<div className="alert alert-info">
				<h2>Loading...</h2>
			</div>
		);
	const direct = () => {
		if (redirectToReferrer) {
			return <Redirect to="/dashboard" />;
		}
	};

	return (
		<main className="form-signin text-center pt-5">
			{direct()}
			{showLoading()}
			{showError()}
			<form onSubmit={handleSubmit}>
				<h1 className="h3 mb-3 fw-normal">Please sign in</h1>

				<label className="visually-hidden">Email address</label>
				<input
					type="email"
					className="form-control"
					placeholder="Email address"
					value={email}
					onChange={handleChange("email")}
				/>
				<label className="visually-hidden">Password</label>
				<input
					type="password"
					className="form-control"
					placeholder="Password"
					value={password}
					onChange={handleChange("password")}
				/>
				<div className="checkbox mb-3">
					<label>
						<input type="checkbox" value="remember-me" /> Remember me
					</label>
				</div>
				<button className="w-100 btn btn-lg btn-primary" type="submit">
					Sign in
				</button>
				<p className="mt-5 mb-3 text-muted">
					&copy; {new Date().getFullYear()} fitmirror Inc.
				</p>
			</form>
		</main>
	);
};

export default Signin;
