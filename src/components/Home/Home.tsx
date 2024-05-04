


import Carousel from "./Carousel";
import Cater from "./Cater";
import Designs from "./Designs";
import MiniProductsAndServices from "./MiniProductsAndServices";
import ServicesSection from "./ServiceSection";

function Home() {
	return (
		<div>
			<Carousel />
			<MiniProductsAndServices />
			<Designs/>
			<Cater/>
			<ServicesSection/>
			
			
		</div>
	);
}

export default Home;
