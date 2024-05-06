import { useState } from "react";
import { Link } from "react-router-dom";
import SubProducts from "./SubProducts";

function ProductsDropdown() {
	const [eq, setEq] = useState(false);
	return (
		<div className=" absolute w-20 md:w-60 left-0 top-full z-10 rounded border border-t-0 border-gray-300 bg-white pt-2 mt-1">
			<div className="w-full">
				<div
					className=" hover:bg-blue-500 transition-color duration-300 relative"
					onMouseOver={() => setEq(true)}
					onMouseLeave={() => setEq(false)}>
					<Link to="/products/chemicalequipment" className="w-full">
						<p className="text-black p-2">Chemical Equipment</p>
					</Link>
					{eq ? <SubProducts /> : undefined}
				</div>
				<div className=" hover:bg-blue-500 transition-color duration-300">
					<Link to="/products/pipes&fitting" className="w-full">
						<p className="text-black p-2">Pipes / Fitting</p>
					</Link>
				</div>
				<div className=" hover:bg-blue-500 transition-color duration-300">
					<Link to="/products/frprod" className="w-full">
						<p className="text-black p-2">FRP ROD</p>
					</Link>
				</div>
				<div className=" hover:bg-blue-500 transition-color duration-300">
					<Link to="/products/specialproducts" className="w-full">
						<p className="text-black p-2">Special Products</p>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ProductsDropdown;
