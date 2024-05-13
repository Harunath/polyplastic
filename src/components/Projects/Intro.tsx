import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Intro = () => {
	const [expanded, setExpanded] = useState(false);
	const toggleExpanded = () => setExpanded(!expanded);

	const steps = [
		"Discuss & developing an overall project execution plan and workflow with customer requirement.",
		"Preparing product design and component solutions.",
		"Developing specifications reviews and product selection.",
		"Directing & Controlling installation doubts and site technical assistance.",
		"Confirming the project design calculations.",
		"Deliveries and Keep on eye on project progress and milestones using Industry best point of reference and software technology.",
		"Alteration, modification, supervise & controlling changes and variations, if any.",
		"Visiting site Customer place and End User meetings with site people.",
		"Controlling technical documentation and End User Submissions.",
		"Providing computerized design services including isometric and construction drawings.",
	];

	return (
		<div id="hm-products" className="py-5 px-20 container">
			<p className="txt-justify mb-4">
				'Rolan Plast' plays a part and cooperates in your project execution
				during the journey, ensuring that your project is managed pleasantly &
				accurately.
			</p>
			<p className="txt-justify mb-2">
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
					Discuss & developing an overall project execution plan and workflow
					with customer requirement.
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
						{steps.map((step, index) => (
							<li key={index} className="mb-2 relative flex items-center">
								<span
									style={{
										width: "0",
										height: "0",
										borderTop: "6px solid transparent",
										borderBottom: "6px solid transparent",
										borderRight: "6px solid red",
										marginRight: "0.5rem",
									}}></span>
								{step}
							</li>
						))}
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
	);
};

export default Intro;
