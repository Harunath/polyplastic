import { Outlet } from "react-router-dom";
import TopBanner from "../TopBanner";
import EachProducts from "./EachProducts";
import products from "../../assets/products";

function Products() {
	const image =
		"https://res.cloudinary.com/dip2khkyo/image/upload/v1739210419/404681-factory-industrial_b1efij.jpg";

	return (
		<div>
			<TopBanner image={image} text="Products" />
			<div className="flex mt-10 w-5/6 mx-auto gap-x-10">
				<div className="w-1/5">
					{products.map((product, index) => (
						<div>
							<EachProducts
								key={"p" + index}
								name={product.name}
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
