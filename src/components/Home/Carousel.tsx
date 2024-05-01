import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import hero_banner2 from "../../assets/homeCarousel/hero-banner2.webp";
import hero_banner3 from "../../assets/homeCarousel/hero-banner3.webp";
function Carousel() {
	return (
		<div>
			<Splide aria-label="My Favorite Images">
				<SplideSlide>
					<img src={hero_banner2} alt="Image 1" />
				</SplideSlide>
				<SplideSlide>
					<img src={hero_banner3} alt="Image 2" />
				</SplideSlide>
			</Splide>
		</div>
	);
}

export default Carousel;
