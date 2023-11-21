import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <main>
      <Mouse />
      <div className="contact">
        <Navbar />
        <Logo />
        <ContactForm />
      </div>
    </main>
  );
}
export default Contact;
