import { useState } from "react";
import { useRecoilValue } from "recoil";
import { PUBLIC_KEY, SERVICE_ID, ENQUIRY_TEMPLATE_ID } from "../store/atoms";
import emailjs from "@emailjs/browser";

const EnquiryForm = () => {
	const [formData, setFormData] = useState({
		companyName: "Not mentioned",
		contactPerson: "",
		mobileNo: "",
		email: "",
		address: "Not mentioned",
		message: "",
	});

	// private keys for sending email
	const service_id: string = useRecoilValue(SERVICE_ID);
	const template_id: string = useRecoilValue(ENQUIRY_TEMPLATE_ID);
	const public_key: string = useRecoilValue(PUBLIC_KEY);

	//handling changes in form
	const handleChange = (e: { target: { name: any; value: any } }) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// sending mail on submit
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
			companyName: "Not mentioned",
			contactPerson: "",
			mobileNo: "",
			email: "",
			address: "Not mentioned",
			message: "",
		});
	};

	return (
		<form className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md">
			<div className="mb-4">
				<div className="flex mb-2">
					<div className="w-1/2 mr-2">
						<label
							htmlFor="companyName"
							className="block text-sm font-medium text-gray-700">
							Company Name
						</label>
						<input
							type="text"
							id="companyName"
							name="companyName"
							className="w-full mt-1 border-gray-300 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
							value={formData.companyName}
							onChange={handleChange}
						/>
					</div>
					<div className="w-1/2 ml-2">
						<label
							htmlFor="contactPerson"
							className="block text-sm font-medium text-gray-700">
							Contact Person <span className="text-red-500">*</span>
						</label>
						<input
							type="text"
							id="contactPerson"
							name="contactPerson"
							className="w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
							value={formData.contactPerson}
							onChange={handleChange}
							required
						/>
					</div>
				</div>
				<div className="flex mb-2">
					<div className="w-1/2 mr-2">
						<label
							htmlFor="mobileNo"
							className="block text-sm font-medium text-gray-700">
							Mobile No <span className="text-red-500">*</span>
						</label>
						<input
							type="text"
							id="mobileNo"
							name="mobileNo"
							className="w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
							value={formData.mobileNo}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="w-1/2 ml-2">
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700">
							Email <span className="text-red-500">*</span>
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className="w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>
				</div>
				<div className="mb-2">
					<label
						htmlFor="address"
						className="block text-sm font-medium text-gray-700">
						Address
					</label>
					<input
						type="text"
						id="address"
						name="address"
						className="w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
						value={formData.address}
						onChange={handleChange}
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="message"
						className="block text-sm font-medium text-gray-700">
						Message <span className="text-red-500">*</span>
					</label>
					<textarea
						id="message"
						name="message"
						rows={4}
						className="w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
						value={formData.message}
						onChange={handleChange}
						required></textarea>
				</div>
				<div className="flex justify-between">
					<button
						type="submit"
						className="bg-blue-500 text-white rounded-md px-4 py-2 font-semibold hover:bg-blue-600 transition-colors"
						onClick={sendEmail}>
						Submit
					</button>
					<button
						type="button"
						onClick={handleReset}
						className="bg-gray-300 text-gray-700 rounded-md px-4 py-2 font-semibold hover:bg-gray-400 transition-colors">
						Reset
					</button>
				</div>
			</div>
		</form>
	);
};

export default EnquiryForm;
