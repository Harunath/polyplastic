

const HeroSection = () => {
  const imageUrl = "https://ges.co.il/wp-content/uploads/2016/02/Contact-us-banner.jpg";

  return (
    <div className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="absolute bottom-0 left-0 p-5 bg-red-700 text-white">
        <p className="text-lg font-semibold mb-2">Home // Contact Us</p>
        <h1 className="text-3xl font-bold ">Contact Us</h1>
        
        
      </div>
    </div>
  );
};

export default HeroSection;

  
  