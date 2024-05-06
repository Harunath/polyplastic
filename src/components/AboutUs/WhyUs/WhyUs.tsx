import TopBanner from "../../TopBanner";
import Services from "./Services";

function WhyUs() {
	const image =
		"https://computerbazzar.com/wp-content/uploads/2019/03/why_us_banner-860x269.jpg";
	return (
		<div>
			{/* <HeroSection/> */}
			<TopBanner image={image} text="WhyUs?" />
			<Services />
		</div>
	);
}

export default WhyUs;
