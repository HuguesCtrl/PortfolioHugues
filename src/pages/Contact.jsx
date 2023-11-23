import NavbarContact from "../components/NavbarContact";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import ContactForm from "../components/ContactForm";
import SocialNetwork from "../components/SocialNetwork";
import Buttons from "../components/Buttons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { motion } from "framer-motion";

function Contact() {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 300,
    },
  };
  return (
    <main>
      <Mouse />
      <motion.div
        initial="out"
        exit="out"
        animate="in"
        variants={pageTransition}
        transition={{ duration: 0.3 }}
        className="contact"
      >
        <NavbarContact />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Adresse</h4>
              <p>27 rue Raymond Guyot</p>
              <p>51100 Reims</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>Téléphone</h4>
              <CopyToClipboard text="0652882099" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Téléphone copié !")}
                >
                  06 52 88 20 99
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>Email</h4>
              <CopyToClipboard text="hc.pro@outlook.fr" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("E-mail copié !")}
                >
                  hc.pro@outlook.fr
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>Hugues Collet - 2023</p>
          </div>
        </div>
        <Buttons left={"/projet-4"} />
      </motion.div>
    </main>
  );
}
export default Contact;
