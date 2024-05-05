import { Link } from "react-router-dom";

function SubProducts() {
	return (
		<div className=" absolute right-full top-0 w-20 md:w-60 rounded border border-gray-300 bg-white py-1">
			<div className="w-full hover:bg-blue-500 transition-color duration-300 p-2">
				<Link to="/products">Storage System</Link>
			</div>
			<div className="w-full hover:bg-blue-500 transition-color duration-300 p-2">
				<Link to="/products">Colum / Tower</Link>
			</div>
			<div className="w-full hover:bg-blue-500 transition-color duration-300 p-2">
				<Link to="/products">Reactor Systems</Link>
			</div>
		</div>
	);
}

export default SubProducts;
