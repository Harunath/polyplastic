const MiniProductsAndServices = () => {
	return (
		<div className="flex justify-center gap-8 w-5/6 mx-auto mt-20">
			<div className="w-3/4 ml-4">
				<h1 className="text-4xl font-light text-center">
					Full Range of Composite Products & Services
				</h1>
				<p className="text-gray-700">
					POLY PLAST CHEMI-PLANTS(INDIA) PVT LTD has been providing global
					solutions to fight corrosion since 1967. With our strength of more
					than 400 skilled labourers and 18000 Sq Meters of fabrication. We
					become the preferred choice for our customers. We cater to a niche
					segment, it works best as a replacement to steel which corrodes very
					easily and becomes much cheaper than exotic metals.
				</p>
				<img
					src="src/assets/MiniProductsAndServices/main.jpg"
					alt="Image Description"
					className="mt-4 rounded-lg"
				/>
				<a
					href="#"
					className="mt-4 inline-block px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
					Read More
				</a>
			</div>
			<div className="w-1/4 mr-4 shadow-lg">
				{imageArray.map((item, index) => (
					<div
						key={index}
						className=" border-b border-gray-300 p-4 flex items-center gap-x-8 mt-4">
						<img
							src={item.src}
							alt={`${item.label} Image`}
							className="w-14 h-16 object-cover rounded-full mr-4"
						/>

						<div>
							<p className="font-semibold text-lg mb-1">{item.value}</p>
							<span className="text-sm">{item.label}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

const imageArray = [
	{
		src: "src/assets/MiniProductsAndServices/performance-icon-1.webp",
		value: "56",
		label: "Years of Experience",
	},
	{
		src: "src/assets/MiniProductsAndServices/performance-icon-2.webp",
		value: "100+",
		label: "Projects",
	},
	{
		src: "src/assets/MiniProductsAndServices/performance-icon-3.webp",
		value: "10+",
		label: "Products",
	},
	{
		src: "src/assets/MiniProductsAndServices/performance-icon-4.webp",
		value: "100+",
		label: "Happy Clients",
	},
];

export default MiniProductsAndServices;
