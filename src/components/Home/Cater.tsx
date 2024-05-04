const Cater = () => {
	// Array of objects containing image sources and text for rendering
	const items = [
		{ imgSrc: "https://www.polyplast.co.in/assets/img/oil.png", text: "Oil 1" },
		{
			imgSrc: "https://www.polyplast.co.in/assets/img/pulp.png",
			text: "Pulp & Paper",
		},
		{
			imgSrc: "https://www.polyplast.co.in/assets/img/architect.png",
			text: "Construction",
		},
		{
			imgSrc: "https://www.polyplast.co.in/assets/img/telecommunications.png",
			text: "Telecommunication",
		},
		{
			imgSrc: "https://www.polyplast.co.in/assets/img/bromine.png",
			text: "Bromine",
		},
		{
			imgSrc: "https://www.polyplast.co.in/assets/img/water.png",
			text: "Water Treatment / Desalination",
		},
		{
			imgSrc: "https://www.polyplast.co.in/assets/img/dyes.png",
			text: "Dyes & Pigments",
		},
		{
			imgSrc: "https://www.polyplast.co.in/assets/img/titanium.png",
			text: "Titanium Dioxide Pigment",
		},
		{
			imgSrc: "https://www.polyplast.co.in/assets/img/mining.png",
			text: "Mineral Processing / Mining",
		},
		{
			imgSrc: "https://www.polyplast.co.in/assets/img/manufactere.png",
			text: "Original Equipment Manufacturer",
		},
		{
			imgSrc: "https://www.polyplast.co.in/assets/img/fiber.png",
			text: "Viscose / Fiber",
		},
		{
			imgSrc: "https://www.polyplast.co.in/assets/img/ion.png",
			text: "Ion Exchange Resins",
		},
		{
			imgSrc: "https://www.polyplast.co.in/assets/img/chlor.png",
			text: "Chlor Alkali",
		},
		{
			imgSrc: "https://www.polyplast.co.in/assets/img/steel.png",
			text: "Steel",
		},
		{
			imgSrc: "https://www.polyplast.co.in/assets/img/chemical.png",
			text: "Chemical",
		},
		{
			imgSrc: "https://www.polyplast.co.in/assets/img/pharma.png",
			text: "Pharmaceutical",
		},
		{
			imgSrc: "https://www.polyplast.co.in/assets/img/fertilizar.png",
			text: "Fertilizers / Insecticides / Pesticides",
		},
		// Add more items as needed
	];

	return (
		<div className="mt-20">
			<div className="flex justify-center">
				<p className=" text-4xl w-fit">Industry we Cater</p>
			</div>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
				{items.map((item, index) => (
					<div
						key={index}
						className="bg-white rounded-lg shadow-lg p-4 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
						{/* Enclose the image in a circle */}
						<img
							src={item.imgSrc}
							alt={item.text}
							className=" w-4/6 hover:w-5/6 transition-all duration-500 h-auto rounded-full gap-10 m-auto"
						/>
						<p className="text-center">{item.text}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Cater;
