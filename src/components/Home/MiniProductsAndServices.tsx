import ATitle from "../ATitle";
import RButton from "../RButton";

const MiniProductsAndServices = () => {
	return (
		<div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4 lg-px-0 w-full lg:w-5/6 lg:mx-auto mt-20">
			<div className="w-full lg:w-3/4">
				<ATitle title="Full Range of Composite Products & Services" />
				<p className="text-gray-700 mt-5">
					POLY PLAST CHEMI-PLANTS(INDIA) PVT LTD has been providing global
					solutions to fight corrosion since 1967. With our strength of more
					than 400 skilled labourers and 18000 Sq Meters of fabrication. We
					become the preferred choice for our customers. We cater to a niche
					segment, it works best as a replacement to steel which corrodes very
					easily and becomes much cheaper than exotic metals.
				</p>
				<img
					src="https://res.cloudinary.com/dip2khkyo/image/upload/v1739209215/main_ngvlz1.webp"
					alt="Image Description"
					className="mt-4 shadow-lg shadow-gray-400"
				/>
				<RButton>Read More</RButton>
			</div>
			<div className="w-full lg:w-1/4 mx-auto mr-4 shadow-lg">
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
		src: "https://res.cloudinary.com/dip2khkyo/image/upload/v1739211318/performance-icon-1_npixf0.webp",
		value: "56",
		label: "Years of Experience",
	},
	{
		src: "https://res.cloudinary.com/dip2khkyo/image/upload/v1739211346/performance-icon-2_s5xqtv.webp",
		value: "100+",
		label: "Projects",
	},
	{
		src: "https://res.cloudinary.com/dip2khkyo/image/upload/v1739211373/performance-icon-3_ys36ly.webp",
		value: "10+",
		label: "Products",
	},
	{
		src: "https://res.cloudinary.com/dip2khkyo/image/upload/v1739211402/performance-icon-4_hmckm0.webp",
		value: "100+",
		label: "Happy Clients",
	},
];

export default MiniProductsAndServices;
