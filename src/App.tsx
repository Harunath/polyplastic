import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Products from "./components/Products/Products";
import Location from "./components/Location/Location";
import ContactUs from "./components/ContactUs/ContactUs";
import Material from "./components/Material/Material";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import WhoWeAre from "./components/AboutUs/whoWeAre/WhoWeAre";
import WhyUs from "./components/AboutUs/WhyUs/WhyUs";
import Sitemap from "./components/Sitemap";
import ProductDescription from "./components/Products/ProductDescription";
import ProductDisplay from "./components/Products/ProductDisplay";
import SNavbar from "./components/Navbar/SNavbar";

function App() {
	return (
		<div className=" relative h-screen w-full">
			<div className=" absolute h-12 w-full z-20">
				<Navbar />
				<SNavbar />
			</div>
			<div className="w-full pt-12 lg:pt-24">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/aboutus" element={<AboutUs />} />
					<Route path="/whoweare" element={<WhoWeAre />} />
					<Route path="/whyus" element={<WhyUs />} />
					<Route path="/products" element={<Products />}>
						<Route path="*" element={<ProductDisplay />} />
						<Route
							path="/products/chemicalequipment"
							element={<ProductDisplay />}>
							<Route
								path="/products/chemicalequipment/storagesystems"
								element={<ProductDescription />}
							/>
							<Route
								path="/products/chemicalequipment/columnortowers"
								element={<ProductDescription />}
							/>
							<Route
								path="/products/chemicalequipment/reactorssystems"
								element={<ProductDescription />}
							/>
						</Route>
						<Route path="/products/pipesorfitting" element={<ProductDisplay />}>
							<Route
								path="/products/pipesorfitting/pipingsystem"
								element={<ProductDescription />}
							/>
						</Route>
						<Route
							path="/products/scrubbingsystems"
							element={<ProductDisplay />}>
							<Route
								path="/products/scrubbingsystems/scrubber&filters"
								element={<ProductDescription />}
							/>
							<Route
								path="/products/scrubbingsystems/fgd"
								element={<ProductDescription />}
							/>
							<Route
								path="/products/scrubbingsystems/centrifugalblowers"
								element={<ProductDescription />}
							/>
						</Route>
						<Route path="/products/frprod" element={<ProductDisplay />} />
						<Route
							path="/products/fluoropolymerlining"
							element={<ProductDisplay />}>
							<Route
								path="/products/fluoropolymerlining/fsl_bsl"
								element={<ProductDescription />}
							/>
							<Route
								path="/products/fluoropolymerlining/mbl_ubl_ll"
								element={<ProductDescription />}
							/>
						</Route>
						<Route
							path="/products/fluoropolymercoatings"
							element={<ProductDisplay />}></Route>
						<Route
							path="/products/specialproducts"
							element={<ProductDisplay />}>
							<Route
								path="/products/specialproducts/grating"
								element={<ProductDescription />}
							/>
							<Route
								path="/products/specialproducts/filterhousing"
								element={<ProductDescription />}
							/>
							<Route
								path="/products/specialproducts/paneltanks"
								element={<ProductDescription />}
							/>
							<Route
								path="/products/specialproducts/flangeguards"
								element={<ProductDescription />}
							/>
							<Route
								path="/products/specialproducts/headers"
								element={<ProductDescription />}
							/>
							<Route
								path="/products/specialproducts/ducting"
								element={<ProductDescription />}
							/>
						</Route>
						<Route path="/products/construction" element={<ProductDisplay />} />
						<Route
							path="/products/site/services"
							element={<ProductDisplay />}
						/>
					</Route>
					<Route path="/location" element={<Location />} />
					<Route path="/contactus" element={<ContactUs />} />
					<Route path="/material" element={<Material />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/sitemap" element={<Sitemap />} />
				</Routes>
				<Footer />
			</div>
		</div>
	);
}

export default App;
