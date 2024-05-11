import ATitle from "../ATitle";
import RButton from "../RButton";

const Info = () => {
	return (
		<div className="flex flex-col items-center justify-center px-4 lg:px-0 my-10 lg:my-20">
			{/* <p className="text-4xl text-gray-700 font-light mb-4">
				Get In Touch With Us For More Information
			</p> */}
			<ATitle title="Get In Touch With Us For More Information" />
			<RButton>Enquire Now</RButton>
		</div>
	);
};

export default Info;
