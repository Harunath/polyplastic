import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Products from "./components/Products/Products";
import Location from "./components/Location";
import ContactUs from "./components/ContactUs";
import Technology from "./components/Technology";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
function App() {
	return (
		<div className=" h-screen">
			<Navbar />
			<div className="overflow-y-scroll h-[calc(100%-96px)]">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/aboutus" element={<AboutUs />} />
					<Route path="/products" element={<Products />} />
					<Route path="/location" element={<Location />} />
					<Route path="contactus" element={<ContactUs />} />
					<Route path="technology" element={<Technology />} />
					<Route path="projects" element={<Projects />} />
				</Routes>
				<Footer />
			</div>
		</div>
	);
}

export default App;
