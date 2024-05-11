import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const Intro = () => {
	const [expanded, setExpanded] = useState(false);

	const toggleExpanded = () => {
		setExpanded(!expanded);
	};

	return (
		<div id="hm-products" className="py-5 px-20">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<p className="txt-justify  mb-4">
							'Rolan Plast' plays a part and cooperates in your project
							execution during the journey, ensuring that your project is
							managed pleasantly & accurately.
						</p>
						<p className="txt-justify  mb-2">
							Our project management mixture includes:
						</p>
						<ul className="mt-2 pl-5 list-none">
							<li className="mb-2 relative flex items-center">
								<span
									style={{
										width: "0",
										height: "0",
										borderTop: "6px solid transparent",
										borderBottom: "6px solid transparent",
										borderRight: "6px solid red",
										marginRight: "0.5rem",
									}}></span>
								Discuss & developing an overall project execution plan and
								workflow with customer requirement.
							</li>
						</ul>
						<AnimatePresence initial={false}>
							{expanded && (
								<motion.ul
									initial="collapsed"
									animate="open"
									exit="collapsed"
									variants={{
										open: { opacity: 1, height: "auto" },
										collapsed: { opacity: 0, height: 0 },
									}}
									transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
									className="pl-5 list-none">
									<li className="mb-2 relative flex items-center">
										<span
											style={{
												width: "0",
												height: "0",
												borderTop: "6px solid transparent",
												borderBottom: "6px solid transparent",
												borderRight: "6px solid red",
												marginRight: "0.5rem",
											}}></span>
										Preparing product design and component solutions.
									</li>
									<li className="mb-2 relative flex items-center">
										<span
											style={{
												width: "0",
												height: "0",
												borderTop: "6px solid transparent",
												borderBottom: "6px solid transparent",
												borderRight: "6px solid red",
												marginRight: "0.5rem",
											}}></span>
										Developing specifications reviews and product selection.
									</li>
									<li className="mb-2 relative flex items-center">
										<span
											style={{
												width: "0",
												height: "0",
												borderTop: "6px solid transparent",
												borderBottom: "6px solid transparent",
												borderRight: "6px solid red",
												marginRight: "0.5rem",
											}}></span>
										Directing & Controlling installation doubts and site
										technical assistance.
									</li>
									<li className="mb-2 relative flex items-center">
										<span
											style={{
												width: "0",
												height: "0",
												borderTop: "6px solid transparent",
												borderBottom: "6px solid transparent",
												borderRight: "6px solid red",
												marginRight: "0.5rem",
											}}></span>
										Confirming the project design calculations.
									</li>
									<li className="mb-2 relative flex items-center">
										<span
											style={{
												width: "0",
												height: "0",
												borderTop: "6px solid transparent",
												borderBottom: "6px solid transparent",
												borderRight: "6px solid red",
												marginRight: "0.5rem",
											}}></span>
										Deliveries and Keep on eye on project progress and
										milestones using Industry best point of reference and
										software technology.
									</li>
									<li className="mb-2 relative flex items-center">
										<span
											style={{
												width: "0",
												height: "0",
												borderTop: "6px solid transparent",
												borderBottom: "6px solid transparent",
												borderRight: "6px solid red",
												marginRight: "0.5rem",
											}}></span>
										Alteration, modification, supervise & controlling changes
										and variations, if any.
									</li>
									<li className="mb-2 relative flex items-center">
										<span
											style={{
												width: "0",
												height: "0",
												borderTop: "6px solid transparent",
												borderBottom: "6px solid transparent",
												borderRight: "6px solid red",
												marginRight: "0.5rem",
											}}></span>
										Visiting site Customer place and End User meetings with site
										people.
									</li>
									<li className="mb-2 relative flex items-center">
										<span
											style={{
												width: "0",
												height: "0",
												borderTop: "6px solid transparent",
												borderBottom: "6px solid transparent",
												borderRight: "6px solid red",
												marginRight: "0.5rem",
											}}></span>
										Controlling technical documentation and End User
										Submissions.
									</li>
									<li className="mb-2 relative flex items-center">
										<span
											style={{
												width: "0",
												height: "0",
												borderTop: "6px solid transparent",
												borderBottom: "6px solid transparent",
												borderRight: "6px solid red",
												marginRight: "0.5rem",
											}}></span>
										Providing computerized design services including isometric
										and construction drawings.
									</li>
								</motion.ul>
							)}
						</AnimatePresence>
						<div className="pb-4">
							<u>
								<a
									onClick={toggleExpanded}
									className="moreless-button text-dark fw-bold cursor-pointer">
									{expanded ? "Read less" : "Read more"}
								</a>
							</u>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Intro;
