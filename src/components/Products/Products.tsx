import { Outlet } from "react-router-dom";
import TopBanner from "../TopBanner";
import EachProducts from "./EachProducts";
import products from "../../assets/products";

function Products() {
	const image =
		"https://wallup.net/wp-content/uploads/2017/11/22/404681-factory-industrial.jpg";

	return (
		<div>
			<TopBanner image={image} text="Products" />
			<div className="flex mt-10 w-5/6 mx-auto">
				<div className="w-2/5">
					{products.map((product, index) => (
						<div>
							<EachProducts
								key={index}
								name={product.name as string}
								link={product.link}
								subProducts={product.subProducts}
							/>
						</div>
					))}
				</div>
				<div className="flex-1">
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default Products;
