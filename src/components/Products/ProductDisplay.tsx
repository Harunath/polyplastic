import { useRecoilValue } from "recoil";
import { selectedProduct } from "../../store/atoms";

function ProductDisplay() {
	const product = useRecoilValue(selectedProduct);
	return <div>{product.name}</div>;
}

export default ProductDisplay;
