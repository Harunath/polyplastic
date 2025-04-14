import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: false,
		arrows: false,
	};

	return (
		<div className="w-full">
			<Slider {...settings}>
				{[
					"https://res.cloudinary.com/dip2khkyo/image/upload/v1739208237/tmbwi6sdvj0cjmmx0zdp.webp",
					"https://res.cloudinary.com/dip2khkyo/image/upload/v1739208312/hero-banner4_sgd6jh.webp",
					"https://res.cloudinary.com/dip2khkyo/image/upload/v1739208340/hero-banner5_psajws.webp",
					"https://res.cloudinary.com/dip2khkyo/image/upload/v1739208370/hero-banner1_mid5af.webp",
					"https://res.cloudinary.com/dip2khkyo/image/upload/v1739208397/hero-banner2_sz8n6j.webp",
					"https://res.cloudinary.com/dip2khkyo/image/upload/v1739208435/hero-banner3_oqmdfk.webp",
				].map((src, index) => (
					<div key={index} className="max-h-screen">
						<img
							src={src}
							alt={`Slide ${index + 1}`}
							className="w-full h-auto rounded-md shadow-md lg:h-[550px] lg:w-[100%] mx-auto"
						/>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Carousel;
