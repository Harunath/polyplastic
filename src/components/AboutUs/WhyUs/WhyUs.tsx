import TopBanner from "../../TopBanner";
import Services from "./Services";

function WhyUs() {
	const image =
		"https://res.cloudinary.com/dip2khkyo/image/upload/v1739209995/why_us_banner-860x269_ogjyyo.jpg";
	return (
		<div>
			{/* <HeroSection/> */}
			<TopBanner image={image} text="WhyUs?" />
			<Services />
		</div>
	);
}

export default WhyUs;
