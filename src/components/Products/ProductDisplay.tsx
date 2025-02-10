import { useRecoilValue } from "recoil";
import { selectedProduct } from "../../store/atoms";

function ProductDisplay() {
	const product = useRecoilValue(selectedProduct);

	return (
		<div className="flex flex-col items-center justify-center text-center p-4">
			<h1 className="text-2xl font-bold mb-2">{product.name}</h1>
			{product.description && (
				<p className="text-lg text-gray-700 mb-4">{product.description}</p>
			)}
		</div>
	);
}

export default ProductDisplay;
