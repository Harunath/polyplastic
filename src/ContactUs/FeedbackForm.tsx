import { useState, ChangeEvent } from "react";
import emailjs from "@emailjs/browser";
import { useRecoilValue } from "recoil";
import { SERVICE_ID, FEEDBACK_TEMPLATE_ID, PUBLIC_KEY } from "../store/atoms";
interface FormData {
	user_name: string;
	user_email: string;
	message: string;
}

const FeedbackForm = () => {
	const [formData, setFormData] = useState<FormData>({
		user_name: "",
		user_email: "",
		message: "",
	});

	// private keys for sending email
	const service_id: string = useRecoilValue(SERVICE_ID);
	const template_id: string = useRecoilValue(FEEDBACK_TEMPLATE_ID);
	const public_key: string = useRecoilValue(PUBLIC_KEY);

	// handling changes in form data
	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// sending email
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

	return (
		<div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6">
			<h2 className="text-2xl font-bold mb-4">Contact Us</h2>
			<form onSubmit={sendEmail}>
				<div className="mb-4">
					<label
						htmlFor="user_name"
						className="block text-gray-700 font-semibold mb-1">
						Your Name<span className="text-red-500">*</span>
					</label>
					<input
						type="text"
						id="user_name"
						name="user_name"
						className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
						placeholder="Enter your name"
						value={formData.user_name}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="user_email"
						className="block text-gray-700 font-semibold mb-1">
						Your Email<span className="text-red-500">*</span>
					</label>
					<input
						type="email"
						id="user_email"
						name="user_email"
						className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
						placeholder="Enter your email"
						value={formData.user_email}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="message"
						className="block text-gray-700 font-semibold mb-1">
						Your Message<span className="text-red-500">*</span>
					</label>
					<textarea
						id="message"
						name="message"
						className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
						placeholder="Enter your message"
						value={formData.message}
						onChange={handleChange}
						required></textarea>
				</div>
				<button
					type="submit"
					className="bg-blue-500 text-white rounded-md px-4 py-2 font-semibold hover:bg-blue-600 transition-colors">
					Send Email
				</button>
			</form>
		</div>
	);
};

export default FeedbackForm;
