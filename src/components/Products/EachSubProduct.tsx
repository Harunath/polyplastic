import React from "react";
import { Link } from "react-router-dom";
interface SubProductProps {
	name: string;
	link: string;
}

const EachSubProduct: React.FC<SubProductProps> = ({ name, link }) => {
	return (
		<div>
			<Link to={link}>
				<p>{name}</p>
			</Link>
		</div>
	);
};

export default EachSubProduct;
