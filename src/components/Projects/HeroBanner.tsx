

const HeroBanner = () => {
    const imageUrl = "https://www.24hourgroup.com.mm/wp-content/uploads/2018/07/project_image-1024x517.png";
  
    return (
      <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="absolute bottom-0 left-0 p-5 bg-red-700 text-white">
          <p className="text-lg font-semibold mb-2">Home // Projects</p>
          <h1 className="text-3xl font-bold ">Projects</h1>
          
          
        </div>
      </div>
    );
  };
  
  export default HeroBanner;
  
    