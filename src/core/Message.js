import React from "react";

const Message = () => {
	return (
		<section
			className="section text-center p-5"
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				background: "#ffffff",
			}}
		>
			<div className="title">
				<p>
					The future of fitness isn’t tech and machines. It’s a modern mix of
					old school effort and new school intelligence. But not artificial
					intelligence. Human intelligence.
				</p>
				<p>A fitness plan that you’ll actually stick with.</p>
			</div>
		</section>
	);
};

export default Message;
