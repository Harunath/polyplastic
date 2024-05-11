import TopBanner from "../TopBanner";

import AllMaterials from "./AllMaterials";
import Intro from "./Intro";



function Material() {
	const image =
		"https://wallup.net/wp-content/uploads/2017/11/22/404681-factory-industrial.jpg";
	return (
		<div>
			<TopBanner image={image} text="Material" />
			<Intro/>
			<AllMaterials/>
		</div>
	);
}

export default Material;
