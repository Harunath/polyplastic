const HeroSection = () => {
  const imageUrl = "https://computerbazzar.com/wp-content/uploads/2019/03/why_us_banner-860x269.jpg";

  return (
    <div className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="absolute bottom-0 left-0 p-5 bg-red-700 text-white">
        <p className="text-lg font-semibold mb-2">Home // Why Us</p>
        <h1 className="text-3xl font-bold ">Why Us</h1>
      </div>
    </div>
  );
};

export default HeroSection;
