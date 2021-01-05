import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import About from "./About";
import Message from "./Message";
import "./banner.css";

const Home = () => {
	return (
		<section>
			<Navbar />
			<Banner />
			<Message />
			<About />
		</section>
	);
};

export default Home;
