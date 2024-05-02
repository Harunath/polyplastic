import { Splide, SplideSlide } from "@splidejs/react-splide";

import hero_banner2 from "../../assets/homeCarousel/hero-banner2.webp";
import hero_banner3 from "../../assets/homeCarousel/hero-banner3.webp";
function Carousel() {
	const option = {
		direction: "ltr",
		type: "loop",
		pagpagination: true,
		perPage: 1,
		perMove: 1,
		cover: true,
		arrows: false,
		autoPlay: true,
		interval: 100,
		pauseOnHover: false,
		pauseOnFocus: false,
	};
	return (
		<div className="">
			<Splide
				className="h-full"
				option={option}
				aria-label="My Favorite Images">
				<SplideSlide className="h-full">
					<img className="h-60" src={hero_banner2} alt="Image 1" />
				</SplideSlide>
				<SplideSlide className="h-full">
					<img className="h-60" src={hero_banner3} alt="Image 2" />
				</SplideSlide>
			</Splide>
		</div>
	);
}

export default Carousel;
