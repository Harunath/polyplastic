const ServiceSection = () => {
	const images = [
		"https://www.polyplast.co.in/assets/img/service-icon-1.webp",
		"https://www.polyplast.co.in/assets/img/service-icon-2.webp",
		"https://www.polyplast.co.in/assets/img/service-icon-3.webp",
		"https://www.polyplast.co.in/assets/img/service-icon-4.webp",
	];

	const serviceTitles = [
		"Installation",
		"Inspection",
		"Repair",
		"Refurbishment",
	];

	return (
		<section id="hm-services" className="p-5  banner-services bg-gray-300">
			<div className="container my-lg-5">
				<div className="text-center text-3xl font-light mb-16">
					<h2>High Quality Services</h2>
					<h2>For Industries</h2>
				</div>
				<div className="flex flex-col md:flex-row justify-center items-center">
					<div className="md:w-1/3 mb-3 md:mb-0">
						<img
							src="https://www.polyplast.co.in/assets/img/services-img.webp"
							className="h-80 " // Increased height and added animation
							alt="Services"
						/>
					</div>
					<div className="md:w-1/3 ml-5 grid grid-cols-2 gap-3">
						{images.map((image, index) => (
							<div
								key={index}
								className="bg-gray-600 hover:bg-red-700 transition-colors duration-700 text-white text-center p-4 flex flex-col justify-center items-center mb-3">
								<img
									src={image}
									className="img-fluid h-16 mb-3"
									alt={`Service ${serviceTitles[index]}`}
								/>
								<h4 className="text-center">{serviceTitles[index]}</h4>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServiceSection;
