// import { Splide, SplideSlide } from "@splidejs/react-splide";

// import hero_banner2 from "../../assets/homeCarousel/hero-banner2.webp";
// import hero_banner3 from "../../assets/homeCarousel/hero-banner3.webp";
// function Carousel() {
// 	const option = {
// 		direction: "ltr",
// 		type: "loop",
// 		pagpagination: true,
// 		perPage: 1,
// 		perMove: 1,
// 		cover: true,
// 		arrows: false,
// 		autoPlay: true,
// 		interval: 100,
// 		pauseOnHover: false,
// 		pauseOnFocus: false,
// 	};
// 	return (
// 		<div className="">
// 			<Splide
// 				className="h-full"
// 				option={option}
// 				aria-label="My Favorite Images">
// 				<SplideSlide className="h-full">
// 					<img className="h-60" src={hero_banner2} alt="Image 1" />
// 				</SplideSlide>
// 				<SplideSlide className="h-full">
// 					<img className="h-60" src={hero_banner3} alt="Image 2" />
// 				</SplideSlide>
// 			</Splide>
// 		</div>
// 	);
// }

// export default Carousel;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="w-full h-3/4">
      <Slider {...settings}>
        <div>
          <img
            src="https://www.polyplast.co.in/assets/img/hero-banner6.webp?3"
            className="w-full h-auto rounded-md shadow-md"
            alt="Slide 1"
          />
        </div>
        <div>
          <img
            src="https://www.polyplast.co.in/assets/img/hero-banner4.webp?2"
            className="w-full h-auto rounded-md shadow-md"
            alt="Slide 2"
          />
        </div>
        <div>
          <img
            src="https://www.polyplast.co.in/assets/img/hero-banner5.webp?2"
            className="w-full h-auto rounded-md shadow-md"
            alt="Slide 3"
          />
        </div>
        <div>
          <img
            src="https://www.polyplast.co.in/assets/img/hero-banner1.webp?2"
            className="w-full h-auto rounded-md shadow-md"
            alt="Slide 4"
          />
        </div>
        <div>
          <img
            src="https://www.polyplast.co.in/assets/img/hero-banner2.webp?2"
            className="w-full h-auto rounded-md shadow-md"
            alt="Slide 5"
          />
        </div>
        <div>
          <img
            src="https://www.polyplast.co.in/assets/img/hero-banner3.webp??2"
            className="w-full h-auto rounded-md shadow-md"
            alt="Slide 6"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;


