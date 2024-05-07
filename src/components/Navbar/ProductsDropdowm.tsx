import products from "../../assets/products";
import EachProduct from "./EachProduct";

function ProductsDropdown() {
	return (
		<div className="w-full">
			{products.map((product, index) => (
				<EachProduct
					key={index}
					name={product.name}
					link={product.link}
					subProducts={product.subProducts}
				/>
			))}
		</div>
	);
}

export default ProductsDropdown;
