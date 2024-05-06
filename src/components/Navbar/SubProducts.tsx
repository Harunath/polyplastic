import { Link } from "react-router-dom";

function SubProducts() {
	return (
		<div className=" absolute right-full top-0 w-20 md:w-60 rounded border border-gray-300 bg-white py-1">
			<div className="w-full hover:bg-blue-500 transition-color duration-300">
				<Link to="/products">
					<p className="p-2">Storage System</p>
				</Link>
			</div>
			<div className="w-full hover:bg-blue-500 transition-color duration-300">
				<Link to="/products">
					<p className="p-2">Colum / Tower</p>
				</Link>
			</div>
			<div className="w-full hover:bg-blue-500 transition-color duration-300">
				<Link to="/products">
					<p className="p-2">Reactor Systems</p>
				</Link>
			</div>
		</div>
	);
}

export default SubProducts;
