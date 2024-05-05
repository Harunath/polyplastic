import { Link } from "react-router-dom";

function AboutUs() {
	return (
		<div className=" absolute w-20 md:w-40 left-0 top-full bg-white pt-2 z-10">
			<div className="w-full">
				<div className=" hover:bg-blue-500 transition-color duration-300 p-2">
					<Link to="/whoweare" className="w-full">
						<p>Who we are ?</p>
					</Link>
				</div>
				<div className=" hover:bg-blue-500  transition-color duration-300 p-2">
					<Link to="/whyus" className="w-full">
						<p>Why us?</p>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default AboutUs;
