import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
interface ATitleProps {
	title: string;
}
const ATitle: React.FC<ATitleProps> = ({ title }) => {
	const ref = useRef(null);
	const inView = useInView(ref, {
		amount: "all",
	});
	useEffect(() => {
		console.log(inView ? "Visible" : "not");
	}, [inView]);
	return (
		<div ref={ref}>
			<motion.p
				initial={{
					opacity: 0.5,
					scale: 0,
					y: "-200%",
				}}
				viewport={{
					margin: "-200px",
				}}
				animate={{
					y: inView ? "0%" : "-200%",
					opacity: inView ? 1 : 0,
					scale: inView ? 1 : 0.5,
				}}
				transition={{
					duration: 0.4,
				}}
				exit={{
					opacity: 0.5,
					scale: 0,
					y: "-200%",
				}}
				className="text-4xl font-light text-center">
				{title}
			</motion.p>
		</div>
	);
};

export default ATitle;
