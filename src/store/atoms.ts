import { atom } from "recoil";
import products from "../assets/products";

export const navState = atom({
	key: "navState",
	default: false, // Initially the navbar is closed
});
export const SERVICE_ID = atom({
	key: "SERVICE_ID",
	default: "service_13vypks",
});
export const FEEDBACK_TEMPLATE_ID = atom({
	key: "FEEDBACK_TEMPLATE_ID",
	default: "template_epypj0f",
});
export const ENQUIRY_TEMPLATE_ID = atom({
	key: "ENQUIRY_TEMPLATE_ID",
	default: "template_os3x9sa",
});
export const PUBLIC_KEY = atom({
	key: "PUBLIC_KEY",
	default: "6b-Wi09HIBq5-NOJE",
});

export const selectedProduct = atom({
	key: "selectedProduct",
	default: products[0],
});
