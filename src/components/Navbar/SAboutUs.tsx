import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AboutUsDropdown from "./AboutUsDropdown";

function SAboutUs() {
	const [openAboutUs, setOpenAboutUs] = useState(false);

	const dropdownRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		// Function to close dropdown when clicking outside of it
		const handleClickOutside = (event: { target: any }) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setOpenAboutUs(false);
			}
		};

		// Add event listener when the component mounts
		document.addEventListener("mousedown", handleClickOutside);

		// Clean up the event listener when the component unmounts
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [dropdownRef, setOpenAboutUs]);
	return (
		<div ref={dropdownRef} className="flex flex-col items-center h-full w-full">
			<div
				onClick={() => setOpenAboutUs(!openAboutUs)}
				className="flex text-black text-md hover:text-blue-500 transition-color duration-500">
				About Us
				<span onClick={() => setOpenAboutUs(!openAboutUs)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="24"
						height="24">
						<path d="M7 10l5 5 5-5z" />
					</svg>
				</span>
			</div>
			{openAboutUs && (
				<AnimatePresence>
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						style={{
							overflow: "hidden", // Ensure overflow is hidden to prevent content from overflowing
						}}
						className="flex flex-col justify-center items-center gap-y-2 md:gap-y-4 w-5/6 bg-white rounded p-2 mx-auto">
						<AboutUsDropdown />
					</motion.div>
				</AnimatePresence>
			)}
		</div>
	);
}

export default SAboutUs;
