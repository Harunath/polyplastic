import ATitle from "../ATitle";

const ServiceSection = () => {
	const images = [
		"https://res.cloudinary.com/dip2khkyo/image/upload/v1739209270/service-icon-1_msdnaz.webp",
		"https://res.cloudinary.com/dip2khkyo/image/upload/v1739209309/service-icon-2_urge2x.webp",
		"https://res.cloudinary.com/dip2khkyo/image/upload/v1739209331/service-icon-3_se2nsp.webp",
		"https://res.cloudinary.com/dip2khkyo/image/upload/v1739209353/service-icon-4_csuqew.webp",
	];

	const serviceTitles = [
		"Installation",
		"Inspection",
		"Repair",
		"Refurbishment",
	];

	return (
		<section className="bg-gray-300 p-5 pb-10">
			<div className="mt-5">
				{/* <div className="text-center text-3xl font-light mb-16">
					<h2>High Quality Services</h2>
					<h2>For Industries</h2>
				</div> */}
				<div className="text-center">
					<ATitle title="High Quality Services For Industries" />
				</div>
				<div className="flex flex-col md:flex-row justify-center items-center mt-10">
					<div className="md:w-1/3 mb-3 md:mb-0">
						<img
							src="https://res.cloudinary.com/dip2khkyo/image/upload/v1739209520/services-img_liqhxd.webp"
							className="h-80 "
							alt="Services"
						/>
					</div>
					<div className="md:w-1/3 ml-5 grid grid-cols-2 gap-3">
						{images.map((image, index) => (
							<div
								key={index}
								className=" flex flex-col items-center gap-y-3 bg-gray-600 hover:bg-red-700 transition-colors duration-700 text-white w-full p-4 mb-3">
								<img
									src={image}
									className="h-16 w-fit"
									alt={`Service ${serviceTitles[index]}`}
								/>
								<p className="text-center">{serviceTitles[index]}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServiceSection;
