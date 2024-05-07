import { useEffect, useRef, useState } from "react";
import ProductsDropdown from "./ProductsDropdowm";

function Products() {
	const [openProducts, setOpenProducts] = useState(false);

	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Function to close dropdown when clicking outside of it
		const handleClickOutside = (event: { target: any }) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setOpenProducts(false);
			}
		};

		// Add event listener when the component mounts
		document.addEventListener("mousedown", handleClickOutside);

		// Clean up the event listener when the component unmounts
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [dropdownRef, setOpenProducts]);

	return (
		<div ref={dropdownRef} className="relative flex items-center h-full">
			<div
				onClick={() => setOpenProducts(!openProducts)}
				className="text-black text-md hover:text-blue-500 transition-color duration-500">
				Products
			</div>
			<span onClick={() => setOpenProducts(!openProducts)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="24"
					height="24">
					<path d="M7 10l5 5 5-5z" />
				</svg>
			</span>
			{openProducts ? (
				<div className=" absolute w-20 md:w-60 left-0 top-full z-10 rounded border border-t-0 border-gray-300 bg-white pt-2 mt-1">
					<ProductsDropdown />
				</div>
			) : (
				""
			)}
		</div>
	);
}

export default Products;
