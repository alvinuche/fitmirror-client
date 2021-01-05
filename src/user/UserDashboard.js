import React from "react";
import Navbar from "../core/Navbar";
import { isAuthenticated } from "../auth";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);

const Dashboard = () => {
	const {
		user: { name },
	} = isAuthenticated();

	return (
		<>
			<Navbar />
			<section
				id="about"
				className="section text-center pt-4"
				style={{
					backgroundColor: "rgba(177, 52, 235, 0.2)",
					marginTop: "-10px",
				}}
			>
				<div className="title">
					<h2>{dayjs().format("dddd, MMM D")}</h2>
				</div>
				<div>
					<h6>hello {name}, time to get in shape.</h6>
				</div>

				<div className="pt-5">
					<h3>All workouts</h3>
					<p>what will you be doing today?</p>
				</div>
				<article>
					<div className="workout">
						<label htmlFor="">
							<input className="workout-checkbox" type="checkbox" /> body strong
							benchmark
						</label>
					</div>
					<div className="workout">
						<label htmlFor="">
							<input className="workout-checkbox" type="checkbox" /> lean fit
							benchmark
						</label>
					</div>
					<div className="workout">
						<label htmlFor="">
							<input className="workout-checkbox" type="checkbox" /> plank
							finisher
						</label>
					</div>
					<div className="workout">
						<label htmlFor="">
							<input className="workout-checkbox" type="checkbox" /> active
							recovery mobility
						</label>
					</div>
					<div className="workout">
						<label htmlFor="">
							<input
								className="workout-checkbox"
								type="checkbox"
								name=""
								id=""
							/>{" "}
							legs and core
						</label>
					</div>
				</article>
			</section>
		</>
	);
};

export default Dashboard;
