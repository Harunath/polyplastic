import React from 'react';

const ContactDetails = () => {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-center text-3xl font-light mb-6">Marketing and Administrative Office</h2>
      <div className='p-10'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center space-y-1 h-full mx-2 sm:mx-0">
            <img src="https://pngimg.com/uploads/phone/phone_PNG48988.png" alt="Phone Icon" className="w-8 h-8 mb-2 " />
            <p className="text-center font-light">Phone Number</p>
            <p className="text-center text-sm text-gray-500">+91-22-25116659<br />+91-22-25112294<br />+91-22-25162450</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center space-y-1 h-full mx-2 sm:mx-0">
            <img src="https://tse3.mm.bing.net/th?id=OIP.Z2lotQUlRFaoqY7m3Ma89QHaHa&pid=Api&P=0&h=180" alt="Email Icon" className="w-8 h-8 mb-2 " />
            <p className="text-center font-light">Email</p>
            <p className="text-center text-sm text-gray-500">mktg@polyplast.co.in</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center space-y-1 h-full mx-2 sm:mx-0">
            <img src="https://static.vecteezy.com/system/resources/previews/000/497/269/original/vector-location-icon-design.jpg" alt="Location Icon" className="w-8 h-8 mb-2 " />
            <p className="text-center font-light">Manufacturing Unit</p>
            <p className="text-center text-sm text-gray-500">REVENUE SURVEY NO. 727/1 and 727/2 Village Menpura, Taluka Dabhoi Dist, Baroda, Gujarat, India</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center space-y-1 h-full mx-2 sm:mx-0">
            <img src="https://static.vecteezy.com/system/resources/previews/000/497/269/original/vector-location-icon-design.jpg" alt="Location Icon" className="w-8 h-8 mb-2" />
            <p className="text-center font-light">Administrative Office</p>
            <p className="text-center text-sm text-gray-500">Thakore Industrial Estate, Kurla-Kirol Road, Vidyavihar (West), Mumbai - 400 086, Maharashtra, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;




