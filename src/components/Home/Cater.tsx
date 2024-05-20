import { motion } from "framer-motion";
import ATitle from "../ATitle";

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
	];

	return (
		<div className="mt-20 px-10">
			<div className="text-center">
				<ATitle title="Industry we Cater" />
			</div>
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-5 mt-10">
				{items.map((item, index) => (
					<div
						key={index}
						className="flex flex-col gap-5 justify-center items-center bg-white rounded-lg shadow-lg p-4">
						<motion.img
							initial={{
								scale: 1,
							}}
							whileHover={{
								scale: 1.2,
								transition: { duration: 0.3 },
							}}
							src={item.imgSrc}
							alt={item.text}
							className="w-full lg:w-2/5 h-fit rounded-full border-8 border-gray-200 p-2 m-auto "
						/>
						<p className="text-center whitespace-nowrap">
							<span className="block md:hidden">
								{item.text.length > 12
									? `${item.text.slice(0, 9)}...`
									: item.text}
							</span>
							<span className="hidden md:block">{item.text}</span>
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Cater;
