import React from "react";
import { MdArrowForward, MdLocationOn, MdPhone, MdMailOutline } from 'react-icons/md'; // Import the icons

interface Link {
  title: string;
  url: string;
}

const Footer: React.FC = () => {
  const firstColumnLinks: Link[] = [
    { title: "Home", url: "/" },
    { title: "About Us", url: "/about" },
    { title: "Material", url: "/material" },
    { title: "Products", url: "/products" },
    { title: "Projects", url: "/projects" },
    { title: "Feedback", url: "/feedback" },
    { title: "Location", url: "/location" },
    { title: "Contact Us", url: "/contactUs" },
  ];

  const renderLinksColumn = (links: Link[]) => {
    return (
      <ul className="text-sm ml-4">
        {links.map((link, index) => (
          <li key={index}>
            <MdArrowForward className="inline-block align-middle" /> {/* Arrow icon */}
            <a href={link.url} className="ml-2 hover:text-blue-500">{link.title}</a> {/* Added hover effect */}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <footer className="relative bg-gray-600 text-white py-8 mt-5">
      <div className="container mx-auto relative">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 p-2"> {/* Quick Links */}
            <div className="bg-transparent rounded-lg overflow-hidden">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              {renderLinksColumn(firstColumnLinks)}
            </div>
          </div>
          <div className="w-full md:w-1/3 p-2"> {/* Contact Us */}
            <div className="bg-transparent rounded-lg overflow-hidden">
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <div className="flex items-center mt-2">
                <MdPhone className="mr-2" size={24} /> {/* Phone icon */}
                <span>+1234567890</span>
              </div>
              <div className="flex items-center mt-2">
                <MdMailOutline className="mr-2" size={24} /> {/* Mail icon */}
                <span>example@example.com</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-2"> {/* Rolan Plast */}
            <div className="bg-transparent rounded-lg overflow-hidden">
              <h3 className="text-lg font-semibold mb-2">
                Rolan Plast Chemi Plants (I) Pvt Ltd
              </h3>
              <div className="mb-2">
                <div className="flex items-center">
                  <MdLocationOn className="mr-2" size={24} /> {/* Location icon */}
                  <span>Marketing and Administrative office:</span>
                </div>
                <span className="ml-8 block">
                  Thakore Industrial Estate, Kurla-Kirol Road, Vidyavihar (West), Mumbai - 400 086, Maharashtra, India.
                </span>
              </div>
              <div className="mt-4">
                <div className="flex items-center">
                  <MdLocationOn className="mr-2" size={24} /> {/* Location icon */}
                  <span>Manufacturing Unit:</span>
                </div>
                <span className="ml-8 block">
                  REVENUE SURVEY NO. 727/1 and 727/2 Village Menpura, Taluka Dabhoi Dist, Vadodara Gujarat, India
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-700 my-6" />
        <div className="text-sm text-center">
          <p>
            Copyright © 2024 Polyplast, All Rights Reserved. |{" "}
            <a href="/sitemap" className="hover:underline">
              Sitemap
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
