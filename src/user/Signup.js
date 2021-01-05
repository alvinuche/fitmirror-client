import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { signup, authenticate } from "../auth";
import "../index.css";

const Signup = () => {
	const [values, setValues] = useState({
		duration: 90,
		name: "",
		email: "",
		height: "",
		weight: "",
		password: "",
		error: "",
		success: false,
		dataId: "",
		redirectToReferrer: false,
	});

	const {
		duration,
		name,
		email,
		height,
		weight,
		password,
		error,
		success,
		dataId,
		redirectToReferrer,
	} = values;

	const handleChange = (name) => (event) => {
		setValues({ ...values, error: false, [name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		signup({
			duration,
			name,
			email,
			height,
			weight,
			password,
		}).then((data) => {
			if (data.error) {
				setValues({ ...values, error: data.error, success: false });
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

	const direct = () => {
		if (redirectToReferrer) {
			return <Redirect to="/dashboard" />;
		}
	};

	return (
		<main className="form-signin text-center pt-5">
			{direct()}
			{showError()}
			<form onSubmit={handleSubmit}>
				<h1 className="h3 mb-3 fw-normal">Please sign up</h1>
				<div>
					<p></p>
					<select
						className="select"
						onChange={handleChange("duration")}
						value={duration}
					>
						<option>Training Duration</option>
						<option value="30">1 month</option>
						<option value="60">2 months</option>
						<option value="90">3 months</option>
					</select>
				</div>
				<label className="visually-hidden">name</label>
				<input
					type="text"
					className="form-control"
					placeholder="Name"
					autoFocus
					value={name}
					onChange={handleChange("name")}
				/>
				<label className="visually-hidden">Email address</label>
				<input
					type="email"
					className="form-control"
					placeholder="Email address"
					value={email}
					onChange={handleChange("email")}
				/>
				<input
					type="text"
					className="form-control"
					placeholder="Height"
					value={height}
					onChange={handleChange("height")}
				/>
				<input
					type="text"
					className="form-control"
					placeholder="Weight(lbs/kg)"
					value={weight}
					onChange={handleChange("weight")}
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
					Sign up
				</button>
				<p className="mt-5 mb-3 text-muted">
					&copy; {new Date().getFullYear()} fitmirror Inc.
				</p>
			</form>
		</main>
	);
};

export default Signup;
