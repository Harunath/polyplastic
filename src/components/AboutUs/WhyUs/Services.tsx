

const Services = () => {
  const servicesData = [
    {
      id: 1,
      imageUrl: 'https://www.polyplast.co.in/assets/img/good-quality.webp',
      description: 'Consistent Good Quality',
    },
    {
      id: 2,
      imageUrl: 'https://www.polyplast.co.in/assets/img/proactive-team.webp',
      description: 'Proactive team',
    },
    {
      id:3,
      imageUrl: 'https://www.polyplast.co.in/assets/img/client-handholding.webp',
      description: 'Good client handholding',
    },
    {
      id:4,
      imageUrl: 'https://www.polyplast.co.in/assets/img/installation-services.webp',
      description:'Strong site team for Installation services',
    },
    {
      id:5,
      imageUrl: 'https://www.polyplast.co.in/assets/img/site-team.webp',
      description: 'Motivated site team for shutdown',
    },
    {
      id:6,
      imageUrl: 'https://www.polyplast.co.in/assets/img/market-price.webp',
      description: 'Reasonable market price',
    },
    {
      id:7,
      imageUrl: 'https://www.polyplast.co.in/assets/img/delivery-time.webp',
      description: 'Short delivery time/Ontime delivery',
    }
  ];

  return (
    <div className="flex flex-col items-center mx-4">
      <h2 className="text-center font-light text-xl m-4">Strong site team for Installation services</h2>
      <div className="flex flex-wrap justify-center">
        {servicesData.map((service) => (
          <div key={service.id} className="max-w-xs w-32 h-32 mx-2 my-4 pb-2 bg-white rounded-lg overflow-hidden shadow-md text-center relative">
            <div className="w-16 h-16 mx-auto my-4 rounded-full border-8 border-gray-400 flex items-center justify-center overflow-hidden transition duration-300 ease-in-out transform hover:border-red-500 p-1">
              <img src={service.imageUrl} alt={`Service ${service.id}`} className="w-full h-full object-cover object-center p-2" />
            </div>
            <p className="text-gray-700 text-xs px-2 mb-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;




















