import { motion } from "framer-motion";
import ATitle from "../ATitle";

const Cater = () => {
	const items = [
		{
			imgSrc:
				"https://res.cloudinary.com/dip2khkyo/image/upload/v1739208574/oil_lknabe.png",
			text: "Oil 1",
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dip2khkyo/image/upload/v1739208599/pulp_k5qizs.png",
			text: "Pulp & Paper",
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dip2khkyo/image/upload/v1739208619/architect_ubby6z.png",
			text: "Construction",
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dip2khkyo/image/upload/v1739208639/telecommunications_bqpie9.png",
			text: "Telecommunication",
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dip2khkyo/image/upload/v1739208659/bromine_v9kkbb.png",
			text: "Bromine",
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dip2khkyo/image/upload/v1739208679/water_vflcbb.png",
			text: "Water Treatment / Desalination",
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dip2khkyo/image/upload/v1739208700/dyes_kymhmn.png",
			text: "Dyes & Pigments",
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dip2khkyo/image/upload/v1739208728/titanium_hxbnxq.png",
			text: "Titanium Dioxide Pigment",
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dip2khkyo/image/upload/v1739208748/mining_i8tve0.png",
			text: "Mineral Processing / Mining",
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dip2khkyo/image/upload/v1739208773/manufactere_ianauk.png",
			text: "Original Equipment Manufacturer",
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dip2khkyo/image/upload/v1739208793/fiber_cyce3p.png",
			text: "Viscose / Fiber",
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dip2khkyo/image/upload/v1739208813/ion_mcpuay.png",
			text: "Ion Exchange Resins",
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dip2khkyo/image/upload/v1739208840/chlor_poctvc.png",
			text: "Chlor Alkali",
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dip2khkyo/image/upload/v1739208861/steel_l12vg7.png",
			text: "Steel",
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dip2khkyo/image/upload/v1739208881/chemical_kldwu6.png",
			text: "Chemical",
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dip2khkyo/image/upload/v1739208905/pharma_knljnm.png",
			text: "Pharmaceutical",
		},
		{
			imgSrc:
				"https://res.cloudinary.com/dip2khkyo/image/upload/v1739208926/fertilizar_jo8swb.png",
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
