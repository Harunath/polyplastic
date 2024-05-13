import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EachSubProduct from "./EachSubProduct";
import { Link } from "react-router-dom";

interface SubProduct {
    name: string;
    link: string;
}

interface Product {
    name: string;
    link: string;
    subProducts?: SubProduct[];
}

const EachProducts: React.FC<Product> = ({ name, link, subProducts }) => {
    const [extend, setExtend] = useState(false);

    const toggleExtend = () => {
        setExtend(prevState => !prevState);
    };

    return (
        <div>
            <div className="flex flex-col md:flex-row border-b border-gray-300 justify-between p-4">
                <Link to={link}>
                    <p>{name}</p>
                </Link>
                <button onClick={toggleExtend} className="mt-2 md:mt-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24">
                        <path
                            d="M12 5V19M5 12H19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
            <AnimatePresence>
                {extend && (
                    <motion.div
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        {subProducts &&
                            subProducts.map((product, index) => (
                                <EachSubProduct
                                    key={index}
                                    name={product.name}
                                    link={product.link}
                                />
                            ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default EachProducts;
