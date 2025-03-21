import { useEffect, useRef, useState } from "react";
import AboutUsDropdown from "./AboutUsDropdown";
function AboutUs() {
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
		<div ref={dropdownRef} className="relative flex items-center h-full">
			<div
				onClick={() => setOpenAboutUs(!openAboutUs)}
				className="text-black text-md hover:text-blue-500 transition-color duration-500">
				About Us
			</div>
			<span onClick={() => setOpenAboutUs(!openAboutUs)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="24"
					height="24">
					<path d="M7 10l5 5 5-5z" />
				</svg>
			</span>
			{openAboutUs ? <AboutUsDropdown /> : ""}
		</div>
	);
}

export default AboutUs;
