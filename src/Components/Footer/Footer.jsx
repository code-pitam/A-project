import React from "react";
import "../Footer/footer.css";
import img1 from "../../assets/Picture47 1.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-section">
        <div className="footer-logo">
          <img src="src\assets\Group 11.png" alt="" />
        </div>
        <div className="main-footer">
          <div className="g-cover">
            <p className="footer-heading">GLOBAL COVERAGE</p>
            <ul>
              <li>Middle East</li>
              <li>Africa</li>
              <li>Asian Sub-continent</li>
              <li>Asian Pacific</li>
              <li>Europe</li>
              <li>Europe</li>
            </ul>
          </div>
          <div className="quick-link">
            <p className="footer-heading">QUICK LINK</p>
            <ul>
              <li>News</li>
              <li>About Us</li>
              <li>Products</li>
              <li>Services</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="contact">
            <p className="footer-heading">CONTACT</p>
            <ul>
              <li>info@domen.com</li>
              <li>+91 12365 12365</li>
              <li>CORPORATE HEAD OFFICE: </li>
              <li>
                Lorem Ipsum is simply dummy text <br />
                of the printing and typesetting industry.
              </li>
            </ul>
          </div>
          <div className="email">
            <p>
              RECEIVE NEW PRODUCT <br />
              OFFERINGS & UPDATED PRICES
            </p>
            <div className="input-email">
              <input type="text" name="" id="" placeholder="Your Email" />
              <img
                src={img1}
                alt=""
                srcset=""
              />
            </div>
            <p>
              Stay in touch for all the upcoming <br /> products and
              opportunities
            </p>
          </div>
        </div>
        <div className="bottom-footer">
          <p>copyright2024</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
