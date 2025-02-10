import React from "react";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { selectedProduct } from "../../store/atoms";

interface SubProductProps {
	name: string;
	link: string;
	description: string;
}

const EachSubProduct: React.FC<SubProductProps> = ({
	name,
	link,
	description,
}) => {
	const setProduct = useSetRecoilState(selectedProduct);

	const handleClick = () => {
		setProduct({ name, link, description });
	};

	return (
		<div className="flex items-center py-2 px-4">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 12 12"
				width="12"
				height="12"
				className="h-2 w-2">
				<polygon points="0,0 0,12 12,6" fill="red" />
			</svg>
			<Link onClick={handleClick} to={link} className="text-gray-800">
				<span>{name}</span>
			</Link>
		</div>
	);
};

export default EachSubProduct;
