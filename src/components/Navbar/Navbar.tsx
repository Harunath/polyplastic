import { Link } from "react-router-dom"; // If using React Router
import { useRecoilState } from "recoil";
import { navState } from "../../store/atoms";
import logo from "../../assets/Logo.jpeg";
import { useState } from "react";
import AboutUs from "./AboutUs";
import ProductsDropdown from "./ProductsDropdowm";

const Navbar = () => {
	const [navOpen, setNavOpen] = useRecoilState(navState);
	const [openAboutUs, setOpenAboutUs] = useState(false);
	const [openProducts, setOpenProducts] = useState(false);
	const toggleNav = () => {
		setNavOpen(!navOpen);
	};

	return (
		<nav className="shadow-2xl relative flex flex-col justify-between items-center">
			<div className=" absolute bg-white flex items-center w-auto h-full left-[10%]">
				{/* Logo */}
				<Link to="/" className="h-full text-black text-lg font-bold">
					<img className="h-full" src={logo} alt="Logo" />
				</Link>
			</div>
			<div className="bg-[#4e4e50] flex justify-end items-center gap-x-4 w-full px-4 pr-20 py-1 h-12">
				<div>
					<button>
						<Link className="text-white text-md" to="/location">
							Location
						</Link>
					</button>
				</div>
				<div>
					<button>
						<Link className="text-white text-md" to="/contactus">
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
						stroke="black"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="w-5 h-5">
						<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
						<polyline points="9 22 9 12 15 12 15 22" />
					</svg>
				</Link>
				<div className="relative flex items-center h-full">
					<div
						onClick={() => setOpenAboutUs(!openAboutUs)}
						className="text-black text-md">
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
					{openAboutUs ? <AboutUs /> : ""}
				</div>
				<div className="relative flex items-center h-full">
					<div
						onClick={() => setOpenProducts(!openProducts)}
						className="text-black text-md">
						Products
					</div>
					<span onClick={() => setOpenProducts(!openProducts)}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="24"
							height="24">
							<path d="M7 10l5 5 5-5z" />
						</svg>
					</span>
					{openProducts ? <ProductsDropdown /> : ""}
				</div>
				<div>
					<button>
						<Link className="text-black text-md" to="/material">
							Material
						</Link>
					</button>
				</div>
				<div>
					<button>
						<Link className="text-black text-md" to="/projects">
							Projects
						</Link>
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
