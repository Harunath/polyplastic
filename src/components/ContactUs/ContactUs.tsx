import FeedbackFrom from "./FeedbackForm";
import EnquiryForm from "./EnquiryForm";
import ContactDetails from "./ContactDetails";
import TopBanner from "../TopBanner";

function ContactUs() {
	const image =
		"https://ges.co.il/wp-content/uploads/2016/02/Contact-us-banner.jpg";
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
