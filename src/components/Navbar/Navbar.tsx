import { Link } from "react-router-dom"; // If using React Router
import { useRecoilState } from "recoil";
import { navState } from "../../store/atoms";
import logo from "../../assets/Logo.jpeg";
import { useState } from "react";
import AboutUs from "./AboutUs";
import Products from "./Products";

const Navbar = () => {
	const [navOpen, setNavOpen] = useRecoilState(navState);
	const [svgHover, setSvgHover] = useState("black");

	const toggleNav = () => {
		setNavOpen(!navOpen);
	};

	return (
		<nav className="shadow-xl shadow-gray-400 relative flex flex-col justify-between items-center z-10">
			<div className=" absolute bg-white flex items-center w-auto h-full left-[10%]">
				<Link to="/" className="h-full text-black text-lg font-bold">
					<img className="h-full" src={logo} alt="Logo" />
				</Link>
			</div>
			<div className="bg-[#4e4e50] flex justify-end items-center gap-x-4 w-full px-4 pr-20 py-1 h-12">
				<div>
					<button>
						<Link
							className="text-white text-md hover:text-blue-500 transition-color duration-500"
							to="/location">
							Location
						</Link>
					</button>
				</div>
				<div>
					<button>
						<Link
							className="text-white text-md hover:text-blue-500 transition-color duration-500"
							to="/contactus">
							Contact us
						</Link>
					</button>
				</div>
			</div>
			<div className="flex justify-end items-center gap-x-4 bg-white w-full h-12 py-1 px-4 pr-20">
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
				<AboutUs />
				<Products />
				<div>
					<button>
						<Link
							className="text-black text-md hover:text-blue-500 transition-color duration-500"
							to="/material">
							Material
						</Link>
					</button>
				</div>
				<div>
					<button>
						<Link
							className="text-black text-md hover:text-blue-500 transition-color duration-500"
							to="/projects">
							Projects
						</Link>
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
