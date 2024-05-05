
const HeroSection = () => {
    const imageUrl = "https://wallup.net/wp-content/uploads/2017/11/22/404681-factory-industrial.jpg";
  
    return (
      <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="absolute bottom-0 left-0 p-5 bg-red-700 text-white">
          <p className="text-lg font-semibold mb-2">Home // Technology</p>
          <h1 className="text-3xl font-bold ">Technology</h1>
          
          
        </div>
      </div>
    );
  };
  
  export default HeroSection;