import React from "react";

const Footer = () => {
	const firstColumnLinks = [
		{ title: "Home", url: "#" },
		{ title: "About Us", url: "#" },
		{ title: "Technology", url: "#" },
		{ title: "Products", url: "#" },
		{ title: "Manufacturing", url: "#" },
		{ title: "Engineering", url: "#" },
	];

	const secondColumnLinks = [
		{ title: "Materials", url: "#" },
		{ title: "Projects", url: "#" },
		{ title: "Design Standards", url: "#" },
		{ title: "News & Events", url: "#" },
		{ title: "Locations", url: "#" },
		{ title: "Job Seeker", url: "#" },
		{ title: "Contact Us", url: "#" },
		{ title: "Feedback", url: "#" },
	];

	const renderLinksColumn = (links: any[]) => {
		return (
			<ul className="text-sm ml-4">
				{links.map((link, index) => (
					<li key={index}>
						<span>&rarr;</span> <a href={link.url}>{link.title}</a>
					</li>
				))}
			</ul>
		);
	};

	return (
		<footer className=" relative bg-gray-600 text-white py-8 mt-5">
			{/* Blurred background image covering the entire footer */}
			{/* <div className="absolute inset-0">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.uflsi3aULTPZpXb6gZT_xgHaEG&pid=Api&P=0&h=180"
          alt="Background Image 1"
          className="w-full h-2vh object-cover filter blur-sm"
        />
      </div> */}
			{/* Content container */}
			<div className="container mx-auto relative">
				<div className="flex flex-wrap justify-between">
					{/* First column of Quick Links */}
					<div className="w-full md:w-1/4 p-4">
						<div className="bg-transparent rounded-lg overflow-hidden">
							<h3 className="text-lg font-semibold mb-2">Quick Links</h3>
							{renderLinksColumn(firstColumnLinks)}
						</div>
					</div>
					{/* Second column of Quick Links */}
					<div className="w-full md:w-1/4 p-4">
						<div className="bg-transparent rounded-lg overflow-hidden">
							{renderLinksColumn(secondColumnLinks)}
						</div>
					</div>
					{/* Contact information */}
					<div className="w-full md:w-1/4 p-4">
						<div className="bg-transparent rounded-lg overflow-hidden">
							<h3 className="text-lg font-semibold mb-2">Contact Us</h3>
							<div className="flex items-center mb-2">
								<img
									src="https://icon-library.com/images/phone-icon-transparent/phone-icon-transparent-16.jpg"
									alt="Phone Icon"
									className="w-6 h-6 ml-2"
									style={{ height: "24px" }} // Adjust height here
								/>
								<span>+1234567890</span>
							</div>
							<div className="flex items-center">
								<img
									src="https://freepngimg.com/download/youtube/62519-icons-youtube-envelope-computer-mail-email.png"
									alt="Email Icon"
									className="w-6 h-6 mr-2"
									style={{ height: "24px" }} // Adjust height here
								/>
								<span>example@example.com</span>
							</div>
						</div>
					</div>
					{/* Rolan Plast Chemi Plants section */}
					<div className="w-full md:w-1/4 p-4">
						<div className="bg-transparent rounded-lg overflow-hidden">
							<h3 className="text-lg font-semibold mb-2">
								Rolan Plast Chemi Plants (I) Pvt Ltd
							</h3>
							<div className="mb-2">
								<div className="flex items-center">
									<img
										src="https://vectorified.com/images/location-icon-transparent-background-1.png"
										alt="Location Icon"
										className="w-6 h-2 mr-2"
										style={{ height: "24px" }} // Adjust height here
									/>
									<span>Marketing and Administrative office:</span>
								</div>
								<span className="ml-8 block">
									Thakore Industrial Estate, Kurla-Kirol Road, Vidyavihar
									(West),
									<br />
									Mumbai - 400 086, Maharashtra, India.
								</span>
							</div>
							<div className="mt-4">
								<div className="flex items-center">
									<img
										src="https://vectorified.com/images/location-icon-transparent-background-1.png"
										alt="Location Icon"
										className="w-6 h-6 mr-2"
										style={{ height: "24px" }} // Adjust height here
									/>
									<span>Manufacturing Unit:</span>
								</div>
								<span className="ml-8 block">
									REVENUE SURVEY NO. 727/1 and 727/2 Village Menpura,
									<br />
									Taluka Dabhoi Dist, Vadodara Gujarat, India
								</span>
							</div>
						</div>
					</div>
				</div>
				{/* Horizontal line */}
				<hr className="border-gray-700 my-6" />
				{/* Copyright and Sitemap */}
				<div className="text-sm text-center">
					<p>
						Copyright © 2024 Polyplast, All Rights Reserved. |{" "}
						<a href="/sitemap" className=" hover:underline">
							Sitemap
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
