import { useState } from "react";
import EachMaterial from "./EachMaterial";

const AllMaterials = () => {
	const materials = [
		{
			id: "pe-polythene",
			name: "PE (Polyethylene)",
			content:
				"Polyethylene (PE) is one of the most commonly used plastics, often utilized in packaging materials, plastic bags, containers, and various other products. It is a thermoplastic polymer made from the polymerization of ethylene monomers. PE is known for its durability, flexibility, and chemical resistance, making it an ideal choice for use in containers and films. There are different types of polyethylene, including low-density polyethylene (LDPE), high-density polyethylene (HDPE), and linear low-density polyethylene (LLDPE), each with its own unique set of properties. PE is widely used in various industries such as food packaging, automotive, and medical equipment due to its low cost, ease of processing, and resistance to chemicals.",
		},
		{
			id: "pp-polyproplene",
			name: "PP (Polypropylene)",
			content:
				"Polypropylene (PP) is a versatile thermoplastic polymer used in a wide range of applications. It is the second most widely produced commodity plastic after polyethylene. PP is known for its strength, resistance to chemicals, and high melting point, making it suitable for use in packaging, automotive parts, textiles, and medical devices. It is commonly used to produce items like bottles, food containers, and medical syringes. One of the significant advantages of PP is its ability to be easily molded, which makes it an ideal material for injection molding and extrusion processes. It also exhibits good fatigue resistance, meaning it can withstand repeated bending or twisting without breaking.",
		},
		{
			id: "pvdf",
			name: "PVDF (Polyvinylidene Fluoride)",
			content:
				"Polyvinylidene fluoride (PVDF) is a highly non-reactive and pure thermoplastic material known for its outstanding chemical resistance, high temperature tolerance, and mechanical properties. It is commonly used in the chemical, pharmaceutical, and semiconductor industries, where resistance to aggressive chemicals is required. PVDF is also a popular choice for piping and lining systems, as it can withstand harsh chemical environments. Additionally, PVDF is used in the production of membranes for water filtration and other specialized applications such as coatings and electrical insulation. Its high resistance to UV radiation and ability to maintain integrity in harsh weather conditions make it a reliable material for outdoor use.",
		},
		{
			id: "ectfe",
			name: "ECTFE (Ethylene Chlorotrifluoroethylene)",
			content:
				"Ethylene chlorotrifluoroethylene (ECTFE) is a high-performance polymer that combines the chemical resistance of fluoropolymers with the processability of other engineering plastics. ECTFE is widely used in applications requiring resistance to aggressive chemicals, high temperatures, and harsh environmental conditions. It is commonly found in the chemical processing, oil and gas, and water treatment industries. This material is known for its excellent electrical insulation properties, UV stability, and its ability to maintain high mechanical strength even at elevated temperatures. ECTFE is typically used in corrosion-resistant coatings, piping systems, and as an insulation material in electrical cables.",
		},
		{
			id: "fep",
			name: "FEP (Fluorinated Ethylene Propylene)",
			content:
				"Fluorinated ethylene propylene (FEP) is a high-performance thermoplastic with exceptional chemical resistance, electrical insulating properties, and a wide service temperature range. It is a fluoropolymer similar to polytetrafluoroethylene (PTFE), but with better processability and ease of fabrication. FEP is commonly used in the manufacturing of wires, cables, and insulation materials due to its high dielectric strength and low friction coefficient. FEP is also utilized in chemical processing industries, where its resistance to both corrosive chemicals and extreme temperatures is a critical factor. FEP films are often used in applications like non-stick coatings, gaskets, and seals.",
		},
		{
			id: "pfa",
			name: "PFA (Perfluoroalkoxy)",
			content:
				"Perfluoroalkoxy (PFA) is a fluoropolymer that offers excellent thermal stability, superior chemical resistance, and electrical insulating properties. It is similar to PTFE but has improved mechanical strength and processability. PFA is commonly used in applications that involve high temperatures and aggressive chemicals, such as in semiconductor manufacturing, chemical processing, and food processing industries. PFA’s resistance to corrosion and ability to withstand continuous use at elevated temperatures make it an ideal choice for high-performance pipes, coatings, and lining systems. It is also used in the fabrication of gaskets, seals, and other critical components where durability and resistance are essential.",
		},
		{
			id: "pvc",
			name: "PVC (Polyvinyl Chloride)",
			content:
				"Polyvinyl chloride (PVC) is one of the most commonly used synthetic polymers in the world. It is a versatile material that is used in a wide range of applications, from construction materials like pipes and flooring to medical devices and packaging. PVC is known for its durability, low cost, and ease of processing. It can be rigid or flexible depending on the additives used in its formulation, making it suitable for a wide variety of uses. Rigid PVC is commonly used in plumbing and electrical conduit systems, while flexible PVC is used in hoses, tubing, and electrical cables. PVC is also highly resistant to weathering, chemicals, and abrasion, which makes it an ideal material for outdoor applications.",
		},
		{
			id: "frp",
			name: "FRP (Fiberglass Reinforced Plastic)",
			content:
				"Fiberglass reinforced plastic (FRP) is a composite material made by combining plastic resins with fiberglass fibers. The result is a strong, lightweight material that is highly resistant to corrosion and wear. FRP is used in a variety of industries, including construction, automotive, and marine applications. It is commonly used for structural components like tanks, pipes, and panels due to its ability to withstand extreme weather conditions and harsh environments. FRP is also used in the manufacturing of boats, aircraft, and vehicles due to its lightweight properties, which improve fuel efficiency and overall performance. The combination of strength, corrosion resistance, and ease of molding makes FRP a popular material in many applications.",
		},
		{
			id: "ppr",
			name: "PPR (Polypropylene Random Copolymer)",
			content:
				"Polypropylene random copolymer (PPR) is a durable plastic material used primarily in plumbing systems. It is a thermoplastic polymer known for its resistance to high temperatures and pressure, making it ideal for hot and cold water pipes. PPR is resistant to chemical corrosion, which extends the lifespan of plumbing systems. It also has excellent weldability, allowing for easy and secure connections between pipes and fittings. Additionally, PPR is lightweight, which simplifies installation and reduces transportation costs. Due to its strong mechanical properties, PPR is used in both residential and industrial plumbing applications and is becoming an increasingly popular material for energy-efficient systems.",
		},
		{
			id: "pph",
			name: "PPH (Polypropylene Homopolymer)",
			content:
				"Polypropylene homopolymer (PPH) is a high-strength material with excellent resistance to chemical degradation, making it ideal for use in demanding applications. PPH is often used in the production of automotive parts, packaging materials, and industrial components. It offers high tensile strength, stiffness, and excellent dimensional stability. PPH is also known for its ability to maintain its mechanical properties at elevated temperatures, which makes it suitable for use in applications where other polymers would fail. PPH is commonly used for manufacturing pipes, fittings, and containers that are exposed to harsh chemicals, hot liquids, or high-stress conditions.",
		},
		{
			id: "pph2222",
			name: "PPH 2222",
			content:
				"PPH 2222 is a specialized grade of polypropylene homopolymer that has enhanced properties for heavy-duty industrial applications. It offers superior impact resistance, strength, and chemical resistance compared to standard polypropylene. This material is commonly used in highly demanding industries like automotive manufacturing, chemical processing, and in the production of advanced industrial machinery. PPH 2222 is designed to withstand harsh environments where other materials would fail, such as exposure to high temperatures, aggressive chemicals, or heavy mechanical stress. The material’s excellent fatigue resistance and long-term durability make it an ideal choice for components that must perform reliably under extreme conditions.",
		},
	];

	const [selected, setSelected] = useState(0);

	return (
		<div className=" bg-gray-200">
			<div className=" flex gap-x-10 w-5/6 p-2 mx-auto mt-10 ">
				<div className="w-1/4">
					{materials.map((material, index) => (
						<div
							className=" border-b border-gray-400 py-1"
							key={material.id}
							onClick={() => {
								setSelected(index);
							}}>
							<p
								className={`px-4 py-2 text-sm ${
									selected === index ? "text-yellow-500" : "text-black"
								}`}>
								{material.name}
							</p>
						</div>
					))}
				</div>
				<div className="w-3/4">
					<div className="flex flex-col justify-center items-center">
						<h2
							className="text-3xl font-semibold text-center text-yellow-500 my-4"
							style={{ fontFamily: "Arial, sans-serif" }}>
							{materials[selected].name}
						</h2>
						<p
							className="text-lg text-gray-700 leading-relaxed px-8"
							style={{ fontFamily: "Arial, sans-serif" }}>
							{materials[selected].content}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllMaterials;
