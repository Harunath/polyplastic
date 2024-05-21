import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { menuDropdown } from "../../store/atoms";

const AboutUsDropdown = () => {
	const setMenuDropdown = useSetRecoilState(menuDropdown);
	return (
		<div className=" lg:absolute w-full lg:w-40 left-0 top-full rounded text-center lg:text-start lg:border border-t-0 border-gray-300 lg:bg-white pt-2 z-20">
			<div className="w-full">
				<div className=" hover:bg-blue-500 transition-color duration-300">
					<Link
						onClick={() => setMenuDropdown(false)}
						to="/whoweare"
						className="w-full h-full">
						<p className="p-2">Who we are ?</p>
					</Link>
				</div>
				<div
					onClick={() => setMenuDropdown(false)}
					className=" hover:bg-blue-500  transition-color duration-300">
					<Link to="/whyus" className="w-full h-full">
						<p className="p-2">Why us?</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default AboutUsDropdown;
