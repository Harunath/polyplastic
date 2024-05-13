const Intro = () => {
	return (
		<div className="container mx-auto px-4">
			<div className="flex flex-col lg:flex-row mt-8 items-center justify-center gap-8">
				<div className="lg:w-2/4 lg:mr-4 text-center lg:text-left">
					<p className="text-md text-justify">
						Our plastic solutions are made using a wide range of synthetic
						materials, with polymers as the main component. This allows us to
						create products with various shapes, while also focusing on their
						durability and flexibility. Poly Plast does not compromise with
						quality, that is why we choose to work only with the best materials
						on the market.
					</p>
					<p className="mt-2 text-md text-justify">
						There is not just 'one FRP'. Different resins, glasses and the type
						of processing enable the manufacture of various laminate types which
						sometimes have drastically different physical and chemical
						properties. Different laminate types are used, depending on the
						requirement profile and component. This ensures maximum flexibility
						compared with other materials.
					</p>
					<p className="mt-2 text-md text-justify">
						In addition to components made entire from FRP, POLY PLAST also
						manufactures products with an inner thermoplastic liner.
					</p>
					<p className="mt-2 text-md text-justify">
						The material compound of thermoplastic liner and glass-fibre
						reinforced plastic (FRP) combines the high chemical stability of
						special thermoplastics with the excellent mechanical and thermal
						parameters of FRP. The design and selection of the material partners
						allows fine-tuning the composite construction to the requirements of
						special applications much more precisely than it is possible with a
						different material.
					</p>
				</div>
				<div className="lg:w-1/4 mt-4 lg:mt-0">
					<img
						src="https://www.polyplast.co.in/assets/img/Material-pipe.webp"
						className="mx-auto lg:mx-0 w-auto h-auto"
						alt="Poly Plast"
					/>
				</div>
			</div>
		</div>
	);
};

export default Intro;
