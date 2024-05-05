import { Link } from "react-router-dom";

function ProductsDropdown() {
	return (
		<div className=" absolute w-20 md:w-60 left-0 top-full z-10 bg-white pt-2 mt-1">
			<div className="w-full">
				<div className=" hover:bg-blue-500 transition-color duration-300 p-2">
					<Link to="/chemicalequipment" className="w-full">
						<p className="text-black">Chemical Equipment</p>
					</Link>
				</div>
				<div className=" hover:bg-blue-500 transition-color duration-300 p-2">
					<Link to="/pipes&fitting" className="w-full">
						<p className="text-black">Pipes / Fitting</p>
					</Link>
				</div>
				<div className=" hover:bg-blue-500 transition-color duration-300 p-2">
					<Link to="/frprod" className="w-full">
						<p className="text-black">FRP ROD</p>
					</Link>
				</div>
				<div className=" hover:bg-blue-500 transition-color duration-300 p-2">
					<Link to="/specialproducts" className="w-full">
						<p className="text-black">Special Products</p>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ProductsDropdown;
