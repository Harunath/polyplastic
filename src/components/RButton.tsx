import React, { ReactNode } from "react";

interface RButtonProps {
	children: ReactNode; // This defines the children prop as any React node
}

const RButton: React.FC<RButtonProps> = ({ children }) => {
	return (
		<button className="bg-gray-700 text-white hover:bg-gray-200 hover:text-black hover:shadow-xl shadow-black px-4 py-2 mt-8">
			{children}
		</button>
	);
};

export default RButton;
