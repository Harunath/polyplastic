import FeedbackFrom from "./FeedbackForm";
import EnquiryForm from "./EnquiryForm";
import HeroSection from "./HeroSection";
import ContactDetails from "./ContactDetails";

function ContactUs() {
	return (
		<div>
			<HeroSection/>
			<ContactDetails/>
			<EnquiryForm />
			<FeedbackFrom />
			
		</div>
	);
}

export default ContactUs;
