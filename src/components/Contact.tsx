import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:ishratjandu21@gmail.com" data-cursor="disable">
                ishratjandu21@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>402-840-5650</p>
            <h4>Education</h4>
            <p>M.S. Biological Systems Engineering<br />University of Nebraska-Lincoln (2024–2026)</p>
            <p>B.Tech Agricultural Engineering<br />Punjab Agricultural University (2020–2024)</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a href="https://github.com/Ishrat2110" target="_blank" data-cursor="disable" className="contact-social">
              Github <MdArrowOutward />
            </a>
            <a href="https://linkedin.com/in/ishrat-jandu-b3b478255" target="_blank" data-cursor="disable" className="contact-social">
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Ishrat Jandu</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
