
const HeroSection = () => {
  const imageUrl = "https://aisbackgroundchecks.com/wp-content/uploads/2014/07/bigstock-Background-digital-image-of-wo-61137458-1140x760.jpg";

  return (
    <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="absolute bottom-0 left-0 p-5 bg-red-700 text-white">
        <p className="text-lg font-semibold mb-2">Home // Location</p>
        <h1 className="text-3xl font-bold ">Location</h1>
      </div>
    </div>
  );
};

export default HeroSection;
