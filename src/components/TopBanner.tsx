import React from "react";

interface TopBannerProps {
	image: string;
	text: string;
}

const TopBanner: React.FC<TopBannerProps> = ({ image, text }) => {
	return (
		<div
			className="relative w-full h-96 bg-cover bg-no-repeat bg-center"
			style={{ backgroundImage: `url(${image})` }}>
			<div className="absolute bottom-0 left-0 p-5 bg-red-700 text-white">
				<p className="text-lg font-semibold mb-2">Home // {text}</p>
				<h1 className="text-3xl font-bold">{text}</h1>
			</div>
		</div>
	);
};

export default TopBanner;
