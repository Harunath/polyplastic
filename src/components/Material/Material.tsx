import TopBanner from "../TopBanner";

import AllMaterials from "./AllMaterials";
import Intro from "./Intro";

function Material() {
	const image =
		"https://res.cloudinary.com/dip2khkyo/image/upload/v1739210276/404681-factory-industrial_lnl0sb.jpg";
	return (
		<div>
			<TopBanner image={image} text="Material" />
			<Intro />
			<AllMaterials />
		</div>
	);
}

export default Material;
