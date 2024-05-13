

const Services = () => {
	const servicesData = [
		{
			id: 1,
			imageUrl: "https://www.polyplast.co.in/assets/img/good-quality.webp",
			description: "Consistent Good Quality",
		},
		{
			id: 2,
			imageUrl: "https://www.polyplast.co.in/assets/img/proactive-team.webp",
			description: "Proactive Team",
		},
		{
			id: 3,
			imageUrl:
				"https://www.polyplast.co.in/assets/img/client-handholding.webp",
			description: "Client Handholding",
		},
		{
			id: 4,
			imageUrl:
				"https://www.polyplast.co.in/assets/img/installation-services.webp",
			description: "Strong Site Team for Installation Services",
		},
		{
			id: 5,
			imageUrl: "https://www.polyplast.co.in/assets/img/site-team.webp",
			description: "Motivated Site Team for Shutdown",
		},
		{
			id: 6,
			imageUrl: "https://www.polyplast.co.in/assets/img/market-price.webp",
			description: "Reasonable Market Price",
		},
		{
			id: 7,
			imageUrl: "https://www.polyplast.co.in/assets/img/delivery-time.webp",
			description: "Short Delivery Time",
		},
	];

	return (
		<div className="flex flex-col items-center mx-4">
			<h2 className="text-center font-light text-xl m-4">
				Strong site team for Installation services
			</h2>
			<div className="flex flex-wrap justify-center">
				{servicesData.map((service) => (
					<div
						key={service.id}
						className="max-w-xs w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-2 md:p-3 lg:p-4">
						<div className="bg-white rounded-lg overflow-hidden shadow-md text-center relative transition duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-gray-100 hover:shadow-lg">
							<div className="w-20 h-20 mx-auto my-4 rounded-full border-8 border-blue-900 flex items-center justify-center overflow-hidden transition duration-300 ease-in-out transform hover:border-red-500 p-1">
								<img
									src={service.imageUrl}
									alt={`Service ${service.id}`}
									className="w-full h-full object-cover object-center p-2"
								/>
							</div>
							<p className="text-gray-700 text-sm px-2 mb-4">
								{service.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Services;
