import React from "react";
import {
	MdPhone,
	MdMailOutline,
	MdLocationOn,
	MdBusiness,
} from "react-icons/md";

const ContactDetails: React.FC = () => {
	return (
		<div className="container mx-auto mt-10 px-4">
			<h2 className="text-center text-3xl font-light mb-6">
				Marketing and Administrative Office
			</h2>
			<div className="p-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					<div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center space-y-4 mx-2 sm:mx-0">
						<MdPhone className="text-4xl text-blue-500" />
						<p className="text-center font-light">Phone Number</p>
						<p className="text-center text-sm text-gray-500">
							+91-22-25116659
							<br />
							+91-22-25112294
							<br />
							+91-22-25162450
						</p>
					</div>
					<div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center space-y-4 mx-2 sm:mx-0">
						<MdMailOutline className="text-4xl text-blue-500" />
						<p className="text-center font-light">Email</p>
						<p className="text-center text-sm text-gray-500">
							mktg@polyplast.co.in
						</p>
					</div>
					<div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center space-y-4 mx-2 sm:mx-0">
						<MdLocationOn className="text-4xl text-blue-500" />
						<p className="text-center font-light">Manufacturing Unit</p>
						<p className="text-center text-sm text-gray-500">
							REVENUE SURVEY NO. 727/1 and 727/2 Village Menpura, Taluka Dabhoi
							Dist, Baroda, Gujarat, India
						</p>
					</div>
					<div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center space-y-4 mx-2 sm:mx-0">
						<MdBusiness className="text-4xl text-blue-500" />
						<p className="text-center font-light">Administrative Office</p>
						<p className="text-center text-sm text-gray-500">
							Thakore Industrial Estate, Kurla-Kirol Road, Vidyavihar (West),
							Mumbai - 400 086, Maharashtra, India
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactDetails;
