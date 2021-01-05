import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth";

const Banner = () => {
	return (
		<div className="banner">
			<div className="container">
				<h1>fitmirror</h1>
				<p>A direct line to your own fitness & wellness coach.</p>
				{!isAuthenticated() ? (
					<Link to="/signup" className="scroll-link btn btn-white">
						sign up
					</Link>
				) : (
					<Link to="/dashboard" className="scroll-link btn btn-white">
						{`${isAuthenticated().user.name}'s dashboard`}
					</Link>
				)}
			</div>
		</div>
	);
};

export default Banner;
