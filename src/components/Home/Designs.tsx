import ATitle from "../ATitle";
import RButton from "../RButton";

const Designs = () => {
	return (
		<div className="flex flex-col lg:flex-row justify-between bg-gray-200 px-4 lg:px-0 mt-20">
			{/* left content */}
			<div className="flex flex-col lg:flex-row lg:w-1/2">
				<img
					className="w-3/4 lg:w-1/2 h-auto mx-auto"
					src="https://res.cloudinary.com/dip2khkyo/image/upload/v1739209054/manufacturing-s_y9a3up.webp"
					alt="Left Image"
				/>
				<div className="px-5 lg:px-10 self-start my-10 lg:my-20">
					<ATitle title="Manufacturing" />
					<p className="text-gray-700 mb-4 mt-2">
						We design and manufacture composite items, selecting the best
						product for your requirements.
					</p>
					<RButton>Read More</RButton>
				</div>
			</div>
			{/* right content */}
			<div className="flex flex-col lg:flex-row lg:flex-1 border-0 lg:border-l border-gray-300">
				<div className="px-5 lg:px-10 my-10 lg:my-20">
					<ATitle title="Engineering" />
					<p className="text-gray-700 mb-4 mt-2">
						POLY PLAST offers optimized pipe systems design and engineering,
						including stress and surge analysis as well as pipe support packages
						and detailed engineering for all composites products.
					</p>
					<RButton>Read More</RButton>
				</div>
				<img
					src="https://res.cloudinary.com/dip2khkyo/image/upload/v1739209081/technology-s_cvcwll.webp"
					alt="Right Image"
					className="w-3/4 lg:w-1/2 h-auto mx-auto"
				/>
			</div>
		</div>
	);
};

export default Designs;
