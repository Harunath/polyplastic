import React from "react";
import { Link } from "react-router-dom";

interface SubProductProps {
    name: string;
    link: string;
}

const EachSubProduct: React.FC<SubProductProps> = ({ name, link }) => {
    return (
        <div className="flex items-center py-2 px-4">
            <span
                style={{
                    width: "0",
                    height: "0",
                    borderTop: "6px solid transparent",
                    borderBottom: "6px solid transparent",
                    borderLeft: "6px solid red", 
                    marginRight: "0.5rem"         
                }}
            ></span>
            <Link to={link} className="text-gray-800">
                <span>{name}</span>
            </Link>
        </div>
    );
};

export default EachSubProduct;


