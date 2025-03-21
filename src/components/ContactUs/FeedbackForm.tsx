import { useState, ChangeEvent } from "react";
import emailjs from "@emailjs/browser";
import { useRecoilValue } from "recoil";
import {
	SERVICE_ID,
	FEEDBACK_TEMPLATE_ID,
	PUBLIC_KEY,
} from "../../store/atoms";
import RButton from "../RButton";

const FeedbackForm = () => {
	const [formData, setFormData] = useState({
		user_name: "",
		user_email: "",
		message: "",
	});

	const service_id: string = useRecoilValue(SERVICE_ID);
	const template_id: string = useRecoilValue(FEEDBACK_TEMPLATE_ID);
	const public_key: string = useRecoilValue(PUBLIC_KEY);

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
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

	return (
		<div className="max-w-screen-lg mx-auto">
			<div className="flex flex-col md:flex-row w-full mt-20 gap-x-10">
				<div className="md:w-1/2 p-4 pr-2 ">
					<div className="w-full ">
						<h2 className="text-4xl font-light mb-6">Feedback Form</h2>
						<form onSubmit={sendEmail} className="w-full">
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
									className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
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
									className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
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
									className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
									placeholder="Enter your message"
									value={formData.message}
									onChange={handleChange}
									required></textarea>
							</div>
							<RButton>Send Email</RButton>
						</form>
					</div>
				</div>
				<div className="md:w-1/2 p-4 pl-2">
					<img
						src="https://res.cloudinary.com/dip2khkyo/image/upload/v1739210167/feedback-rolanplast_vqhqwf.webp"
						alt="contact images"
						className="w-full h-auto mr-4"
					/>
				</div>
			</div>
		</div>
	);
};

export default FeedbackForm;
