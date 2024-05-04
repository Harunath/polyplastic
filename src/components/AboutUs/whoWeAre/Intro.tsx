import React from 'react';

const Intro = () => {
  const imageUrl = "https://thumbs.dreamstime.com/b/group-engineer-manager-factory-workers-team-standing-against-production-line-194332375.jpg";

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">ROLAN PLAST CHEMI-PLANTS(INDIA) PVT LTD</h2>
      <p className="text-gray-700 mb-6">Rolan Plast has been providing global solutions to fight corrosion since 1967. With our strength of more than 400 skilled laborers and 18000 Sq Meters of fabrication, we become the preferred choice for our customers. We cater to a niche segment, it works best as a replacement to steel which corrodes very easily and becomes much cheaper than exotic metals.</p>
      <p className="text-gray-700 mb-6">We are a family of engineers & management graduates who are willing to take on new challenges at work & come out with creative solutions. Some of the most challenging & diverse projects done by our team in the last 5 decades.</p>
      <p className="text-gray-700 mb-6">As a strategic move in 2021, Poly Plast has added on FRP Rod using UV curing technology, ranging from 0.5 mm to 6 mm diameter, for OFC Industry, as a center support member, in its product basket. Poly Plast has planned to produce 2 million km / annum FRP Rod, in a phased manner. We can offer Hard Coat, Mega Bond, D Bond, E Bond, etc. products from our Vadodara facility, which is operational now and has State-of-the-art most advanced UV curing system. We are equipped with the most advanced equipment & testing facility in a premises which has 5,000 Sq Meters built up area on more than 45,000 Sq Meters land.</p>
      <p className="text-gray-700 mb-6">Composites & plastics are our core strength & we manufacture products for various industries:</p>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Chemicals</li>
        <li>Telecommunication</li>
        <li>Construction</li>
      </ul>
      <div className="relative mb-6">
        <img
          className="w-full h-full rounded-lg shadow-lg mb-4"
          src={imageUrl}
          alt="Placeholder Image"
        />
      </div>
    </div>
  );
};

export default Intro;






