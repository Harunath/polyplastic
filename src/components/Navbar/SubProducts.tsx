import React from "react";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { menuDropdown } from "../../store/atoms";

interface Product {
	name: string;
	link: string;
}

const SubProducts: React.FC<Product> = ({ name, link }) => {
	const setMenuDropdown = useSetRecoilState(menuDropdown);
	return (
		<div className="w-full hover:bg-blue-500 transition-color duration-300">
			<Link onClick={() => setMenuDropdown(false)} to={link}>
				<p className="p-2">{name}</p>
			</Link>
		</div>
	);
};

export default SubProducts;
