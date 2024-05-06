import TopBanner from "../../TopBanner";
import Intro from "./Intro";

function WhoWeAre() {
	const image =
		"https://cdn6.dissolve.com/p/D145_288_084/D145_288_084_1200.jpg";
	return (
		<div>
			{/* <HeroSection/> */}
			<TopBanner image={image} text="WhoWeAre?" />
			<Intro />
		</div>
	);
}

export default WhoWeAre;
