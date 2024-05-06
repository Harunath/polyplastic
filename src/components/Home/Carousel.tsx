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
	};

	return (
		<div className="w-full">
			<Slider {...settings}>
				<div className=" max-h-screen">
					<img
						src="https://www.polyplast.co.in/assets/img/hero-banner6.webp?3"
						className="w-full h-auto rounded-md shadow-md"
						alt="Slide 1"
					/>
				</div>
				<div className=" max-h-screen">
					<img
						src="https://www.polyplast.co.in/assets/img/hero-banner4.webp?2"
						className="w-full h-auto rounded-md shadow-md"
						alt="Slide 2"
					/>
				</div>
				<div className=" max-h-screen">
					<img
						src="https://www.polyplast.co.in/assets/img/hero-banner5.webp?2"
						className="w-full h-auto rounded-md shadow-md"
						alt="Slide 3"
					/>
				</div>
				<div className=" max-h-screen">
					<img
						src="https://www.polyplast.co.in/assets/img/hero-banner1.webp?2"
						className="w-full h-auto rounded-md shadow-md"
						alt="Slide 4"
					/>
				</div>
				<div className=" max-h-screen">
					<img
						src="https://www.polyplast.co.in/assets/img/hero-banner2.webp?2"
						className="w-full h-auto rounded-md shadow-md"
						alt="Slide 5"
					/>
				</div>
				<div className=" max-h-screen">
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
