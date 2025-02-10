import FeedbackFrom from "./FeedbackForm";
import EnquiryForm from "./EnquiryForm";
import ContactDetails from "./ContactDetails";
import TopBanner from "../TopBanner";

function ContactUs() {
	const image =
		"https://res.cloudinary.com/dip2khkyo/image/upload/v1739210096/Contact-us-banner_dhlcsf.jpg";
	return (
		<div>
			<TopBanner image={image} text="ContactUs" />
			<ContactDetails />
			<EnquiryForm />
			<FeedbackFrom />
		</div>
	);
}

export default ContactUs;
