import { Link } from "react-router-dom"; // If using React Router
import { useRecoilState } from "recoil";
import { navState } from "../../store/atoms";
import logo from "../../assets/Logo.jpeg";
import { useState } from "react";
import AboutUs from "./AboutUs";

const Navbar = () => {
	const [navOpen, setNavOpen] = useRecoilState(navState);
	const [openAboutUs, setOpenAboutUs] = useState(false);
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
				<div className="relative flex items-center h-full">
					<Link className="text-black text-md" to="/aboutus">
						About Us
					</Link>
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
				<div>
					<button>
						<Link className="text-black text-md" to="/products">
							Products
						</Link>
					</button>
				</div>
				<div>
					<button>
						<Link className="text-black text-md" to="/technology">
							Technology
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
