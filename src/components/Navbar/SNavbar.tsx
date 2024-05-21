import { Link } from "react-router-dom"; // If using React Router
import logo from "../../assets/Logo.jpeg";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SAboutUs from "./SAboutUs";
import SProduct from "./SProducts";
import { useRecoilState } from "recoil";
import { menuDropdown } from "../../store/atoms";

const SNavbar = () => {
	const [dropdown, setDropdown] = useRecoilState(menuDropdown);
	const [svgHover, setSvgHover] = useState("black");

	const dropdownRef = useRef<HTMLDivElement>(null);
	const menuRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		// Function to close dropdown when clicking outside of it
		const handleClickOutside = (event: { target: any }) => {
			if (menuRef.current && menuRef.current.contains(event.target)) {
				setDropdown(!dropdown);
			} else {
				if (
					dropdownRef.current &&
					!dropdownRef.current.contains(event.target)
				) {
					setDropdown(false);
				}
			}
		};
		// Add event listener when the component mounts
		document.addEventListener("mousedown", handleClickOutside);

		// Clean up the event listener when the component unmounts
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [dropdownRef, menuRef, dropdown]);
	return (
		<nav className="shadow-xl shadow-gray-400 flex flex-col justify-between items-center lg:hidden">
			<div className=" relative flex justify-end items-center gap-x-4 bg-white w-full h-12 py-1 px-4 pr-20">
				<div className=" absolute bg-white flex items-center w-auto h-full left-[10%]">
					<Link to="/" className="h-full text-black text-lg font-bold">
						<img className="h-full" src={logo} alt="Logo" />
					</Link>
				</div>
				<button ref={menuRef}>
					<motion.svg
						initial={{
							rotate: 90,
						}}
						animate={
							dropdown
								? {
										rotate: 0,
								  }
								: {
										rotate: 90,
								  }
						}
						transition={{
							duration: 0.5,
						}}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="24"
						height="24">
						<path fill="none" d="M0 0h24v24H0z" />
						<path
							d="M6 4v16M12 4v16M18 4v16"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</motion.svg>
				</button>
			</div>
			<AnimatePresence>
				{dropdown && (
					<motion.div
						ref={dropdownRef}
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{
							opacity: 0,
							height: 0,
						}}
						transition={{ duration: 0.3 }}
						style={{
							overflow: "hidden", // Ensure overflow is hidden to prevent content from overflowing
						}}
						className="bg-white w-full p-1">
						<div className=" flex flex-col justify-center items-center gap-y-2 md:gap-y-4 w-5/6 bg-gray-100 border border-black rounded p-2 mx-auto">
							<Link to="/">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke={svgHover}
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="w-5 h-5 hover:text-blue-500"
									onMouseOver={() => setSvgHover("rgb(59 130 246)")}
									onMouseLeave={() => setSvgHover("#000")}>
									<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
									<polyline points="9 22 9 12 15 12 15 22" />
								</svg>
							</Link>
							<SAboutUs />
							<SProduct />
							<div>
								<button onClick={() => setDropdown(false)}>
									<Link
										className="text-black text-md hover:text-blue-500 transition-color duration-500"
										to="/material">
										Material
									</Link>
								</button>
							</div>
							<div>
								<button onClick={() => setDropdown(false)}>
									<Link
										className="text-black text-md hover:text-blue-500 transition-color duration-500"
										to="/projects">
										Projects
									</Link>
								</button>
							</div>
							<div>
								<button onClick={() => setDropdown(false)}>
									<Link
										className=" text-md hover:text-blue-500 transition-color duration-500"
										to="/contactus">
										Contact us
									</Link>
								</button>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default SNavbar;
