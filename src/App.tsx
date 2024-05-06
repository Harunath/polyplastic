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
import ChemicalEquipment from "./components/Products/ChemicalEquipment";
import PipesFitting from "./components/Products/PipesFitting";
import FRPROD from "./components/Products/FRPROD";
import SpecialProducts from "./components/Products/SpecialProducts";

function App() {
	return (
		<div className=" h-screen">
			<Navbar />
			<div className="overflow-y-scroll h-[calc(100%-96px)]">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/aboutus" element={<AboutUs />} />
					<Route path="/whoweare" element={<WhoWeAre />} />
					<Route path="/whyus" element={<WhyUs />} />
					<Route path="/products" element={<Products />}>
						<Route path="*" element={<ChemicalEquipment />} />
						<Route
							path="/products/chemicalequipment"
							element={<ChemicalEquipment />}
						/>
						<Route path="/products/pipes&fitting" element={<PipesFitting />} />
						<Route path="/products/frprod" element={<FRPROD />} />
						<Route
							path="/products/specialproducts"
							element={<SpecialProducts />}
						/>
					</Route>
					<Route path="/location" element={<Location />} />
					<Route path="contactus" element={<ContactUs />} />
					<Route path="material" element={<Material />} />
					<Route path="projects" element={<Projects />} />
				</Routes>
				<Footer />
			</div>
		</div>
	);
}

export default App;
