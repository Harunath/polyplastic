
const HeroSection = () => {
    const imageUrl = "https://cdn6.dissolve.com/p/D145_288_084/D145_288_084_1200.jpg";
  
    return (
      <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="absolute bottom-0 left-0 p-5 bg-red-700 text-white">
          <p className="text-lg font-semibold mb-2">Home // Who We Are</p>
          <h1 className="text-3xl font-bold ">Who We Are</h1>
        </div>
      </div>
    );
  };
  
  export default HeroSection;