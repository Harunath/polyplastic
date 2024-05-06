import { useState } from "react";
import { useRecoilValue } from "recoil";
import { PUBLIC_KEY, SERVICE_ID, ENQUIRY_TEMPLATE_ID } from "../../store/atoms";
import emailjs from "@emailjs/browser";
import RButton from "../RButton";

const EnquiryForm = () => {
	const [formData, setFormData] = useState({
		companyName: "",
		contactPerson: "",
		mobileNo: "",
		email: "",
		address: "",
		message: "",
	});

	const service_id = useRecoilValue(SERVICE_ID);
	const template_id = useRecoilValue(ENQUIRY_TEMPLATE_ID);
	const public_key = useRecoilValue(PUBLIC_KEY);

	const handleChange = (e: { target: { name: any; value: any } }) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const sendEmail = async (e: { preventDefault: () => void }) => {
		e.preventDefault();

		try {
			await emailjs.send(service_id, template_id, formData, {
				publicKey: public_key,
			});
			console.log("SUCCESS!");
		} catch (error) {
			console.log("FAILED...", error);
		}
	};

	const handleReset = () => {
		setFormData({
			companyName: "",
			contactPerson: "",
			mobileNo: "",
			email: "",
			address: "",
			message: "",
		});
	};

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
			<div>
				<img
					src="https://www.polyplast.co.in/assets/img/contact-us-img.webp"
					alt="Enquiry Form"
					className="w-5/6 m-auto"
				/>
			</div>
			<form className="max-w-2xl ">
				<p className="text-3xl font-light mb-6">Enquiry Form</p>
				<div className=" space-y-5">
					<div className="flex gap-x-4 ">
						<div className="w-1/2">
							<input
								type="text"
								placeholder="Name of the Company"
								className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
								value={formData.companyName}
								onChange={handleChange}
								name="companyName"
							/>
						</div>
						<div className="flex flex-1">
							<input
								type="text"
								placeholder="Name of Contact Person"
								className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
								value={formData.contactPerson}
								onChange={handleChange}
								name="contactPerson"
							/>
						</div>
					</div>
					<div className="flex gap-x-4 ">
						<div className="w-1/2">
							<input
								type="text"
								placeholder="Mobile Number"
								className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
								value={formData.mobileNo}
								onChange={handleChange}
								name="mobileNo"
							/>
						</div>
						<div className="flex flex-1">
							<input
								type="email"
								placeholder="Email"
								className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
								value={formData.email}
								onChange={handleChange}
								name="email"
							/>
						</div>
					</div>
					<div>
						<textarea
							placeholder="Address"
							id="address"
							name="address"
							rows={4}
							className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 resize-y"
							value={formData.address}
							onChange={handleChange}></textarea>
					</div>
					<div>
						<textarea
							placeholder="Message"
							id="message"
							name="message"
							rows={4}
							className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 resize-y"
							value={formData.message}
							onChange={handleChange}></textarea>
					</div>
				</div>
				<div className="flex justify-start gap-x-10 mt-8">
					<RButton>
						<button onClick={sendEmail}>Submit</button>
					</RButton>
					<RButton>
						<button onClick={handleReset}>Reset</button>
					</RButton>
				</div>
			</form>
		</div>
	);
};

export default EnquiryForm;
