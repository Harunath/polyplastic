

const Info = () => {
  return (
    <div className="flex flex-col items-center justify-center my-20">
      <h2 className="text-4xl text-gray-700 font-light mb-4">Get In Touch With Us For More Information</h2>
      <button
            type="submit"
            className="bg-gray-500 hover:bg-white text-white hover:text-gray-500 py-2 px-4 mt-2 shadow-md transition duration-300"
            // onClick={sendEmail}
          >
            Enquire Now
          </button>
    </div>
  );
};

export default Info;
