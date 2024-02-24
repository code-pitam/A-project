import React from "react";
import "../Hero/hero.css";
import img1 from "../../assets/Group 10.png";
import vid1 from "../../assets/Video/Blue Dot Global (1).mp4";
function Hero() {


  return (
    <div className="hero">
      <video src={vid1} autoPlay muted loop className="hero-video"></video>
      <div className="container hero-section">
        <img className="logo" src={img1} alt="" srcset="" />

        <div className="hero-inner">
          <div className="left-section">
            <ul>
              <li>
                <img src="src\assets\XMLID_15_ (2).png" alt="" />
                <p>About</p>
              </li>
              <li>
                <img src="src\assets\producticon.png" alt="" />
                <p>Products</p>
              </li>
              <li>
                <img src="src\assets\serviceicon.png" alt="" />
                <p>Services</p>
              </li>
              <li>
                <img src="src\assets\partnersicon.png" alt="" />
                <p>Partners</p>
              </li>
              <li>
                <img src="src\assets\subicon.png" alt="" />
                <p>Subscribe</p>
              </li>
              <li>
                <img src="src\assets\careericon.png" alt="" />
                <p>Careers</p>
              </li>
              <li>
                <img src="src\assets\abouticon.png" alt="" />
                <p>Contact</p>
              </li>
            </ul>
          </div>
          <div className="right-section">
            <div className="quote-sec">
              <p>
                A leading technology and electronics goods merchant and
                wholesale distributor providing the latest solutions and
                services with exceptional partner experience to resellers,
                retailers, corporate businesses, and government entities
              </p>

              <button className="quote">GET YOUR QUOTE NOW</button>
            </div>
          </div>
        </div>
        <div className="hero-lower-section">
          <p>Connect with us</p>
          <div className="social-icon">
            <div className="social">
              <img src="src\assets\XMLID_15_ (3).png" alt="" srcset="" />
              <p>Instagram</p>
            </div>
            <div className="social">
              <img src="src\assets\XMLID_15_ (7).png" alt="" srcset="" />
              <p>Linkedin</p>
            </div>
            <div className="social">
              <img src="src\assets\XMLID_15_ (8).png" alt="" srcset="" />
              <p>Facebook</p>
            </div>
            <div className="social">
              <img src="src\assets\XMLID_15_ (9).png" alt="" srcset="" />
              <p>Telegram</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
