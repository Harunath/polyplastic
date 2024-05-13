import React from "react";
import { Link } from "react-router-dom";

interface Product {
	name: string;
	link: string;
}

const SubProducts: React.FC<Product> = ({ name, link }) => {
	return (
		<div className="w-full hover:bg-blue-500 transition-color duration-300">
			<Link to={link}>
				<p className="p-2">{name}</p>
			</Link>
		</div>
	);
};

export default SubProducts;
