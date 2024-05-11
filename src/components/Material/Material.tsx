import TopBanner from "../TopBanner";

import AllMaterials from "./AllMaterials";



function Material() {
	const image =
		"https://wallup.net/wp-content/uploads/2017/11/22/404681-factory-industrial.jpg";
	return (
		<div>
			<TopBanner image={image} text="Material" />
			<AllMaterials/>
		</div>
	);
}

export default Material;
