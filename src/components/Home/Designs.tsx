const Designs = () => {
	return (
		<div className="flex flex-col lg:flex-row justify-between items-center mt-20">
			{/* left content */}
			<div className="flex lg:w-1/2 h-full">
				<img
					className="w-1/2 h-auto"
					src="https://www.polyplast.co.in/assets/img/manufacturing-s.webp?4"
					alt="Left Image"
				/>
				<div className="m-auto w-1/2">
					<h1 className="text-xl font-semibold mb-2">Manufacturing</h1>
					<p className="text-gray-700 mb-4">
						We design and manufacture composite items, selecting the best
						product for your requirements.
					</p>
					<a
						href="#"
						className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">
						Read More
					</a>
				</div>
			</div>
			{/* right content */}
			<div className="flex flex-1 h-full border-l border-gray-300">
				<div className=" px-10 my-auto">
					<h1 className="text-xl font-semibold mb-2">Engineering</h1>
					<p className="text-gray-700 mb-4">
						POLY PLAST offers optimized pipe systems design and engineering,
						including stress and surge analysis as well as pipe support packages
						and detailed engineering for all composites products.
					</p>
					<a
						href="#"
						className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">
						Read More
					</a>
				</div>
				<img
					src="https://www.polyplast.co.in/assets/img/technology-s.webp?2"
					alt="Right Image"
					className="w-1/2 h-auto ml-4"
				/>
			</div>
		</div>
	);
};

export default Designs;
