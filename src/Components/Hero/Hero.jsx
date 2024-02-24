import React from "react";
import "../Hero/hero.css";
import img1 from "../../assets/Group 10.png";
import vid1 from "../../assets/Video/Blue Dot Global (1).mp4";
import img2 from "../../assets/XMLID_15_ (2).png";
import img3 from "../../assets/producticon.png";
import img4 from "../../assets/serviceicon.png";
import img5 from "../../assets/partnersicon.png";
import img6 from "../../assets/subicon.png";
import img7 from "../../assets/careericon.png";
import img8 from "../../assets/abouticon.png";

import img9 from "../../assets/XMLID_15_ (3).png";
import img10 from "../../assets/XMLID_15_ (7).png";
import img11 from "../../assets/XMLID_15_ (8).png";
import img12 from "../../assets/XMLID_15_ (9).png";











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
                <img src={img2} alt="" />
                <p>About</p>
              </li>
              <li>
                <img src={img3} alt="" />
                <p>Products</p>
              </li>
              <li>
                <img src={img4} alt="" />
                <p>Services</p>
              </li>
              <li>
                <img src={img5} alt="" />
                <p>Partners</p>
              </li>
              <li>
                <img src={img6} alt="" />
                <p>Subscribe</p>
              </li>
              <li>
                <img src={img7} alt="" />
                <p>Careers</p>
              </li>
              <li>
                <img src={img8} alt="" />
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
              <img src={img9} alt="" srcset="" />
              <p>Instagram</p>
            </div>
            <div className="social">
              <img src={img10} alt="" srcset="" />
              <p>Linkedin</p>
            </div>
            <div className="social">
              <img src={img11} alt="" srcset="" />
              <p>Facebook</p>
            </div>
            <div className="social">
              <img src={img12} alt="" srcset="" />
              <p>Telegram</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
