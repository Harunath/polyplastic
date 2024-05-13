import React from "react";
import { useState } from "react";
import SubProducts from "./SubProducts";
import { Link } from "react-router-dom";

interface SubProducts {
	name: string;
	link: string;
}

interface Product {
	name: string;
	link: string;
	subProducts?: SubProducts[];
}

const EachProduct: React.FC<Product> = ({ name, link, subProducts }) => {
	const [extend, setExtend] = useState(false);
	return (
		<div
			className=" hover:bg-blue-500 transition-color duration-300 relative text-center lg:text-start"
			onMouseOver={() => setExtend(true)}
			onMouseLeave={() => setExtend(false)}>
			<Link to={link} className="w-full">
				<p className="text-black p-2">{name}</p>
			</Link>
			<div className="hidden lg:block">
				{extend && subProducts && (
					<div
						className={`absolute right-full w-20 md:w-60 rounded border border-gray-300 bg-white py-1
						${name === "Special Products" ? "  bottom-0" : " top-0"}`}>
						{subProducts.map((product, index) => (
							<SubProducts
								key={index}
								name={product.name}
								link={product.link}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default EachProduct;
