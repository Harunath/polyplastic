

const MiniProductsAndServices = () => {
  return (
    <div className="flex justify-center gap-8">
      <LeftCard />
      <RightCards />
    </div>
  );
};

const LeftCard = () => {
  return (
    <div className="w-3/4 ml-4">
      <h1 className="text-3xl font-light text-center">Full Range of Composite Products & Services</h1>
      <p className="text-gray-700">POLY PLAST CHEMI-PLANTS(INDIA) PVT LTD has been providing global solutions to fight corrosion since 1967. With our strength of more than 400 skilled labourers and 18000 Sq Meters of fabrication. We become the preferred choice for our customers. We cater to a niche segment, it works best as a replacement to steel which corrodes very easily and becomes much cheaper than exotic metals.</p>
      <img src="src/assets/MiniProductsAndServices/main.jpg" alt="Image Description" className="mt-4 rounded-lg" />
      <a href="#" className="mt-4 inline-block px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Read More</a>
    </div>
  );
};

const imageArray = [
  { src: 'src/assets/MiniProductsAndServices/performance-icon-1.webp', value: '56', label: 'Years of Experience' },
  { src: 'src/assets/MiniProductsAndServices/performance-icon-2.webp', value: '100+', label: 'Projects' },
  { src: 'src/assets/MiniProductsAndServices/performance-icon-3.webp', value: '10+', label: 'Products' },
  { src: 'src/assets/MiniProductsAndServices/performance-icon-4.webp', value: '100+', label: 'Happy Clients' }
];

const RightCards = () => {
  return (
    <div className="w-1/4 mr-4">
      {imageArray.map((item, index) => (
        <RightCard key={index} src={item.src} value={item.value} label={item.label} />
      ))}
    </div>
  );
};

const RightCard = ({ src, value, label }) => {
	return (
	  <div className="bg-gray-200 p-4 rounded-lg flex items-center justify-center mt-4">
		<img src={src} alt={`${label} Image`} className="w-14 h-16 object-cover rounded-full mr-4" />
  
		<div>
		  <p className="font-semibold text-lg mb-1">{value}</p>
		  <span className="text-sm">{label}</span>
		</div>
	  </div>
	);
  };
  

export default MiniProductsAndServices;
