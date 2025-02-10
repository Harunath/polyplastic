import TopBanner from "../../TopBanner";
import Intro from "./Intro";

function WhoWeAre() {
	const image =
		"https://res.cloudinary.com/dip2khkyo/image/upload/v1739209779/D145_288_084_1200_c1xxod.jpg";
	return (
		<div>
			{/* <HeroSection/> */}
			<TopBanner image={image} text="WhoWeAre?" />
			<Intro />
		</div>
	);
}

export default WhoWeAre;
