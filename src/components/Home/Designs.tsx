import ATitle from "../ATitle";
import RButton from "../RButton";

const Designs = () => {
	return (
		<div className="flex flex-col lg:flex-row justify-between items-center bg-gray-200 mt-20">
			{/* left content */}
			<div className="flex flex-col lg:flex-row lg:w-1/2 h-full px-4 lg:px-0">
				<img
					className="w-3/4 lg:w-1/2 h-auto mx-auto"
					src="https://www.polyplast.co.in/assets/img/manufacturing-s.webp?4"
					alt="Left Image"
				/>
				<div className="px-5 lg:px-10 my-10 lg:my-20">
					{/* <p className="text-4xl font-extralight mb-2">Manufacturing</p> */}
					<ATitle title="Manufacturing" />
					<p className="text-gray-700 mb-4 mt-2">
						We design and manufacture composite items, selecting the best
						product for your requirements.
					</p>
					<RButton>Read More</RButton>
				</div>
			</div>
			{/* right content */}
			<div className="flex flex-col lg:flex-row lg:flex-1 h-full border-l border-gray-300">
				<div className="px-5 lg:px-10 my-10 lg:my-20">
					{/* <p className="text-4xl font-extralight mb-2">Engineering</p> */}
					<ATitle title="Engineering" />
					<p className="text-gray-700 mb-4 mt-2">
						POLY PLAST offers optimized pipe systems design and engineering,
						including stress and surge analysis as well as pipe support packages
						and detailed engineering for all composites products.
					</p>
					<RButton>Read More</RButton>
				</div>
				<img
					src="https://www.polyplast.co.in/assets/img/technology-s.webp?2"
					alt="Right Image"
					className="w-3/4 lg:w-1/2 h-auto mx-auto"
				/>
			</div>
		</div>
	);
};

export default Designs;
