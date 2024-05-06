import Carousel from "./Carousel";
import Cater from "./Cater";
import Designs from "./Designs";
import Info from "./Info";
import MiniProductsAndServices from "./MiniProductsAndServices";
import ServicesSection from "./ServiceSection";

function Home() {
	return (
		<div className="text-gray-700">
			<Carousel />
			<MiniProductsAndServices />
			<Designs />
			<Cater />
			<ServicesSection />
			<Info />
		</div>
	);
}

export default Home;
