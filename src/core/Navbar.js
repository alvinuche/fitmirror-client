import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import "./navbar.css";

const Navbar = ({ history }) => {
	const [value, setValue] = useState({
		name: "",
	});

	useEffect(() => {
		setValue({ ...value, name: document.getElementById("nav-link") });
	}, []);

	return (
		<nav>
			<div className="nav-center section-center">
				{/* {console.log(value)} */}
				<div className="nav-header">
					{/* <img
						src="https://images.pexels.com/photos/5706028/pexels-photo-5706028.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						alt="logo"
						className="logo"
					/> */}
					<h3 className="logo pt-2">
						<Link to="/">fitmirror</Link>
					</h3>
					<button
						onClick={() => {
							value.name.classList.toggle("show-links");
						}}
						className="nav-toggle"
					>
						<i className="fas fa-bars"></i>
					</button>
				</div>
				<ul className="links" id="nav-link">
					{!isAuthenticated() && (
						<>
							<li>
								<Link to="/signup">sign up</Link>
							</li>
							<li>
								<Link to="/signin">sign in</Link>
							</li>
						</>
					)}
					{isAuthenticated() && (
						<>
							<li>
								<Link to="/dashboard">dashboard</Link>
							</li>
							<li>
								<Link
									to="/"
									onClick={() => {
										signout(() => history.push("/"));
									}}
								>
									logout
								</Link>
							</li>
						</>
					)}
				</ul>

				<ul className="social-icons">
					<li>
						<a href="https://www.twitter.com">
							<i className="fab fa-facebook"></i>
						</a>
					</li>
					<li>
						<a href="https://www.twitter.com">
							<i className="fab fa-twitter"></i>
						</a>
					</li>
					<li>
						<a href="https://www.twitter.com">
							<i className="fab fa-behance"></i>
						</a>
					</li>
					<li>
						<a href="https://www.twitter.com">
							<i className="fab fa-linkedin"></i>
						</a>
					</li>
					<li>
						<a href="https://www.twitter.com">
							<i className="fab fa-sketch"></i>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default withRouter(Navbar);
