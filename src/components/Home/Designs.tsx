const Designs = () => {
    return (
      <div className="flex justify-between items-center bg-gray-200 ">
        {/* Left Image */}
        <img src="https://www.polyplast.co.in/assets/img/manufacturing-s.webp?4" alt="Left Image" className="w-1/4 h-auto mr-4" />
  
        {/* Middle Container */}
        <div className="w-5/6 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg flex flex-row items-center w-full max-w-xl">
            <div className="flex-1 pr-4">
              <h1 className="text-xl font-semibold mb-2">Manufacturing</h1>
              <p className="text-gray-700 mb-4">We design and manufacture composite items, selecting the best product for your requirements.</p>
              <a href="#" className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">Read More</a>
            </div>
           
          
            <div className="flex-1 pl-4">
              <h1 className="text-xl font-semibold mb-2">Engineering</h1>
              <p className="text-gray-700 mb-4">POLY PLAST offers optimized pipe systems design and engineering, including stress and surge analysis as well as pipe support packages and detailed engineering for all composites products.</p>
              <a href="#" className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">Read More</a>
            </div>
          </div>
        </div>
  
        {/* Right Image */}
        <img src="https://www.polyplast.co.in/assets/img/technology-s.webp?2" alt="Right Image" className="w-1/4 h-auto ml-4" />
      </div>
    );
  };
  
  export default Designs














