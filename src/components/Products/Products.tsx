import { Outlet } from "react-router-dom";
import TopBanner from "../TopBanner";

function Products() {
	const image =
		"https://wallup.net/wp-content/uploads/2017/11/22/404681-factory-industrial.jpg";
	return (
		<div>
			<TopBanner image={image} text="Products" />
			<Outlet />
		</div>
	);
}

export default Products;
