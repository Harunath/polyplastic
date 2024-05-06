import React, { useState } from "react";
import EachSubProduct from "./EachSubProduct";
import { Link } from "react-router-dom";
interface SubProduct {
	name: string;
	link: string;
}

interface Product {
	name: string;
	link: string;
	subProducts?: SubProduct[];
}

// interface ProductsData extends Array<Product> {}
const EachProducts: React.FC<Product> = ({ name, link, subProducts }) => {
	const [extend, setExtend] = useState(false);
	return (
		<div>
			<div className="flex border-b border-gray-400">
				<Link to={link}>
					<p>{name}</p>
				</Link>
				<button onClick={() => setExtend(true)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="24"
						height="24">
						<path
							d="M12 5V19M5 12H19"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			</div>
			{extend && subProducts
				? subProducts.map((product, index) => (
						<EachSubProduct
							key={index}
							name={product.name}
							link={product.link}
						/>
				  ))
				: ""}
		</div>
	);
};

export default EachProducts;
